import React from 'react'

const MultipleInputs = () => {
  return (
    <>
    <form action=''>
        <div>
            <label htmlFor='username'>Employee Name</label>
            <input type="text" name="username" id="username"></input>
        </div>

        <div>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email"></input>
        </div>

        <div>
            <label htmlFor='contact'>Contact</label>
            <input type="text" name="contact" id="contact"></input>
        </div>

        <button type='submit'>Submit</button>

    </form>
    </>
  )
}

export default MultipleInputs