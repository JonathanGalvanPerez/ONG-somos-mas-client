import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Actividades from './components/Actividades';
import Contribuye from './components/Contribuye';
import Loader from './components/Loading/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPublicInfoData, publicLoading } from './app/publicInfoSlice';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import News from './components/News';
import Backoffice from './components/Backoffice'
import News from './components/News';

function App() {

  const dispatch = useDispatch();
  // Fetch organization's public info data as soon as we load the app
  React.useEffect(() => {
    dispatch(fetchPublicInfoData());
  }, [dispatch]);
  
 

  return (
    <div className='App'>
      <Loader isLoading={loading} />
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/inicio' />
          </Route>
          <Route exact path='/inicio' component={Inicio} />
          <Route exact path='/nosotros' component={Nosotros} />
          <Route exact path='/actividades' component={Actividades} />
          <Route exact path='/contribuye' component={Contribuye} />
          <Route exact path='/acceso' component={LoginPage} />
          <Route exact path='/registro' component={RegisterPage} />
          <Route exact path="/backoffice/news" component={News} />
          <Route exact path="/backoffice" component={Backoffice} />
          
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
