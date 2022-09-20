// import React from 'react';
// import { useState } from 'react';

// import AuthProvider from "./AuthContext/AuthProvider";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./About";
// import './App.css';
// import Contact from "./component/Contact";
// import { Home } from "./component/Home";
// import Error from "./component/Error";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes> 
//         {/* routes means path & inside of it we have to define routes */}
//        {/*Parent route */}
//        {/* forward slash represents homepage */}
//        {/*How to make the below code as nested routing */}
//         <Route path="/" element={<Home/>}> 
//           <Route path="/about" element={<About/>}/>
//           <Route path="/contact" element={<Contact/>}/>
//           <Route path="*" element={<Error/>}/>
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//---------------------------------------------ABOVE CODE IS FOR REACT ROUTER PRACTICE--------------

// //------------------------------------------BELOW CODE IS FOR USESTATE- TOGGLE & COUNTER------------

// import React from 'react';
// import { useState } from 'react';
// import useCounter from './CustomHooks/useCounter';

// const App = () => {
//   //array destructuring 
//   const [Counter, increment, decrement]=useCounter()

//   const name = 'Meghna';
//   // const isLoggedIn = false;
//   const[ isLoggedIn, setIsLoggedIn]=useState(false)

//   // const[Counter, setCounter, isLoggedIn, setIsLoggedIn]=useState({
//   //   Counter:0,
//   //   isLoggedIn: false
//   // })
//                 // const increment=() => {
//                 //   setCounter(
//                 //     (prevCounter =>
//                 //       prevCounter - 1
//                 //   ))
//                 // }

//                 // const decrement=()=> {setCounter(
//                 //     (prevCounter) =>
//                 //       prevCounter + 1
//                 //   )
//                 // }

//   return (
//     <>
//       <div className='App alignment'>
//         <h1>Counter implementation</h1>

//         <button onClick={increment}>-</button>
//         <h2>{Counter}</h2>
//         <button onClick={decrement}>+</button> 



//        <h1>LoggIn using UseState Hook</h1>{
//           isLoggedIn ? (
//             <>
//               Congratulations {name} you are logged In!!
//             </>
//           ) : (
//           <>Sorry {name} try again in some time!! </> 
//           )}

//           {/*---------------------------------------------- USING OBJECT------------------ */}
//            <br></br>
//            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Button</button>

//       </div>
//     </>
//   )

// }

// export default App;



//---------------------------------BELOW IS THE START OF CONTACT MANAGER-----------------

// import ContactManagerComp from "./ContactManager/ContactManagerComp";

// function App(){
//   return(
//     <>
//     <h1 className="alignment">Heading name in progress...</h1>
//     <ContactManagerComp></ContactManagerComp>
//     </>
//   )
// }

// export default App;


//--------------------------------------HOOKS PRACTICE

// import React from 'react'
// import MultipleInputs from './LoginForm/MultipleInputs'

// const App = () => {
//   return (
//     <div>
//       <MultipleInputs>Hello</MultipleInputs>
//     </div>
//   )
// }

// export default App


//--------------------------------SCOREBOARD -------------------------------------------

// import React from "react";
// import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
// import JustSort from "./ScoreDashBoard/JustSort";
// import LeaderBoard from "./ScoreDashBoard/LeaderBoard";
// import SortAge from "./ScoreDashBoard/SortAge";
// import SortName from "./ScoreDashBoard/SortName";
// import SortRank from "./ScoreDashBoard/SortRank";
// import SortScore from "./ScoreDashBoard/SortScore";
// function App(){
//   return(
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<LeaderBoard></LeaderBoard>}></Route>
//           <Route path='/name'element={<JustSort userkey='fname' value={1}></JustSort>}></Route>
//           <Route path='/age' element={<JustSort userkey='age' value={2}></JustSort>}></Route>
//           <Route path='/rank' element={<JustSort userkey='rank' value={3}></JustSort>}></Route>
//           <Route path='/score' element={<SortScore userkey='points' value={4}></SortScore>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App

//-------------------------------------------------LCM FUNCTIONAL----------------------------






























//---------ADDING NAVBAR TO CONTACT MANAGER--------

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./ContactManager/About";
import './App.css';
import Contact from "./component/Contact";
import { Home } from "./component/Home";
import Error from "./component/Error";
import ContactManagerComp from "./ContactManager/ContactManager";
import ThemeContext, {themes} from "./ThemeChangerApp/theme-context";
import { useState } from "react";

