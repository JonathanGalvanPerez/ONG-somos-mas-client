import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useLocation,
} from "react-router-dom";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Contribuye from "./components/Contribuye";
import Loader from "./components/Loading/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicInfoData, publicLoading } from "./app/publicInfoSlice";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Novelties from "./pages/Novelties";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Backoffice from "./components/Backoffice";
import EditOrganization from './components/Backoffice/edit-organization/edit-organization';
import EditHomeForm from "./components/EditHomeForm";
import Contacto from "./components/Contact/index";
import Profile from "./components/Profile/index";
import EditUserForm from "./pages/EditUserPage";
import ContactList from './components/ContactList/index'
import BackofficeUsers from "./components/BackofficeUsers";
import ActividadId from "./components/Actividades/ActividadId";
import Testimonials from "./components/Backoffice/Testimonials";

import ListaActividades from "./components/Actividades/ListaActividades";
import { setId } from "./features/activities/activitySlice";
import CardDetail from "./components/novelties/CardDetail";
import News from "./components/News";
import './App.css';

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


function App() {
  const dispatch = useDispatch();
  // Fetch organization's public info data as soon as we load the app
  React.useEffect(() => {
    dispatch(fetchPublicInfoData());
  }, [dispatch]);

  // get loading state. repeat for every slices
  const publicloading = useSelector(publicLoading);
  const loading = publicloading === "pending";


  const { id } = useSelector((state) => state.activity)

  return (
    <div className="App">
      <Loader isLoading={loading} />
      <Router>
        <Header />
        <Switch>
          <Animator>
            <Route exact path="/">
              <Redirect to="/inicio" />
            </Route>
            <Route exact path="/inicio" component={Inicio} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path='/novedades' component={Novelties} />
            <Route exact path='/novedades/:id' component={CardDetail} />
            <Route exact path="/contribuye" component={Contribuye} />
            <Route exact path="/acceso" component={LoginPage} />
            <Route exact path="/registro" component={RegisterPage} />
            <Route exact path="/editar-inicio" component={EditHomeForm} />
            <Route exact path="/backoffice" component={Backoffice} />
            <Route exact path="/backoffice/users" component={BackofficeUsers} />
            <Route exact path="/backoffice/testimonials" component={Testimonials} />
            <Route exact path="/backoffice/edit-organization" component={EditOrganization} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/perfil" component={Profile} />
            <Route exact path="/editar-usuario" component={EditUserForm} />
            <Route exact path="/actividad/:id" component={ActividadId} />
            <Route exact path="/actividades" component={ListaActividades} />
            <Route exact path="/backoffice/contacts" component={ContactList} />
            <Route exact path="/backoffice/news" component={News} />
          </Animator>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
