import { useState } from 'react'
import { v4 as uuid } from 'uuid';

const AddTodoComp = ({ setTodosAreExist, setAddTodoIsExist, userTodosById, setUserTodosById, userId, setTodos, todos }) => {

    const [newTodoTitle, setNewTodoTitle] = useState("")

    const handleCanel = () => {
        setAddTodoIsExist(false)
        setTodosAreExist(true)
    }

    const handleAdd = () => {
        const unique_id = uuid();
        const small_id = unique_id.slice(0, 8)

        setUserTodosById([...userTodosById, {
            userId: userId,
            id: small_id,
            title: newTodoTitle,
            completed: false
        }])

        setTodos([...todos, {
            userId: userId,
            id: small_id,
            title: newTodoTitle,
            completed: false
        }])

        setAddTodoIsExist(false)
        setTodosAreExist(true)
    }

    return (
        <div className='todosAndPostsAndAddUser'>

            <div className='text-center'>
                Title: <input onChange={e => setNewTodoTitle(e.target.value)} type="text" /><br /><br />
            </div>


            <div className='but-addTodoPostAndUser'>
                <button onClick={handleCanel} style={{ marginRight: "5px" }}>Cancel</button>
                <button onClick={handleAdd}>Add</button>
            </div>

        </div>
    )
}

export default AddTodoComp