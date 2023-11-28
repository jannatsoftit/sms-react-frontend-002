// Login and Register
import Login from '../../Components/Login';
import Register from '../../Components/Register';

const GuestRoutes = {
  children: [
    {
      element: <Login />,
      path: '/',
    },
    {
      element: <Register />,
      path: '/Register',
    },
  ],

}

export default GuestRoutes;
