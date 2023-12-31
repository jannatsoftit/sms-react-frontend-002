//import { useEffect, useState } from 'react';

import {
  //Navigate,
  Route,
  Routes,
  //Link,
  //Outlet,
  //useRoutes,
} from 'react-router-dom';

import Register from './Components/Register';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import AdminProfile from './Components/Profile/AdminProfile';
import StudentProfile from './Components/Profile/StudentProfile';
import TeacherProfile from './Components/Profile/TeacherProfile';

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

//------------------  Admin Route  ----------------//

// Admin Protected Routes
import AdminProtectedRoute from './Components/ProtectedRoute/AdminProtectedRoute';

// Dashboard
import Dashboard from './Components/Pages/AdminPages/Dashboard/Dashboard';

// User
import AdminCreate from './Components/Pages/AdminPages/Admin/AdminCreate/AdminCreate';
import AdminEdit from './Components/Pages/AdminPages/Admin/AdminEdit/AdminEdit';
import AdminList from './Components/Pages/AdminPages/Admin/AdminList/AdminList';
import AdminShow from './Components/Pages/AdminPages/Admin/AdminShow/AdminShow';

import StudentCreate from './Components/Pages/AdminPages/Student/StudentCreate/StudentCreate';
import StudentEdit from './Components/Pages/AdminPages/Student/StudentEdit/StudentEdit';
import StudentList from './Components/Pages/AdminPages/Student/StudentList/StudentList';
import StudentShow from './Components/Pages/AdminPages/Student/StudentShow/StudentShow';

import ParentCreate from './Components/Pages/AdminPages/Parent/ParentCreate/ParentCreate';
import ParentEdit from './Components/Pages/AdminPages/Parent/ParentEdit/ParentEdit';
import ParentList from './Components/Pages/AdminPages/Parent/ParentList/ParentList';
import ParentShow from './Components/Pages/AdminPages/Parent/ParentShow/ParentShow';

import TeacherCreate from './Components/Pages/AdminPages/Teacher/TeacherCreate/TeacherCreate';
import TeacherEdit from './Components/Pages/AdminPages/Teacher/TeacherEdit/TeacherEdit';
import TeacherList from './Components/Pages/AdminPages/Teacher/TeacherList/TeacherList';
import TeacherShow from './Components/Pages/AdminPages/Teacher/TeacherShow/TeacherShow';

import AccountantCreate from './Components/Pages/AdminPages/Accountant/AccountantCreate/AccountantCreate';
import AccountantEdit from './Components/Pages/AdminPages/Accountant/AccountantEdit/AccountantEdit';
import AccountantList from './Components/Pages/AdminPages/Accountant/AccountantList/AccountantList';
import AccountantShow from './Components/Pages/AdminPages/Accountant/AccountantShow/AccountantShow';

import LibrarianCreate from './Components/Pages/AdminPages/Librarian/LibrarianCreate/LibrarianCreate';
import LibrarianEdit from './Components/Pages/AdminPages/Librarian/LibrarianEdit/LibrarianEdit';
import LibrarianList from './Components/Pages/AdminPages/Librarian/LibrarianList/LibrarianList';
import LibrarianShow from './Components/Pages/AdminPages/Librarian/LibrarianShow/LibrarianShow';

// Examination
import AdmissionCircularCreate from './Components/Pages/AdminPages/Examination/AdmissionCircular/AdmissionCircularCreate/AdmissionCircularCreate';
import AdmissionCircularEdit from './Components/Pages/AdminPages/Examination/AdmissionCircular/AdmissionCircularEdit/AdmissionCircularEdit';
import AdmissionCircularList from './Components/Pages/AdminPages/Examination/AdmissionCircular/AdmissionCircularList/AdmissionCircularList';

import AdmissionCircularShow_ST from './Components/Pages/AdminPages/Examination/AdmissionCircular/AdmissionCircularShow/AdmissionCircularShow_ST';
import AdmissionCircularShow_OF from './Components/Pages/AdminPages/Examination/AdmissionCircular/AdmissionCircularShow/AdmissionCircularShow_OF';

