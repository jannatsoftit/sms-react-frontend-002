import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import MarkTable from '../../../../../table/Admin/MarkTable/MarkTable';
import TopBar from "../../../../../TopBar";

const MarkList = () => {
  return (
    <div>
      <TopBar/>
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
