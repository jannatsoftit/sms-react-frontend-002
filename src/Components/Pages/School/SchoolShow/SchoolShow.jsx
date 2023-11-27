import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SchoolDetail from '../../../details/SchoolDetail/SchoolDetail';

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
      {/* school create table title section */}
      <Link to='/schools' className='add_button'>
        <button type='button' className='btn'>
          School Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* school data details component */}
      <SchoolDetail school={school} />
    </div>
  );
};

export default SchoolShow;
