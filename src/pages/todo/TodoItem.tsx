import type { Todo } from '../../types/todo';
import { useState } from 'react';
import dayjs from 'dayjs';
import './TodoItem.css';

interface TodoItemProps {
    todo: Todo;
    onUpdate: (id: string, content: string) => void;
}

export function TodoItem({ todo, onUpdate }: TodoItemProps) {

    const [isChanging, setIsChanging] = useState(false)
    const [draft, setDraft] = useState(todo.content);


    const handleToggle = () => {
        if(isChanging){
            onUpdate(todo.id, draft);
        }
        setIsChanging( t => !t);
    }

    return (
        <li className="todo-li">
            {isChanging ? (
                <textarea
                    className="modify-todo-area"
                    value={draft}
                    onChange={e => setDraft(e.target.value)}
                />
            ) : (
                <p className="todo-text">{todo.content}</p>
            )}
            <div className="todo-actions">
                <button
                    onClick={handleToggle}>{isChanging ? 'Done' : 'Modify'}
                </button>
                <button>Delete</button>
                <button>Completed</button>
            </div>
            <div className="todo-details">
                <span>id: {todo.id}</span>

                <span>date: {dayjs(todo.date).format('MMMM D')}</span>
                <span>difficulty {todo.difficulty} </span>
            </div>
        </li>
    )
}