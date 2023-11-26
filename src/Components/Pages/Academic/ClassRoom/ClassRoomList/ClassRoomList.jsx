import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import ClassRoomTable from '../../../../table/ClassRoomTable/ClassRoomTable';

const ClassRoomList = () => {
  return (
    <div>
      {/* ClassRoom table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> ClassRoom
        </button>
      </Link>

      {/* ClassRoom table section */}
      <ClassRoomTable />
    </div>
  );
};

export default ClassRoomList;
