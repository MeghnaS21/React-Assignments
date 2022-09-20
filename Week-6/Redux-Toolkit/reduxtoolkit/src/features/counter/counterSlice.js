//splitting up redux state objects into multiple slices of state
//slices is a collection of reducer logic and action for a single feature in the app
//For example a blog has a single slice for post and another one for comments, we will handel the logic each differently
//so each get their own slice
//NOTE- every single feature has it's own slice

import { createSlice } from "@reduxjs/toolkit";

//create intial state

const initialState = {
    count : 0
}

//create our counter slice, which will take an object

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    //we have created 2 actions inside of our reducer
    reducers : {
        increement: (state) => {
            state.count += 1;
        },
        decreement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        increementByAmount: (state, action) => {
            state.count += action.payload; //it is basically the amount that we pass in the payload
        }
    }
});

//export both our actions as well as reducers

export const {increement, decreement, reset, increementByAmount}  = counterSlice.actions;

//export the reducer
export default counterSlice.reducer;

//NEXT -> go the store and import the reducer
