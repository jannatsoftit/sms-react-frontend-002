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

const userSchoolId = localStorage.getItem("school_id");


export const TeacherSidebarData = [
  {
    title: 'Dashboard',
    path: '/teacher/dashboard',
    icon: <AiIcons.AiFillHome />,
  },
  // {
  //   title: 'User Table',
  //   path: '/student/students',
  //   icon: <FaIcons.FaUserFriends />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  // },
  {
    title: 'Teacher Table',
    path: '/teacher/teachers',
    icon: <FaIcons.FaChalkboardTeacher />,
  },
  // {
  //   title: 'Parent Table',
  //   path: '/teacher/parents',
  //   icon: <RiIcons.RiParentFill />,
  // },

  {
    title: 'Examination',
    icon: <FaIcons.FaBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Admission Circular',
        path: '/teacher/admissionCirculars',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Grading System',
        path: '/teacher/grades',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Exam Results',
        path: '/teacher/marks',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Offline Exam',
        path: '/teacher/offlineExams',
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
        path: '/teacher/bookLists',
        icon: <SiIcons.SiGoogleclassroom />,
      },
      {
        title: 'Syllabus',
        path: '/teacher/syllabuses',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Class Routine',
        path: '/teacher/classRoutines',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Academic Calender',
        path: '/teacher/academicCalender/2023-2024',
        icon: <MdIcons.MdSubject />,
      },
      {
        title: 'School Magazine',
        path: '/teacher/schoolMagazines',
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
        path: '/teacher/managingCommittee',
        icon: <FaIcons.FaUserFriends />,
      },
      {
        title: 'Student Fee',
        path: '/teacher/studentFees',
        icon: <BiIcons.BiMoney />,
      },
      {
        title: 'Expense Category',
        path: '/teacher/expanseCategories',
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
        path: '/teacher/tteachingStaffs',
        icon: <GiTeacher />,
      },
      {
        title: 'Non-Teaching Staff',
        path: '/teacher/nonTeachingStaffs',
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
        path: '/teacher/teacherNotice',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Facility',
    path: '/teacher/facility',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Gallery',
    path: '/teacher/gallery',
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
        path: `/teacher/schools`,
        icon: <BsIcons.BsInfoCircleFill />,
      },
    ],
  },
];
