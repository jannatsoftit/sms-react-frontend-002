import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import HSTeachingStaffForm from '../../../../forms/Admin/HSTeachingStaffForm/HSTeachingStaffForm';
import TopBar from "../../../../TopBar";

const HSTeachingStaffCreate = () => {
  return (
    <div>
      <TopBar />
      {/* HSTeaching Staff create table title section */}
      <Link to='/admin/tteachingStaffs' className='add_button'>
        <button type='button' className='btn'>
          HS Teaching Staff Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* HSTeaching Staff form section */}
      <HSTeachingStaffForm />
    </div>
  );
};

export default HSTeachingStaffCreate;
