import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiFillDashboard, AiFillCaretDown } from 'react-icons/ai';
import { FaMoneyCheckAlt, FaUserFriends, FaBook, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import { PiExamFill } from 'react-icons/pi';
//import { Link, NavLink } from 'react-router-dom';


const Sidebar = ({ children }: any) => {

  const [subMenu, setSubMenu] = useState(false);
  const showSubMenu = () => setSubMenu(!subMenu);

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const SidebarData = [
    {
      title: "Dashboard",
      icon: <AiFillDashboard />,
      path: '/dashboard',
    },
    {
      title: 'Users',
      icon: <FaUserFriends />,
      iconClosed: <FaAngleUp />,
      iconOpened: <FaAngleDown />,
      downIcon: <AiFillCaretDown />,
      subMenu: [
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
      <div className='con'>
        <div style={{ width: isOpen ? '250px' : '50px' }} className='sidebar'>
          <div className='top_section'>
            <h1 style={{ display: isOpen ? 'block' : 'none' }} className='logo'>Logo</h1>
            <div style={{ marginLeft: isOpen ? '80px' : '0px' }} className='bars'>
              <FaBars onClick={toggle} />
            </div>
          </div>


          {SidebarData?.map((item, index) => (
            <>
              <div onClick={showSubMenu}>
                <a
                  key={index}
                  className='link'
                  href={item.path}
                  id={window.location.pathname === item.path ? 'active' : ''}
                >
                  <div className='icon'>{item.icon}</div>
                  <div style={{ display: isOpen ? 'block' : 'none' }} className='link_text'>{item.title}</div>
                  <div>
                    {subMenu && item.subMenu ? item?.iconClosed : item?.iconOpened}
                  </div>
                </a>

                {/* sidebar submenu section*/}
                <div>
                  {subMenu && item?.subMenu?.map((subMenuItem, i) => {
                    return (
                      <a
                        href={subMenuItem.path}
                        key={i}
                        className='link'
                      >
                        <div className='icon'>{subMenuItem.icon}</div>
                        <div className='link_text'>{subMenuItem.title}</div>
                      </a>
                    )
                  })
                  }
                </div>
              </div>
            </>))}





          {/* {
            SidebarData.map((item, index) => (
              <a
                key={index}
                className='link'
                href={item.path}
                id={window.location.pathname == item.path ? 'active' : ''}
              >
                <div className='icon'>{item.icon}</div>
                <div style={{ display: isOpen ? 'block' : 'none' }} className='link_text'>{item.title}</div>
              </a>
            ))
          } */}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}
export default Sidebar;
