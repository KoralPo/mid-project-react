import { useState, useEffect, React } from 'react'
import '../module.css'

const UserComp = ({ user, setUsers, users, setSearchResults, id, setId, setTodoAndPostAreExist, todos, setAddUserIsExist, setTodosAreExist, setPostsAreExist, colorOfUserIsOn }) => {

    const [isCompleted, setIsCompleted] = useState()
    const [isExist, setIsExist] = useState(false)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [street, setStreet] = useState(user.address.street)
    const [city, setCity] = useState(user.address.city)
    const [zip, setZip] = useState(user.address.zipcode)


    useEffect(() => {
        let counterFalse = 0

        const allUserTodos = todos.filter(todo => user.id === todo.userId)


        allUserTodos.forEach(todoCompleted => {

            if (todoCompleted.completed === false)
                counterFalse = counterFalse + 1;
        });

        if (counterFalse === 0) {
            setIsCompleted(true)
        }
        else {
            setIsCompleted(false)
        }
    })


    const handleUpdateUser = () => {

        const res = users.map(x => {
            if (x.id === user.id) {
                return { ...x, name: name, email: email, street: street, city: city, zipcode: zip }
            } else {
                return x
            }
        })
        setUsers(res)
        setSearchResults(res)
    }

    const handleDeleteUser = () => {
        const newArrUsers = users.filter(x => x.id !== user.id)
        setUsers(newArrUsers)
        setSearchResults(newArrUsers)

        if (user.id === id) {
            setTodoAndPostAreExist(false)
        }

    }

    const handleClickOnId = () => {
        setAddUserIsExist(false)
        setId(user.id)
        setTodoAndPostAreExist(true)
        setTodosAreExist(true)
        setPostsAreExist(true)
    }



    return (
        <div style={{ border: "2px solid", borderColor: isCompleted ? "green" : "red", background: colorOfUserIsOn[user.id - 1] ? "rgb(255, 172, 28, 0.3)" : "white", marginTop: "20px" }}>
            <div className='txt-todosAndPosts'>
                ID: <label onClick={handleClickOnId}>{user.id}</label>
                <br />
                Name: &nbsp;<input onInput={(e) => setName(e.target.value)} defaultValue={name} type={'text'} />
                <br />
                Email:  &nbsp;&nbsp;<input onInput={(e) => setEmail(e.target.value)} defaultValue={email} />
                <br /><br />
            </div>


            <div>
                <div className='but-UpdateAndDelete'>
                    <button className='but-OtherData'
                        onMouseOver={() => setIsExist(true)} onClick={() => setIsExist(false)} >Other Data</button>

                    <button onClick={handleUpdateUser} >Update</button>
                    <button onClick={handleDeleteUser} >Delete</button>

                </div>

                {isExist && <div className='otherData' style={{ background: colorOfUserIsOn[user.id - 1] ? "rgb(255, 172, 28, 0.3)" : "white" }} >
                    <div className='txt-OtherData'>

                        Street:  &nbsp;&nbsp;&nbsp; <input onInput={(e) => setStreet(e.target.value)} defaultValue={street} type={'text'} /><br />
                        City:    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input onInput={(e) => setCity(e.target.value)} defaultValue={city} type={'text'} /><br />
                        Zip Code <input onInput={(e) => setZip(e.target.value)} defaultValue={zip} type={'text'} /><br />

                    </div>
                </div>}




            </div>


        </div>
    )
}

export default UserComp