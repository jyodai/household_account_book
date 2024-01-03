export interface Entry {
    id : number;
    date: Date;
    category_id: number;
    amount: string;
    memo: string;
    category?: Category;
}

export interface Category {
    id : number;
    name: string;
    type : number;
    color: string;
    memo: string;
}
