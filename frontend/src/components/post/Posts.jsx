import React from 'react'
import SinglePost from './SinglePost'

const Posts = ({ posts }) => {

    return (
        <>
            {posts.map(post => <SinglePost post={post} key={post.id} />)}
        </>
    )

}


export default Posts
