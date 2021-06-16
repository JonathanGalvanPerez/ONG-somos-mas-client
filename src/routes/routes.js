import React from 'react'
import { Redirect, Switch, useLocation} from 'react-router-dom'
import { PublicRoute, LoggedRoute, BackofficeRoute } from './helpersRoutes'
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

import EditHomeForm from '../components/EditHomeForm'
import EditUserForm from '../components/EditUser/editUserForm'
import Profile from '../components/Profile'

import Backoffice from '../components/Backoffice'
import EditOrganization from '../components/Backoffice/edit-organization/edit-organization'
import ContactList from '../components/ContactList/index'
import News from '../components/News'
import Testimonials from "../components/Backoffice/Testimonials";
import BackofficeUsers from "../components/BackofficeUsers/index";

//  OT34-104...inicio

import {motion} from 'framer-motion';

const Animator = ({ children }) => {
  const location = useLocation();

  return(
    <motion.div initial={{x:-1000}} animate={{x:0}} transition={{duration:0.8}} key={location.pathname}>
      {children}
    </motion.div>
  );
};
//OT34-104...fin

const PublicRoutes = () => {
    return (
        <Switch>
            <Animator>
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

                <LoggedRoute exact path="/perfil" component={Profile} />
                <LoggedRoute exact path="/editar-inicio" component={EditHomeForm} />
                <LoggedRoute exact path="/editar-usuario" component={EditUserForm} />

                <BackofficeRoute exact path="/backoffice" component={Backoffice} />
                <BackofficeRoute exact path="/backoffice/users" component={BackofficeUsers} />
                <BackofficeRoute exact path="/backoffice/news" component={News} />
                <BackofficeRoute exact path="/backoffice/contacts" component={ContactList} />
                <BackofficeRoute exact path="/backoffice/testimonials" component={Testimonials} />
                <BackofficeRoute exact path="/backoffice/edit-organization" component={EditOrganization} />

                <Redirect path="/**" to="/inicio" />

            </Animator>

        </Switch>
    )
}

export default PublicRoutes;