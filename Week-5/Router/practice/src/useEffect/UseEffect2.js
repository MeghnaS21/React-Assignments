import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {

    const [widthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth=()=>{
        setWidthCount(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener("resize", actualWidth);
        
        return()=>{
            window.removeEventListener("resize", actualWidth);
        }
    })
    //cleanup function -->> it's nothing just returning a callback function
  return (
    <>
    <div className='alignment top'>
        <p>Screen Size</p>
        <h1>{widthCount}</h1>
    </div>
    </>
  )
}

export default UseEffect2