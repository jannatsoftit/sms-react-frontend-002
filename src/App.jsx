import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminRoutes from "./Components/routes";
import AdminProtectedRoutes from "./Components/AdminProtectedRoutes";

import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

import Login from "./Components/Login";
import { useEffect, useState } from "react";

// import { BrowserRouter } from "react-router-dom";
import Admin from "./Components/Admin";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Register from "./Components/Register";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // const [isAuthenticated, setAuthenticated] = useState(
  //   () => JSON.parse(localStorage.getItem('role_id')) || false
  // );

  // const setAuth = (value) => {
  //   setAuthenticated(value);
  // };

  // useEffect(() => {
  //   localStorage.setItem('role_id', JSON.stringify(isAuthenticated))
  // },[isAuthenticated]);

  return (
    <>
      <Topbar />
      <Sidebar>
        <AdminProtectedRoutes>
          <AdminRoutes />
        </AdminProtectedRoutes>
        <Footer />
      </Sidebar>
      <Login />

      {/* <Register /> */}

      {/* <Routes>
          <Route
           path="*"
           element={isAuthenticated
            ? <Admin/>
            : <Navigate to='/' replace/>
          }
          />
          <Route path="/" element={<Login setAuth={setAuth} />}/>
        </Routes> */}
    </>
  );
};

export default App;
