import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import StudentTable from '../../../table/StudentTable/StudentTable';

const StudentList = () => {
  return (
    <div>
      {/* Student table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Student
        </button>
      </Link>

      {/* Student table section */}
      <StudentTable />
    </div>
  )
}

export default StudentList;
