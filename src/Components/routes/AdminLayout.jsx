import { Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Login from '../Login';

//import Login from '../Login';
//import Dashboard from '../Pages/Dashboard/Dashboard';
//import AdminProtectedRoute from '../AdminProtectedRoute';
//import AdminList from '../Pages/Admin/AdminList/AdminList';

//import { useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const [isAuthenticated, setAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('role_id')) || false
  );

  // const [isAuthToken, setAuthToken] = useState(
  //   () => JSON.parse(localStorage.getItem("auth_token")) || false
  // );

  const setAuth = (value) => {
    setAuthenticated(value);
  };

  useEffect(() => {
    localStorage.setItem('role_id', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  //const navigate = useNavigate();

  if (isAuthenticated) {
    return (
      <>
        <Topbar />
        <Sidebar>
          <Footer />
        </Sidebar>
        <Outlet />
      </>
    );
  } else {
    <Login />;
  }
};

export default AdminLayout;
