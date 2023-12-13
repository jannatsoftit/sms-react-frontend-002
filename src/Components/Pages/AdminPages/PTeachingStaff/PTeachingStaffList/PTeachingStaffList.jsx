import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import PTeachingStaffTable from '../../../../table/Admin/TeachingStaffTable/PTeachingStaffTable';
import TopBar from "../../../../TopBar";

const PTeachingStaffList = () => {
  return (
    <div>
      <TopBar/>
      {/* PTeaching Staff table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Teaching Staff
        </button>
      </Link>

      {/* PTeaching Staff table section */}
      <PTeachingStaffTable />
    </div>
  );
};

export default PTeachingStaffList;
