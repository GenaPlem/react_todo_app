import {useState} from "react";
import {createTodo} from "../utilities/createTodo";

export const TodoComposer = ({handleAddTodo}) => {

    const [todoValue, setTodoValue] = useState('')

    const handleUpdateTodo = (e) => {
        setTodoValue(e.target.value)
    }

    const handleAddTodoClick = () => {
        const todo = createTodo(todoValue)
        handleAddTodo(todo)
        setTodoValue('')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && todoValue.trim() !== '') {
            const todo = createTodo(todoValue)
            handleAddTodo(todo)
            setTodoValue('')
        }
    }

    return (
        <>
            <input type={"text"} className='todo-list__input' value={todoValue} onChange={handleUpdateTodo}
                   placeholder={"Enter your todo here"} onKeyDown={handleKeyDown} maxLength={25}/>
            <button type={"button"} disabled={todoValue.length === 0} onClick={handleAddTodoClick}
                    className='todo-list__add-btn'>Add Todo
            </button>
        </>
    )
}