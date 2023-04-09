
import PostComp from './Post'
import TodoComp from './Todo'

const RightComp = ({ userPosts, userTodos, id }) => {


    return (
        <div>
            Todos - User {id} <button>Add</button>
            <div style={{ border: "1px solid black" }}>

                {

                    userTodos.map(todo => {

                        return <TodoComp key={todo.id} todo={todo} />
                    })
                }
            </div>

            <br /><br />


            Posts - User {id} <button>Add</button>
            <div style={{ border: "1px solid black" }}>

                {
                    userPosts.map(post => {

                        return <PostComp key={post.id} post={post} />
                    })
                }

            </div>
        </div >
    )
}

export default RightComp