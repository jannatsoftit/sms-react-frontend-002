//import { useEffect, useState } from 'react';

import {
  //Navigate,
  Route,
  Routes,
  //Link,
  //Outlet,
  //useRoutes,
} from 'react-router-dom';

// import Admin from "./Components/Admin";
// import AdminRoutes from "./Components/routes";
// import Dashboard from './Components/Pages/Dashboard/Dashboard';
// import Register from "./Components/Register";
import Login from './Components/Login';

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

//------------------  Admin Dashboard Route  ----------------//

// Dashboard
import Dashboard from './Components/Pages/Dashboard/Dashboard';

// User
import AdminCreate from './Components/Pages/Admin/AdminCreate/AdminCreate';
import AdminEdit from './Components/Pages/Admin/AdminEdit/AdminEdit';
import AdminList from './Components/Pages/Admin/AdminList/AdminList';
import AdminShow from './Components/Pages/Admin/AdminShow/AdminShow';

import StudentCreate from './Components/Pages/Student/StudentCreate/StudentCreate';
import StudentEdit from './Components/Pages/Student/StudentEdit/StudentEdit';
import StudentList from './Components/Pages/Student/StudentList/StudentList';
import StudentShow from './Components/Pages/Student/StudentShow/StudentShow';

import ParentCreate from './Components/Pages/Parent/ParentCreate/ParentCreate';
import ParentEdit from './Components/Pages/Parent/ParentEdit/ParentEdit';
import ParentList from './Components/Pages/Parent/ParentList/ParentList';
import ParentShow from './Components/Pages/Parent/ParentShow/ParentShow';

import TeacherCreate from './Components/Pages/Teacher/TeacherCreate/TeacherCreate';
import TeacherEdit from './Components/Pages/Teacher/TeacherEdit/TeacherEdit';
import TeacherList from './Components/Pages/Teacher/TeacherList/TeacherList';
import TeacherShow from './Components/Pages/Teacher/TeacherShow/TeacherShow';

import AccountantCreate from './Components/Pages/Accountant/AccountantCreate/AccountantCreate';
import AccountantEdit from './Components/Pages/Accountant/AccountantEdit/AccountantEdit';
import AccountantList from './Components/Pages/Accountant/AccountantList/AccountantList';
import AccountantShow from './Components/Pages/Accountant/AccountantShow/AccountantShow';

import LibrarianCreate from './Components/Pages/Librarian/LibrarianCreate/LibrarianCreate';
import LibrarianEdit from './Components/Pages/Librarian/LibrarianEdit/LibrarianEdit';
import LibrarianList from './Components/Pages/Librarian/LibrarianList/LibrarianList';
import LibrarianShow from './Components/Pages/Librarian/LibrarianShow/LibrarianShow';

// Examination
import ExamCategoryCreate from './Components/Pages/Examination/ExamCategory/ExamCategoryCreate/ExamCategoryCreate';
import ExamCategoryEdit from './Components/Pages/Examination/ExamCategory/ExamCategoryEdit/ExamCategoryEdit';
import ExamCategoryList from './Components/Pages/Examination/ExamCategory/ExamCategoryList/ExamCategoryList';

import GradeCreate from './Components/Pages/Examination/Grade/GradeCreate/GradeCreate';
import GradeEdit from './Components/Pages/Examination/Grade/GradeEdit/GradeEdit';
import GradeList from './Components/Pages/Examination/Grade/GradeList/GradeList';

import MarkCreate from './Components/Pages/Examination/Mark/MarkCreate/MarkCreate';
import MarkEdit from './Components/Pages/Examination/Mark/MarkEdit/MarkEdit';
import MarkList from './Components/Pages/Examination/Mark/MarkList/MarkList';

import OfflineExamCreate from './Components/Pages/Examination/OfflineExam/OfflineExamCreate/OfflineExamCreate';
import OfflineExamEdit from './Components/Pages/Examination/OfflineExam/OfflineExamEdit/OfflineExamEdit';
import OfflineExamList from './Components/Pages/Examination/OfflineExam/OfflineExamList/OfflineExamList';

