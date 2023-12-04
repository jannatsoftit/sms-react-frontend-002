// --------------------------------------------------------------

import React from 'react';
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

import { Outlet, Navigate, useLocation } from 'react-router-dom';

const userAuth = () => {
  const location = useLocation();

  //const navigate = useNavigate();

  const userRole = localStorage.getItem('role_id');

  if (userRole === '1') {
    return true;
  } else {
    return false;
  }
};

const AdminProtectedRoute = () => {
  const auth = userAuth();
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to={'/'} state={{ from: location.pathname }} replace />
  );
};

export default AdminProtectedRoute;