import GradeCreate from './Components/Pages/AdminPages/Examination/Grade/GradeCreate/GradeCreate';
import GradeEdit from './Components/Pages/AdminPages/Examination/Grade/GradeEdit/GradeEdit';
import GradeList from './Components/Pages/AdminPages/Examination/Grade/GradeList/GradeList';

import MarkCreate from './Components/Pages/AdminPages/Examination/Mark/MarkCreate/MarkCreate';
import MarkEdit from './Components/Pages/AdminPages/Examination/Mark/MarkEdit/MarkEdit';
import MarkList from './Components/Pages/AdminPages/Examination/Mark/MarkList/MarkList';

import OfflineExamCreate from './Components/Pages/AdminPages/Examination/OfflineExam/OfflineExamCreate/OfflineExamCreate';
import OfflineExamEdit from './Components/Pages/AdminPages/Examination/OfflineExam/OfflineExamEdit/OfflineExamEdit';
import OfflineExamList from './Components/Pages/AdminPages/Examination/OfflineExam/OfflineExamList/OfflineExamList';

//Academic
import BookListCreate from './Components/Pages/AdminPages/Academic/BookList/BookListCreate/BookListCreate';
import BookListEdit from './Components/Pages/AdminPages/Academic/BookList/BookListEdit/BookListEdit';
import BookListList from './Components/Pages/AdminPages/Academic/BookList/BookListList/BookListList';

import SchoolMagazineCreate from './Components/Pages/AdminPages/Academic/SchoolMagazine/SchoolMagazineCreate/SchoolMagazineCreate';
import SchoolMagazineEdit from './Components/Pages/AdminPages/Academic/SchoolMagazine/SchoolMagazineEdit/SchoolMagazineEdit';
import SchoolMagazineList from './Components/Pages/AdminPages/Academic/SchoolMagazine/SchoolMagazineList/SchoolMagazineList';

import AcademicCalenderShow from './Components/Pages/AdminPages/Academic/AcademicCalender/AcademicCalenderShow/AcademicCalenderShow';

import SyllabusCreate from './Components/Pages/AdminPages/Academic/Syllabus/SyllabusCreate/SyllabusCreate';
import SyllabusEdit from './Components/Pages/AdminPages/Academic/Syllabus/SyllabusEdit/SyllabusEdit';
import SyllabusList from './Components/Pages/AdminPages/Academic/Syllabus/SyllabusList/SyllabusList';

import ClassRoutineCreate from './Components/Pages/AdminPages/Academic/ClassRoutine/ClassRoutineCreate/ClassRoutineCreate';
import ClassRoutineEdit from './Components/Pages/AdminPages/Academic/ClassRoutine/ClassRoutineEdit/ClassRoutineEdit';
import ClassRoutineList from './Components/Pages/AdminPages/Academic/ClassRoutine/ClassRoutineList/ClassRoutineList';

// Accountant
import StudentFeeCreate from './Components/Pages/AdminPages/StudentFee/StudentFeeCreate/StudentFeeCreate';
import StudentFeeEdit from './Components/Pages/AdminPages/StudentFee/StudentFeeEdit/StudentFeeEdit';
import StudentFeeList from './Components/Pages/AdminPages/StudentFee/StudentFeeList/StudentFeeList';

import ExpanseCategoryCreate from './Components/Pages/AdminPages/ExpanseCategory/ExpanseCategoryCreate/ExpanseCategoryCreate';
import ExpanseCategoryEdit from './Components/Pages/AdminPages/ExpanseCategory/ExpanseCategoryEdit/ExpanseCategoryEdit';
import ExpanseCategoryList from './Components/Pages/AdminPages/ExpanseCategory/ExpanseCategoryList/ExpanseCategoryList';

