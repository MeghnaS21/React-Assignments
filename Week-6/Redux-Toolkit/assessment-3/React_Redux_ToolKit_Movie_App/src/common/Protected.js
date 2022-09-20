import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let logIn = localStorage.getItem('login');
        if(!logIn){
            navigate('/login')
        }
    })
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected