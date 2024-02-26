export const TodoComposer = ({handleAddTodo}) => {

    return (
        <>
            <input type={"text"} className='todo-list__input' placeholder={"Enter your todo here"}/>
            <button type={"button"} className='todo-list__add-btn'>Add Todo</button>
        </>
    )
}