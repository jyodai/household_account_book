import React from 'react';

const EntryList = ({ entries }) => {
    return (
        <ul>
            {entries.map((entry, index) => (
                <li key={index}>
                    {entry.date} - {entry.category} - ¥{entry.amount}
                </li>
            ))}
        </ul>
    );
};

export default EntryList;

