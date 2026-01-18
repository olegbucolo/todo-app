import type { Todo } from '../../types/todo';
import {fetchTodos, saveTodos} from './fakeServer';

// TODO: localStorage that served as persistent db is now replaced by a non-persistent layer of ts
// that acts as the server for later to be replaced by a real db

// import rawTodoData from '../../data/TodoData.json';

// const STORAGE_KEY = 'todos';

// export async function getTodos(): Promise<Todo[]> {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     const stored =  localStorage.getItem(STORAGE_KEY);
//     return stored ? (JSON.parse(stored) as Todo[]) : (rawTodoData as Todo[]);
// }

// export async function saveTodos(todos: Todo[]): Promise<void> {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
// }

export async function getTodos(): Promise<Todo[]>{
    return fetchTodos();
}

export async function persistTodos(todos: Todo[]): Promise<void>{
    return saveTodos(todos)
}