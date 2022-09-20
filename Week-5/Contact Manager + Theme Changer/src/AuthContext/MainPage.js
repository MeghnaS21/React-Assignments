import AuthContext from "./AuthContext"
import { useState } from "react"
import { useContext } from "react"
const MainPage = () => {
    const authStatus = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginStatus,setLogin]=useState(false)

    const handleChange = (e, key) => {
        if (key === 'username') {
            setUsername(e.target.value)
        }
        if (key === 'password') {
            setPassword(e.target.value)
        }
    }
    const handleLogin=()=>{
        if(username==='admin'&&password==='admin'){
            setLogin(true)
        }
        else{
            setLogin(false)
        }
    }
    return (
        <div>
            Username<input type='text' onChange={(e) => handleChange(e, "username")}></input>
            Password<input type='text' onChange={(e) => handleChange(e, "password")}></input>
            <button onClick={handleLogin}>login</button>

            {
                authStatus.loginStatus ? <h1>Main Page</h1> : <h1>Please login</h1>
            }

        </div>
    )
}
export default MainPage