import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux"
import './SignUp.css'
// import {reset} from 'redux-form';
const SignUp = () => {

    const [uname, setUname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const dispatch=useDispatch()
    // const navigate=useNavigate();
    const navigate = useNavigate();


    const validateUser = () => {

        if ((uname === 'user' || uname === 'adminNew')  && (email === 'user@gmail.com' || email === 'adminNew@gmail.com') && (password === 'user@123' || password === 'admin@123')) {
            // dispatch(Login({username:uname,email:email}))
            alert('Successfully SignedUp!')
            navigate('/');
        }
        else if (uname === 'admin' && email === 'admin@gmail.com' && password==='admin@123')
        {
            alert('Already an existing user, we are redirecting you to LOGIN PAGE, Thankyou!!')
            navigate('/login')
        }
        else {
            alert("Wrong credentials");
        }

        
    }
    const handleChange = (e, key) => {
        if (key === 'uname') {
            setUname(e.target.value)
        }
        if (key === 'email') {
            setEmail(e.target.value)
        }
        if(key === 'password'){
            setPassword(e.target.value)
        }
    }
    return (
        <div className="container">
            <div className="row">
                <h3 className="Helper-Information">Admin credentials </h3>
                <div className='formbox'>
                    <h1 className='headingStyle'>SignUp! for better experiences</h1>
                    <form className='signup-form'>
                        Username:<input type='text' placeholder='enter firstname' onChange={(e) => handleChange(e, 'uname')} required></input><br></br>
                        Email:<input type='text' placeholder='enter email' onChange={(e) => handleChange(e, 'email')} required></input><br></br>
                        password:<input type='password' placeholder='enter password' onChange={(e) => handleChange(e, 'password')} required></input><br></br>
                    </form>
                    <button onClick={validateUser} className='btn btnStyle'>LOGIN</button>
                </div>
            </div>
            <h3 className="Helper-Information">
                Admin (Existing) credentials <br/>  
                username : admin <br/> 
                email: admin@gmail.com <br/>
                password: admin@123
            </h3>
            <h3 className="Helper-Information">
                SignUp(admin):- <br/> 
                username: adminNew <br/> 
                email: adminNew@gmail.com <br/> 
                password: admin@123 <br/> 
                <br/> <br/>
                SignUp(user):- <br/> 
                username: user <br/>  
                email: user@gmail.com <br/> 
                password: user@123 <br/> 
            </h3>
        </div>

    )
}
export default SignUp