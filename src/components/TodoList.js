import {useState} from "react";
import {TodoItem} from "./TodoItem";

export const TodoList = () => {
    const [todos, setTodos] = useState([{id: 1, value: 'Learn React', completed: false}])

    return (
        <div className='todo-list__wrapper'>
            <ul className='todo-list'>
                {todos.map(todo => <TodoItem key={todo.id} value={todo.value} completed={todo.completed}/>)}
            </ul>
        </div>
    )
}