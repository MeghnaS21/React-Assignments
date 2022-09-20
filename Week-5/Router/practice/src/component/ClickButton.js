import React from 'react';
import { useState } from 'react';

const ClickButton = () => {
  const[name, setName]=useState("Meghna is a Competitive Coder");

  const handleToggle = () =>{
    let val=name;
    //conditional rendering
    (val === "Meghna is a Competitive Coder")? setName("Meghna is a Software Engineer"): setName("Meghna is a Competitive Coder");
  }
  return (
    <>
      <h1 className='alignment'>TOGGLE BUTTON USING USESATE HOOK</h1>
      <div className='alignment top'>
        <h2>{name}</h2>
        <button className='btn btn-primary ' onClick={handleToggle}>Test button</button>
      </div>

    </>
  )
}

export default ClickButton