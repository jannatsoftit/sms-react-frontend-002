import { useState } from 'react';

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <>
        <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
          {/* main-menu section */}
          <div className='SidebarList sidebar-title Row'>
            <div id='icon'>{item.icon}</div>
            <div id='title_1'>{item.title}</div>

            <div
              className='downIcon bi-chevron-down toggle-btn'
              onClick={() => setOpen(!open)}
            >
              {item.downIcon}
            </div>
          </div>

          {/* Submenu section */}
          <div className='sidebar-content'>
            {item.childrens.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* main-menu section */}
        <a
          href={item.link || '#'}
          className='sidebar-item plain Row'
          id={window.location.pathname == item.link ? 'active' : ''}
        >
          <div id='icon'>{item.icon}</div>
          <div id='title'>{item.title}</div>
        </a>
      </>
    );
  }
}
