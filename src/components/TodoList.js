import {useEffect, useState} from "react";
import {TodoItem} from "./TodoItem";
import {TodoComposer} from "./TodoComposer";

export const TodoList = () => {
    const [todos, setTodos] = useState(
        [{id: 1, value: 'Learn React', completed: false}]
    )

    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('todos'))

        if (item) {
            setTodos(item)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleUpdateTodo = (updatedTodo) => {
        const newTodos = todos.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo
        )
        setTodos(newTodos)
    }

    const handleDeleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const handleAddTodo = (newTodo) => {
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
    }

    return (
        <div className='todo-list__wrapper'>
            <TodoComposer handleAddTodo={handleAddTodo}/>
            <h3 className='todo-list__title'>Todo List</h3>
            <ul className='todo-list'>
                {todos.length !== 0
                    ? todos.map(todo => <TodoItem todo={todo}
                                                  key={todo.id}
                                                  handleUpdateTodo={handleUpdateTodo}
                                                  handleDeleteTodo={handleDeleteTodo}/>)
                    : <li className='todo-list__info'>Your list is empty</li>}
            </ul>
        </div>
    )
}