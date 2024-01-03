"use client";
import { useState, useEffect } from 'react';
import EntryList from '@/app/components/EntryList';
import AddEntryForm from '@/app/components/AddEntryForm';
import { getEntriesFromSheet, deleteEntryFromSheet, editEntryInSheet } from '@/services/sheetService';
import { Entry } from '@/types/types';

export default function Home() {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [editingEntry, setEditingEntry] = useState<Entry | null>(null);

    const fetchEntries = async () => {
        const data = await getEntriesFromSheet();
        setEntries(data);
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    const handleDelete = async (id: number) => {
        await deleteEntryFromSheet(id);
        fetchEntries();
    };

    const handleEdit = (entry: Entry) => {
        setEditingEntry(entry);
    };

    const handleSave = async (entry: Entry) => {
        await editEntryInSheet(entry.id, entry);
        setEditingEntry(null);
        fetchEntries();
    };

    return (
        <div>
            <h1>家計簿アプリ</h1>
            {editingEntry ? (
                <>
                    <AddEntryForm initialEntry={editingEntry} onSave={handleSave} />
                    <button onClick={() => setEditingEntry(null)}>キャンセル</button>
                </>
            ) : (
                <EntryList entries={entries} onDelete={handleDelete} onEdit={handleEdit} />
            )}
        </div>
    );
}

