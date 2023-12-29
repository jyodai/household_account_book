import React, { useState } from 'react';
import { addEntryToSheet } from '../services/sheetService';

const AddEntryForm = ({ onEntryAdded }) => {
    const [entry, setEntry] = useState(
    {
      date: getCurrentDateTimeForInput(),
      category: '',
      amount: '',
      memo: '',
    }
  );

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEntryToSheet(entry);
        onEntryAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="datetime-local"
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
            <input
                type="text"
                value={entry.memo}
                onChange={(e) => setEntry({ ...entry, memo: e.target.value })}
                required
            />
            <button type="submit">追加</button>
        </form>
    );
};

function getCurrentDateTimeForInput() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export default AddEntryForm;

