import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Actividades from "./components/Actividades";
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
import EditHomeForm from "./components/EditHomeForm";
import Contacto from "./components/Contact/index";
import Profile from "./components/Profile/index";
import EditUserForm from "./pages/EditUserPage";
import BackofficeUsers from "./components/BackofficeUsers";
import ActividadId from "./components/Actividades/ActividadId";
import News from './components/News';

import { setId } from "./features/activities/activitySlice";
import CardDetail from "./components/novelties/CardDetail";


function App() {
  const dispatch = useDispatch();
  // Fetch organization's public info data as soon as we load the app
  React.useEffect(() => {
    dispatch(fetchPublicInfoData());
  }, [dispatch]);

  // get loading state. repeat for every slices
  const publicloading = useSelector(publicLoading);
  const loading = publicloading === "pending";

  const { id } = useSelector((state) => state.activity);

  return (
    <div className="App">
      <Loader isLoading={loading} />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/inicio" />
          </Route>
          <Route exact path="/inicio" component={Inicio} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/actividades" component={Actividades} />
          <Route exact path='/novedades' component={Novelties} />
          <Route exact path='/novedades/:id' component={CardDetail} />
          <Route exact path="/contribuye" component={Contribuye} />
          <Route exact path="/acceso" component={LoginPage} />
          <Route exact path="/registro" component={RegisterPage} />
          <Route exact path="/editar-inicio" component={EditHomeForm} />
          <Route exact path="/backoffice" component={Backoffice} />
          <Route exact path="/backoffice/users" component={BackofficeUsers} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/perfil" component={Profile} />
          <Route exact path="/editar-usuario" component={EditUserForm} />
          <Route exact path={`/actividad/${id}`} component={ActividadId} />
          <Route exact path="/backoffice/news" component={News} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
