import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ExamCategoryForm from '../../../../../forms/Admin/ExamCategoryForm/ExamCategoryForm';
import TopBar from "../../../../../TopBar";

const ExamCategoryCreate = () => {
  return (
    <div>
      <TopBar/>
      {/* ExamCategory create table title section */}
      <Link to='/admin/examCategories' className='add_button'>
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
