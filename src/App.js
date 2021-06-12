import React from "react";

import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import PublicRoutes from './routes/public.routes'
import LoggedRoutes from './routes/logged.routes'

import Loader from "./components/Loading/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicInfoData, publicLoading } from "./app/publicInfoSlice";
import './App.css';
import BackofficeRoutes from "./routes/backoffice.routes";


function App() {
  const dispatch = useDispatch();
  // Fetch organization's public info data as soon as we load the app
  React.useEffect(() => {
    dispatch(fetchPublicInfoData());
  }, [dispatch]);

  // get loading state. repeat for every slices
  const publicloading = useSelector(publicLoading);
  const loading = publicloading === "pending";

  // const { id } = useSelector((state) => state.activity);

  return (
    <div className="App">
      <Loader isLoading={loading} />
      <Router>

        <Header />

        <PublicRoutes />
        <LoggedRoutes />
        <BackofficeRoutes/>
        <Footer />
      </Router>

      {/* 
      <Router>
          <Route exact path={`/actividad/${id}`} component={ActividadId} />
      </Router> */}

    </div>
  );
}

export default App;
