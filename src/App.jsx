import { useEffect, useState } from 'react';

import {
  // Navigate,
  Route,
  Routes,
  Link,
  Outlet,
  useRoutes,
} from 'react-router-dom';

import './App.css';
// import Admin from "./Components/Admin";
import AdminLayout from './Components/routes/AdminLayout.jsx';
 import AdminProtectedRoutes from './Components/AdminProtectedRoute';
// import AdminRoutes from "./Components/routes";
// import Dashboard from './Components/Pages/Dashboard/Dashboard';
// import Register from "./Components/Register";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Components/Footer';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import TopBar from './Components/TopBar';

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
//import PublicDashboard from './Components/PublicDashboard/Dashboard/PublicDashboard';

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('role_id')) || false
  );

  const setAuth = (value) => {
    setAuthenticated(value);
  };

  useEffect(() => {
    localStorage.setItem('role_id', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  //const userRole = localStorage.getItem('role_id');

  // admin routes
  // student routes
  // guest routes
  // login
  // register

  return useRoutes([
    // { path: '/same', element: <h3>Different 1</h3> },
    // { path: '/same', element: <h3>Different 2</h3> },

    // {
    //   children: [
    //     {
    //       path: '/admin',
    //       element: <h3>Dashboard</h3>,
    //     },
    //     {
    //       path: '/admin/report',
    //       element: <h3>Report</h3>
    //     },
    //   ],
    //   element: (
    //     <div>
    //       <h2>Admin Routes</h2>
    //       <p><Link to="/admin">Dashboard</Link></p>
    //       <p><Link to="/admin/report">Report</Link></p>
    //       <p><Link to="/">Home</Link></p>
    //       <Outlet />
    //     </div>
    //   ),
    //   path: '/admin',
    // },
    // {
    //   children: [
    //     {
    //       path: '/student',
    //       element: <h3>Dashboard</h3>,
    //     },
    //     {
    //       path: '/student/report',
    //       element: <h3>Report</h3>
    //     },
    //   ],
    //   element: (
    //     <div>
    //       <h2>Student Routes</h2>
    //       <p><Link to="/student">Dashboard</Link></p>
    //       <p><Link to="/student/report">Report</Link></p>
    //       <p><Link to="/">Home</Link></p>
    //       <Outlet />
    //     </div>
    //   ),
    //   path: '/student',
    // },
    // {
    //   children: [
    //     {
    //       path: '/',
    //       element: <h3>Login</h3>,
    //     },
    //     {
    //       path: '/register',
    //       element: <h3>register</h3>
    //     },
    //   ],
    //   element: (
    //     <div>
    //       <h2>Guest Routes</h2>
    //       <p><Link to="/">Login</Link></p>
    //       <p><Link to="/register">Register</Link></p>
    //       <p><Link to="/admin">Admin</Link></p>
    //       <p><Link to="/student">Student</Link></p>
    //       <Outlet />
    //     </div>
    //   ),
    //   path: '/',
    // },

    {
      children: [
        {
          element: <Dashboard />,
          path: '/admin',
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
          path: '/admin/admins',
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
          path: '/admin/students',
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
          path: '/admin/parents',
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
          path: '/admin/teachers',
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
          path: '/admin/accountants',
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
          path: '/admin/librarians',
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
          path: '/admin/examCategories',
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
          path: '/admin/grades',
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
          path: '/admin/marks',
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
          path: '/admin/offlineExams',
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
          path: '/admin/classRooms',
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
          path: '/admin/subjects',
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
          path: '/admin/syllabuses',
        },
        {
          children: [
            {
              element: <ClassRoutineList />,
              path: '',
            },
            {
              element: <ClassRoutineCreate />,
              path: 'create',
            },
            {
              children: [
                {
                  element: <ClassRoutineEdit />,
                  path: 'edit',
                },
              ],
              path: ':classRoutineId',
            },
          ],
          path: '/admin/classRoutines',
        },
        {
          children: [
            {
              element: <StudentFeeList />,
              path: '',
            },
            {
              element: <StudentFeeCreate />,
              path: 'create',
            },
            {
              children: [
                {
                  element: <StudentFeeEdit />,
                  path: 'edit',
                },
              ],
              path: ':studentFeeId',
            },
          ],
          path: '/admin/studentFees',
        },
        {
          children: [
            {
              element: <ExpanseCategoryList />,
              path: '',
            },
            {
              element: <ExpanseCategoryCreate />,
              path: 'create',
            },
            {
              children: [
                {
                  element: <ExpanseCategoryEdit />,
                  path: 'edit',
                },
              ],
              path: ':expanseCategoryId',
            },
          ],
          path: '/admin/expanseCategories',
        },
        {
          children: [
            {
              element: <SchoolList />,
              path: '',
            },
            {
              element: <SchoolCreate />,
              path: 'create',
            },
            {
              children: [
                {
                  element: <SchoolShow />,
                  path: '',
                },
                {
                  element: <SchoolEdit />,
                  path: 'edit',
                },
              ],
              path: ':schoolId',
            },
          ],
          path: '/admin/schools',
        },
      ],

      element: (
        <>
          {/* <TopBar />
            <Sidebar> */}
              <Routes>
              {/* <Route element={<AdminLayout />}> */}

                {/* <Route element={<AdminProtectedRoute />}>
                <Route element={<AdminLayout />}> */}

                <Route path='/admin' element={<Dashboard />}/>

                <Route path='/admin/admins' element={<AdminList/>}/>
                <Route path='/admin/admins/create' element={<AdminCreate/>}/>
                <Route path='/admin/admins/:adminId' element={<AdminShow/>}/>
                <Route path='/admin/admins/:adminId/edit' element={<AdminEdit/>}/>

                <Route path='/admin/students' element={<StudentList/>}></Route>
                <Route path='/admin/students/create' element={<StudentCreate/>}></Route>
                <Route path='/admin/students/:adminId' element={<StudentShow/>}></Route>
                <Route path='/admin/students/:adminId/edit' element={<StudentEdit/>}></Route>

                <Route path='/admin/teachers' element={<TeacherList/>}></Route>
                <Route path='/admin/teachers/create' element={<TeacherCreate/>}></Route>
                <Route path='/admin/teachers/:adminId' element={<TeacherShow/>}></Route>
                <Route path='/admin/teachers/:adminId/edit' element={<TeacherEdit/>}></Route>

                <Route path='/admin/parents' element={<ParentList/>}></Route>
                <Route path='/admin/parents/create' element={<ParentCreate/>}></Route>
                <Route path='/admin/parents/:adminId' element={<ParentShow/>}></Route>
                <Route path='/admin/parents/:adminId/edit' element={<ParentEdit/>}></Route>

                <Route path='/admin/accountants' element={<AccountantList/>}></Route>
                <Route path='/admin/accountants/create' element={<AccountantCreate/>}></Route>
                <Route path='/admin/accountants/:adminId' element={<AccountantShow/>}></Route>
                <Route path='/admin/accountants/:adminId/edit' element={<AccountantEdit/>}></Route>

                <Route path='/admin/librarians' element={<LibrarianList/>}></Route>
                <Route path='/admin/librarians/create' element={<LibrarianCreate/>}></Route>
                <Route path='/admin/librarians/:adminId' element={<LibrarianShow/>}></Route>
                <Route path='/admin/librarians/:adminId/edit' element={<LibrarianEdit/>}></Route>

                <Route path='/admin/examCategories' element={<ExamCategoryList/>}></Route>
                <Route path='/admin/examCategories/create' element={<ExamCategoryCreate/>}></Route>
                <Route path='/admin/examCategories/:examCategoryId/edit' element={<ExamCategoryEdit/>}></Route>

                <Route path='/admin/grades' element={<GradeList/>}></Route>
                <Route path='/admin/grades/create' element={<GradeCreate/>}></Route>
                <Route path='/admin/grades/:gradeId/edit' element={<GradeEdit/>}></Route>

                <Route path='/admin/marks' element={<MarkList/>}></Route>
                <Route path='/admin/marks/create' element={<MarkCreate/>}></Route>
                <Route path='/admin/marks/:markId/edit' element={<MarkEdit/>}></Route>

                <Route path='/admin/offlineExams' element={<OfflineExamList/>}></Route>
                <Route path='/admin/offlineExams/create' element={<OfflineExamCreate/>}></Route>
                <Route path='/admin/offlineExams/:offlineExamId/edit' element={<OfflineExamEdit/>}></Route>

                <Route path='/admin/classRooms' element={<ClassRoomList/>}></Route>
                <Route path='/admin/classRooms/create' element={<ClassRoomCreate/>}></Route>
                <Route path='/admin/classRooms/:classRoomId/edit' element={<ClassRoomEdit/>}></Route>
                
                <Route path='/admin/subjects' element={<SubjectList/>}></Route>
                <Route path='/admin/subjects/create' element={<SubjectCreate/>}></Route>
                <Route path='/admin/subjects/:subjectId/edit' element={<SubjectEdit/>}></Route>
                
                <Route path='/admin/syllabuses' element={<SyllabusList/>}></Route>
                <Route path='/admin/syllabuses/create' element={<SyllabusCreate/>}></Route>
                <Route path='/admin/syllabuses/:syllabusId/edit' element={<SyllabusEdit/>}></Route>

                <Route path='/admin/classRoutines' element={<ClassRoutineList/>}></Route>
                <Route path='/admin/classRoutines/create' element={<ClassRoutineCreate/>}></Route>
                <Route path='/admin/classRoutines/:classRoutineId/edit' element={<ClassRoutineEdit/>}></Route>

                <Route path='/admin/studentFees' element={<StudentFeeList/>}></Route>
                <Route path='/admin/studentFees/create' element={<StudentFeeCreate/>}></Route>
                <Route path='/admin/studentFees/:studentFeeId/edit' element={<StudentFeeEdit/>}></Route>

                <Route path='/admin/expanseCategories' element={<ExpanseCategoryList/>}></Route>
                <Route path='/admin/expanseCategories/create' element={<ExpanseCategoryCreate/>}></Route>
                <Route path='/admin/expanseCategories/:expanseCategoryId/edit' element={<ExpanseCategoryEdit/>}></Route>

                <Route path='/admin/schools' element={<SchoolList/>}></Route>
                <Route path='/admin/schools/create' element={<SchoolCreate/>}></Route>
                <Route path='/admin/schools/:schoolId' element={<SchoolShow/>}></Route>
                <Route path='/admin/schools/:schoolId/edit' element={<SchoolEdit/>}></Route>

                {/* </Route>
                </Route> */}
                {/* </Route> */}
              </Routes>
              {/* <Outlet/>
            </Sidebar>
          <Footer /> */}
        </>
      ),

      // path: '/admin',
    },

    {
      children: [
        {
          path: '/',
          element: <Login />,
        },
      ],
      path: '/',
    },
  ]);

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
};

export default App;
