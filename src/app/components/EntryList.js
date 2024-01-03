import React from 'react';
import { formatDateToDateTimeLocal } from '@/utils/date';

const EntryList = ({ entries, onDelete, onEdit }) => {
    return (
        <ul>
            {entries.map((entry, index) => (
                <li key={index}>
                  {entry.id} - {formatDateToDateTimeLocal(entry.date)} - {entry.category} - ¥{entry.amount} - {entry.memo}
                  <button onClick={() => onEdit(entry)}>編集</button>
                  <button onClick={() => onDelete(entry.id)}>削除</button>
                </li>
            ))}
        </ul>
    );
};

export default EntryList;

