import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import AdminTable from '../../../table/AdminTable/AdminTable';

const AdminList = () => {
  return (
    <div>
      {/* Admin table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Admin
        </button>
      </Link>

      {/* Admin table section */}
      <AdminTable />
    </div>
  );
};

export default AdminList;
