import type { Todo } from '../../types/todo';
import dayjs from 'dayjs';
import './TodoItem.css';

interface TodoItemProps {
    todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
    return (
        <li className="todo-li">
            <p className="todo-text">{todo.content}</p>
            <div className="todo-actions">
                <button>Modify</button>
                <button>Done</button>
                <button>Delete</button>
            </div>
            <div className="todo-details">
                <span>id: {todo.id}</span>
                
                <span>date: {dayjs(todo.date).format('MMMM D')}</span>
                <span>difficulty {todo.difficulty} </span>
            </div>
        </li>
    )
}