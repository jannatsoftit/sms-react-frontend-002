//import React from "react";

// Dashboard
import Dashboard from '../Pages/Dashboard/Dashboard';

// User
import AdminCreate from "../Pages/Admin/AdminCreate/AdminCreate";
import AdminEdit from "../Pages/Admin/AdminEdit/AdminEdit";
import AdminList from "../Pages/Admin/AdminList/AdminList";
import AdminShow from "../Pages/Admin/AdminShow/AdminShow";

import StudentCreate from "../Pages/Student/StudentCreate/StudentCreate";
import StudentEdit from "../Pages/Student/StudentEdit/StudentEdit";
import StudentList from "../Pages/Student/StudentList/StudentList";
import StudentShow from "../Pages/Student/StudentShow/StudentShow";

import ParentCreate from "../Pages/Parent/ParentCreate/ParentCreate";
import ParentEdit from "../Pages/Parent/ParentEdit/ParentEdit";
import ParentList from "../Pages/Parent/ParentList/ParentList";
import ParentShow from "../Pages/Parent/ParentShow/ParentShow";


import TeacherCreate from "../Pages/Teacher/TeacherCreate/TeacherCreate";
import TeacherEdit from "../Pages/Teacher/TeacherEdit/TeacherEdit";
import TeacherList from "../Pages/Teacher/TeacherList/TeacherList";
import TeacherShow from "../Pages/Teacher/TeacherShow/TeacherShow";

import AccountantCreate from "../Pages/Accountant/AccountantCreate/AccountantCreate";
import AccountantEdit from "../Pages/Accountant/AccountantEdit/AccountantEdit"; 
import AccountantList from "../Pages/Accountant/AccountantList/AccountantList";
import AccountantShow from "../Pages/Accountant/AccountantShow/AccountantShow";

import LibrarianCreate from "../Pages/Librarian/LibrarianCreate/LibrarianCreate";
import LibrarianEdit from "../Pages/Librarian/LibrarianEdit/LibrarianEdit";
import LibrarianList from "../Pages/Librarian/LibrarianList/LibrarianList";
import LibrarianShow from "../Pages/Librarian/LibrarianShow/LibrarianShow";

// Examination 
import ExamCategoryCreate from "../Pages/Examination/ExamCategory/ExamCategoryCreate/ExamCategoryCreate";
import ExamCategoryEdit from "../Pages/Examination/ExamCategory/ExamCategoryEdit/ExamCategoryEdit";
import ExamCategoryList from "../Pages/Examination/ExamCategory/ExamCategoryList/ExamCategoryList";

import GradeCreate from "../Pages/Examination/Grade/GradeCreate/GradeCreate";
import GradeEdit from "../Pages/Examination/Grade/GradeEdit/GradeEdit";
import GradeList from "../Pages/Examination/Grade/GradeList/GradeList";

import MarkCreate from "../Pages/Examination/Mark/MarkCreate/MarkCreate";
import MarkEdit from "../Pages/Examination/Mark/MarkEdit/MarkEdit";
import MarkList from "../Pages/Examination/Mark/MarkList/MarkList";

import OfflineExamCreate from "../Pages/Examination/OfflineExam/OfflineExamCreate/OfflineExamCreate";
import OfflineExamEdit from "../Pages/Examination/OfflineExam/OfflineExamEdit/OfflineExamEdit";
import OfflineExamList from "../Pages/Examination/OfflineExam/OfflineExamList/OfflineExamList";

//Academic
import ClassRoomCreate from "../Pages/Academic/ClassRoom/ClassRoomCreate/ClassRoomCreate";
import ClassRoomEdit from "../Pages/Academic/ClassRoom/ClassRoomEdit/ClassRoomEdit";
import ClassRoomList from "../Pages/Academic/ClassRoom/ClassRoomList/ClassRoomList";

import SubjectCreate from "../Pages/Academic/Subject/SubjectCreate/SubjectCreate";
import SubjectEdit from "../Pages/Academic/Subject/SubjectEdit/SubjectEdit";
import SubjectList from "../Pages/Academic/Subject/SubjectList/SubjectList";

import SyllabusCreate from "../Pages/Academic/Syllabus/SyllabusCreate/SyllabusCreate";
import SyllabusEdit from "../Pages/Academic/Syllabus/SyllabusEdit/SyllabusEdit";
import SyllabusList from "../Pages/Academic/Syllabus/SyllabusList/SyllabusList";



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
    {
      children: [
        {
          element: <ClassRoomList />,
          path: '',
        },
        {
          element: <ClassRoomCreate />,
          path: 'create',
        },
        {
          children: [
            {
              element: <ClassRoomEdit />,
              path: 'edit',
            },
          ],
          path: ':classRoomId',
        },
      ],
      path: 'classRooms',
      
    },
    {
      children: [
        {
          element: <SubjectList />,
          path: '',
        },
        {
          element: <SubjectCreate />,
          path: 'create',
        },
        {
          children: [
            {
              element: <SubjectEdit />,
              path: 'edit',
            },
          ],
          path: ':subjectId',
        },
      ],
      path: 'subjects',
      
    },
    {
      children: [
        {
          element: <SyllabusList />,
          path: '',
        },
        {
          element: <SyllabusCreate />,
          path: 'create',
        },
        {
          children: [
            {
              element: <SyllabusEdit />,
              path: 'edit',
            },
          ],
          path: ':syllabusId',
        },
      ],
      path: 'syllabuses',
      
    },
  ]
}

export default AuthRoutes;
