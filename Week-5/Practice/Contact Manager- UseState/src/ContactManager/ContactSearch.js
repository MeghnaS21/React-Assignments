import {useState} from 'react'
import './ContactManager.css'
function ContactSearch(){
    const [contact,setContact]=useState([
        {
        fname:'john',
        phone:2983298,
        email:'john@gmail.com'
        },
        {
        fname:'peter',
        phone:29832999,
        email:'peter@gmail.com'
        },
        {
        fname:'carry',
        phone:293023922,
        email:'carry@gmail.com'
        },
        {
        fname:'mary',
        phone:2983900,
        email:'marry@gmail.com'
        },
        ]
        )
        const [search,setSearch]=useState('')
        const [result,setResult]=useState([])
        const handleChange=(e)=>{
            setSearch(e.target.value)
        }
        const handleSearch=()=>{
            const res=contact.filter((item)=>item.fname===search)
            setResult(res)
        }
        return(
            <div>
                <h1 className='alignment'>CONTACT MANAGER</h1>
               Enter the username you want to search <input type='text' onChange={(e)=>handleChange(e)}></input>
                <button onClick={handleSearch}>search</button>
                {
                    result.map((item)=>(
                        <div>
                            <h2>Name:{item.fname}</h2>
                            <h3>Phone:{item.phone}</h3>
                            <p>Email:{item.email}</p>
                        </div>
                    ))
                }
            </div>
        )
}
export default ContactSearch