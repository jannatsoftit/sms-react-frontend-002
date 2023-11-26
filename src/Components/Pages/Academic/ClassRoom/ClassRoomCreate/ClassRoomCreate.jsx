import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ClassRoomForm from '../../../../forms/ClassRoomForm/ClassRoomForm';

const ClassRoomCreate = () => {
  return (
    <div>
      {/* ClassRoom create table title section */}
      <Link to='/classRooms' className='add_button'>
        <button type='button' className='btn'>
          ClassRoom Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* ClassRoom form section */}
      <ClassRoomForm />
    </div>
  );
};

export default ClassRoomCreate;
