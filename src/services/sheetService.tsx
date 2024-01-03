"use client";

import { Entry, Category } from '@/types/types';

export const getEntriesFromSheet = async (): Promise<Entry[]> => {
    const accessToken = await getAccessToken();

    const response = await fetch(
        process.env.NEXT_PUBLIC_SCRIPT_URL as string,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body : JSON.stringify({function: 'getData'})
        }
    )

    const data = await response.json();
    const lists = JSON.parse(data.response.result) as Entry[]
    const convertLists = lists.map((list: Entry) => {
        return {
            ...list,
            id : Number(list.id),
            date: new Date(list.date),
        };
    });
    return convertLists;
};

async function getAccessToken() {
    const payload = new URLSearchParams({
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
        refresh_token: process.env.NEXT_PUBLIC_REFRESH_TOKEN as string,
        grant_type: 'refresh_token'
    });

    const response = await fetch(
        process.env.NEXT_PUBLIC_TOKEN_URL as string,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body : payload.toString(),
        }
    )

    const data = await response.json();
    return data.access_token;
}

export const addEntryToSheet = async (entry: Entry) => {
    const accessToken = await getAccessToken();

    await fetch(
        process.env.NEXT_PUBLIC_SCRIPT_URL as string,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body : JSON.stringify({function: 'addData', parameters: entry})
        }
    )

    alert('登録完了');
};

export const deleteEntryFromSheet = async (id: number) => {
    const accessToken = await getAccessToken();

    await fetch(
        process.env.NEXT_PUBLIC_SCRIPT_URL as string,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body : JSON.stringify({function: 'deleteData', parameters: [id]})
        }
    )

    alert('削除完了');
};

export const editEntryInSheet = async (id: number, updatedEntry: Entry) => {
    const accessToken = await getAccessToken();

    await fetch(
        process.env.NEXT_PUBLIC_SCRIPT_URL as string,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body : JSON.stringify({function: 'editData', parameters: [id, updatedEntry]})
        }
    )

    alert('更新完了');
};

export const getCategory  = async (): Promise<Category[]> => {
    const accessToken = await getAccessToken();

    const response = await fetch(
        process.env.NEXT_PUBLIC_SCRIPT_URL as string,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body : JSON.stringify({function: 'getCategory'})
        }
    )

    const data = await response.json();
    const lists = JSON.parse(data.response.result) as Category[]
    const convertLists = lists.map((list: Category) => {
        return {
            ...list,
            id : Number(list.id),
            type : Number(list.type),
        };
    });
    return convertLists;
};
