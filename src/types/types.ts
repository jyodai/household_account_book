export interface Entry {
    id : number;
    date: Date;
    category: string;
    amount: string;
    memo: string;
}

export interface Category {
    id : number;
    name: string;
    type : number;
    color: string;
    memo: string;
}
