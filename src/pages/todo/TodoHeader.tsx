import './TodoHeader.css';

interface TodoHeaderProps {
    onToggle: () => void;
}

export function TodoHeader({onToggle}: TodoHeaderProps){
    return (
        <div className="todos-header">
            <h1>My todo List</h1>
            <button onClick={onToggle}>Add Todo</button>
        </div>
    )
}