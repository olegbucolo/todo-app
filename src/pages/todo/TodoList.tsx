import './TodoList.css'
import { useState } from 'react';
import type { Todo } from '../../types/todo';
import { AddTodo } from './AddTodo';
import rawTodoData from '../../data/TodoData.json'
import { TodoHeader } from './TodoHeader';
import { TodoItem } from './TodoItem';

export function TodoList() {
    const [todos, setTodos] = useState<Todo[]>(rawTodoData as Todo[])
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="todo-list">
            <TodoHeader onToggle={() => setIsOpen(v => !v)} isOpen={isOpen} />
            <AddTodo isOpen={isOpen} />
            <ul>
                {todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />
                })}
            </ul>
        </section>
    )
}