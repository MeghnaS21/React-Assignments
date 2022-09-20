import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";

import React from 'react'

const PostList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post =>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>

            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
            </p>

        </article>
    ))

  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostList