import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Actividades from './components/Actividades';
import Contribuye from './components/Contribuye';
import Loader from './components/Loading/Loader'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPublicInfoData, publicLoading } from './app/publicInfoSlice';

function App() {

  const dispatch = useDispatch();
  // Fetch organization's public info data as soon as we load the app
  React.useEffect(() => {
    dispatch(fetchPublicInfoData())
  }, [dispatch]);
  
  // get loading state. repeat for every slices
  const publicloading = useSelector(publicLoading);
  const loading = (publicloading === "pending");

  return (
    <div className="App">
      <Loader isLoading={loading} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/inicio" />
          </Route>
          <Route exact path="/inicio" component={Inicio} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/actividades" component={Actividades} />
          <Route exact path="/contribuye" component={Contribuye} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
