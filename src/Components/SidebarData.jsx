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
      path: '/admin',
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
          title: 'Exam Category',
          path: '/admin/examCategories',
          icon: <IoIcons.IoIosPaper />,
        },
        {
          title: 'Grade',
          path: '/admin/grades',
          icon: <IoIcons.IoIosPaper />,
        },
        {
          title: 'Mark',
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
          title: 'Class Room',
          path: '/admin/classRooms',
          icon: <SiIcons.SiGoogleclassroom />,
        },
        {
          title: 'Subjects',
          path: '/admin/subjects',
          icon: <MdIcons.MdSubject />,
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
      ],
    },
    {
      title: 'Accountant',
      icon: <FaIcons.FaMoneyCheckAlt />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
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
      title: 'Settings',
      icon: <AiIcons.AiFillSetting />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
        {
          title: 'School Info',
          path:`/admin/schools`, // '/schools' 
          icon: <BsIcons.BsInfoCircleFill />,
        },
        {
          title: 'Login',
          path: '/',
          icon: <RiIcons.RiLogoutCircleFill />,
        },
        {
          title: 'Registration',
          path: '/register',
          icon: <RiIcons.RiLogoutCircleFill />,
        },
        {
          title: 'Logout',
          path: '/logout',
          icon: <RiIcons.RiLogoutCircleFill />,
        },
      ],
    },
  ];
