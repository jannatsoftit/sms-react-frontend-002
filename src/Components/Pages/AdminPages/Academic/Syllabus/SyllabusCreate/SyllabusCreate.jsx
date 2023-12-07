import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SyllabusForm from '../../../../forms/SyllabusForm/SyllabusForm';
import TopBar from "../../../../TopBar";

const SyllabusCreate = () => {
  return (
    <div>
      <TopBar/>
      {/* Syllabus create table title section */}
      <Link to='/admin/syllabuses' className='add_button'>
        <button type='button' className='btn'>
          Syllabus Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Syllabus form section */}
      <SyllabusForm />
    </div>
  );
};

export default SyllabusCreate;
