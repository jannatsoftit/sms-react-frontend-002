import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import StudentFeeTable from '../../../../Components/table/StudentFeeTable/StudentFeeTable';
import TopBar from '../../../TopBar';

const StudentFeeList = () => {
  return (
    <div>
      <TopBar/>
      {/* StudentFee table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Student Fee
        </button>
      </Link>

      {/* StudentFee table section */}
      <StudentFeeTable />
    </div>
  );
};

export default StudentFeeList;
