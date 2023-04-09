import React from 'react'

const SearchBarComp = ({ users, setSearchResults, setAddUserIsExist, setTodoAndPostAreExist }) => {

    const searchUser = (e) => {
        console.log(e.target.value)

        if (!e.target.value) {
            setSearchResults(users)
        }
        else {
            setSearchResults(users.filter(user => user.name.toLowerCase().includes(e.target.value) || user.email.toLowerCase().includes(e.target.value)))
        }
    }


    const handelClickOnAddUser = () => {
        setTodoAndPostAreExist(false)
        setAddUserIsExist(true)
    }



    return (
        <div >
            <center>
                Search
                <input type="search" placeholder="Search for..." onChange={searchUser} />

                <button onClick={handelClickOnAddUser} style={{ width: "50px" }}>Add</button> <br /><br />
            </center>

        </div>
    )
}

export default SearchBarComp