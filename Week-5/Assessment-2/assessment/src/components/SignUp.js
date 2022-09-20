import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className='container'>
        <div className='formbox'>
          <h1 className='headingStyle'>SignUp Here!</h1>
          <form className='add-contact'>
            Username:<input type='text' placeholder='enter firstname' ></input><br></br>
            Email:<input type='text' placeholder='enter email' ></input><br></br>
            Password:<input type='password' placeholder='enter password' ></input><br></br>
            <button className='btn btnStyle'>SignUp</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp