import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SchoolForm from '../../../../forms/Admin/SchoolForm/SchoolForm';
import TopBar from "../../../../TopBar";

const SchoolCreate = () => {
  return (
    <div>
      <TopBar/>
      {/* School create table title section */}
      <Link to='/admin/schools' className='add_button'>
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
