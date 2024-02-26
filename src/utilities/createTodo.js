export const createTodo = (value) => {
    return {
        id: Date.now(),
        value,
        completed: false
    }
}