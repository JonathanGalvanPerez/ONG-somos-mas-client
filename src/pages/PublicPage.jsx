import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoggedRoute } from '../routes/helpersRoutes';

import Home from '../components/Inicio';
import Nosotros from '../components/Nosotros';
import Contactos from '../components/Contact';
import Novelties from './Novelties';
import CardDetail from '../components/novelties/CardDetail';
import Actividades from "../components/Actividades/ListaActividades";
import ActividadId from '../components/Actividades/ActividadId';
import Contribuye from '../components/Contribuye';
import Header from '../components/layout/header/index';
import Footer from '../components/layout/footer';

import Profile from '../components/Profile';
import EditHomeForm from '../components/EditHomeForm';
import EditUserForm from '../components/EditUser/editUserForm';

export default function PublicPage() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path={'/inicio'} component={Home} />
                <Route exact path={'/nosotros'} component={Nosotros} />
                <Route exact path={'/contacto'} component={Contactos} />
                <Route exact path={'/novedades'} component={Novelties} />
                <Route exact path={'/novedades/:id'} component={CardDetail} />
                <Route exact path={'/actividades'} component={Actividades} />
                <Route exact path={'/actividad/:id'} component={ActividadId} />
                <Route exact path={'/contribuye'} component={Contribuye} />
                <LoggedRoute exact path="/perfil" component={Profile} />
                <LoggedRoute exact path="/editar-inicio" component={EditHomeForm} />
                <LoggedRoute exact path="/editar-usuario" component={EditUserForm} />
                <Redirect path={'/**'} to='/inicio' />
            </Switch>
            <Footer />
        </>
    )
}
