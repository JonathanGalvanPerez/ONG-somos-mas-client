import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Actividades from './components/Actividades';
import Contribuye from './components/Contribuye';
import { useDispatch } from 'react-redux';
import { fetchPublicInfoData } from './app/publicInfoSlice';
import News from './components/News';

function App() {
  const dispatch = useDispatch();
 
  // Fetch organization's public info data as soon as we load the app
  React.useEffect(() => {
    dispatch(fetchPublicInfoData())
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/inicio" />
          </Route>
          <Route exact path="/inicio" component={Inicio} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/actividades" component={Actividades} />
          <Route exact path="/contribuye" component={Contribuye} />
          <Route exact path="/backoffice/news" component={News} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
