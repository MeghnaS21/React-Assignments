import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'Redux Toolkit',
        content: 'Good Content'
    },
    {
        id: '2',
        title: 'Redux Thunk',
        content: 'Good Content'
    }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        //this func will handle the data that we submit
        postAdded: {
            reducer(state, action) {
                state.push(action.payload) //payload contains the form data
            },//we dont really mutate state that's where .push will help
            prepare(title, content, userId){ //now we need to change prepare and alsoa llow it to accept userID
                return{
                    payload:{
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;


//export reducer function , create new component for forms.
export const { postAdded } = postSlice.actions;


export default postSlice.reducer;