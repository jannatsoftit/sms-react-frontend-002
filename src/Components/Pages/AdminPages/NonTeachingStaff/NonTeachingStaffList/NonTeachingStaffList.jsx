import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import NonTeachingStaffTable from '../../../../table/Admin/NonTeachingStaffTable/NonTeachingStaffTable';
import TopBar from "../../../../TopBar";

const NonTeachingStaffList = () => {
  return (
    <div>
      <TopBar/>
      {/* NonTeaching Staff table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Non-Teaching Staff
        </button>
      </Link>

      {/* NonTeaching Staff table section */}
      <NonTeachingStaffTable />
    </div>
  );
};

export default NonTeachingStaffList;
