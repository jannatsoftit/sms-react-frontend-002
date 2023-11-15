import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const Sidebar = ({ children }) => {
  const [sidebar, setSidebar] = useState('true');

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='con'>
        <IconContext.Provider value={{}}>
          {/* <div className='nav'>
        <div className='navicon'>
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
      </div> */}

          <SidebarNav sidebar={sidebar}>
            <div className='sidebar_wrap'>
              <div className='sidebar'>
                <div className='top_section'>
                  <Link to="/dashboard" className='logo'>Logo</Link>
                </div>

                {/* <div className='navicon'>
            <AiIcons.AiOutlineClose />
          </div> */}
                {SidebarData?.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}
              </div>
            </div>
          </SidebarNav>
        </IconContext.Provider>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
