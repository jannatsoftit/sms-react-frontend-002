import { AiFillDashboard } from 'react-icons/ai';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { FaBook } from "react-icons/fa";
import { FaUserFriends } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { PiExamFill } from 'react-icons/pi';
import React from 'react';

export const SidebarData = [
  {
    title: 'Dashboard',
    icon: <AiFillDashboard color='white'/>,
    link: '/dashboard'
  },
  {
    title: 'Users',
    icon: < FaUserFriends color='white'/>,
    link: '/users'
  },
  {
    title: 'Examination',
    icon: <FaBook color='white'/>,
    link: '/examination'
  },
  {
    title: 'Admission',
    icon: <PiExamFill color='white'/>,
    link: '/admission'
  },
  {
    title: 'Academic',
    icon: <IoMdSchool color='white'/>,
    link: '/academic'
  },
  {
    title: 'Accountant',
    icon: <FaMoneyCheckAlt color='white'/>,
    link: '/accountant'
  },

];

