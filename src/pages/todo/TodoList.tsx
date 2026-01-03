import './TodoList.css'
import { useState, useEffect } from 'react';
import type { Todo } from '../../types/todo';
import { AddTodo } from './AddTodo';
import rawTodoData from '../../data/TodoData.json'
import { TodoHeader } from './TodoHeader';
import { TodoItem } from './TodoItem';

export function TodoList() {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const stored = localStorage.getItem('todos');
        return stored ? (JSON.parse(stored) as Todo[]) : rawTodoData as Todo[]
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    const [isOpen, setIsOpen] = useState(false);

    const updateTodo = (id: string, content: string) => {
        setTodos(prev => prev.map(t => t.id === id ? {...t, content} : t))
    }

    return (
        <section className="todo-list">
            <TodoHeader onToggle={() => setIsOpen(v => !v)} isOpen={isOpen} />
            <AddTodo isOpen={isOpen} setIsOpen={setIsOpen} setTodos={setTodos} />
            <ul>
                {todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} onUpdate={updateTodo}/>
                })}
            </ul>
        </section>
    )
}