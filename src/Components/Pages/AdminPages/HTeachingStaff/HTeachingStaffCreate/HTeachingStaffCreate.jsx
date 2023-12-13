import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import HTeachingStaffForm from '../../../../forms/Admin/HTeachingStaffForm/HTeachingStaffForm';
import TopBar from "../../../../TopBar";

const HTeachingStaffCreate = () => {
  return (
    <div>
      <TopBar />
      {/* HTeaching Staff create table title section */}
      <Link to='/admin/all-teachingStaffs' className='add_button'>
        <button type='button' className='btn'>
          Teaching Staff Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* HTeaching Staff form section */}
      <HTeachingStaffForm />
    </div>
  );
};

export default HTeachingStaffCreate;
