import type { Todo } from '../../types/todo';
import rawTodoData from '../../data/TodoData.json';

let serverTodos: Todo[] = [...rawTodoData];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function fetchTodos(): Promise<Todo[]> {
    await delay(500);
    return [...serverTodos];
}

export async function saveTodos(todos: Todo[]): Promise<void> {
    await delay(500);
    serverTodos = [...todos];
}