import TeachingStaffTable from './Components/table/Admin/TeachingStaffTable/TeachingStaffTable';

// HTeaching Staff
import HTeachingStaffList from './Components/Pages/AdminPages/HTeachingStaff/HTeachingStaffList/HTeachingStaffList';
import HTeachingStaffCreate from './Components/Pages/AdminPages/HTeachingStaff/HTeachingStaffCreate/HTeachingStaffCreate';
import HTeachingStaffEdit from './Components/Pages/AdminPages/HTeachingStaff/HTeachingStaffEdit/HTeachingStaffEdit';

// HSTeaching Staff
import HSTeachingStaffList from './Components/Pages/AdminPages/HSTeachingStaff/HSTeachingStaffList/HSTeachingStaffList';
import HSTeachingStaffCreate from './Components/Pages/AdminPages/HSTeachingStaff/HSTeachingStaffCreate/HSTeachingStaffCreate';
import HSTeachingStaffEdit from './Components/Pages/AdminPages/HSTeachingStaff/HSTeachingStaffEdit/HSTeachingStaffEdit';

// PTeaching Staff
import PTeachingStaffList from './Components/Pages/AdminPages/PTeachingStaff/PTeachingStaffList/PTeachingStaffList';
import PTeachingStaffCreate from './Components/Pages/AdminPages/PTeachingStaff/PTeachingStaffCreate/PTeachingStaffCreate';
import PTeachingStaffEdit from './Components/Pages/AdminPages/PTeachingStaff/PTeachingStaffEdit/PTeachingStaffEdit';

//NoN-Teaching Staff
import NonTeachingStaffList from './Components/Pages/AdminPages/NonTeachingStaff/NonTeachingStaffList/NonTeachingStaffList';
import NonTeachingStaffCreate from './Components/Pages/AdminPages/NonTeachingStaff/NonTeachingStaffCreate/NonTeachingStaffCreate';
import NonTeachingStaffEdit from './Components/Pages/AdminPages/NonTeachingStaff/NonTeachingStaffEdit/NonTeachingStaffEdit';

//ManagingCommittee
import ManagingCommitteeTable from './Components/table/Admin/ManagingCommittee/ManagingCommitteeTable';

// notice Table
import ParentNoticeTable from './Components/table/Admin/NoticeTable/ParentNoticeTable';
import StudentNoticeTable from './Components/table/Admin/NoticeTable/StudentNoticeTable';
import TeacherNoticeTable from './Components/table/Admin/NoticeTable/TeacherNoticeTable';

// Library Table
import FacilityTable from './Components/table/Admin/FacilityTable/FacilityTable';

// Gallery Table
import GalleryTable from './Components/table/Admin/GalleryTable/GalleryTable';

// Settings
import SchoolList from './Components/Pages/AdminPages/School/SchoolList/SchoolList';
import SchoolCreate from './Components/Pages/AdminPages/School/SchoolCreate/SchoolCreate';
import SchoolEdit from './Components/Pages/AdminPages/School/SchoolEdit/SchoolEdit';
import SchoolShow from './Components/Pages/AdminPages/School/SchoolShow/SchoolShow';



//------------------ Student Route  ----------------//

// student Protected Routes
import StudentProtectedRoute from './Components/ProtectedRoute/StudentProtectedRoute';

// Dashboard
import StudentDashboard from './Components/Pages/StudentPages/Dashboard/StudentDashboard';

// User
import SStudentList from './Components/Pages/StudentPages/Student/StudentList/StudentList';
import SStudentShow from './Components/Pages/StudentPages/Student/StudentShow/StudentShow';

import SParentList from './Components/Pages/StudentPages/Parent/ParentList/ParentList';
import SParentShow from './Components/Pages/StudentPages/Parent/ParentShow/ParentShow';

import STeacherList from './Components/Pages/StudentPages/Teacher/TeacherList/TeacherList';
import STeacherShow from './Components/Pages/StudentPages/Teacher/TeacherShow/TeacherShow';

