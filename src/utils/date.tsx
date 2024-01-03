"use client";

/**
 * 日付を YYYY-MM-DDTHH:mm 形式の文字列に変換します。
 */
export const formatDateToDateTimeLocal = (date : Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
};
