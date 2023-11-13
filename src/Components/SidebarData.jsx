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
    ],
  },
  {
    title: 'Examination',
    path: '/examination',
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: 'Accountant',
    path: '/accountant',
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: 'Admission',
    path: '/admission',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Academic',
    path: '/academic',
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