function App() {

    const [theme, setTheme] = useState(themes.light);
    const [btnName, setBtnName] = useState("Light")

    const handleBtnName=()=>{
        let originBtnName=btnName;
        (originBtnName==="Light")? setBtnName("Dark"): setBtnName("Light")

    }
    const toggleTheme=()=> 
    theme ===themes.light? setTheme(themes.dark): setTheme(themes.light);

  return (
    <>

      <BrowserRouter>
        <Routes>
{/* routes means path & inside of it we have to define routes */ }
{/*Parent route */ }
{/* forward slash represents homepage */ }
{/*How to make the below code as nested routing */ }
          <Route path="/" element={<Home />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route path="/contactmanager" element={
                <ThemeContext.Provider value={theme}>
                   <div className="alignment mb-5">
                   <button  onClick={()=>{
                        toggleTheme();
                        handleBtnName();
                    }}>{btnName}</button>
                   </div>
                     <ContactManagerComp/>
                </ThemeContext.Provider>
           
            }/>
          </Route>

        </Routes>
      </BrowserRouter>



   </>
  );
}

export default App;
















//------------------------------------------BELOW CODE IS FOR USESTATE- TOGGLE & COUNTER- LATER ON ADDED CUSTOM HOOK-----------

// import React from 'react';
// import { useState } from 'react';
// import useCounter from './CustomHooks/useCounter';

// const App = () => {
//   //array destructuring 
//   const [Counter, increment, decrement]=useCounter()

//   const name = 'Meghna';
//   // const isLoggedIn = false;
//   const[ isLoggedIn, setIsLoggedIn]=useState(false)

//   // const[Counter, setCounter, isLoggedIn, setIsLoggedIn]=useState({
//   //   Counter:0,
//   //   isLoggedIn: false
//   // })
//                 // const increment=() => {
//                 //   setCounter(
//                 //     (prevCounter =>
//                 //       prevCounter - 1
//                 //   ))
//                 // }

//                 // const decrement=()=> {setCounter(
//                 //     (prevCounter) =>
//                 //       prevCounter + 1
//                 //   )
//                 // }

//   return (
//     <>
//       <div className='App alignment'>
//         <h1>Counter implementation</h1>

//         <button onClick={increment}>-</button>
//         <h2>{Counter}</h2>
//         <button onClick={decrement}>+</button> 



//        <h1>LoggIn using UseState Hook</h1>{
//           isLoggedIn ? (
//             <>
//               Congratulations {name} you are logged In!!
//             </>
//           ) : (
//           <>Sorry {name} try again in some time!! </> 
//           )}

//           {/*---------------------------------------------- USING OBJECT------------------ */}
//            <br></br>
//            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Button</button>

//       </div>
//     </>
//   )

// }

// export default App;

//-----------------------FOR AUTHCONTEXT------------------

// import ContextProviderEg from "./ContextCreation/ContextProviderEg"
// function App()
// {
//     return(
//         <div>
//        {/* * <ContextProviderEg></ContextProviderEg> */}
//        <AuthProvider></AuthProvider>
//         </div>
//     )
// }
// export default App


//-----------------------------------------task-1



// import useCounter from './CustomHooks/useCounter';

/*const App = () => {

    const name = 'Meghna';
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [Counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(
            (prevCounter =>
                prevCounter - 1
            ))
    }

    const decrement = () => {
        setCounter(
            (prevCounter) =>
                prevCounter + 1
        )
    }

    return (
        <>
            <div className='App alignment'>
                <h1>Counter implementation</h1>

                <button onClick={increment}>-</button>
                <h2>{Counter}</h2>
                <button onClick={decrement}>+</button>



                <h1>LoggIn using UseState Hook</h1>{
                    isLoggedIn ? (
                        <>
                            Congratulations {name} you are logged In!!
                        </>
                    ) : (
                        <>Sorry {name} try again in some time!! </>
                    )}

                {/*---------------------------------------------- USING OBJECT------------------ */
                /*<br></br>
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Button</button>

            </div>
        </>
    )

}

export default App; */






///=-----------------------USECONTEXT HOOK


/*

import React from 'react'
import ComA from './component/useContext/ComA'

const App = () => {
  return (
    <>
    <ComA></ComA>
    </>
  )
}

export default App
*/


//----------------------THEME CHANGER APP


// import React from 'react'
// import LayOut from './ThemeChangerApp/LayOut'
// import ThemeContext, {themes} from './ThemeChangerApp/theme-context'
// import { useState } from 'react'


// const App = () => {

//     const [theme, setTheme] = useState(themes.dark);
//     const toggleTheme=()=> 
//     theme ===themes.dark? setTheme(themes.light): setTheme(themes.dark);
  
//     return (
//    <>
//    <ThemeContext.Provider value={theme}>
//     <button onClick={toggleTheme}>Change Theme</button>
//    <LayOut/>
//    </ThemeContext.Provider>
   
//    </>
//   )
// }

// export default App

