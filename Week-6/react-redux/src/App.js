
import React from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import {incNumber, decNumber} from "./actions/index"


const App = () => {

 const myState = useSelector((state) => state.changeNumber)
 const dispatch = useDispatch();

  return (
    <>
   <div className='alignment'>
   <button onClick={ ()=> dispatch(decNumber())}>-</button>
    <h2>{myState}</h2>
    {/* <input name='quantity' type="text" value="0" /> */}
    <button onClick={ ()=> dispatch(incNumber())}>+</button>
   </div>
    </>
  )
}

export default App


// import GetUserConnector from "./component/GetUserConnector"
// import CounterConnector from "./React Redux Setup/CounterConnector"

// function App() {
//   return (
//     <div>
//       <GetUserConnector></GetUserConnector>
//     </div>
//   )
// }
// export default App

