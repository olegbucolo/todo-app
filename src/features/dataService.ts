import type { Todo } from '../types/todo';
import rawTodoData from '../data/TodoData.json';

const STORAGE_KEY = 'todos';

export async function getTodos(): Promise<Todo[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const stored =  localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Todo[]) : (rawTodoData as Todo[]);
}

export async function saveTodos(todos: Todo[]): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}