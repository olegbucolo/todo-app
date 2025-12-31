import './TodoList.css'
import { useState } from 'react';
import type { Todo } from '../../types/todo'
import rawTodoData from '../../data/TodoData.json'
import { TodoItem } from './TodoItem';

export function TodoList() {
    const [todos, setTodos] = useState<Todo[]>(rawTodoData as Todo[])
    return (
        <section className="todo-list">
            <ul>
                {todos.map((todo) => {
                    return <TodoItem todo={todo} />
                })}
            </ul>
        </section>
    )
}