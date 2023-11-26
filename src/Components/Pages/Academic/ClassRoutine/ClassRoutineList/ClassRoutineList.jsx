import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import ClassRoutineTable from '../../../../table/ClassRoutineTable/ClassRoutineTable';

const ClassRoutineList = () => {
  return (
    <div>
      {/* ClassRoutine table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Class Routine
        </button>
      </Link>

      {/* ClassRoutine table section */}
      <ClassRoutineTable />
    </div>
  );
};

export default ClassRoutineList;
