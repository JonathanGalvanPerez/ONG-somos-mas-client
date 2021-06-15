import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({ component, ...options }) => {
    const isAuth = false;
    if (!isAuth) return <Route {...options} component={component} />
    return <Redirect to="/inicio" />
}

export const LoggedRoute = ({ component, ...options }) => {
    let isAuth = localStorage.getItem('org_token');
    if (isAuth !=="null") return <Route {...options} component={component} /> 
        return <Redirect to="/acceso" />
    
}

export const BackofficeRoute = ({ component, ...options }) => {
    const isAuth = localStorage.getItem('org_token');
    const role = localStorage.getItem('userRole');
    if (isAuth !=="null" && role === 1) return <Route {...options} component={component} />
    return <Redirect to="/acceso" />
}