"use client";
import { useState, useEffect } from 'react';
import EntryList from './components/EntryList';
import { getEntriesFromSheet } from '../services/sheetService';
import { Entry } from '../types/types';

export default function Home() {
    const [entries, setEntries] = useState<Entry[]>([]);

    const fetchEntries = async () => {
        const data = await getEntriesFromSheet();
        setEntries(data);
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    return (
        <div>
            <h1>家計簿アプリ</h1>
            <EntryList entries={entries} />
        </div>
    );
}
