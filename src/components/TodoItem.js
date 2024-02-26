import {useState} from "react";

export const TodoItem = ({todo, handleUpdateTodo, handleDeleteTodo}) => {
    const [editing, setEditing] = useState(false)

    const handleCheckboxClick = () => handleUpdateTodo({
        ...todo,
        completed: !todo.completed
    })

    const handleEditClick = () => {
        setEditing(!editing)
    }

    const handleEditTodo = (e) => handleUpdateTodo({
        ...todo,
        value: e.target.value
    })

    const handleDeleteClick = () => handleDeleteTodo(todo.id)


    return (
        <li className='todo-list__item'>
            <label htmlFor={todo.id}>
                <input className='todo-list__item-checkbox' type="checkbox" name={todo.id} checked={todo.completed}
                       onChange={handleCheckboxClick} id={todo.id}/>
                {editing === true
                    ? <input type="text" value={todo.value} onChange={handleEditTodo}/>
                    : <span
                        className={todo.completed ? 'todo-list__item-value completed' : 'todo-list__item-value'}>{todo.value}</span>}
            </label>
            <button type={"button"} className='todo-list__item-delete'
                    onClick={handleDeleteClick}>Delete
            </button>
            <button type={"button"} className='todo-list__item-edit'
                    onClick={handleEditClick}>{editing ? 'Save' : 'Edit'}</button>
        </li>
    )
}