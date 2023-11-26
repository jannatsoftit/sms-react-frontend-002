import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import SubjectTable from '../../../../table/SubjectTable/SubjectTable';

const SubjectList = () => {
  return (
    <div>
      {/* Subject table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Subject
        </button>
      </Link>

      {/* Subject table section */}
      <SubjectTable />
    </div>
  );
};

export default SubjectList;
