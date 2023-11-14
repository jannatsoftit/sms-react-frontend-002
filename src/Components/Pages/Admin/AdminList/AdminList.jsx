import AdminTable from "../../../table/AdminTable/AdminTable";
import {Link} from 'react-router-dom';
import {HiPlus} from 'react-icons/hi';

const AdminList = () => {
  return (
    <div>
      
      <Link to="#" className="add_button">
      <button type="button" className="btn">
        <HiPlus /> Admin
      </button>
      </Link>
      
      <AdminTable />
    </div>
  )
}

export default AdminList;
