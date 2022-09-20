
// const ContactManagerCompComp=(props)=>{
//     const[]=useState(props.data)

//     return(
//         <div>
//             <h1>Contact Manager</h1>{
//                 contact.map((item)=>(
//                     <div>
//                         <h1>{item.fname}</h1>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }
//----------------------------my own -----------------------------------
import React, { useContext } from 'react'
import { useState } from "react";
import teamMates from "./contactsdata";
import "./ContactManager.css"
import ThemeContext from '../ThemeChangerApp/theme-context';



const ContactManager = () => {

    //new ---
    const themes = useContext(ThemeContext);
    //storing my teamMates data into state
    const [data, setdata] = useState(teamMates)
    const [fname, setFname] = useState('')
    const [location, setlocation] = useState('')
    const [email, setEmail] = useState('')

    const [search, setSearch] = useState('')
    // const [result,setResult]=useState([])
    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        const res = data.filter((item) => item.fname === search)
        setdata(res)
    }


    const handleUsername = (e) => {
        setFname(e.target.value)
    }
    const handleLocation = (e) => {
        setlocation(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleDelete = (itemid) => {
        const res = data.filter((d) => d.id !== itemid)
        setdata(res)
    }

    const handleCreate = (e) => {
        e.preventDefault()

        if (fname && location && email) {
            const newcontact = {
                id: Date.now(),
                fname: fname,
                location: location,
                email: email
            }
            setdata([...data, newcontact])

            setFname(" ");
            setEmail(" ");
            setlocation(" ");
        }
        else {
            alert("Fields are empty");
        }

    }
    return (

        <div className='container' style={themes}>
            <div className='row'>
                <div className='formbox'>
                    <h1 className='headingStyle'>Add Contact</h1>
                    <form className='add-contact'>
                        Username:<input type='text' placeholder='enter firstname' onChange={(e) => handleUsername(e)}></input><br></br>
                        Email:<input type='text' placeholder='enter email' onChange={(e) => handleEmail(e)}></input><br></br>
                        Location:<input type='text' placeholder='enter location' onChange={(e) => handleLocation(e)}></input><br></br>
                        <button onClick={(e) => handleCreate(e)} className='btn btnStyle' style={themes}>create contact</button>
                    </form>
                </div>
                <div className='searchbox' >
                    <h1 class="headingStyle">SEARCH USER</h1>
                    <form className='user-form'>
                        Enter the username you want to search <input type='text' onChange={(e) => handleChange(e)}></input>
                        <button onClick={(e) => handleSearch(e)} className='btn btnStyle' style={themes}>search</button>
                    </form>
                </div>
                <div className='margin-control'>
                    {

                        data.map((d) => (
                            <>
                                {/* < div className='col-md-6 sm-2' > */}

                                <div class="card box" style={themes} >
                                    <div class="card-body">
                                        <h2 class="card-title">{d.fname}</h2>
                                        <p class="card-text">{d.email}</p>
                                        <h3>{d.location}</h3>
                                        <button onClick={() => handleDelete(d.id)} className='btn btn-danger'>delete</button>
                                    </div>
                                </div>


                                {/* </div > */}
                            </>

                        ))
                    }
                </div>
            </div>
        </div>
    )

}


export default ContactManager







// {/* <h1>{d.fname}</h1>
//         <h2>{d.email}</h2>
//         <h3>{d.location}</h3> */}


//----------------------------TRAINERS CODE--------------

// // import { useNavigate } from "react-router-dom"
// import { useState } from "react";
// import './ContactManager.css'
// function ContactManagerComp(props) {
//     const [contact, setContact] = useState(props.data);
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [location, setlocation] = useState('');
//     const [address, setAddress] = useState('');
//     const getClassName = (item) => {
//         if (item.address === 'IND') {
//             return "country-ind";
//         }
//         else {
//             return "country-us";
//         }
//     };
//     const handleChange = (e, key) => {
//         if (key === 'uname') {
//             setUsername(e.target.value);
//         }
//         if (key === 'email') {
//             setEmail(e.target.value);
//         }
//         if (key === 'location') {
//             setlocation(e.target.value);
//         }
//         if (key === 'address') {
//             setAddress(e.target.value);
//         }
//     };
//     const handleCreate = (e) => {
//         e.preventDefault();
//         const obj = {
//             id: Date.now(),
//             fname: username,
//             email: email,
//             location: location,
//             address: address
//         };
//         setContact([...contact, obj]);
//     };
//     const deleteItem = (itemid) => {
//         const result = contact.filter((item) => item.id !== itemid);
//         setContact(result);

//     };
//     return (
//         <div>
//             {console.log(contact)}
//             <h1>Contact Manager</h1>
//             <form>
//                 Username:<input type='text' onChange={(e) => handleChange(e, "uname")}></input>
//                 Email:<input type='text' onChange={(e) => handleChange(e, "email")}></input>
//                 location:<input type='text' onChange={(e) => handleChange(e, "location")}></input>
//                 Address:<input type='text' onChange={(e) => handleChange(e, "address")}></input>
//                 <button onClick={(e) => handleCreate(e)}>create contact</button>
//             </form>
//             {contact.map((item) => (
//                 <div>
//                     <h1 className={getClassName(item)}>{item.fname}</h1>
//                     <p>{item.location}</p>
//                     <p>{item.email}</p>
//                     <p>{item.address}</p>
//                     <button onClick={() => deleteItem(item.id)}>delete</button>
//                     <button>update</button>
//                 </div>
//             ))}
//         </div>
//     );

// }
// export default ContactManagerComp

// import { useState } from "react";
// import './ContactManager.css'
// const ContactManager=(props)=>{
//     const [contact,setContact]=useState(props.data)
//     const [username,setUsername]=useState('')
//     const [email,setEmail]=useState('')
//     const [location,setlocation]=useState('')
//     const [address,setAddress]=useState('')
//     const getClassName=(item)=>{
//         if(item.address==='IND'){
//             return "country-ind"
//         }
//         else{
//             return "country-us"
//         }
//     }
//     const handleChange=(e,key)=>{
//         if(key==='uname'){
//             setUsername(e.target.value)
//         }
//         if(key==='email'){
//             setEmail(e.target.value)
//         }
//         if(key==='location'){
//             setlocation(e.target.value)
//         }
//         if(key==='address'){
//             setAddress(e.target.value)
//         }
//     }
//     const handleCreate=(e)=>{
//         e.preventDefault()
//         const obj={
//             id:Date.now(),
//             fname:username,
//             email:email,
//             location:location,
//             address:address
//         }
//         setContact([...contact,obj])
//     }
//     const deleteItem=(itemid)=>{
//        const result= contact.filter((item)=>item.id!==itemid)
//        setContact(result)

//     }
//     return(
//         <div>
//             {console.log(contact)}
//             <h1>Contact Manager</h1>
//         <form>
//             Username:<input type='text' onChange={(e)=>handleChange(e,"uname")}></input>
//             Email:<input type='text' onChange={(e)=>handleChange(e,"email")}></input>
//             location:<input type='text' onChange={(e)=>handleChange(e,"location")}></input>
//             Address:<input type='text' onChange={(e)=>handleChange(e,"address")}></input>
//             <button onClick={(e)=>handleCreate(e)}>create contact</button>
//         </form>
//             {
//                 contact.map((item)=>(
//                     <div >
//                         <h1 className={getClassName(item)}>{item.fname}</h1>
//                         <p>{item.location}</p>
//                         <p>{item.email}</p>
//                         <p>{item.address}</p>
//                         <button onClick={()=>deleteItem(item.id)}>delete</button>
//                         <button>update</button>
//                     </div>
//                 ))
//             }
//         </div>
//     )

// }
// export default ContactManager






