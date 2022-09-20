import React, { useState } from 'react'

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]); //creating an empty array

  const submitForm = (e) => {
    e.preventDefault();

    //short circuit evaluation
    if (email && password) {
      const newEntry = { id: new Date().getTime().toString, email, password };
      setAllEntry([...allEntry, newEntry]);
      setEmail("");
      setPassword("");
    }
    else {
      alert("fields are empty");
    }

  }

  return (
    <>
      <form action='' onSubmit={submitForm}>

        <div>
          <label htmlFor='email'>Email</label>
          <input type="text" name="email" id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" id="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button type='submit'>Login</button>
      </form>

      <div>
        {
          allEntry.map((currElm) => {
            const { id, email, password } = currElm; // we can write id, email and password individually
            return (
              <div className='box top' key={id}>
                <p>{email}</p>
                <p>{password}</p>
              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default BasicForm


//End