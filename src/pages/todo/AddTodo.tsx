interface AddTodoProps {
    isOpen: boolean;
}

export function AddTodo({isOpen}: AddTodoProps) {
    return (
        <div className={`todo-input-group ${isOpen ? 'show' : ''}`}>
            <textarea className="todo-input" />
            <button className="todo-input-add">Add</button>
        </div>
    )
}