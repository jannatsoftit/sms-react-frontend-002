//import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const userAuth = () => {

  const location = useLocation();

  const userRole = localStorage.getItem("role_id");

  if (userRole === '1') {
      return true;
    }
    else{
      return false;
  }

}

const AdminProtectedRoutes = () => {
  const auth = userAuth();

  return auth ? <Outlet /> : <Navigate to={'/'} state={{ from: location.pathname }} replace />

};

export default AdminProtectedRoutes;
