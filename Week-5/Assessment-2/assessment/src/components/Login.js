import React from 'react'
import { useState } from 'react';


const Login = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    const users = [{ username: "admin", email: "admin@gmail.com", password: "admin" }];
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = users.find((user) => user.username === username && user.email === email);
        if (account && account.password === password) {
            setauthenticated(true)
            localStorage.setItem("authenticated", true);
        }
    };
    return (
        <>
            <div className='container'>
                <div className='formbox' onSubmit={handleSubmit}>
                    <h1 className='headingStyle'>Login Here!</h1>
                    <form className='add-contact'>
                        Username:<input type='text' placeholder='enter firstname' value={username} onChange={(e) => setUsername(e.target.value)}></input><br></br>
                        Email:<input type='text' placeholder='enter email' onChange={(e) => setEmail(e.target.value)} ></input><br></br>
                        Password:<input type='password' placeholder='enter password' onChange={(e) => setPassword(e.target.value)} ></input><br></br>
                        <button className='btn btnStyle'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login