import React from "react";

import Dashboard from '../Pages/Dashboard/Dashboard';

import AdminList from "../Pages/Admin/AdminList/AdminList";
import AdminCreate from "../Pages/Admin/AdminCreate/AdminCreate";
import AdminShow from "../Pages/Admin/AdminShow/AdminShow";
import AdminEdit from "../Pages/Admin/AdminEdit/AdminEdit";

import StudentList from "../Pages/Student/StudentList/StudentList";
import StudentCreate from "../Pages/Student/StudentCreate/StudentCreate";
import StudentShow from "../Pages/Student/StudentShow/StudentShow";
import StudentEdit from "../Pages/Student/StudentEdit/StudentEdit";

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
          path: ':adminId',
        },
      ],
      path: 'admins',
      
    },
    {
      children: [
        {
          element: <StudentList />,
          path: '',
        },
        {
          element: <StudentCreate />,
          path: 'create',
        },
        {
          children: [
            {
              element: <StudentShow />,
              path: '',
            },
            {
              element: <StudentEdit />,
              path: 'edit',
            },
          ],
          path: ':studentId',
        },
      ],
      path: 'students',
      
    },
  ]
}

export default AuthRoutes;
