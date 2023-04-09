import { useState, useEffect } from 'react'
import { React } from "react";
import axios from 'axios'
import UserComp from './Comp/User';
import SearchBarComp from './Comp/SearchBar';
import TodoComp from './Comp/Todo';
import PostComp from './Comp/Post';
import AddTodoComp from './Comp/AddTodo';
import AddPostComp from './Comp/AddPost';
import AddUserComp from './Comp/AddUser';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const todosUrl = 'https://jsonplaceholder.typicode.com/todos';


function App() {


  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [todos, setTodos] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [id, setId] = useState()
  const [userTodosById, setUserTodosById] = useState([])
  const [userPostsById, setUserPostsById] = useState([])
  const [todoAndPostAreExist, setTodoAndPostAreExist] = useState(false)
  const [todosAreExist, setTodosAreExist] = useState(true)
  const [addTodoIsExist, setAddTodoIsExist] = useState(false)
  const [postsAreExist, setPostsAreExist] = useState(true)
  const [addPostIsExist, setAddPostIsExist] = useState(false)
  const [addUserIsExist, setAddUserIsExist] = useState(false)
  const [colorOfUserIsOn, setColorOfUserIsOn] = useState([])
  const [lastIdNum, setLastIdNum] = useState(0)



  useEffect(() => {
    const fetchData = async () => {

      const { data: allUsers } = await axios.get(usersUrl)
      setUsers(allUsers)
      setSearchResults(allUsers)


      const { data: allPosts } = await axios.get(postsUrl)
      setPosts(allPosts)


      const { data: allTodos } = await axios.get(todosUrl)
      setTodos(allTodos)

      searchResults.forEach(x => setColorOfUserIsOn(current => [...current, false]))
    }
    fetchData()
  }, [])



  useEffect(() => {

    setSearchResults(users)

    setColorOfUserIsOn(current => [...current, false])

    users.forEach(x => {
      if (x.id > lastIdNum) {
        setLastIdNum(x.id)
      }
    })
  }, [users])



  useEffect(() => {
    const fetchDataById = async () => {

      setUserTodosById(todos.filter(todo => todo.userId === id))

      setUserPostsById(posts.filter(post => post.userId === id))

      let arrayCopy = [...colorOfUserIsOn]
      arrayCopy = arrayCopy.map(x => x = false)
      arrayCopy[id - 1] = true
      setColorOfUserIsOn(arrayCopy)
    }
    fetchDataById()
  }, [id])



  const handleAddTodo = () => {
    setTodosAreExist(false)
    setAddTodoIsExist(true)
  }

  const handleAddPost = () => {
    setPostsAreExist(false)
    setAddPostIsExist(true)
  }


  return (
    <div >
      <div className='app'>

        {/* Search Bar */}

        <SearchBarComp users={users} setSearchResults={setSearchResults} setAddUserIsExist={setAddUserIsExist} setTodoAndPostAreExist={setTodoAndPostAreExist} />
        {
          searchResults.map((user) => {
            return <UserComp key={user.id} user={user} setUsers={setUsers} users={users} setSearchResults={setSearchResults} id={id} setId={setId} todos={todos} setTodoAndPostAreExist={setTodoAndPostAreExist} setAddUserIsExist={setAddUserIsExist} setTodosAreExist={setTodosAreExist} setPostsAreExist={setPostsAreExist} colorOfUserIsOn={colorOfUserIsOn} />
          })
        }
      </div>


      {/* Todos & Posts */}

      {todoAndPostAreExist && <div className='rigthPosition'>


        {/* Todos */}

        {todosAreExist && <div >
          Todos - User {id} <button onClick={handleAddTodo} className='but-Add'>Add</button>
          <div className='todosAndPostsAndAddUser'>
            {
              userTodosById.map(todo => {
                return <TodoComp key={todo.id} todo={todo} todos={todos} userTodosById={userTodosById} setTodos={setTodos} setUserTodosById={setUserTodosById} />
              })
            }
          </div>
        </div>}

        {/* Add Todo */}

        {addTodoIsExist && <div>
          New Todo - User {id}
          <AddTodoComp setAddTodoIsExist={setAddTodoIsExist} setTodosAreExist={setTodosAreExist} userId={id} userTodosById={userTodosById} setUserTodosById={setUserTodosById} setTodos={setTodos} todos={todos} />
        </div>}
        <br /><br />

        {/* Posts */}

        {postsAreExist && <div >
          Posts - User {id} <button onClick={handleAddPost} className='but-Add'>Add</button>
          <div className='todosAndPostsAndAddUser'>
            {
              userPostsById.map(post => {
                return <PostComp key={post.id} post={post} />
              })
            }
          </div>
        </div>}


        {/* Add Post */}

        {addPostIsExist && <div>
          New Post - User {id}

          <AddPostComp setAddPostIsExist={setAddPostIsExist} setPostsAreExist={setPostsAreExist} userId={id} userPostsById={userPostsById} setUserPostsById={setUserPostsById} setPosts={setPosts} posts={posts} />
        </div>}
      </div>}

      <div className='rigthPosition'>

        {/* Add User */}

        {addUserIsExist && <div>
          Add New User
          <div>
            <AddUserComp setUsers={setUsers} users={users} lastIdNum={lastIdNum} setAddUserIsExist={setAddUserIsExist} setTodoAndPostAreExist={setTodoAndPostAreExist} />
          </div>
        </div>}

      </div>

    </div>
  );

}

export default App;