// Examination
import SAdmissionCircularList from './Components/Pages/StudentPages/Examination/AdmissionCircular/AdmissionCircularList/AdmissionCircularList';

import SAdmissionCircularShow_ST from './Components/Pages/StudentPages/Examination/AdmissionCircular/AdmissionCircularShow/AdmissionCircularShow_ST';
import SAdmissionCircularShow_OF from './Components/Pages/StudentPages/Examination/AdmissionCircular/AdmissionCircularShow/AdmissionCircularShow_OF';

import SGradeList from './Components/Pages/StudentPages/Examination/Grade/GradeList/GradeList';

import SMarkList from './Components/Pages/StudentPages/Examination/Mark/MarkList/MarkList';

import SOfflineExamList from './Components/Pages/StudentPages/Examination/OfflineExam/OfflineExamList/OfflineExamList';

//Academic
import SBookListList from './Components/Pages/StudentPages/Academic/BookList/BookListList/BookListList';

import SSchoolMagazineList from './Components/Pages/StudentPages/Academic/SchoolMagazine/SchoolMagazineList/SchoolMagazineList';

import SAcademicCalenderShow from './Components/Pages/StudentPages/Academic/AcademicCalender/AcademicCalenderShow/AcademicCalenderShow';

import SSyllabusList from './Components/Pages/StudentPages/Academic/Syllabus/SyllabusList/SyllabusList';

import SClassRoutineList from './Components/Pages/StudentPages/Academic/ClassRoutine/ClassRoutineList/ClassRoutineList';

// Accountant
import SStudentFeeList from './Components/Pages/StudentPages/StudentFee/StudentFeeList/StudentFeeList';

import SExpanseCategoryList from './Components/Pages/StudentPages/ExpanseCategory/ExpanseCategoryList/ExpanseCategoryList';

import STeachingStaffTable from './Components/table/Student/TeachingStaffTable/TeachingStaffTable';

// HTeaching Staff
import SHTeachingStaffList from './Components/Pages/StudentPages/HTeachingStaff/HTeachingStaffList/HTeachingStaffList';

// HSTeaching Staff
import SHSTeachingStaffList from './Components/Pages/StudentPages/HSTeachingStaff/HSTeachingStaffList/HSTeachingStaffList';

// PTeaching Staff
import SPTeachingStaffList from './Components/Pages/StudentPages/PTeachingStaff/PTeachingStaffList/PTeachingStaffList';

//NoN-Teaching Staff
import SNonTeachingStaffList from './Components/Pages/StudentPages/NonTeachingStaff/NonTeachingStaffList/NonTeachingStaffList';

//ManagingCommittee
import SManagingCommitteeTable from './Components/table/Student/ManagingCommittee/ManagingCommitteeTable';

// notice Table
import SStudentNoticeTable from './Components/table/Student/NoticeTable/StudentNoticeTable';

// Library Table
import SFacilityTable from './Components/table/Student/FacilityTable/FacilityTable';

// Gallery Table
import SGalleryTable from './Components/table/Student/GalleryTable/GalleryTable';

// Settings
import SSchoolList from './Components/Pages/StudentPages/School/SchoolList/SchoolList';
import SSchoolShow from './Components/Pages/StudentPages/School/SchoolShow/SchoolShow';

//------------------ Teacher Route  ----------------//

// Teacher Protected Routes
import TeacherProtectedRoute from './Components/ProtectedRoute/TeacherProtectedRoute';

// Dashboard
import TeacherDashboard from './Components/Pages/TeacherPages/Dashboard/TeacherDashboard';

// User

import TTeacherList from './Components/Pages/TeacherPages/Teacher/TeacherList/TeacherList';
import TTeacherShow from './Components/Pages/TeacherPages/Teacher/TeacherShow/TeacherShow';

// Examination
import TAdmissionCircularList from './Components/Pages/TeacherPages/Examination/AdmissionCircular/AdmissionCircularList/AdmissionCircularList';

