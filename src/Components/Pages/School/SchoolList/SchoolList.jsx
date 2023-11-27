import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import SchoolTable from '../../../table/SchoolTable/SchoolTable';

const SchoolList = () => {
  return (
    <div>
      {/* School table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> School
        </button>
      </Link>

      {/* Parent table section */}
      <SchoolTable />
    </div>
  );
};

export default SchoolList;