//Academic
import ClassRoomCreate from './Components/Pages/Academic/ClassRoom/ClassRoomCreate/ClassRoomCreate';
import ClassRoomEdit from './Components/Pages/Academic/ClassRoom/ClassRoomEdit/ClassRoomEdit';
import ClassRoomList from './Components/Pages/Academic/ClassRoom/ClassRoomList/ClassRoomList';

import SubjectCreate from './Components/Pages/Academic/Subject/SubjectCreate/SubjectCreate';
import SubjectEdit from './Components/Pages/Academic/Subject/SubjectEdit/SubjectEdit';
import SubjectList from './Components/Pages/Academic/Subject/SubjectList/SubjectList';

import SyllabusCreate from './Components/Pages/Academic/Syllabus/SyllabusCreate/SyllabusCreate';
import SyllabusEdit from './Components/Pages/Academic/Syllabus/SyllabusEdit/SyllabusEdit';
import SyllabusList from './Components/Pages/Academic/Syllabus/SyllabusList/SyllabusList';

import ClassRoutineCreate from './Components/Pages/Academic/ClassRoutine/ClassRoutineCreate/ClassRoutineCreate';
import ClassRoutineEdit from './Components/Pages/Academic/ClassRoutine/ClassRoutineEdit/ClassRoutineEdit';
import ClassRoutineList from './Components/Pages/Academic/ClassRoutine/ClassRoutineList/ClassRoutineList';

// Accountant
import StudentFeeCreate from './Components/Pages/StudentFee/StudentFeeCreate/StudentFeeCreate';
import StudentFeeEdit from './Components/Pages/StudentFee/StudentFeeEdit/StudentFeeEdit';
import StudentFeeList from './Components/Pages/StudentFee/StudentFeeList/StudentFeeList';

import ExpanseCategoryCreate from './Components/Pages/ExpanseCategory/ExpanseCategoryCreate/ExpanseCategoryCreate';
import ExpanseCategoryEdit from './Components/Pages/ExpanseCategory/ExpanseCategoryEdit/ExpanseCategoryEdit';
import ExpanseCategoryList from './Components/Pages/ExpanseCategory/ExpanseCategoryList/ExpanseCategoryList';

// Settings
import SchoolList from './Components/Pages/School/SchoolList/SchoolList';
import SchoolCreate from './Components/Pages/School/SchoolCreate/SchoolCreate';
import SchoolEdit from './Components/Pages/School/SchoolEdit/SchoolEdit';
import SchoolShow from './Components/Pages/School/SchoolShow/SchoolShow';

import AdminProtectedRoute from './Components/AdminProtectedRoute';
import NotFound from './Components/NotFound';
//import PublicDashboard from './Components/PublicDashboard/Dashboard/PublicDashboard';

