import { 
  Outlet, 
  Navigate, 
  useLocation,
} from 'react-router-dom';

const userAuth = () => {

  //const navigate = useNavigate();

  const userId = localStorage.getItem("role");

  if (userId === '3') {
    return true
  } else {
    return false
  }

};

const TeacherProtectedRoute = () => {

  const auth = userAuth();
  const location = useLocation();

  return auth ? <Outlet /> : <Navigate to='/login' state={{ from: location.pathname }} replace />

};

export default TeacherProtectedRoute;
