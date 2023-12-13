import React, { useState } from 'react';
import { addEntryToSheet } from '../services/sheetService';

const AddEntryForm = ({ onEntryAdded }) => {
    const [entry, setEntry] = useState({ date: '', category: '', amount: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEntryToSheet(entry);
        onEntryAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="date"
                value={entry.date}
                onChange={(e) => setEntry({ ...entry, date: e.target.value })}
                required
            />
            <input
                type="text"
                value={entry.category}
                onChange={(e) => setEntry({ ...entry, category: e.target.value })}
                required
            />
            <input
                type="number"
                value={entry.amount}
                onChange={(e) => setEntry({ ...entry, amount: e.target.value })}
                required
            />
            <button type="submit">追加</button>
        </form>
    );
};

export default AddEntryForm;

