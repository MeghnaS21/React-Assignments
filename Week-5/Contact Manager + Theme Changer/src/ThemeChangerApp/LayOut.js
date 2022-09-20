import React, { useContext } from 'react'
import ThemeContext from './theme-context'

const LayOut = () => {
    const themes = useContext(ThemeContext);
  return (
    <>
    <div style={themes}>
    <h1>{JSON.stringify(themes)}</h1>
    </div>
    </>
  )
}

export default LayOut