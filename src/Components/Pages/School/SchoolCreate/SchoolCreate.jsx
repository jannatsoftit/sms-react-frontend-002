import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SchoolForm from '../../../forms/GradeForm copy/SchoolForm';

const SchoolCreate = () => {
  return (
    <div>
      {/* School create table title section */}
      <Link to='/schools' className='add_button'>
        <button type='button' className='btn'>
          School Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* School form section */}
      <SchoolForm />
    </div>
  );
};

export default SchoolCreate;