import TAdmissionCircularShow_ST from './Components/Pages/TeacherPages/Examination/AdmissionCircular/AdmissionCircularShow/AdmissionCircularShow_ST';
import TAdmissionCircularShow_OF from './Components/Pages/TeacherPages/Examination/AdmissionCircular/AdmissionCircularShow/AdmissionCircularShow_OF';

import TGradeList from './Components/Pages/TeacherPages/Examination/Grade/GradeList/GradeList';

import TMarkList from './Components/Pages/TeacherPages/Examination/Mark/MarkList/MarkList';

import TOfflineExamList from './Components/Pages/TeacherPages/Examination/OfflineExam/OfflineExamList/OfflineExamList';

//Academic
import TBookListList from './Components/Pages/TeacherPages/Academic/BookList/BookListList/BookListList';

import TSchoolMagazineList from './Components/Pages/TeacherPages/Academic/SchoolMagazine/SchoolMagazineList/SchoolMagazineList';

import TAcademicCalenderShow from './Components/Pages/TeacherPages/Academic/AcademicCalender/AcademicCalenderShow/AcademicCalenderShow';

import TSyllabusList from './Components/Pages/TeacherPages/Academic/Syllabus/SyllabusList/SyllabusList';

import TClassRoutineList from './Components/Pages/TeacherPages/Academic/ClassRoutine/ClassRoutineList/ClassRoutineList';

// Accountant
import TStudentFeeList from './Components/Pages/TeacherPages/StudentFee/StudentFeeList/StudentFeeList';

import TExpanseCategoryList from './Components/Pages/TeacherPages/ExpanseCategory/ExpanseCategoryList/ExpanseCategoryList';

import TTeachingStaffTable from './Components/table/Teacher/TeachingStaffTable/TeachingStaffTable';

// HTeaching Staff
import THTeachingStaffList from './Components/Pages/TeacherPages/HTeachingStaff/HTeachingStaffList/HTeachingStaffList';

// HSTeaching Staff
import THSTeachingStaffList from './Components/Pages/TeacherPages/HSTeachingStaff/HSTeachingStaffList/HSTeachingStaffList';

// PTeaching Staff
import TPTeachingStaffList from './Components/Pages/TeacherPages/PTeachingStaff/PTeachingStaffList/PTeachingStaffList';

//NoN-Teaching Staff
import TNonTeachingStaffList from './Components/Pages/TeacherPages/NonTeachingStaff/NonTeachingStaffList/NonTeachingStaffList';

//ManagingCommittee
import TManagingCommitteeTable from './Components/table/Teacher/ManagingCommittee/ManagingCommitteeTable';

// notice Table
import TTeacherNoticeTable from './Components/table/Teacher/NoticeTable/TeacherNoticeTable';

// Library Table
import TFacilityTable from './Components/table/Teacher/FacilityTable/FacilityTable';

// Gallery Table
import TGalleryTable from './Components/table/Teacher/GalleryTable/GalleryTable';

