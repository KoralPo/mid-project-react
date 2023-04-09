import { useState } from 'react'
import { v4 as uuid } from 'uuid';



const AddPostComp = ({ setAddPostIsExist, setPostsAreExist, userId, userPostsById, setUserPostsById, setPosts, posts }) => {

    const [newPostTitle, setNewPostTitle] = useState("")
    const [newPostBody, setNewPostBody] = useState("")

    const handleCanel = () => {
        setAddPostIsExist(false)
        setPostsAreExist(true)
    }

    const handleAdd = () => {
        const unique_id = uuid();
        const small_id = unique_id.slice(0, 8)


        setUserPostsById([...userPostsById, {
            userId: userId,
            id: small_id,
            title: newPostTitle,
            body: newPostBody
        }])

        setPosts([...posts, {
            userId: userId,
            id: small_id,
            title: newPostTitle,
            body: newPostBody
        }])
        setAddPostIsExist(false)
        setPostsAreExist(true)
    }

    return (
        <div className='todosAndPostsAndAddUser'>

            <div className='text-center'>
                Title: <input onChange={e => setNewPostTitle(e.target.value)} type="text" />
                <br />
                Body:  <input onChange={e => setNewPostBody(e.target.value)} type="text" />
                <br />
            </div>

            <div className='but-addTodoPostAndUser'>
                <button onClick={handleCanel} style={{ marginRight: "5px" }}>Cancel</button>
                <button onClick={handleAdd} >Add</button>
            </div>
        </div>
    )
}

export default AddPostComp