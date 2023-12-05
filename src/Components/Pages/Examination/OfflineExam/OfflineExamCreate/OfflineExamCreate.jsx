import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import OfflineExamForm from '../../../../forms/OfflineExamForm/OfflineExamForm';

const OfflineExamCreate = () => {
  return (
    <div>
      {/* OfflineExam create table title section */}
      <Link to='/admin/offlineExams' className='add_button'>
        <button type='button' className='btn'>
          Offline Exam Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* OfflineExam form section */}
      <OfflineExamForm />
    </div>
  );
};

export default OfflineExamCreate;
