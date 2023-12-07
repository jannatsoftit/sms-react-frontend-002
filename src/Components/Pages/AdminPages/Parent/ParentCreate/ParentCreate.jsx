import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ParentForm from '../../../../forms/Admin/ParentForm/ParentForm';
import TopBar from "../../../../TopBar";

const ParentCreate = () => {
  return (
    <div>
      <TopBar/>
      {/* Parent create table title section */}
      <Link to='/admin/parents' className='add_button'>
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
