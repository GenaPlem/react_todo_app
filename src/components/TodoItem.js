export const TodoItem = ({key, value, completed}) => {

    return (
        <li className='todo-list__item'>
            <label htmlFor={key}>
                <input className='todo-list__item-checkbox' type="checkbox" name={key} checked={completed} id={key}/>
                <span className='todo-list__item-value'>{value}</span>
            </label>
        </li>
    )
}