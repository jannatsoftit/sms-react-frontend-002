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
    path: '/',
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
        path: '/admins',
        icon: <MdIcons.MdAdminPanelSettings />,
      },
      {
        title: 'Student',
        path: '/students',
        icon: <PiIcons.PiStudentFill />,
      },
      {
        title: 'Teacher',
        path: '/teachers',
        icon: <FaIcons.FaChalkboardTeacher />,
      },
      {
        title: 'Parent',
        path: '/parents',
        icon: <RiIcons.RiParentFill />,
      },
      {
        title: 'Accountant',
        path: '/accountants',
        icon: <BsIcons.BsBank2 />,
      },
      {
        title: 'Librarian',
        path: '/librarians',
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
        title: 'Exam Category',
        path: '/examCategories',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Grade',
        path: '/grades',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Mark',
        path: '/marks',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Offline Exam',
        path: '/offlineExams',
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
        title: 'Class Room',
        path: '/classRooms',
        icon: <SiIcons.SiGoogleclassroom />,
      },
      {
        title: 'Subjects',
        path: '/subjects',
        icon: <MdIcons.MdSubject />,
      },
      {
        title: 'Syllabus',
        path: '/syllabuses',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Section',
        path: '/sections',
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
