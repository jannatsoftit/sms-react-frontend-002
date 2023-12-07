import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import SyllabusTable from '../../../../table/SyllabusTable/SyllabusTable';
import TopBar from "../../../../TopBar";

const SyllabusList = () => {
  return (
    <div>
      <TopBar/>
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
