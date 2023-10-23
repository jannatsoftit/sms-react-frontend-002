import SidebarItem from './SidebarItem';
import SidebarData from './SidebarData';

export default function Sidebar(){
    return (
        <div className='sidebar'>
          { SidebarData.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    );
}
