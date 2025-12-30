export interface Todo {
    id: string;
    completed: boolean;
    content: string;
    date: number;
    difficulty: 1 | 2 | 3;
}