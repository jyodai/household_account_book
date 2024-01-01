import React, { useState } from 'react';
import { addEntryToSheet } from '@/services/sheetService';
import { currentDateTimeForInput } from '@/utils/date';

const AddEntryForm = () => {
    const [entry, setEntry] = useState(
    {
      date : currentDateTimeForInput(),
      category: '',
      amount: '',
      memo: '',
    }
  );

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEntryToSheet(entry);
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

export default AddEntryForm;

