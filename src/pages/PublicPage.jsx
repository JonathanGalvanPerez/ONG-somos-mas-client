import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
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
import {motion} from 'framer-motion';

const Animator = ({ children }) => {
  const location = useLocation();

  const opacityRoutes = ["/acceso", "/registro"];
  const isOpacityRoute = opacityRoutes.includes(location.pathname);

  return(
    <motion.div initial={{x:isOpacityRoute ? 0 : -1000, opacity: isOpacityRoute ? 0 : 1}} animate={{x:0, opacity: 1}} transition={{duration:0.8}} key={location.pathname}>
      {children}
    </motion.div>
  );
};

export default function PublicPage() {
    return (
        <>
            <Header />
            <Animator>
                <Switch>
                    <Route exact path={'/inicio'} component={Home} />
                    <Route exact path={'/nosotros'} component={Nosotros} />
                    <Route exact path={'/contacto'} component={Contactos} />
                    <Route exact path={'/novedades'} component={Novelties} />
                    <Route exact path={'/novedades/:id'} component={CardDetail} />
                    <Route exact path={'/actividades'} component={Actividades} />
                    <Route exact path={'/actividad/:id'} component={ActividadId} />
                    <Route exact path={'/contribuye'} component={Contribuye} />
                    <Redirect path={'/**'} to='/inicio' />
                </Switch>
            </Animator>
            <Footer />
        </>
    )
}
