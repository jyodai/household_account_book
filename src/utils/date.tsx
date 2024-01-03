"use client";

/**
 * 日付を YYYY-MM-DDTHH:mm 形式の文字列に変換します。
 */
export const formatDateToDateTimeLocal = (date : Date): string => {
    const newDate = new Date(date);
    return newDate.toISOString().slice(0, 16);
};
