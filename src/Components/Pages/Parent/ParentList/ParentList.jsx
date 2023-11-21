import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import ParentTable from '../../../table/ParentTable/ParentTable';

const ParentList = () => {
  return (
    <div>
      {/* Parent table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Parent
        </button>
      </Link>

      {/* Parent table section */}
      <ParentTable />
    </div>
  );
};

export default ParentList;
