import {useState} from 'react'
import './ContactManager.css';

function ContactManager(){
    const [contact,setContact]=useState([
        {
        id:0,
        fname:'john',
        phone:2983298,
        email:'john@gmail.com'
        },
        {
        id:1,
        fname:'peter',
        phone:29832999,
        email:'peter@gmail.com'
        },
        {
        id:2,
        fname:'carry',
        phone:293023922,
        email:'carry@gmail.com'
        },
        {
        id:3,
        fname:'mary',
        phone:2983900,
        email:'marry@gmail.com'
        },
        ]
        )
        const [fname,setFname]=useState('')
        const [phone,setPhone]=useState('')
        const [email,setEmail]=useState('')
        const handleUsername=(e)=>{
            setFname(e.target.value)
        }
        const handlePhone=(e)=>{
            setPhone(e.target.value)
        }
        const handleEmail=(e)=>{
            setEmail(e.target.value)
        }
        const handleDelete=(itemid)=>{
          const res=  contact.filter((item)=>item.id!==itemid)
          setContact(res)
        }
        const handleCreate=(e)=>{
            e.preventDefault()
            const newcontact={
                id:Date.now(),
                fname:fname,
                phone:phone,
                email:email
            }
            setContact([...contact,newcontact])
        }
        return(
            <div>
                {console.log(contact)}
                <form>
                 Username:<input type='text' placeholder='enter firstname' onChange={(e)=>handleUsername(e)}></input>
                 Phone:<input type='text' placeholder='enter phone' onChange={(e)=>handlePhone(e)}></input>
                 Email:<input type='text' placeholder='enter email' onChange={(e)=>handleEmail(e)}></input>
                 <button onClick={(e)=>handleCreate(e)} className='btn btn-primary'>create contact</button>
                </form>
                {
                    contact.map((item)=>(
                        
                                // <div className='col-xl-4'>
                                    <div className='card box'>
                                        <div className='card-body'>
                                    <h2>Name:{item.fname}</h2>
                                    <h3>Phone:{item.phone}</h3>
                                    <p>Email:{item.email}</p>
                                    <button onClick={()=>handleDelete(item.id)}className='btn btn-danger'>delete</button>
                                    </div>
                                    </div>
                                // </div>
                        
                    ))
                }
            </div>
        )
}
export default ContactManager