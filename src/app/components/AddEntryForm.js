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

    const inputClass = `
        mt-1 block w-full 
        border-gray-300 rounded-md shadow-sm 
        focus:ring-indigo-500 focus:border-indigo-500 
        sm:text-sm
    `;

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 shadow-lg rounded-lg bg-white">
            <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">日付</label>
                <input
                    type="datetime-local"
                    name="date"
                    value={entry.date}
                    onChange={(e) => setEntry({ ...entry, date: e.target.value })}
                    required
                    className={inputClass}
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">カテゴリ</label>
                <input
                    type="text"
                    name="category"
                    value={entry.category}
                    onChange={(e) => setEntry({ ...entry, category: e.target.value })}
                    required
                    className={inputClass}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">金額</label>
                <input
                    type="number"
                    name="amount"
                    value={entry.amount}
                    onChange={(e) => setEntry({ ...entry, amount: e.target.value })}
                    required
                    className={inputClass}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="memo" className="block text-sm font-medium text-gray-700">メモ</label>
                <input
                    type="text"
                    name="memo"
                    value={entry.memo}
                    onChange={(e) => setEntry({ ...entry, memo: e.target.value })}
                    className={inputClass}
                />
            </div>

            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {entry.id ? '更新' : '追加'}
            </button>
        </form>
    );
};

export default AddEntryForm;

