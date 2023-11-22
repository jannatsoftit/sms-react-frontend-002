import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ExamCategoryForm from '../../../../forms/ExamCategoryForm/ExamCategoryForm';

const ExamCategoryCreate = () => {
  return (
    <div>
      {/* ExamCategory create table title section */}
      <Link to='/examCategories' className='add_button'>
        <button type='button' className='btn'>
          ExamCategory Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* ExamCategory form section */}
      <ExamCategoryForm />
    </div>
  );
};

export default ExamCategoryCreate;
