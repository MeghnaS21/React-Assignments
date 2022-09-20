// import CounterConnector from "./React-Redux-Setup/CounterConnector"

// function App()
// {
//     return(
//         <div>
//      <CounterConnector></CounterConnector>
       
//         </div>
//     )
// }
// export default App

import ViewUsers from "./CRUD-using-Toolkit/CRUD-Components/ViewUsers"
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import AddUser from "./CRUD-using-Toolkit/CRUD-Components/AddUser"
import UpdateUser from "./CRUD-using-Toolkit/CRUD-Components/UpdateUser"
import './index.css'
function App()
{
    return(
        <div>
            <BrowserRouter>

            <div  id="body-header">
                <ul className="horizontal-list text-center">
                    <li> <Link to='/'>VIEW USERS</Link> </li>
                    <li> <Link to='/add'>ADD CONTACT</Link> </li>
                    <li>  <Link to='/update'>UPDATE CONTACT</Link> </li>
               
                </ul>
            </div>
               
                <Routes>
                    <Route path='/' element={<ViewUsers></ViewUsers>}></Route>
                    <Route path='/add' element={<AddUser></AddUser>}></Route>
                    <Route path='/update' element={<UpdateUser></UpdateUser>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App





/*


--menu-height: 40px;
    background-color: var(--sb-toolbar-background);
    color: var(--sb-foreground);
    display: flex;
    flex-shrink: 0;
    height: var(--menu-height);
    width: 100%;
    z-index: 100;



*/