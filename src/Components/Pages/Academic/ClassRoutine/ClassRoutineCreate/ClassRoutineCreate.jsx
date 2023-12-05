import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ClassRoutineForm from '../../../../forms/ClassRoutineForm/ClassRoutineForm';

const ClassRoutineCreate = () => {
  return (
    <div>
      {/* ClassRoutine create table title section */}
      <Link to='/admin/classRoutines' className='add_button'>
        <button type='button' className='btn'>
          Class Routine Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* ClassRoutine form section */}
      <ClassRoutineForm />
    </div>
  );
};

export default ClassRoutineCreate;
