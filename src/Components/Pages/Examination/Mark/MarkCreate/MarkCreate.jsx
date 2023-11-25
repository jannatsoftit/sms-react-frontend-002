import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import MarkForm from '../../../../forms/MarkForm/MarkForm';

const MarkCreate = () => {
  return (
    <div>
      {/* Mark create table title section */}
      <Link to='/marks' className='add_button'>
        <button type='button' className='btn'>
          Mark Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Mark form section */}
      <MarkForm />
    </div>
  );
};

export default MarkCreate;
