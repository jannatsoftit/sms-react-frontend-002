import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import HSTeachingStaffTable from '../../../../table/Admin/TeachingStaffTable/HSTeachingStaffTable';
import TopBar from "../../../../TopBar";

const HSTeachingStaffList = () => {
  return (
    <div>
      <TopBar/>
      {/* HSTeaching Staff table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> HS Teaching Staff
        </button>
      </Link>

      {/* HSTeaching Staff table section */}
      <HSTeachingStaffTable />
    </div>
  );
};

export default HSTeachingStaffList;
