import React from 'react';
import { dateUtils } from '@/utils/date';

const EntryList = ({ entries, onDelete, onEdit }) => {
    return (
      <ul className="max-w-lg mx-auto p-4 divide-y divide-gray-200">
          {entries.map((entry, index) => (
              <li key={index} className="flex justify-between items-center py-3">
                  <div>
                      {entry.id} - {dateUtils.formatDateToDateTimeLocal(entry.date)} - {entry.category} - {entry.amount}円 - {entry.memo}
                  </div>
                  <div>
                      <button onClick={() => onEdit(entry)} className="text-blue-600 hover:text-blue-800 mr-2">編集</button>
                      <button onClick={() => onDelete(entry.id)} className="text-red-600 hover:text-red-800">削除</button>
                  </div>
              </li>
          ))}
      </ul>
    );
};

export default EntryList;

