import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";


//just because we are using redux, doesn't mean we will not use useState beacuse
//this is a temporary state, just a controlled form input title and content
//so we don't really need to send them to global state they are just for this component


import React from 'react'

const AddPostForm = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    //add the temporary state that we will track here in the component
    const [userID, setUserID] = useState('')

    //now we need to get our users
    const users = useSelector(selectAllUsers)
    

    const onTitleChanged = (e) => {
        setTitle(e.target.value)
    }

    const onContentChanged = (e) => {
        setContent(e.target.value)
    }

    //set userID by triggering onAuthorChanged
    const onAuthorChanged = (e) => setUserID(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userID) //usrId
            )
            setTitle('')
            setContent('')
        }
    }
    //we are checking if tittle, content and userID are all true here, if canSave is true, we can enable or disable the form button
    const canSave = Boolean(title) && Boolean(content) && Boolean(userID)

   //create  options menu right here

   const userOptions = users.map(user =>(
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
   ))

    return (
        <section>
            <h2>Add a new post</h2>
            <form>
                <label htmlFor="postTitle">Post Title: </label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />

                <label htmlFor="postAuthor">Author: </label>
                <select id="postAuthor" value={userID} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {userOptions}
                </select>

                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm