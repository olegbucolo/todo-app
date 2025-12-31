import './TodoHeader.css';

interface TodoHeaderProps {
    isOpen: boolean;
    onToggle: () => void;
}

export function TodoHeader({ isOpen, onToggle }: TodoHeaderProps) {
    return (
        <div className="todos-header">
            <h1>My todo List</h1>
            <button onClick={onToggle}>{isOpen ? 'Cancel': 'Add Todo'}</button>
        </div>
    )
}