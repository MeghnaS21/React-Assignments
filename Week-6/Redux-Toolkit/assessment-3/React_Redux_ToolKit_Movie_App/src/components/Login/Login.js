import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux"
import './Login.css'
// import {reset} from 'redux-form';
const Login = () => {

    const [uname, setUname] = useState('')
    const [email, setEmail] = useState('')
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    // const dispatch=useDispatch()
    // const navigate=useNavigate();
    const navigate = useNavigate();
  
    let count=0; 

    const validateAdmin = () => {

        if(count<2){
            if (uname === 'admin' && email === 'admin@123') {
                // dispatch(Login({username:uname,email:email}))
                alert('Successfully loggedIn!')
                setauthenticated(true)
                localStorage.setItem("authenticated", true);
                navigate('/');
            }
            else {
                alert("Wrong credentials");
                ++count;
            }
        }
        else{
            alert("You are not registered with us|| We request you to please SignUp ")
            navigate('/signup')
        }
    }
    const handleChange = (e, key) => {
        if (key === 'uname') {
            setUname(e.target.value)
        }
        if (key === 'email') {
            setEmail(e.target.value)
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className='formbox'>
                    <h1 className='headingStyle'>Hello, Login to watch a movie!</h1>
                    <form className='login-form'>
                        Username:<input type='text' placeholder='enter firstname' onChange={(e) => handleChange(e, 'uname')} required></input><br></br>
                        Email:<input type='text' placeholder='enter email' onChange={(e) => handleChange(e, 'email')} required></input><br></br>
                    </form>
                    <button onClick={validateAdmin} className='btn btnStyle'>LOGIN</button>
                </div>
            </div>
            <h3 className="Helper-Information">
                Admin credentials <br/>  
                username : admin <br/> 
                email: admin@123
            </h3>
        </div>
    )
}
export default Login