import * as FaIcons from 'react-icons/fa';
import { FaSchoolFlag } from "react-icons/fa6";
import { PiChalkboardTeacher } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { MdAddAlert } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import * as PiIcons from 'react-icons/pi';
import { GrContactInfo } from "react-icons/gr";


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'User',
    icon: <FaIcons.FaUserFriends />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Admin',
        path: '/admin/admins',
        icon: <MdIcons.MdAdminPanelSettings />,
      },
      {
        title: 'Student',
        path: '/admin/students',
        icon: <PiIcons.PiStudentFill />,
      },
      {
        title: 'Teacher',
        path: '/admin/teachers',
        icon: <FaIcons.FaChalkboardTeacher />,
      },
      {
        title: 'Parent',
        path: '/admin/parents',
        icon: <RiIcons.RiParentFill />,
      },
      {
        title: 'Accountant',
        path: '/admin/accountants',
        icon: <BsIcons.BsBank2 />,
      },
      {
        title: 'Librarian',
        path: '/admin/librarians',
        icon: <MdIcons.MdLocalLibrary />,
      },
    ],
  },
  {
    title: 'Examination',
    icon: <FaIcons.FaBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Admission Circular',
        path: '/admin/admissionCirculars',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Grading System',
        path: '/admin/grades',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Exam Results',
        path: '/admin/marks',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Offline Exam',
        path: '/admin/offlineExams',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Academic',
    icon: <IoIcons.IoMdSchool />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Book List',
        path: '/admin/bookLists',
        icon: <SiIcons.SiGoogleclassroom />,
      },
      {
        title: 'Syllabus',
        path: '/admin/syllabuses',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Class Routine',
        path: '/admin/classRoutines',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Academic Calender',
        path: '/admin/academicCalender/2023-2024',
        icon: <MdIcons.MdSubject />,
      },
      {
        title: 'School Magazine',
        path: '/admin/schoolMagazines',
        icon: <MdIcons.MdSubject />,
      },
    ],
  },
  {
    title: 'Administration',
    icon: <FaIcons.FaMoneyCheckAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Managing Committee',
        path: '/admin/managingCommittee',
        icon: <FaIcons.FaUserFriends />,
      },
      {
        title: 'Student Fee',
        path: '/admin/studentFees',
        icon: <BiIcons.BiMoney />,
      },
      {
        title: 'Expense Category',
        path: '/admin/expanseCategories',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'School Staff',
    icon: <FaSchoolFlag />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Teaching Staff',
        path: '/admin/all-teachingStaffs',
        icon: <GiTeacher />,
      },
      {
        title: 'Non-Teaching Staff',
        path: '/admin/nonTeachingStaffs',
        icon: <PiChalkboardTeacher />,
      },
    ],
  },
  {
    title: 'Notice',
    icon: <MdAddAlert />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Teacher Notice',
        path: '/admin/teacherNotice',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Student Notice',
        path: '/admin/studentNotice',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Parent Notice',
        path: '/admin/parentNotice',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Facility',
    path: '/admin/facility',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Gallery',
    path: '/admin/gallery',
    icon: <RiGalleryLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Settings',
    icon: <AiIcons.AiFillSetting />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'School Info',
        path: `/admin/schools`,
        icon: <BsIcons.BsInfoCircleFill />,
      },
      // {
      //   title: 'Login',
      //   path: '/login',
      //   icon: <RiIcons.RiLogoutCircleFill />,
      // },
      // {
      //   title: 'Registration',
      //   path: '/register',
      //   icon: <RiIcons.RiLogoutCircleFill />,
      // },
    ],
  },
];
