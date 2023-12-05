import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import TeacherTable from '../../../table/TeacherTable/TeacherTable';
import TopBar from '../../../TopBar';

const TeacherList = () => {
  return (
    <div>
      <TopBar />
      {/* Teacher table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Teacher
        </button>
      </Link>

      {/* Teacher table section */}
      <TeacherTable />
    </div>
  );
};

export default TeacherList;
