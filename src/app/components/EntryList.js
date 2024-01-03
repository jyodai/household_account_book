import React from 'react';

const EntryList = ({ entries, onDelete }) => {
    return (
        <ul>
            {entries.map((entry, index) => (
                <li key={index}>
                  {entry.id} - {entry.date.toLocaleString()} - {entry.category} - ¥{entry.amount} - {entry.memo}
                  <button onClick={() => onDelete(entry.id)}>削除</button>
                </li>
            ))}
        </ul>
    );
};

export default EntryList;

