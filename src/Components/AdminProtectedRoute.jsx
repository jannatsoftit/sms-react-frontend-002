import React from 'react';

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
    <Navigate to={'/login'} state={{ from: location.pathname }} replace />
  );
};

export default AdminProtectedRoute;
