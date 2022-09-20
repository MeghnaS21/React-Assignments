import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/posts/postSlice";
import usersReducer from "../features/users/usersSlice";


export const store = configureStore({
    reducer: {
        posts: postReducer, //now we need to add user ID to post so that we can look up the username and give them credit with post let's go back to postSlice 
        users: usersReducer
    }
})