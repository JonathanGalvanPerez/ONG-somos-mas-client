import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { PublicRoute } from './helpersRoutes'
import Home from '../components/Inicio'
import Novelties from '../pages/Novelties'
import CardDetail from '../components/novelties/CardDetail'
import Nosotros from '../components/Nosotros'
import Actividades from "../components/Actividades/ListaActividades";
import Contribuye from '../components/Contribuye'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Contacto from '../components/Contact'
import ActividadId from "../components/Actividades/ActividadId";


const PublicRoutes = () => {
    return (
        <>
            <PublicRoute exact path="/inicio" component={Home} />
            <PublicRoute exact path="/nosotros" ccomponent={Nosotros} />
            <PublicRoute exact path="/contacto" component={Contacto} />
            <PublicRoute exact path="/novedades" component={Novelties} />
            <PublicRoute exact path='/novedades/:id' component={CardDetail} />
            <PublicRoute exact path="/actividades" component={Actividades} />
            <PublicRoute exact path="/actividad/:id" component={ActividadId} />
            <PublicRoute exact path="/contribuye" component={Contribuye} />
            <PublicRoute exact path="/acceso" component={LoginPage} />
            <PublicRoute exact path="/registro" component={RegisterPage} />
        </>
    )
}

export default PublicRoutes;