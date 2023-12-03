// import { Outlet, Link } from 'react-router-dom';

// import Topbar from '../Topbar';
// import Sidebar from '../Sidebar';
// import Footer from '../Footer';

// import Login from '../Login';
// import Dashboard from '../Pages/Dashboard/Dashboard';

// const userAuth = () => {

//   const userRole = localStorage.getItem('role_id');

//   if (userRole === '1') {
//     return ((localStorage.getItem()) && true);
//   }else{
//     return false;
//   }
// };

// const AdminLayout = () => {

//   const auth = userAuth();

//   return auth ? (
//     <>
//       <div>
//         <Topbar />
//         <Sidebar>
//           <Link to='/admin'><Dashboard /></Link>
//           <Footer />
//         </Sidebar>
//       </div>
//       <Outlet />
//     </>
//   ) : (
//     <Login />
//   );
// };

// export default AdminLayout;
