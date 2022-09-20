import React from 'react'
import {Outlet, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Book Keeper!</h1>
      {/* This style will add border bottom to the nav bar */}
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}>
        {/* This will add links to invoices and expenses */}
        <Link to="/invoices">Invoices</Link>  |{" "}
        <Link to="/expenses">Expenses</Link>

      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default App

//inplace of anchor tags we are using LInk to
//due to which our REACT ROUTER is NOW CONTROLLING URLS
//LINK is changing the url without causing a full page reload
