import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'User',
    path: '/user',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Admin',
        path: '/user/admin',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Student',
        path: '/user/student',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Teacher',
        path: '/user/teacher',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Parent',
        path: '/user/parent',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Accountant',
        path: '/user/accountant',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Librarian',
        path: '/user/librarian',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Examination',
    path: '/examination',
    icon: <FaIcons.FaCartPlus />,
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
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Class Room',
        path: '/academic/class-room',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Class List',
        path: '/academic/class-list',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Subjects',
        path: '/academic/subjects',
        icon: <IoIcons.IoIosPaper />,
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
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Student Fee',
        path: '/accountant/student-fee',
        icon: <IoIcons.IoIosPaper />,
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
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'School Info',
        path: '/Settings/school-info',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Logout',
        path: '/Settings/logout',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

 
];
