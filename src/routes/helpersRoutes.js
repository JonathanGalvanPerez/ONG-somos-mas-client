import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Alert from '../components/alertService/AlertService';


export const PublicRoute = ({ component, ...options }) => {
    const isAuth = false;
    if (!isAuth) return <Route {...options} component={component} />
    return <Redirect to="/inicio" />
}

export const LoggedRoute = ({ component, ...options }) => {
    let isAuth = localStorage.getItem('org_token');
    if (isAuth !== "null") { return <Route {...options} component={component} /> }
    else {
        Alert.error('ACCESO DENEGADO', 'INICIAR SESIÓN para continuar.');
        return <Redirect to="/acceso" />
    }

}

export const BackofficeRoute = ({ component, ...options }) => {
    const isAuth = localStorage.getItem('org_token');
    const role = localStorage.getItem('userRole');
    if (role !== "null" && isAuth !== "null" && JSON.parse(role) === 1) { return <Route {...options} component={component} /> }
    else {
        Alert.error('ACCESO DENEGADO', 'Necesitas ser ADMINISTRADOR para continuar.');
        return <Redirect to="/acceso" />
    }
}