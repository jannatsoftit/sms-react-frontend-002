import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import MarkForm from '../../../../forms/MarkForm/MarkForm';
import TopBar from "../../../../TopBar";

const MarkCreate = () => {
  return (
    <div>
      <TopBar/>
      {/* Mark create table title section */}
      <Link to='/admin/marks' className='add_button'>
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
