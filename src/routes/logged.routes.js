import React from 'react'
import { Switch } from 'react-router-dom'
import EditHomeForm from '../components/EditHomeForm'
import EditUserForm from '../components/EditUser/editUserForm'
import Profile from '../components/Profile'
import { LoggedRoute } from './helpersRoutes'


const LoggedRoutes = () => {
    return (
        <Switch>
            <LoggedRoute exact path="/perfil" component={Profile} />
            <LoggedRoute exact path="/editar-inicio" component={EditHomeForm} />
            <LoggedRoute exact path="/editar-usuario" component={EditUserForm} />
        </Switch>
    )
}

export default LoggedRoutes;