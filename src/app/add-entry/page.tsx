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
            <AddEntryForm initialEntry={null} onSave={handleSave}/>
        </div>
    );
}
