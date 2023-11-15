import React from "react";
import AdminList from "../Pages/Admin/AdminList/AdminList";
import AdminCreate from "../Pages/Admin/AdminCreate/AdminCreate";
import AdminShow from "../Pages/Admin/AdminShow/AdminShow";
import AdminEdit from "../Pages/Admin/AdminEdit/AdminEdit";

import Dashboard from '../Pages/Dashboard/Dashboard';
// import Student from './Components/Pages/Student/StudentList/StudentList';
// import Examination from './Components/Pages/Examination/Examination';
// import Accountant from './Components/Pages/Accountant/Accountant';
// import Admission from './Components/Pages/Admission/Admission';
// import Academic from './Components/Pages/Academic/Academic';

const AuthRoutes = {
  children: [
    {
      element: <Dashboard />,
      path: '/dashboard',
    },
    {
      children: [
        {
          element: <AdminList />,
          path: '',
        },
        {
          element: <AdminCreate />,
          path: 'create',
        },
        {
          children: [
            {
              element: <AdminShow />,
              path: '',
            },
            {
              element: <AdminEdit />,
              path: 'edit',
            },
          ],
          path: ':id',
        },
      ],
      path: 'admins',
      
    },
  ]
}

export default AuthRoutes;
