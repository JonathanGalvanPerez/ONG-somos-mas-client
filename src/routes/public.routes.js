import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { PublicRoute } from './helpersRoutes'
import Home from '../components/Inicio'
import Novelties from '../pages/Novelties'
import Nosotros from '../components/Nosotros'
import Actividades from "../components/Actividades";
import Contribuye from '../components/Contribuye'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Contacto from '../components/Contact'

const PublicRoutes = () => {
    return (
        <Switch>
            <PublicRoute exact path="/inicio" component={Home} />
            <PublicRoute exact path="/novedades" component={Novelties} />
            <PublicRoute exact path="/nosotros" ccomponent={Nosotros} />
            <PublicRoute exact path="/actividades" component={Actividades} />
            <PublicRoute exact path="/contribuye" component={Contribuye} />
            <PublicRoute exact path="/acceso" component={LoginPage} />
            <PublicRoute exact path="/registro" component={RegisterPage} />
            <PublicRoute exact path="/contacto" component={Contacto} />

        </Switch>
    )
}

export default PublicRoutes;