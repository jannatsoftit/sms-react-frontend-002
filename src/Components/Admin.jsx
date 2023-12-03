// Admin Routes
import React from "react";
import { Routes } from "react-router-dom";

import AdminRoutes from "./routes";
import AdminProtectedRoutes from "./AdminProtectedRoutes";

import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

// Public Routes

const Admin = () => {
  const userRole = localStorage.getItem("role_id");

  if (userRole === "1") {
    return (
      <>
        <Topbar />
        <Sidebar>
          <AdminProtectedRoutes>
            <AdminRoutes />
          </AdminProtectedRoutes>
          <Footer />
        </Sidebar>
      </>
    );
  }

  // else if(userRole === "7") {
  //   return (
  //     <Routes>
  //       <Topbar />
  //       <Sidebar>
  //         <AdminProtectedRoutes>
  //           <AdminRoutes />
  //         </AdminProtectedRoutes>
  //         <Footer />
  //       </Sidebar>
  //     </Routes>
  //   );
  // }
  
};

export default Admin;