// Settings
import TSchoolList from './Components/Pages/TeacherPages/School/SchoolList/SchoolList';
import TSchoolShow from './Components/Pages/TeacherPages/School/SchoolShow/SchoolShow';




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
  //             element: <BookListList />,
  //             path: '',
  //           },
  //           {
  //             element: <BookListCreate />,
  //             path: 'create',
  //           },
  //           {
  //             children: [
  //               {
  //                 element: <BookListEdit />,
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

  //           <Route path='classRooms' element={<BookListList />} />
  //           <Route path='classRooms/create' element={<BookListCreate />} />
  //           <Route
  //             path='classRooms/:classRoomId/edit'
  //             element={<BookListEdit />}
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
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/admin' element={<AdminProtectedRoute />}>
          <Route path='profile' element={<AdminProfile />} />
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

          <Route
            path='admissionCirculars'
            element={<AdmissionCircularList />}
          />
          <Route
            path='admissionCirculars/create'
            element={<AdmissionCircularCreate />}
          />
          <Route
            path='admissionCirculars/:admissionCircularId/edit'
            element={<AdmissionCircularEdit />}
          />
          <Route
            path='admissionCirculars_ST/show'
            element={<AdmissionCircularShow_ST />}
          />
          <Route
            path='admissionCirculars_OF/show'
            element={<AdmissionCircularShow_OF />}
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

          <Route path='bookLists' element={<BookListList />} />
          <Route path='bookLists/create' element={<BookListCreate />} />
          <Route path='bookLists/:bookListId/edit' element={<BookListEdit />} />

          <Route path='schoolMagazines' element={<SchoolMagazineList />} />
          <Route
            path='schoolMagazines/create'
            element={<SchoolMagazineCreate />}
          />
          <Route
            path='schoolMagazines/:schoolMagazineId/edit'
            element={<SchoolMagazineEdit />}
          />

          <Route
            path='academicCalender/2023-2024'
            element={<AcademicCalenderShow />}
          />

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

          <Route path='all-teachingStaffs' element={<TeachingStaffTable />} />

          <Route path='teachingStaffs' element={<HTeachingStaffList />} />
          <Route
            path='teachingStaffs/create'
            element={<HTeachingStaffCreate />}
          />
          <Route
            path='teachingStaffs/:teachingStaffId/edit'
            element={<HTeachingStaffEdit />}
          />

          <Route path='hsteachingStaffs' element={<HSTeachingStaffList />} />
          <Route
            path='hsteachingStaffs/create'
            element={<HSTeachingStaffCreate />}
          />
          <Route
            path='hsteachingStaffs/:hsteachingStaffId/edit'
            element={<HSTeachingStaffEdit />}
          />

          <Route path='pteachingStaffs' element={<PTeachingStaffList />} />
          <Route
            path='pteachingStaffs/create'
            element={<PTeachingStaffCreate />}
          />
          <Route
            path='pteachingStaffs/:pteachingStaffId/edit'
            element={<PTeachingStaffEdit />}
          />

          <Route path='nonTeachingStaffs' element={<NonTeachingStaffList />} />
          <Route
            path='nonTeachingStaffs/create'
            element={<NonTeachingStaffCreate />}
          />
          <Route
            path='nonTeachingStaffs/:nonTeachingStaffId/edit'
            element={<NonTeachingStaffEdit />}
          />

          <Route
            path='managingCommittee'
            element={<ManagingCommitteeTable />}
          />

          <Route path='parentNotice' element={<ParentNoticeTable />} />
          <Route path='studentNotice' element={<StudentNoticeTable />} />
          <Route path='teacherNotice' element={<TeacherNoticeTable />} />

          <Route path='facility' element={<FacilityTable />} />

          <Route path='gallery' element={<GalleryTable />} />

          <Route path='schools' element={<SchoolList />} />
          <Route path='schools/create' element={<SchoolCreate />} />
          <Route path='schools/:schoolId' element={<SchoolShow />} />
          <Route path='schools/:schoolId/edit' element={<SchoolEdit />} />
        </Route>

        <Route path='/student' element={<StudentProtectedRoute />}>
          <Route path='profile' element={<StudentProfile />} />
          <Route path='dashboard' element={<StudentDashboard />} />

          <Route path='students' element={<SStudentList />} />
          <Route path='students/:studentId' element={<SStudentShow />} />

          <Route path='teachers' element={<STeacherList />} />
          <Route path='teachers/:teacherId' element={<STeacherShow />} />

          <Route path='parents' element={<SParentList />} />
          <Route path='parents/:parentId' element={<SParentShow />} />

          <Route
            path='admissionCirculars'
            element={<SAdmissionCircularList />}
          />
          <Route
            path='admissionCirculars_ST/show'
            element={<SAdmissionCircularShow_ST />}
          />
          <Route
            path='admissionCirculars_OF/show'
            element={<SAdmissionCircularShow_OF />}
          />

          <Route path='grades' element={<SGradeList />} />

          <Route path='marks' element={<SMarkList />} />

          <Route path='offlineExams' element={<SOfflineExamList />} />

          <Route path='bookLists' element={<SBookListList />} />

          <Route path='schoolMagazines' element={<SSchoolMagazineList />} />

          <Route
            path='academicCalender/2023-2024'
            element={<SAcademicCalenderShow />}
          />

          <Route path='syllabuses' element={<SSyllabusList />} />

          <Route path='classRoutines' element={<SClassRoutineList />} />

          <Route path='studentFees' element={<SStudentFeeList />} />

          <Route path='expanseCategories' element={<SExpanseCategoryList />} />

          <Route path='all-teachingStaffs' element={<STeachingStaffTable />} />

          <Route path='teachingStaffs' element={<SHTeachingStaffList />} />

          <Route path='hsteachingStaffs' element={<SHSTeachingStaffList />} />

          <Route path='pteachingStaffs' element={<SPTeachingStaffList />} />

          <Route path='nonTeachingStaffs' element={<SNonTeachingStaffList />} />

          <Route
            path='managingCommittee'
            element={<SManagingCommitteeTable />}
          />

          <Route path='studentNotice' element={<SStudentNoticeTable />} />

          <Route path='facility' element={<SFacilityTable />} />

          <Route path='gallery' element={<SGalleryTable />} />

          <Route path='schools' element={<SSchoolList />} />
          <Route path='schools/:schoolId' element={<SSchoolShow />} />
        </Route>


        <Route path='/teacher' element={<TeacherProtectedRoute />}>
          <Route path='profile' element={<TeacherProfile />} />
          <Route path='dashboard' element={<TeacherDashboard />} />

          <Route path='teachers' element={<TTeacherList />} />
          <Route path='teachers/:teacherId' element={<TTeacherShow />} />

          <Route
            path='admissionCirculars'
            element={<TAdmissionCircularList />}
          />
          <Route
            path='admissionCirculars_ST/show'
            element={<TAdmissionCircularShow_ST />}
          />
          <Route
            path='admissionCirculars_OF/show'
            element={<TAdmissionCircularShow_OF />}
          />

          <Route path='grades' element={<TGradeList />} />

          <Route path='marks' element={<TMarkList />} />

          <Route path='offlineExams' element={<TOfflineExamList />} />

          <Route path='bookLists' element={<TBookListList />} />

          <Route path='schoolMagazines' element={<TSchoolMagazineList />} />

          <Route
            path='academicCalender/2023-2024'
            element={<TAcademicCalenderShow />}
          />

          <Route path='syllabuses' element={<TSyllabusList />} />

          <Route path='classRoutines' element={<TClassRoutineList />} />

          <Route path='studentFees' element={<TStudentFeeList />} />

          <Route path='expanseCategories' element={<TExpanseCategoryList />} />

          <Route path='all-teachingStaffs' element={<TTeachingStaffTable />} />

          <Route path='teachingStaffs' element={<THTeachingStaffList />} />

          <Route path='hsteachingStaffs' element={<THSTeachingStaffList />} />

          <Route path='pteachingStaffs' element={<TPTeachingStaffList />} />

          <Route path='nonTeachingStaffs' element={<TNonTeachingStaffList />} />

          <Route
            path='managingCommittee'
            element={<TManagingCommitteeTable />}
          />

          <Route path='teacherNotice' element={<TTeacherNoticeTable />} />

          <Route path='facility' element={<TFacilityTable />} />

          <Route path='gallery' element={<TGalleryTable />} />

          <Route path='schools' element={<TSchoolList />} />
          <Route path='schools/:schoolId' element={<TSchoolShow />} />
        </Route>
        
      </Routes>
    </>
  );
};

export default App;
