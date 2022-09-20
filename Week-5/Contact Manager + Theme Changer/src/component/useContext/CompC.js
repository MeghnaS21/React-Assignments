import React, { useContext } from 'react'
import { contextName } from './ComA'

const CompC = () => {
   
  const receiverName = useContext(contextName);

  return (
    <>

    <h1>{receiverName}</h1>
    </>
  )
}

export default CompC