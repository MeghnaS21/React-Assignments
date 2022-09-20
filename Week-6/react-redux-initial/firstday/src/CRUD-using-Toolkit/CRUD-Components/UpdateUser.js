// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { updateUser } from "../userSlice"
// const UpdateUser=()=>{
//     const [id,setID]=useState('')
//     const [email,setEmail]=useState('')
//     const dispatch=useDispatch()

//     const modifyUser=()=>{
//         dispatch(updateUser({userid:id,newemail:email}))
//         alert("successful")
//     }
//     const handleChange=(e,key)=>{
//         if(key==='id'){
//             setID(e.target.value)
//         }
//         if(key==='email'){
//             setEmail(e.target.value)
//         }
//     }
//     return(
//         <div>
//             <form>
//                 ID:<input type='text' onChange={(e)=>handleChange(e,'id')}></input>
//                New Email:<input type='text' onChange={(e)=>handleChange(e,'email')} ></input>
//             </form>
//             <button onClick={modifyUser}>update contact</button>
//         </div>
//     )
// }
// export default UpdateUser


import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateUser } from "../userSlice"
const UpdateUser = () => {
    const [id, setID] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const modifyUser = () => {
        dispatch(updateUser({ userid: id, newemail: email }))
    }
    const handleChange = (e, key) => {
        if (key === 'id') {
            setID(e.target.value)
        }
        if (key === 'email') {
            setEmail(e.target.value)
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="formbox">
                    <h1 className='headingStyle'>Update Contact</h1>
                    <form className='add-contact'>
                        ID:<input type='text' placeholder="enter ID" onChange={(e) => handleChange(e, 'id')}></input>
                        New Email:<input type='text' placeholder="enter updated email" onChange={(e) => handleChange(e, 'email')} ></input>
                    </form>
                    <button onClick={modifyUser} className='btn btnStyle' >update contact</button>

                </div>

            </div>
        </div>
    )
}
export default UpdateUser