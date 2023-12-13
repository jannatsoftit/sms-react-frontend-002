import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PTeachingStaffForm from '../../../../forms/Admin/PTeachingStaffForm/PTeachingStaffForm';
import TopBar from "../../../../TopBar";

const PTeachingStaffCreate = () => {
  return (
    <div>
      <TopBar />
      {/* PTeaching Staff create table title section */}
      <Link to='/admin/all-teachingStaffs' className='add_button'>
        <button type='button' className='btn'>
          Teaching Staff Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* PTeaching Staff form section */}
      <PTeachingStaffForm />
    </div>
  );
};

export default PTeachingStaffCreate;
