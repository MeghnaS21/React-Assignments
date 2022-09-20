import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Profile = () => {
  return (
    <>
   <Header></Header>
   <Outlet></Outlet>
    </>
  )
}

export default Profile