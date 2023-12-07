import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SubjectForm from '../../../../forms/SubjectForm/SubjectForm';
import TopBar from "../../../../TopBar";

const SubjectCreate = () => {
  return (
    <div>
      <TopBar/>
      {/* Subject create table title section */}
      <Link to='/admin/subjects' className='add_button'>
        <button type='button' className='btn'>
          Subject Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Subject form section */}
      <SubjectForm />
    </div>
  );
};

export default SubjectCreate;
