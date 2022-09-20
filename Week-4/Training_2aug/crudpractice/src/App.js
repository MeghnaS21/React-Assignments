
// //STEP-3:----->>>>
// // imported useState Hook from React to allow us to store the current state of the component
// import { useState } from 'react';
// import './App.css';



// // STEP-1 -->>>>.
// //Created a functional component. I've used arrow function
// const App=()=>{

//   //STEP-4----> create destrutor and initialise the state with initial values
//   const[Counter, setCounter]=useState(0);
//   const name ='Meghna';
//   const isLoggedIn = false;
//   return(
//     //returning JSX & wrapping inside either empty fragments or div tags
   
//     <div className='alignment'>
//       <h1>1- Simple JSX(MANUAL SETUP)</h1>
//     <h1>Name: Peter</h1>
//     <h2>Age: 25</h2>
//     <h2>Country: Australia</h2>

//     {/*
//     //define const variable and render it inside our return method
//     //inside curly braces.

//     //because we can use dynamic expressions in curly braces in JSX */}
    
//     <div>
//       <h1>2-Simple variable in JSX inside xurly braces</h1>
      
//       Hello my name is {name}</div>

//     {/* We can also return ternary operators for that:-
//       */}

//     <div>
//       <h1>3- Ternary Expression!!</h1>
//       {
//       isLoggedIn? (
//         <div>
//           Congratulations {name} you are logged In!!
//         </div>
//       ):(
//         <>
//          Sorry, try again in some time!!
//         </>
//       )
//       }

//       {/*step-2:----->> 
//       CREATED NON DYNAMIC UI OF COUNTER */}
//       </div>
//       <h1>Counter implementation</h1>
//       {/* STEP-5:-----> Handled the change 
//       i) using onClick property" 
//       ii) passing callback function
//       ii-a) CallBack function is nothing but a function with no name that takes some commands
//       */}

//       {/* STEP-6:---------------->
//       Changing the state of the component:-
//       i) to change the state we will use use setter function inside callback func
//       ii) inside setter function we will pass a callback function with prevState as a parameter &
//       perform the actual functionality in it. Let's look at the example...
//       */}

//       {/* COUNTER IMPLEMENTED SUCCESSFULLY!!!! */}

//       <button onClick={
//         ()=>setCounter(
//           (prevCounter)=>
//           prevCounter-1
//         )
//       }>-</button>
//       <h2>{Counter}</h2>
//       <button  onClick={
//         ()=>setCounter(
//           (prevCounter)=>
//           prevCounter+1
//         )
//         }>+</button>

//     </div>

   

    
  
//     )
// }

//---------------------------TICKET RAISER-----------------
import React from 'react';
import TicketRaiser from "./TicketRaiser/TicketRaiser";
import data from "./TicketRaiser/TicketRaiserData";
import './index.css';

function App(){
  return(
    <div className='alignment'>
      <TicketRaiser data={data}></TicketRaiser>
    </div>
  )
}

export default App;

