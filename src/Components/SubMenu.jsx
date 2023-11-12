import { useState } from "react";
import { NavLink } from "react-router-dom";

const SubMenu = ({ item }) => {

  const [submenu, setSubmenu] = useState(false);

  const showSubmenu = () => setSubmenu(!submenu);

  return(
    <>
    <NavLink to={item.path} className='link' onClick={item.subNav && showSubmenu}>
      <div>
        {item.icon}
        <div className="sidebar_label">{item.title}</div>
      </div>
      <div>
        {item.subNav && submenu
          ? item.iconOpen
          : item.subNav
          ? item.iconClosed
          : null
        }
      </div>
    </NavLink>

    {submenu && 
    item?.subNav.map((item, index) => {
      return (
        <a className="dropdown_link" href={item.path} key={index}>
          {item.icon}
          <div className="sidebar_label">{item.title}</div>
        </a>
      );
    })}
    </>
  );
}

export default SubMenu;