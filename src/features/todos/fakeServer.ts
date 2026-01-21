import type { Todo } from '../../types/todo';
// import rawTodoData from '../../data/TodoData.json';

// let serverTodos: Todo[] = [...rawTodoData];

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// export async function fetchTodos(): Promise<Todo[]> {
//     await delay(500);
//     return [...serverTodos];
// }

// export async function saveTodos(todos: Todo[]): Promise<void> {
//     await delay(500);
//     serverTodos = [...todos];
// }

export async function fetchTodos(): Promise<Todo[]> {
    const res = await fetch('http://localhost:8000/api/todos');
    return res.json();
}

export async function saveTodos(todos: Todo[]): Promise<void> {
    await fetch('http://localhost:8000/api/todos', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todos),
    });
}