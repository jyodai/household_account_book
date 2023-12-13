import React, { useState, useEffect } from 'react';
import AddEntryForm from './components/AddEntryForm';
import EntryList from './components/EntryList';
import { getEntriesFromSheet } from './services/sheetService';
import { Entry } from './types/types';

const App = () => {
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
            <AddEntryForm onEntryAdded={fetchEntries} />
            <EntryList entries={entries} />
        </div>
    );
};

export default App;

