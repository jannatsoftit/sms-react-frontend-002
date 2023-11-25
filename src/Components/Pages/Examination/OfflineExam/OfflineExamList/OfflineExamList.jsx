import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import OfflineExamTable from '../../../../table/OfflineExamTable/OfflineExamTable';

const OfflineExamList = () => {
  return (
    <div>
      {/* OfflineExam table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> OfflineExam
        </button>
      </Link>

      {/* OfflineExam table section */}
      <OfflineExamTable />
    </div>
  );
};

export default OfflineExamList;
