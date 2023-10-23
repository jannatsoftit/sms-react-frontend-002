import { SidebarData } from './SidebarData';
import React from 'react';
import '../App.css';

function Sidebar() {
  return (
    <div className='Sidebar'>

      <ul className='SidebarList'>
        {SidebarData.map((val, key) => {
          return(
            <li
              key={ key }
              className='Row'
              onClick={ () => { window.location.pathname = val.link; }}
              id={ window.location.pathname == val.link ? 'active' : '' }
            >
              <div id='icon'>{val.icon}</div>

              <div id='title'>
                <div id={ window.location.pathname == val.childrens ? window.location.pathname = val.downIcon : '' }>
                {val.title}
                </div>
              </div>
              <div id='downIcon'>{val.downIcon}</div>

            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default Sidebar;
