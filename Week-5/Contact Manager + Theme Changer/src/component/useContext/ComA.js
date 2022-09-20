import React, { createContext } from 'react'
import ComB from './ComB'

const contextName = createContext();

const ComA = () => {

 
  return (
    <>
   <contextName.Provider value={"Meghna is learning useContext Hook"}>
   <ComB></ComB>
   </contextName.Provider>
    </>
  )
}

export default ComA
export {contextName};