import './TodoList.css'
import {useState} from 'react';
import type {Todo} from '../../types/todo'
import rawTodoData from '../../data/TodoData.json'


export function TodoList() {
    const [todos, setTodos] = useState<Todo[]>(rawTodoData as Todo[])
    todos.map(todo => console.log(todo))
    console.log('EEEEEEEEEEEEEEEEEEEEEND')
    return (
        <section className="todo-list">

        </section>
    )
}