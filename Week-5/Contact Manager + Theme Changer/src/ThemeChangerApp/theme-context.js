import React, { createContext } from 'react'

export const themes = {
  dark: {
    color: "white",
    background: "black", 
    border: "1px solid #ccc",
    boxshadow: "0 0 13px white"
  },

  light: {
    color: "black",
    background: "white", 
    border: "1px solid black",
    // boxshadow: "0 0 13px black"
  }
}

const ThemeContext = createContext(themes)

export default ThemeContext