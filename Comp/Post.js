import React from 'react'

const PostComp = ({ post }) => {

    return (
        <div className='todoAndPost'>
            <div className='txt-todosAndPosts'>
                <strong>Title :  </strong> {post.title}

                <br />
                <strong>body :  </strong>  {post.body}
            </div>

        </div>
    )
}

export default PostComp