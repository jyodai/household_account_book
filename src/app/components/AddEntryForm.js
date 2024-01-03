import React, { useState, useEffect } from 'react';
import { dateUtils } from '@/utils/date';

const AddEntryForm = ({ initialEntry, onSave }) => {
    const [entry, setEntry] = useState({
        id: initialEntry?.id || null,
        date:  dateUtils.formatDateToDateTimeLocal(new Date()),
        category: initialEntry?.category || '',
        amount: initialEntry?.amount || '',
        memo: initialEntry?.memo || '',
    });

    useEffect(() => {
        if (initialEntry) {
            setEntry({
                id: initialEntry.id,
                date: dateUtils.formatDateToDateTimeLocal(initialEntry.date),
                category: initialEntry.category,
                amount: initialEntry.amount,
                memo: initialEntry.memo,
            });
        }
    }, [initialEntry]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSave(entry);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="datetime-local"
                name="date"
                value={entry.date}
                onChange={(e) => setEntry({ ...entry, date: e.target.value })}
                required
            />
            <input
                type="text"
                name="category"
                value={entry.category}
                onChange={(e) => setEntry({ ...entry, category: e.target.value })}
                required
            />
            <input
                type="number"
                name="amount"
                value={entry.amount}
                onChange={(e) => setEntry({ ...entry, amount: e.target.value })}
                required
            />
            <input
                type="text"
                name="memo"
                value={entry.memo}
                onChange={(e) => setEntry({ ...entry, memo: e.target.value })}
                required
            />
            <button type="submit">{entry.id ? '更新' : '追加'}</button>
        </form>
    );
};

export default AddEntryForm;

