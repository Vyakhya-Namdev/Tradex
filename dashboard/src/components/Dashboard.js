import React from 'react';
import { Route, Routes } from "react-router-dom";

import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

function Dashboard() {
    return (
    <div className="dashboard-container">
      <div className="content">
        <Routes>
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

    </div>
  );
}

export default Dashboard;