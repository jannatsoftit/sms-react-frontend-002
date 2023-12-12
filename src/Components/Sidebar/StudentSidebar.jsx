import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { StudentSidebarData } from '../StudentSidebarData';
import { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import SubMenu from '../SubMenu';
import styled from 'styled-components';
import Logo from '../../assets/computerClub/AGAImage.png';

const SidebarNav = styled.nav`
  background: #02727d;
  width: 280px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const StudentSidebar = ({ children }) => {
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
                  {/* <Link to='/' className='logo'>
                      Logo
                    </Link> */}
                  <img
                    src={Logo}
                    alt='school-image'
                    width='80px'
                    height='80px'
                    style={{ borderRadius: '5px' }}
                  />
                </div>

                {/* <div className='navicon'>
                  <AiIcons.AiOutlineClose />
                </div> */}
                {StudentSidebarData?.map((item, index) => {
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

export default StudentSidebar;
