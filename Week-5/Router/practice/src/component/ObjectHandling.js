import {React, useState} from 'react'

const ObjectHandling = () => {

  const[myObject, setMyObject]= useState({
    fname: "Meghna",
    age: "22",
    skill: "reactjs"
  })

  const[btnName, setBtnName]=useState("Update")

  const handleToggle=()=>{
    let originBtnName=btnName;
    (originBtnName==="Update")? setBtnName("Re-render"): setBtnName("Update")
  }

  const changeObject=()=>{
    let checkBtnName=btnName;
    (checkBtnName==="Update")? ( setMyObject({...myObject, skill: "reactjs, linux"})): (setMyObject({...myObject, skill: "reactjs"}))
   
  }
  return (
    <>
      <div className='alignment top'>
        <h1 className='box'>Name: {myObject.fname} Age: {myObject.age} Skill: {myObject.skill}</h1><br></br>
        <button className='btnStyle' onClick={()=>{
          changeObject();
          handleToggle();
        }}>{btnName}</button>
      </div>
    </>
  )
}

export default ObjectHandling