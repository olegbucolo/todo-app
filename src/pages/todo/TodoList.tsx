import './TodoList.css'
import { useState, useEffect } from 'react';
import type { Todo } from '../../types/todo';
import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoItem } from './TodoItem';
import { getTodos, saveTodos } from '../../features/dataService';

export function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState(true);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const fetchTodos = async () => {
            setLoading(true);
            const data = await getTodos();
            setTodos(data);
            setLoading(false)
            setInitialized(true);
        }
        fetchTodos();
    }, [])

    useEffect(() => {
        if (!initialized) return;
        saveTodos(todos);
    }, [todos]);

    const [isOpen, setIsOpen] = useState(false);

    const updateTodo = (id: string, content: string) => {
        setTodos(prev => prev.map(t => t.id === id ? { ...t, content } : t))
    }

    const deleteTodo = (id: string) => {
        setTodos(prev => prev.filter(t => t.id !== id))
    }

    const completeTodo = (id: string) => {
        setTodos(prev =>
            prev.map(t =>
                t.id === id ? { ...t, completed: !t.completed } : t
            )
        );

    }

    return (
        <section className="todo-list">
            <TodoHeader onToggle={() => setIsOpen(v => !v)} isOpen={isOpen} />
            <AddTodo isOpen={isOpen} setIsOpen={setIsOpen} setTodos={setTodos} />
            <ul>
                {todos.map((todo) => {
                    return <TodoItem
                        key={todo.id}
                        todo={todo}
                        onUpdate={updateTodo}
                        onDelete={deleteTodo}
                        onComplete={completeTodo}
                    />
                })}
            </ul>
        </section>
    )
}