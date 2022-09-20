import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Header from './Header'

export const Home = () => {
    return (
        <>
            <Header></Header>
            
            <Outlet></Outlet>

            {/*------------shared layout------ 
            -------use outlet-----
            */}
            
            
        </>
    )
}
