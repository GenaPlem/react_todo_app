export const TodoItem = ({todo, handleUpdateTodo}) => {

    const handleCheckboxClick = () => handleUpdateTodo({
        ...todo,
        completed: !todo.completed
    })

    return (
        <li className='todo-list__item'>
            <label htmlFor={todo.id}>
                <input className='todo-list__item-checkbox' type="checkbox" name={todo.id} checked={todo.completed}
                       onChange={handleCheckboxClick} id={todo.id}/>
                <span
                    className={todo.completed ? 'todo-list__item-value completed' : 'todo-list__item-value'}>{todo.value}</span>
            </label>
            <button type={"button"} className='todo-list__item-delete'>Delete</button>
            <button type={"button"} className='todo-list__item-edit'>Edit</button>
        </li>
    )
}