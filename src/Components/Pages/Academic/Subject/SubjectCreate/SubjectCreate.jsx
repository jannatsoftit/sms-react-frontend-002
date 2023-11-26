import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SubjectForm from '../../../../forms/SubjectForm/SubjectForm';

const SubjectCreate = () => {
  return (
    <div>
      {/* Subject create table title section */}
      <Link to='/subjects' className='add_button'>
        <button type='button' className='btn'>
          Subject Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Subject form section */}
      <SubjectForm />
    </div>
  );
};

export default SubjectCreate;
