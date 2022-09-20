import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
//imported reducer from counterSlice & have to add reducer store
export const store = configureStore({
    reducer: {
        //empty for now
        counter: counterReducer,

    }
})

//now that we have added reducer to the store it is available to the app through provider in index.js

//NEXT -> create counter component insidde our counter directory
