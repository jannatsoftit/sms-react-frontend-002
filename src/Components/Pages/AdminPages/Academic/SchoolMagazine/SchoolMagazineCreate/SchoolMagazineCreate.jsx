import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SchoolMagazineForm from '../../../../../forms/Admin/SchoolMagazineForm/SchoolMagazineForm';
import TopBar from "../../../../../TopBar";

const SchoolMagazineCreate = () => {
  return (
    <div>
        <TopBar/>
      {/* SchoolMagazine create table title section */}
      <Link to='/admin/schoolMagazines' className='add_button'>
        <button type='button' className='btn'>
         School Magazine Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* SchoolMagazine form section */}
      <SchoolMagazineForm />
    </div>
  );
};

export default SchoolMagazineCreate;
