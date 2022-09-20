import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    const[count, setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }

    const decremen=()=>{
        setCount(count-1);
    }

    //2- Dependecy List, when I only whant useEffect to render only at initial time
    //empty(for initial render) or any state
    useEffect(()=>{
        if(count>=1){
            document.title=`Chats (${count})`
        }
        else{
            document.title=`Chats`
        }
        //it will render after every other is rendered
        
    }, [count]); 
  return (
    <>
   <div className='alignment top'>
   <button onClick={decremen}>-</button>
   <h1>{count}</h1>
    <button onClick={increment}>+</button>
   </div>
    </>
  )
}

export default UseEffect1