const App = () => {
  // const [isAuthenticated, setAuthenticated] = useState(
  //   () => JSON.parse(localStorage.getItem('role_id')) || false
  // );

  // const setAuth = (value) => {
  //   setAuthenticated(value);
  // };

  // useEffect(() => {
  //   localStorage.setItem('role_id', JSON.stringify(isAuthenticated));
  // }, [isAuthenticated]);

  //const userRole = localStorage.getItem('role_id');

  // admin routes
  // student routes
  // guest routes
  // login
  // register

  // return useRoutes([
  //   // { path: '/same', element: <h3>Different 1</h3> },
  //   // { path: '/same', element: <h3>Different 2</h3> },

  //   // {
  //   //   children: [
  //   //     {
  //   //       path: '/admin',
  //   //       element: <h3>Dashboard</h3>,
  //   //     },
  //   //     {
  //   //       path: '/admin/report',
  //   //       element: <h3>Report</h3>
  //   //     },
  //   //   ],
  //   //   element: (
  //   //     <div>
  //   //       <h2>Admin Routes</h2>
  //   //       <p><Link to="/admin">Dashboard</Link></p>
  //   //       <p><Link to="/admin/report">Report</Link></p>
  //   //       <p><Link to="/">Home</Link></p>
  //   //       <Outlet />
  //   //     </div>
  //   //   ),
  //   //   path: '/admin',
  //   // },
  //   // {
  //   //   children: [
  //   //     {
  //   //       path: '/student',
  //   //       element: <h3>Dashboard</h3>,
  //   //     },
  //   //     {
  //   //       path: '/student/report',
  //   //       element: <h3>Report</h3>
  //   //     },
  //   //   ],
  //   //   element: (
  //   //     <div>
  //   //       <h2>Student Routes</h2>
  //   //       <p><Link to="/student">Dashboard</Link></p>
  //   //       <p><Link to="/student/report">Report</Link></p>
  //   //       <p><Link to="/">Home</Link></p>
  //   //       <Outlet />
  //   //     </div>
  //   //   ),
  //   //   path: '/student',
  //   // },
  //   // {
  //   //   children: [
  //   //     {
  //   //       path: '/',
  //   //       element: <h3>Login</h3>,
  //   //     },
  //   //     {
  //   //       path: '/register',
  //   //       element: <h3>register</h3>
  //   //     },
  //   //   ],
  //   //   element: (
  //   //     <div>
  //   //       <h2>Guest Routes</h2>
  //   //       <p><Link to="/">Login</Link></p>
  //   //       <p><Link to="/register">Register</Link></p>
  //   //       <p><Link to="/admin">Admin</Link></p>
  //   //       <p><Link to="/student">Student</Link></p>
  //   //       <Outlet />
  //   //     </div>
  //   //   ),
  //   //   path: '/',
  //   // },

  //   {
  //     children: [
  //       {
  //         element: <Dashboard />,
  //         path: '/admin/dashboard',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <AdminList />,
  //             path: '',
  //           },
  //           {
  //             element: <AdminCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <AdminShow />,
  //                 path: '',
  //               },
  //               {
  //                 element: <AdminEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':adminId',
  //           },
  //         ],
  //         path: '/admin/admins',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <StudentList />,
  //             path: '',
  //           },
  //           {
  //             element: <StudentCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <StudentShow />,
  //                 path: '',
  //               },
  //               {
  //                 element: <StudentEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':studentId',
  //           },
  //         ],
  //         path: '/admin/students',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <ParentList />,
  //             path: '',
  //           },
  //           {
  //             element: <ParentCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <ParentShow />,
  //                 path: '',
  //               },
  //               {
  //                 element: <ParentEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':parentId',
  //           },
  //         ],
  //         path: '/admin/parents',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <TeacherList />,
  //             path: '',
  //           },
  //           {
  //             element: <TeacherCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <TeacherShow />,
  //                 path: '',
  //               },
  //               {
  //                 element: <TeacherEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':teacherId',
  //           },
  //         ],
  //         path: '/admin/teachers',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <AccountantList />,
  //             path: '',
  //           },
  //           {
  //             element: <AccountantCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <AccountantShow />,
  //                 path: '',
  //               },
  //               {
  //                 element: <AccountantEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':accountantId',
  //           },
  //         ],
  //         path: '/admin/accountants',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <LibrarianList />,
  //             path: '',
  //           },
  //           {
  //             element: <LibrarianCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <LibrarianShow />,
  //                 path: '',
  //               },
  //               {
  //                 element: <LibrarianEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':librarianId',
  //           },
  //         ],
  //         path: '/admin/librarians',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <ExamCategoryList />,
  //             path: '',
  //           },
  //           {
  //             element: <ExamCategoryCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <ExamCategoryEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':examCategoryId',
  //           },
  //         ],
  //         path: '/admin/examCategories',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <GradeList />,
  //             path: '',
  //           },
  //           {
  //             element: <GradeCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <GradeEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':gradeId',
  //           },
  //         ],
  //         path: '/admin/grades',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <MarkList />,
  //             path: '',
  //           },
  //           {
  //             element: <MarkCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <MarkEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':markId',
  //           },
  //         ],
  //         path: '/admin/marks',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <OfflineExamList />,
  //             path: '',
  //           },
  //           {
  //             element: <OfflineExamCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <OfflineExamEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':offlineExamId',
  //           },
  //         ],
  //         path: '/admin/offlineExams',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <ClassRoomList />,
  //             path: '',
  //           },
  //           {
  //             element: <ClassRoomCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <ClassRoomEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':classRoomId',
  //           },
  //         ],
  //         path: '/admin/classRooms',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <SubjectList />,
  //             path: '',
  //           },
  //           {
  //             element: <SubjectCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <SubjectEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':subjectId',
  //           },
  //         ],
  //         path: '/admin/subjects',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <SyllabusList />,
  //             path: '',
  //           },
  //           {
  //             element: <SyllabusCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <SyllabusEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':syllabusId',
  //           },
  //         ],
  //         path: '/admin/syllabuses',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <ClassRoutineList />,
  //             path: '',
  //           },
  //           {
  //             element: <ClassRoutineCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <ClassRoutineEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':classRoutineId',
  //           },
  //         ],
  //         path: '/admin/classRoutines',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <StudentFeeList />,
  //             path: '',
  //           },
  //           {
  //             element: <StudentFeeCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <StudentFeeEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':studentFeeId',
  //           },
  //         ],
  //         path: '/admin/studentFees',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <ExpanseCategoryList />,
  //             path: '',
  //           },
  //           {
  //             element: <ExpanseCategoryCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <ExpanseCategoryEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':expanseCategoryId',
  //           },
  //         ],
  //         path: '/admin/expanseCategories',
  //       },
  //       {
  //         children: [
  //           {
  //             element: <SchoolList />,
  //             path: '',
  //           },
  //           {
  //             element: <SchoolCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <SchoolShow />,
  //                 path: '',
  //               },
  //               {
  //                 element: <SchoolEdit />,
  //                 path: 'edit',
  //               },
  //             ],
  //             path: ':schoolId',
  //           },
  //         ],
  //         path: '/admin/schools',
  //       },
  //     ],

  //     element: (
  //       <>
  //         <Routes>
  //           {/* <Route path='/admin' element={<AdminProtectedRoute />}> */}

  //           <Route path='dashboard' element={<Dashboard />} />

  //           <Route path='admins' element={<AdminList />} />
  //           <Route path='admins/create' element={<AdminCreate />} />
  //           <Route path='admins/:adminId' element={<AdminShow />} />
  //           <Route path='admins/:adminId/edit' element={<AdminEdit />} />

  //           <Route path='students' element={<StudentList />} />
  //           <Route path='students/create' element={<StudentCreate />} />
  //           <Route path='students/:studentId' element={<StudentShow />} />
  //           <Route path='students/:studentId/edit' element={<StudentEdit />} />

  //           <Route path='teachers' element={<TeacherList />} />
  //           <Route path='teachers/create' element={<TeacherCreate />} />
  //           <Route path='teachers/:teacherId' element={<TeacherShow />} />
  //           <Route path='teachers/:teacherId/edit' element={<TeacherEdit />} />

  //           <Route path='parents' element={<ParentList />} />
  //           <Route path='parents/create' element={<ParentCreate />} />
  //           <Route path='parents/:parentId' element={<ParentShow />} />
  //           <Route path='parents/:parentId/edit' element={<ParentEdit />} />

  //           <Route path='accountants' element={<AccountantList />} />
  //           <Route path='accountants/create' element={<AccountantCreate />} />
  //           <Route
  //             path='accountants/:accountantId'
  //             element={<AccountantShow />}
  //           />
  //           <Route
  //             path='accountants/:accountantId/edit'
  //             element={<AccountantEdit />}
  //           />

  //           <Route path='librarians' element={<LibrarianList />} />
  //           <Route path='librarians/create' element={<LibrarianCreate />} />
  //           <Route path='librarians/:librarianId' element={<LibrarianShow />} />
  //           <Route
  //             path='librarians/:librarianId/edit'
  //             element={<LibrarianEdit />}
  //           />

  //           <Route path='examCategories' element={<ExamCategoryList />} />
  //           <Route
  //             path='examCategories/create'
  //             element={<ExamCategoryCreate />}
  //           />
  //           <Route
  //             path='examCategories/:examCategoryId/edit'
  //             element={<ExamCategoryEdit />}
  //           />

  //           <Route path='grades' element={<GradeList />} />
  //           <Route path='grades/create' element={<GradeCreate />} />
  //           <Route path='grades/:gradeId/edit' element={<GradeEdit />} />

  //           <Route path='marks' element={<MarkList />} />
  //           <Route path='marks/create' element={<MarkCreate />} />
  //           <Route path='marks/:markId/edit' element={<MarkEdit />} />

  //           <Route path='offlineExams' element={<OfflineExamList />} />
  //           <Route path='offlineExams/create' element={<OfflineExamCreate />} />
  //           <Route
  //             path='offlineExams/:offlineExamId/edit'
  //             element={<OfflineExamEdit />}
  //           />

  //           <Route path='classRooms' element={<ClassRoomList />} />
  //           <Route path='classRooms/create' element={<ClassRoomCreate />} />
  //           <Route
  //             path='classRooms/:classRoomId/edit'
  //             element={<ClassRoomEdit />}
  //           />

  //           <Route path='subjects' element={<SubjectList />} />
  //           <Route path='subjects/create' element={<SubjectCreate />} />
  //           <Route path='subjects/:subjectId/edit' element={<SubjectEdit />} />

  //           <Route path='syllabuses' element={<SyllabusList />} />
  //           <Route path='syllabuses/create' element={<SyllabusCreate />} />
  //           <Route
  //             path='syllabuses/:syllabusId/edit'
  //             element={<SyllabusEdit />}
  //           />

  //           <Route path='classRoutines' element={<ClassRoutineList />} />
  //           <Route
  //             path='classRoutines/create'
  //             element={<ClassRoutineCreate />}
  //           />
  //           <Route
  //             path='classRoutines/:classRoutineId/edit'
  //             element={<ClassRoutineEdit />}
  //           />

  //           <Route path='studentFees' element={<StudentFeeList />} />
  //           <Route path='studentFees/create' element={<StudentFeeCreate />} />
  //           <Route
  //             path='studentFees/:studentFeeId/edit'
  //             element={<StudentFeeEdit />}
  //           />

  //           <Route path='expanseCategories' element={<ExpanseCategoryList />} />
  //           <Route
  //             path='expanseCategories/create'
  //             element={<ExpanseCategoryCreate />}
  //           />
  //           <Route
  //             path='expanseCategories/:expanseCategoryId/edit'
  //             element={<ExpanseCategoryEdit />}
  //           />

  //           <Route path='schools' element={<SchoolList />} />
  //           <Route path='schools/create' element={<SchoolCreate />} />
  //           <Route path='schools/:schoolId' element={<SchoolShow />} />
  //           <Route path='schools/:schoolId/edit' element={<SchoolEdit />} />

  //           {/* </Route> */}
  //         </Routes>
  //         <Outlet />
  //       </>
  //     ),
  //     path: '/admin',
  //   },

  //   {
  //     children: [
  //       {
  //         path: '/login',
  //         element: <Login />,
  //       },
  //     ],
  //     path: '/login',
  //   },

  //   {
  //     path: '/',
  //     element: <Login />,
  //   },

  //   {
  //     path: '*',
  //     element: <NotFound />,
  //   },
  // ]);

  // return (
  //   <>
  //     <Topbar />
  //     <Sidebar>
  //       <AdminProtectedRoutes>
  //         <AdminRoutes />
  //       </AdminProtectedRoutes>
  //       <Footer />
  //     </Sidebar>

  //     <Login />
  //     <Register />

  //     <Routes>
  //       <Route path="/" element={<Login setAuth={setAuth} />} />

  // <Route path="*" element=
  // {
  //   isAuthenticated ?
  //   <Admin/> :
  //   <Navigate to='/' replace/>
  // }

  // />

  //     </Routes>
  //   </>
  // );

  

  return (
    <>
      <Routes>

        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Login />}/>
        <Route path='*' element={<NotFound />}/>

        <Route path='/admin' > 

          <Route path='dashboard' element={<Dashboard />} />

          <Route path='admins' element={<AdminList />} />
          <Route path='admins/create' element={<AdminCreate />} />
          <Route path='admins/:adminId' element={<AdminShow />} />
          <Route path='admins/:adminId/edit' element={<AdminEdit />} />

          <Route path='students' element={<StudentList />} />
          <Route path='students/create' element={<StudentCreate />} />
          <Route path='students/:studentId' element={<StudentShow />} />
          <Route path='students/:studentId/edit' element={<StudentEdit />} />

          <Route path='teachers' element={<TeacherList />} />
          <Route path='teachers/create' element={<TeacherCreate />} />
          <Route path='teachers/:teacherId' element={<TeacherShow />} />
          <Route path='teachers/:teacherId/edit' element={<TeacherEdit />} />

          <Route path='parents' element={<ParentList />} />
          <Route path='parents/create' element={<ParentCreate />} />
          <Route path='parents/:parentId' element={<ParentShow />} />
          <Route path='parents/:parentId/edit' element={<ParentEdit />} />

          <Route path='accountants' element={<AccountantList />} />
          <Route path='accountants/create' element={<AccountantCreate />} />
          <Route
            path='accountants/:accountantId'
            element={<AccountantShow />}
          />
          <Route
            path='accountants/:accountantId/edit'
            element={<AccountantEdit />}
          />

          <Route path='librarians' element={<LibrarianList />} />
          <Route path='librarians/create' element={<LibrarianCreate />} />
          <Route path='librarians/:librarianId' element={<LibrarianShow />} />
          <Route
            path='librarians/:librarianId/edit'
            element={<LibrarianEdit />}
          />

          <Route path='examCategories' element={<ExamCategoryList />} />
          <Route
            path='examCategories/create'
            element={<ExamCategoryCreate />}
          />
          <Route
            path='examCategories/:examCategoryId/edit'
            element={<ExamCategoryEdit />}
          />

          <Route path='grades' element={<GradeList />} />
          <Route path='grades/create' element={<GradeCreate />} />
          <Route path='grades/:gradeId/edit' element={<GradeEdit />} />

          <Route path='marks' element={<MarkList />} />
          <Route path='marks/create' element={<MarkCreate />} />
          <Route path='marks/:markId/edit' element={<MarkEdit />} />

          <Route path='offlineExams' element={<OfflineExamList />} />
          <Route path='offlineExams/create' element={<OfflineExamCreate />} />
          <Route
            path='offlineExams/:offlineExamId/edit'
            element={<OfflineExamEdit />}
          />

          <Route path='classRooms' element={<ClassRoomList />} />
          <Route path='classRooms/create' element={<ClassRoomCreate />} />
          <Route
            path='classRooms/:classRoomId/edit'
            element={<ClassRoomEdit />}
          />

          <Route path='subjects' element={<SubjectList />} />
          <Route path='subjects/create' element={<SubjectCreate />} />
          <Route path='subjects/:subjectId/edit' element={<SubjectEdit />} />

          <Route path='syllabuses' element={<SyllabusList />} />
          <Route path='syllabuses/create' element={<SyllabusCreate />} />
          <Route
            path='syllabuses/:syllabusId/edit'
            element={<SyllabusEdit />}
          />

          <Route path='classRoutines' element={<ClassRoutineList />} />
          <Route path='classRoutines/create' element={<ClassRoutineCreate />} />
          <Route
            path='classRoutines/:classRoutineId/edit'
            element={<ClassRoutineEdit />}
          />

          <Route path='studentFees' element={<StudentFeeList />} />
          <Route path='studentFees/create' element={<StudentFeeCreate />} />
          <Route
            path='studentFees/:studentFeeId/edit'
            element={<StudentFeeEdit />}
          />

          <Route path='expanseCategories' element={<ExpanseCategoryList />} />
          <Route
            path='expanseCategories/create'
            element={<ExpanseCategoryCreate />}
          />
          <Route
            path='expanseCategories/:expanseCategoryId/edit'
            element={<ExpanseCategoryEdit />}
          />

          <Route path='schools' element={<SchoolList />} />
          <Route path='schools/create' element={<SchoolCreate />} />
          <Route path='schools/:schoolId' element={<SchoolShow />} />
          <Route path='schools/:schoolId/edit' element={<SchoolEdit />} />

        </Route>


      </Routes>
    </>
  );
};

export default App;
