import React from 'react'
import { useState } from 'react'

const ArrayOfObjects = () => {
    const data=[
        {
            id:0,
            fname: "Meghna",
            age: 22
        },

        {
            id:1,
            fname: "Lipika",
            age: 19
        },
        {
            id:2,
            fname: "Aryan",
            age: 18
        }

    ]

    console.log(data);

    const [myArray, setMyArray]=useState(data);
    const [btnName, setBtnName]=useState("clear");

    const handleToggle=()=>{
        let val=btnName;
        (val==="clear")?setBtnName("re-render"):setBtnName("clear");
    }

    const clearArray=()=>{
        let btnOName=btnName;
        (btnOName==="clear")?(setMyArray([])):(setMyArray(data));
          //to clear the state of my data, i will do conditional rendering
    }

    

    return (  
        <>
            <div className='alignment top'>
                {/* <h2 className='box'>Name: Meghna and Age: 22</h2><br></br> */}
                {
                    myArray.map((currentElement) => {
                       
                        return <><h2 className='box' key={currentElement.id}>Name: {currentElement.fname} and {currentElement.age}</h2><br></br></>
                    })
                }
                 {/*We can pass 2 handleFunctions inside a call back function to an onClick event */}
                <button className='btnStyle' onClick={()=>{
                    clearArray(); 
                    handleToggle();
                }}>{btnName}</button>
            </div>

        </>
    )
}

export default ArrayOfObjects