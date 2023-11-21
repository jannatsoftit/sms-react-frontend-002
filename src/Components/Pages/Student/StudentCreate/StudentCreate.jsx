import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import StudentForm from '../../../forms/StudentForm/StudentForm';

const StudentCreate = () => {
  return (
    <div>
      {/* Student create table title section */}
      <Link to='/students' className='add_button'>
        <button type='button' className='btn'>
          Student Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Student form section */}
      <StudentForm />
    </div>
  )
}
export default StudentCreate;
