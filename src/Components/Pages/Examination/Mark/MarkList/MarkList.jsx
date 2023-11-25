import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import MarkTable from '../../../../table/MarkTable/MarkTable';

const MarkList = () => {
  return (
    <div>
      {/* Mark table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Mark
        </button>
      </Link>

      {/* Mark table section */}
      <MarkTable />
    </div>
  );
};

export default MarkList;
