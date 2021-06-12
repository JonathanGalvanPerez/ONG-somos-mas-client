import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({ component, ...options }) => {
    const isAuth = false;
    if (!isAuth) return <Route {...options} component={component} /> 
    return <Redirect to="/" />
}