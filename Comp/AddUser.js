import { useState } from 'react'


const AddUserComp = ({ setUsers, users, lastIdNum, setAddUserIsExist, setTodoAndPostAreExist }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleCanel = () => {
        setAddUserIsExist(false)
        setTodoAndPostAreExist(true)
    }

    const handleAdd = () => {

        setUsers([...users, {
            id: lastIdNum + 1,
            name: name,
            email: email,
            address: {
                street: "",
                city: "",
                zipcode: ""
            }
        }])
        setAddUserIsExist(false)
        setTodoAndPostAreExist(true)
    }

    return (
        <div className='todosAndPostsAndAddUser'>
            <div className='text-center'>
                Name: <input onChange={e => setName(e.target.value)} type="text" /> <br />
                Email: <input onChange={e => setEmail(e.target.value)} type="email" /> <br />
            </div>

            <div className='but-addTodoPostAndUser'>
                <button onClick={handleCanel} style={{ marginRight: "5px" }}>Cancel</button>
                <button onClick={handleAdd} >Add</button>
            </div>

        </div>
    )
}

export default AddUserComp