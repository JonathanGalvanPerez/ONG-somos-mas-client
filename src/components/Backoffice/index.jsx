import React, { useState } from "react";

import "./index.css";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Actividades_Backoffice from "./activities_backoffice/activities";

export default function Backoffice() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const [hideActivities, setHideActivities] = useState(false);

  const openActivities = () => {
    setHideActivities(true);
  };

  const closeActivities = () => {
    setHideActivities(false);
  };

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar
        sidebarOpen={sidebarOpen}
        closeSidebar={closeSidebar}
        openActivities={openActivities}
        closeActivities={closeActivities}
      />
      {hideActivities ? <Actividades_Backoffice /> : null}
    </div>
  );
}

// export default App;
