import changeNumber from "./IncrementDecrement";

//to combine multiple reducers we need something caaled redux, reducer 
// is an object 

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNumber
});

export default rootReducer;
