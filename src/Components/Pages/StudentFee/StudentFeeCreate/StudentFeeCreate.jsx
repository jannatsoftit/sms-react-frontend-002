import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import StudentFeeForm from '../../../../Components/forms/StudentFeeForm/StudentFeeForm';

const StudentFeeCreate = () => {
  return (
    <div>
      {/* StudentFee create table title section */}
      <Link to='/admin/studentFees' className='add_button'>
        <button type='button' className='btn'>
          Student Fee Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* StudentFee form section */}
      <StudentFeeForm />
    </div>
  );
};

export default StudentFeeCreate;
