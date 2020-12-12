import React from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../store/actions/authActions'


const Logout = () => {

    const dispatch = useDispatch()
    dispatch(logout())

    return (
        <Redirect to="/login" />
    )

}


export default Logout