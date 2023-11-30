//import React from "react";

// Dashboard
import Dashboard from '../../PublicDashboard/Dashboard/Dashboard';


// Examination
import ExamCategoryCreate from '../Pages/Examination/ExamCategory/ExamCategoryCreate/ExamCategoryCreate';
import ExamCategoryEdit from '../Pages/Examination/ExamCategory/ExamCategoryEdit/ExamCategoryEdit';
import ExamCategoryList from '../Pages/Examination/ExamCategory/ExamCategoryList/ExamCategoryList';

import GradeCreate from '../Pages/Examination/Grade/GradeCreate/GradeCreate';
import GradeEdit from '../Pages/Examination/Grade/GradeEdit/GradeEdit';
import GradeList from '../Pages/Examination/Grade/GradeList/GradeList';

import MarkCreate from '../Pages/Examination/Mark/MarkCreate/MarkCreate';
import MarkEdit from '../Pages/Examination/Mark/MarkEdit/MarkEdit';
import MarkList from '../Pages/Examination/Mark/MarkList/MarkList';

const AuthRoutes = {
  children: [
    {
      element: <Dashboard />,
      path: '/public/dashboard',
    },
    {
      children: [
        {
          element: <ExamCategoryList />,
          path: '',
        },
        {
          element: <ExamCategoryCreate />,
          path: 'create',
        },
        {
          children: [
            {
              element: <ExamCategoryEdit />,
              path: 'edit',
            },
          ],
          path: ':examCategoryId',
        },
      ],
      path: '/public/examCategories',
    },
    {
      children: [
        {
          element: <GradeList />,
          path: '',
        },
        {
          element: <GradeCreate />,
          path: 'create',
        },
        {
          children: [
            {
              element: <GradeEdit />,
              path: 'edit',
            },
          ],
          path: ':gradeId',
        },
      ],
      path: '/public/grades',
    },
    {
      children: [
        {
          element: <MarkList />,
          path: '',
        },
        {
          element: <MarkCreate />,
          path: 'create',
        },
        {
          children: [
            {
              element: <MarkEdit />,
              path: 'edit',
            },
          ],
          path: ':markId',
        },
      ],
      path: '/public/marks',
    },

  ],
};

export default AuthRoutes;
