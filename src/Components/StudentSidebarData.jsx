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


export const StudentSidebarData = [
  {
    title: 'Dashboard',
    path: '/student/dashboard',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'User Table',
    path: '/student/students',
    icon: <FaIcons.FaUserFriends />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Teacher Table',
    path: '/student/teachers',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Parent Table',
    path: '/student/parents',
    icon: <AiIcons.AiFillHome />,
  },

  {
    title: 'Examination',
    icon: <FaIcons.FaBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Admission Circular',
        path: '/student/admissionCirculars',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Grading System',
        path: '/student/grades',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Exam Results',
        path: '/student/marks',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Offline Exam',
        path: '/student/offlineExams',
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
        path: '/student/bookLists',
        icon: <SiIcons.SiGoogleclassroom />,
      },
      {
        title: 'Syllabus',
        path: '/student/syllabuses',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Class Routine',
        path: '/student/classRoutines',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Academic Calender',
        path: '/student/academicCalender/2023-2024',
        icon: <MdIcons.MdSubject />,
      },
      {
        title: 'School Magazine',
        path: '/student/schoolMagazines',
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
        path: '/student/managingCommittee',
        icon: <FaIcons.FaUserFriends />,
      },
      {
        title: 'Student Fee',
        path: '/student/studentFees',
        icon: <BiIcons.BiMoney />,
      },
      {
        title: 'Expense Category',
        path: '/student/expanseCategories',
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
        path: '/student/tteachingStaffs',
        icon: <GiTeacher />,
      },
      {
        title: 'Non-Teaching Staff',
        path: '/student/nonTeachingStaffs',
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
        title: 'Student Notice',
        path: '/student/studentNotice',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Facility',
    path: '/student/facility',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Gallery',
    path: '/student/gallery',
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
        path: `/student/schools`,
        icon: <BsIcons.BsInfoCircleFill />,
      },
    ],
  },
];
