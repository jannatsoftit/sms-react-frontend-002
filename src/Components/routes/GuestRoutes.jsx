// Login and Register
import Login from '../../Components/Login';
import Register from '../../Components/Register';

const GuestRoutes = {
  children: [
    {
      element: <Login />,
      path: '/login',
    },
    {
      element: <Register />,
      path: '/',
    },
  ],

}

export default GuestRoutes;
