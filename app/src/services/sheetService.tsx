import { Entry } from '../types/types';

// const SHEET_ID = 'YOUR_SHEET_ID';
// const API_KEY = 'YOUR_API_KEY';

export const getEntriesFromSheet = async (): Promise<Entry[]> => {
    return [
        { date: "2023-12-01", category: "食費", amount: "500" },
        { date: "2023-12-02", category: "交通費", amount: "1200" },
        { date: "2023-12-03", category: "雑費", amount: "800" },
    ];

    // const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/シート1?key=${API_KEY}`;
    // const response = await fetch(url);
    // const data = await response.json();
    // return data.values;
};

export const addEntryToSheet = async (entry: Entry) => {
    console.log('addEntryToSheet');
    console.log(entry);
    // Google Sheets APIを使って新しいエントリを追加するロジック
    // POSTリクエストを使用する場合は、CORSの問題に注意
};

