import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import HTeachingStaffTable from '../../../../table/Admin/TeachingStaffTable/HTeachingStaffTable';
import TopBar from "../../../../TopBar";

const HTeachingStaffList = () => {
  return (
    <div>
      <TopBar/>
      {/* HTeaching Staff table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> H Teaching Staff
        </button>
      </Link>

      {/* HTeaching Staff table section */}
      <HTeachingStaffTable />
    </div>
  );
};

export default HTeachingStaffList;
