"use client";
import AddEntryForm from '@/app/components/AddEntryForm';
import { addEntryToSheet } from '@/services/sheetService';
import { Entry } from '@/types/types';

export default function Home() {
    const handleSave = async (entry: Entry) => {
        await addEntryToSheet(entry);
    };

    return (
        <div>
            <h1>家計簿アプリ</h1>
            <AddEntryForm onSave={handleSave}/>
        </div>
    );
}
