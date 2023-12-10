import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import NonTeachingStaffForm from '../../../../forms/Admin/NonTeachingStaffForm/NonTeachingStaffForm';
import TopBar from "../../../../TopBar";

const NonTeachingStaffCreate = () => {
  return (
    <div>
      <TopBar />
      {/* NonTeaching Staff create table title section */}
      <Link to='/admin/nonTeachingStaffs' className='add_button'>
        <button type='button' className='btn'>
          Non-Teaching Staff Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* HTeaching Staff form section */}
      <NonTeachingStaffForm />
    </div>
  );
};

export default NonTeachingStaffCreate;
