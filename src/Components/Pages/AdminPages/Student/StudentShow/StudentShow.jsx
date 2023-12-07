import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import StudentDetail from '../../../../details/Admin/StudentDetail/StudentDetail';
import AdminSidebar from '../../../../Sidebar/AdminSidebar';
import TopBar from "../../../../TopBar";

const StudentShow = () => {
  const { studentId } = useParams();

  const [student, setStudent] = useState(null);

  // student data show
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/students/${studentId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setStudent(response.data?.student);
      })
      .catch((error) => {
        console.error(error);
        setStudent(null);
      });
  }, [studentId]);

  return (
    <div>
      <TopBar />
      <AdminSidebar>
        {/* student create table title section */}
        <Link to='/admin/students' className='add_button'>
          <button type='button' className='btn'>
            Student Table <AiOutlineArrowRight />
          </button>
        </Link>

        {/* student data details component */}
        <StudentDetail student={student} />
      </AdminSidebar>
    </div>
  );
};

export default StudentShow;
