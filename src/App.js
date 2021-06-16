import React from "react";

import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import AllRoutes from './routes/routes'

import Loader from "./components/Loading/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicInfoData, publicLoading } from "./app/publicInfoSlice";
import './App.css';



function App() {
  const dispatch = useDispatch();
  // Fetch organization's public info data as soon as we load the app
  React.useEffect(() => {
    dispatch(fetchPublicInfoData());
  }, [dispatch]);

  // get loading state. repeat for every slices
  const publicloading = useSelector(publicLoading);
  const loading = publicloading === "pending";


  return (
    <div className="App">
      <Loader isLoading={loading} />
      <Router>

        <Header /> 
        <AllRoutes/>
        <Footer />

      </Router>

    </div>
  );
}

export default App;
