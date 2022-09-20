import React from 'react'
//import hooks from redux
import { useSelector, useDispatch } from 'react-redux'
//import actions of reducer
import { increement, decreement, reset, increementByAmount } from './counterSlice'
import { useState } from 'react' //we are using this to increent by amount that we have entered in the input field


const Counter = () => {
    //add our state to the component
    const count = useSelector((state) => state.counter.count);
    //define stpacth
    const dispatch = useDispatch();

    const [increementAmount, setIncrementAmount] = useState(0);
    //we need to verify to get the number value and if it is not a number set it to zero
    const addValue = Number(increementAmount) || 0;

    //quick func definition, reset our useState value

    const resetAll = () => {
        setIncrementAmount(0); //set useState to zero
        dispatch(reset()); //that will set our global state using reset action and that will be set back to zero
    }

    return (
        //add jsx
        <>
            <section>
                <p>{count}</p>
                <div>
                    <button onClick={() => dispatch(increement())}>+</button>
                    <button onClick={() => dispatch(decreement())}>-</button>
                </div>
                <input type="text" value={increementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />

                <div>
                    <button onClick={() => dispatch(increementByAmount(addValue))}>Add Amount</button>
                    <button onClick={resetAll}>Reset</button>

                </div>

            </section>
        </>
    )
}

export default Counter