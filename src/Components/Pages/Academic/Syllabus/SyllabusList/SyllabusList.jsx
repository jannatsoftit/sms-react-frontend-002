import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import SyllabusTable from '../../../../table/SyllabusTable/SyllabusTable';

const SyllabusList = () => {
  return (
    <div>
      {/* Syllabus table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Syllabus
        </button>
      </Link>

      {/* Syllabus table section */}
      <SyllabusTable />
    </div>
  );
};

export default SyllabusList;
