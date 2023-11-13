import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';
import * as PiIcons from 'react-icons/pi';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'User',
    path: '/user',
    icon: <FaIcons.FaUserFriends />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Admin',
        path: '/user/admin',
        icon: <MdIcons.MdAdminPanelSettings />,
      },
      {
        title: 'Student',
        path: '/user/student',
        icon: <PiIcons.PiStudentFill />,
      },
      {
        title: 'Teacher',
        path: '/user/teacher',
        icon: <FaIcons.FaChalkboardTeacher />,
      },
      {
        title: 'Parent',
        path: '/user/parent',
        icon: <RiIcons.RiParentFill />,
      },
      {
        title: 'Accountant',
        path: '/user/accountant',
        icon: <BsIcons.BsBank2 />,
      },
      {
        title: 'Librarian',
        path: '/user/librarian',
        icon: <MdIcons.MdLocalLibrary />,
      },
    ],
  },
  {
    title: 'Examination',
    path: '/examination',
    icon: <FaIcons.FaBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Exam Category',
        path: '/examination/exam-category',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Grades',
        path: '/examination/grades',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Marks',
        path: '/examination/marks',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Offline Exam',
        path: '/examination/offline-exam',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Academic',
    path: '/academic',
    icon: <IoIcons.IoMdSchool />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Class Room',
        path: '/academic/class-room',
        icon: <SiIcons.SiGoogleclassroom />,
      },
      {
        title: 'Class List',
        path: '/academic/class-list',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Subjects',
        path: '/academic/subjects',
        icon: <MdIcons.MdSubject />,
      },
      {
        title: 'Syllabus',
        path: '/academic/syllabus',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Section',
        path: '/academic/section',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Accountant',
    path: '/accountant',
    icon: <FaIcons.FaMoneyCheckAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Student Fee',
        path: '/accountant/student-fee',
        icon: <BiIcons.BiMoney />,
      },
      {
        title: 'Expense Category',
        path: '/accountant/expense-category',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <AiIcons.AiFillSetting />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'School Info',
        path: '/Settings/school-info',
        icon: <BsIcons.BsInfoCircleFill />,
      },
      {
        title: 'Logout',
        path: '/Settings/logout',
        icon: <RiIcons.RiLogoutCircleFill />,
      },
    ],
  },

 
];
