import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AdminForm from '../../../../forms/Admin/AdminForm/AdminForm';
import TopBar from "../../../../TopBar";

const AdminCreate = () => {
  return (
    <div>
      <TopBar/>
      {/* Admin create table title section */}
      <Link to='/admin/admins' className='add_button'>
        <button type='button' className='btn'>
          Admin Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Admin form section */}
      <AdminForm />
    </div>
  );
};

export default AdminCreate;
