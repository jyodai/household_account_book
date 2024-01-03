"use client";
import AddEntryForm from '@/app/components/AddEntryForm';
import { addEntryToSheet } from '@/services/sheetService';
import { Entry } from '@/types/types';

export default function Home() {
    const handleSave = async (entry: Entry) => {
        await addEntryToSheet(entry);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">家計簿アプリ</h1>
            <AddEntryForm initialEntry={null} onSave={handleSave}/>
        </div>
    );
}
