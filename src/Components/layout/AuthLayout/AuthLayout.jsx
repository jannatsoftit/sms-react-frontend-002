// import React from "react";
// import { Outlet, Navigate, useLocation } from "react-router-dom";

// const userAuth = () => {
//   const location = useLocation();
//   const userRole = localStorage.getItem('role');

//   if(userRole === '1'){
//     return true;
//   }else{
//     return false;
//   }


// }

// const AuthLayout = () => {
//   const auth = userAuth();

//   return auth ?
//       <>
//       <Topbar />
//       <Sidebar>
//         <Outlet />
//         <Footer />
//       </Sidebar>
//       </>
//       :
//       <Navigate to={'/login'} state={{ from: location.pathname }} replace/>
// };

export default AuthLayout;
