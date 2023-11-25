import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import GradeTable from '../../../../table/Grade/GradeTable';

const GradeList = () => {
  return (
    <div>
      {/* Grade table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Grade
        </button>
      </Link>

      {/* Grade table section */}
      <GradeTable />
    </div>
  );
};

export default GradeList;
