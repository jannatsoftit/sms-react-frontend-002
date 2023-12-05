import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import TeacherForm from '../../../forms/TeacherForm/Teacherform';

const TeacherCreate = () => {
  return (
    <div>
      {/* Teacher create table title section */}
      <Link to='/admin/teachers' className='add_button'>
        <button type='button' className='btn'>
          Teacher Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Teacher form section */}
      <TeacherForm />
    </div>
  );
};

export default TeacherCreate;
