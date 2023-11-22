import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TeacherDetail from '../../../details/TeacherDetail/TeacherDetail';

const TeacherShow = () => {

  const { teacherId } = useParams();

  const [teacher, setTeacher] = useState(null);

  // Teacher data show
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/teachers/${teacherId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setTeacher(response.data?.teacher);
      })
      .catch((error) => {
        console.error(error);
        setTeacher(null);
      });
  }, [teacherId]);

  return (
    <div>

      {/* Teacher create table title section */}
      <Link to='/teachers' className='add_button'>
        <button type='button' className='btn'>
          Teacher Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Teacher data details component */}
      <TeacherDetail teacher={teacher} />
      
    </div>
  );
};

export default TeacherShow;
