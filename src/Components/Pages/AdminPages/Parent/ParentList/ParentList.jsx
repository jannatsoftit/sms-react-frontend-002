import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import ParentTable from '../../../../table/Admin/ParentTable/ParentTable';
import TopBar from "../../../../TopBar";

const ParentList = () => {
  return (
    <div>
      <TopBar/>
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
