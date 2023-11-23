import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import GradeForm from '../../../../forms/GradeForm/GradeForm';

const GradeCreate = () => {
  return (
    <div>
      {/* Grade create table title section */}
      <Link to='/grades' className='add_button'>
        <button type='button' className='btn'>
          Grade Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Grade form section */}
      <GradeForm />
    </div>
  );
};

export default GradeCreate;
