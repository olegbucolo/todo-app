import './TodoList.css'
import { useState } from 'react';
import type { Todo } from '../../types/todo'
import rawTodoData from '../../data/TodoData.json'
import { TodoHeader } from './TodoHeader';
import { TodoItem } from './TodoItem';

export function TodoList() {
    const [todos, setTodos] = useState<Todo[]>(rawTodoData as Todo[])
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="todo-list">
            <TodoHeader onToggle={() => setIsOpen (v => !v)} isOpen={isOpen} />
            <ul>
                <div className={`todo-input-group ${isOpen ? 'show' : ''}`}>
                    <textarea className="todo-input" />
                    <button className="todo-input-add">Add</button>
                </div>
                {todos.map((todo) => {
                    return <TodoItem todo={todo} />
                })}
            </ul>
        </section>
    )
}