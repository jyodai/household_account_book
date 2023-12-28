"use server";

import { Entry } from '../types/types';

export const getEntriesFromSheet = async (): Promise<Entry[]> => {
    return [];
};

export const addEntryToSheet = async (entry: Entry) => {
    console.log('addEntryToSheet');
    console.log(entry);
    // Google Sheets APIを使って新しいエントリを追加するロジック
    // POSTリクエストを使用する場合は、CORSの問題に注意
};

