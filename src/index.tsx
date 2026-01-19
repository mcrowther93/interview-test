import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserDashboard } from "./features/user-dashboard";
import { UserDashboardProvider } from "./features/user-dashboard-context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <UserDashboardProvider>
      <UserDashboard />
    </UserDashboardProvider>
  </React.StrictMode>,
);
