import { AiFillDashboard, AiFillCaretDown } from 'react-icons/ai';
import { FaMoneyCheckAlt, FaUserFriends, FaBook, FaBars } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { PiExamFill } from 'react-icons/pi';
import { useState } from 'react';
//import { Link } from 'react-router-dom';

const Sidebar = ({children} : any) => {

  const[Open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!Open);
  }

  const SidebarData = [
    {
      className: 'active',
      title: "Dashboard",
      icon: <AiFillDashboard />,
      path: '/dashboard',
    },
    {
      title: 'Users',
      icon: <FaUserFriends />,
      downIcon: <AiFillCaretDown />,
      childrens: [
        {
          title: 'Admin',
          icon: '',
          path: '/admin',
        },
        {
          title: 'Student',
          icon: '',
          path: '/student',
        },
        {
          title: 'Teacher',
          icon: '',
          path: '/teacher',
        },
      ],
    },
    {
      title: 'Examination',
      icon: <FaBook />,
      path: '/examination',
    },
    {
      title: 'Admission',
      icon: <PiExamFill />,
      path: '/admission',
    },
    {
      title: 'Academic',
      icon: <IoMdSchool />,
      path: '/academic',
    },
    {
      title: 'Accountant',
      icon: <FaMoneyCheckAlt />,
      path: '/accountant',
    },
  ];

  return (
    <>
       <div className='container'>
       <div style={{width: Open ? '300px' : '45px'}} className='sidebar'>
         <div className='top_section'>
           <h1 style={{display: Open ? 'block' : 'none'}} className='logo'>Logo</h1>
           <div style={{marginLeft: Open ? '300px' : 'none'}} className='bars'>
             <FaBars onClick={toggle}/>
           </div>
         </div>
         {
           SidebarData.map((item, index) => (
             
            <a 
              key={index} 
              className='link' 
              href ={item.path} 
              id={window.location.pathname == item.path ? 'active' : ''}
            >
              <div className='icon'>{item.icon}</div>
              <div className='link_text'>{item.title}</div>
            </a>
           ))
         }
       </div>
       <main>{children}</main>
     </div>
    </>
  );
}
export default Sidebar;
