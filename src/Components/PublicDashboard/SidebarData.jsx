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
    path: '/public/dashboard',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Examination',
    icon: <FaIcons.FaBook />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Exam Category',
        path: '/public/examCategories',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Grade',
        path: '/public/grades',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Mark',
        path: '/public/marks',
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
        title: 'Login',
        path: '/login',
        icon: <RiIcons.RiLogoutCircleFill />,
      },
      {
        title: 'Registration',
        path: '/register',
        icon: <RiIcons.RiLogoutCircleFill />,
      },
    ],
  },

 
];
