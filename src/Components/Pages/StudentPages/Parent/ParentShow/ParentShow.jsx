import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ParentDetail from '../../../../details/Student/ParentDetail/ParentDetail';
import StudentSidebar from '../../../../Sidebar/StudentSidebar';
import StudentTopBar from "../../../../StudentTopBar";

const ParentShow = () => {
  const { parentId } = useParams();

  const [parent, setParent] = useState(null);

  // Parent data show
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/parents/${parentId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setParent(response.data?.parent);
      })
      .catch((error) => {
        console.error(error);
        setParent(null);
      });
  }, [parentId]);

  return (
    <div>
      <StudentTopBar />
      <StudentSidebar>
        {/* Parent create table title section */}
        <Link to='/student/parents' className='add_button'>
          <button type='button' className='btn'>
            Parent Table <AiOutlineArrowRight />
          </button>
        </Link>

        {/* Parent data details component */}
        <ParentDetail parent={parent} />
      </StudentSidebar>
    </div>
  );
};

export default ParentShow;
