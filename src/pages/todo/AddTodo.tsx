import type { Todo } from '../../types/todo';
import './AddTodo.css';
import {useState} from 'react';

interface AddTodoProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export function AddTodo({ isOpen, setIsOpen, setTodos }: AddTodoProps) {

const [content, setContent] = useState('');

const handleAdd = () => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      completed: false,
      content,
      date: Date.now(),
      difficulty: 1,
    };
    console.log('before',isOpen)
    setIsOpen(v => !v)
    console.log('after',isOpen)
    setTodos(prev => [newTodo, ...prev]);
    setContent('');
  };

    return (
        <div className={`todo-input-group ${isOpen ? 'show' : ''}`}>
            <textarea className="todo-input" value={content} onChange={e => setContent(e.target.value)} />
            <button className="todo-input-add" onClick={handleAdd}  >Add</button>
        </div>
    )
}