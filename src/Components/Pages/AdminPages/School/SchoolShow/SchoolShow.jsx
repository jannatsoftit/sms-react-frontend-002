//import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SchoolDetail from '../../../details/SchoolDetail/SchoolDetail';
import AdminSidebar from '../../../Sidebar/AdminSidebar';
import TopBar from '../../../TopBar';

const SchoolShow = () => {
  const { schoolId } = useParams();

  const [school, setSchool] = useState(null);

  // School data show
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/schools/${schoolId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setSchool(response.data?.school);
      })
      .catch((error) => {
        console.error(error);
        setSchool(null);
      });
  }, [schoolId]);

  return (
    <div>
      <TopBar />
      <AdminSidebar>
        {/* school create table title section */}
        {/* <Link to='/schools' className='add_button'>
        <button type='button' className='btn'>
          School Table <AiOutlineArrowRight />
        </button>
      </Link> */}

        <div className='dropdown add_button'>
          <button
            className='btn btn-secondary dropdown-toggle'
            type='button'
            id='dropdownMenuButton1'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Actions
          </button>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            <li>
              <Link className='dropdown-item' to={`/admin/schools`}>
                School Table
              </Link>
            </li>
            <li>
              <Link
                className='dropdown-item'
                to={`/admin/schools/${school?.id}/edit`}
              >
                School Edit
              </Link>
            </li>
          </ul>
        </div>

        {/* school data details component */}
        <SchoolDetail school={school} />
      </AdminSidebar>
    </div>
  );
};

export default SchoolShow;
