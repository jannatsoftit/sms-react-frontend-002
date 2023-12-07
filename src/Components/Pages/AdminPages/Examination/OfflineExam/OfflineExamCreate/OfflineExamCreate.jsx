import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import OfflineExamForm from '../../../../../forms/Admin/OfflineExamForm/OfflineExamForm';
import TopBar from "../../../../../TopBar";

const OfflineExamCreate = () => {
  return (
    <div>
      <TopBar/>
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
