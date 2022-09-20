import { createSlice } from "@reduxjs/toolkit";

//hard coded users
const initialState=[
    {
        id:'0',
        name: 'Meghna Srivastava'
    },
    {
        id:'1',
        name: 'Lipika Srivastava'
    },
    {
        id:'2',
        name: 'Shantanu Srivastava'
    }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;
//put that to store, go to store.js
export default usersSlice.reducer