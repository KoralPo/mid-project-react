

const TodoComp = ({ todo, todos, setTodos, userTodosById, setUserTodosById }) => {

    const handleMarkCompleted = () => {

        const result = userTodosById.map(x => {
            if (x.id === todo.id) {
                return { ...x, completed: true }
            }

            else {
                return x
            }
        })
        setUserTodosById(result)


        const res = todos.map(t => {

            if (t.id === todo.id) {

                return { ...t, completed: true }
            }

            else {
                return t
            }
        })
        setTodos(res)

    }


    return (
        <div className='todoAndPost'>
            <div className='txt-todosAndPosts'>
                <strong>Title :  </strong>  {todo.title}
                <br />
                <strong>Completed :  </strong> {String(todo.completed)}

                {todo.completed ? null : <button onClick={handleMarkCompleted} className='but-MarkCompleted' >Mark Completed</button>}
            </div>

        </div>
    )
}

export default TodoComp