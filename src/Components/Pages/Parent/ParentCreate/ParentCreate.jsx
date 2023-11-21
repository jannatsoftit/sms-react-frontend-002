import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ParentForm from '../../../forms/ParentForm/Parentform';

const ParentCreate = () => {
  return (
    <div>
      {/* Parent create table title section */}
      <Link to='/parents' className='add_button'>
        <button type='button' className='btn'>
          Parent Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Parent form section */}
      <ParentForm />
    </div>
  );
};

export default ParentCreate;
