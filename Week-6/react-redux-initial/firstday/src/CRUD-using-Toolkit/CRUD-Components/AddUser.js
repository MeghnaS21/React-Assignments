import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../userSlice"
// import {reset} from 'redux-form';
const AddUser=()=>{
    
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const dispatch=useDispatch()

    const createUser=()=>{

        if(uname && email){
            dispatch(addUser({username:uname,email:email}))
            alert('Successfully added!') 
            // console.log(flag);
              
        }
        else{
            alert("fields are empty");
        }
    }
    const handleChange=(e,key)=>{
        if(key==='uname'){
            setUname(e.target.value)
        }
        if(key==='email'){
            setEmail(e.target.value)
        }
    }
    return(
        <div className="container">
            <div className="row">
            <div className='formbox'>
                    <h1 className='headingStyle'>Add Contact</h1>
                    <form className='add-contact'>
                        Username:<input type='text' placeholder='enter firstname' onChange={(e) => handleChange(e,'uname')} required></input><br></br>
                        Email:<input type='text' placeholder='enter email' onChange={(e) => handleChange(e,'email')} required></input><br></br>
                    </form>
                    <button onClick={createUser} className='btn btnStyle'>create contact</button>
                </div>
            </div>
        </div>
    )
}
export default AddUser