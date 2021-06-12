import React from 'react'
import {Redirect, Switch} from 'react-router-dom'
import {PublicRoute} from './helpersRoutes'
import Home from '../components/Inicio'

const PublicRoutes = ()=>{
    return (
        <Switch>
            <PublicRoute exact path="/inicio" component={Home}/>
            <Redirect path='/**' to="/" />
        </Switch>
    )
}

export default PublicRoutes;