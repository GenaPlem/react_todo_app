export const TodoItem = ({todo, handleUpdateTodo, handleDeleteTodo}) => {

    const handleCheckboxClick = () => handleUpdateTodo({
        ...todo,
        completed: !todo.completed
    })

    const handleDeleteClick = () => handleDeleteTodo(todo.id)


    return (
        <li className='todo-list__item'>
            <label htmlFor={todo.id}>
                <input className='todo-list__item-checkbox' type="checkbox" name={todo.id} checked={todo.completed}
                       onChange={handleCheckboxClick} id={todo.id}/>
                <span
                    className={todo.completed ? 'todo-list__item-value completed' : 'todo-list__item-value'}>{todo.value}</span>
            </label>
            <button type={"button"} className='todo-list__item-delete' onClick={handleDeleteClick}>Delete</button>
            <button type={"button"} className='todo-list__item-edit'>Edit</button>
        </li>
    )
}