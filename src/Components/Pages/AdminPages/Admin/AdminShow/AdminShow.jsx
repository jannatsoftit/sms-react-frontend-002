import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AdminDetail from '../../../../details/Admin/AdminDetail/AdminDetail';
import AdminSidebar from '../../../../Sidebar/AdminSidebar';
import TopBar from "../../../../TopBar";

const AdminShow = () => {
  const { adminId } = useParams();

  const [admin, setAdmin] = useState(null);

  // admin data show
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/admins/${adminId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setAdmin(response.data?.admin);
      })
      .catch((error) => {
        console.error(error);
        setAdmin(null);
      });
  }, [adminId]);

  return (
    <div>
      <TopBar />
      <AdminSidebar>
        {/* Admin create table title section */}
        <Link to='/admin/admins' className='add_button'>
          <button type='button' className='btn'>
            Admin Table <AiOutlineArrowRight />
          </button>
        </Link>

        {/* admin data details component */}
        <AdminDetail admin={admin} />
      </AdminSidebar>
    </div>
  );
};

export default AdminShow;
