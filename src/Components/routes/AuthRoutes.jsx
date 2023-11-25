//import React from "react";

import Dashboard from '../Pages/Dashboard/Dashboard';

import AdminList from "../Pages/Admin/AdminList/AdminList";
import AdminCreate from "../Pages/Admin/AdminCreate/AdminCreate";
import AdminShow from "../Pages/Admin/AdminShow/AdminShow";
import AdminEdit from "../Pages/Admin/AdminEdit/AdminEdit";

import StudentList from "../Pages/Student/StudentList/StudentList";
import StudentCreate from "../Pages/Student/StudentCreate/StudentCreate";
import StudentShow from "../Pages/Student/StudentShow/StudentShow";
import StudentEdit from "../Pages/Student/StudentEdit/StudentEdit";

import ParentList from "../Pages/Parent/ParentList/ParentList";
import ParentCreate from "../Pages/Parent/ParentCreate/ParentCreate";
import ParentShow from "../Pages/Parent/ParentShow/ParentShow";
import ParentEdit from "../Pages/Parent/ParentEdit/ParentEdit";


import TeacherList from "../Pages/Teacher/TeacherList/TeacherList";
import TeacherCreate from "../Pages/Teacher/TeacherCreate/TeacherCreate";
import TeacherShow from "../Pages/Teacher/TeacherShow/TeacherShow";
import TeacherEdit from "../Pages/Teacher/TeacherEdit/TeacherEdit";

import AccountantList from "../Pages/Accountant/AccountantList/AccountantList";
import AccountantCreate from "../Pages/Accountant/AccountantCreate/AccountantCreate";
import AccountantShow from "../Pages/Accountant/AccountantShow/AccountantShow";
import AccountantEdit from "../Pages/Accountant/AccountantEdit/AccountantEdit"; 

import LibrarianList from "../Pages/Librarian/LibrarianList/LibrarianList";
import LibrarianCreate from "../Pages/Librarian/LibrarianCreate/LibrarianCreate";
import LibrarianShow from "../Pages/Librarian/LibrarianShow/LibrarianShow";
import LibrarianEdit from "../Pages/Librarian/LibrarianEdit/LibrarianEdit";

// Examination 
import ExamCategoryList from "../Pages/Examination/ExamCategory/ExamCategoryList/ExamCategoryList";
import ExamCategoryCreate from "../Pages/Examination/ExamCategory/ExamCategoryCreate/ExamCategoryCreate";
import ExamCategoryEdit from "../Pages/Examination/ExamCategory/ExamCategoryEdit/ExamCategoryEdit";

import GradeList from "../Pages/Examination/Grade/GradeList/GradeList";
import GradeCreate from "../Pages/Examination/Grade/GradeCreate/GradeCreate";
import GradeEdit from "../Pages/Examination/Grade/GradeEdit/GradeEdit";

import MarkList from "../Pages/Examination/Mark/MarkList/MarkList";
import MarkCreate from "../Pages/Examination/Mark/MarkCreate/MarkCreate";
import MarkEdit from "../Pages/Examination/Mark/MarkEdit/MarkEdit";

import OfflineExamList from "../Pages/Examination/OfflineExam/OfflineExamList/OfflineExamList";
import OfflineExamCreate from "../Pages/Examination/OfflineExam/OfflineExamCreate/OfflineExamCreate";
import OfflineExamEdit from "../Pages/Examination/OfflineExam/OfflineExamEdit/OfflineExamEdit";

// import Student from './Components/Pages/Student/StudentList/StudentList';
// import Examination from './Components/Pages/Examination/Examination';
// import Accountant from './Components/Pages/Accountant/Accountant';
// import Admission from './Components/Pages/Admission/Admission';
// import Academic from './Components/Pages/Academic/Academic';  

const AuthRoutes = {
  children: [
    {
      element: <Dashboard />,
      path: '/',
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
    {
      children: [
        {
          element: <ParentList />,
          path: '',
        },
        {
          element: <ParentCreate />,
          path: 'create',
        },
        {
          children: [
            {
              element: <ParentShow />,
              path: '',
            },
            {
              element: <ParentEdit />,
              path: 'edit',
            },
          ],
          path: ':parentId',
        },
      ],
      path: 'parents',
      
    },
    {
      children: [
        {
          element: <TeacherList />,
          path: '',
        },
        {
          element: <TeacherCreate />,
          path: 'create',
        },
        {
          children: [
            {
              element: <TeacherShow />,
              path: '',
            },
            {
              element: <TeacherEdit />,
              path: 'edit',
            },
          ],
          path: ':teacherId',
        },
      ],
      path: 'teachers',
      
    },
    {
      children: [
        {
          element: <AccountantList />,
          path: '',
        },
        {
          element: <AccountantCreate />,
          path: 'create',
        },
        {
          children: [
            {
              element: <AccountantShow />,
              path: '',
            },
            {
              element: <AccountantEdit />,
              path: 'edit',
            },
          ],
          path: ':accountantId',
        },
      ],
      path: 'accountants',
      
    },
    {
      children: [
        {
          element: <LibrarianList />,
          path: '',
        },
        {
          element: <LibrarianCreate />,
          path: 'create',
        },
        {
          children: [
            {
              element: <LibrarianShow />,
              path: '',
            },
            {
              element: <LibrarianEdit />,
              path: 'edit',
            },
          ],
          path: ':librarianId',
        },
      ],
      path: 'librarians',
      
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
      path: 'examCategories',
      
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
      path: 'grades',
      
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
      path: 'marks',
      
    },
    {
      children: [
        {
          element: <OfflineExamList />,
          path: '',
        },
        {
          element: <OfflineExamCreate />,
          path: 'create',
        },
        {
          children: [
            {
              element: <OfflineExamEdit />,
              path: 'edit',
            },
          ],
          path: ':offlineExamId',
        },
      ],
      path: 'offlineExams',
      
    },
  ]
}

export default AuthRoutes;
