import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import ClassRoutineTable from '../../../../table/ClassRoutineTable/ClassRoutineTable';
import TopBar from "../../../../TopBar";

const ClassRoutineList = () => {
  return (
    <div>
      <TopBar/>
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
