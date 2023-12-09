import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import SchoolMagazineTable from '../../../../../table/Admin/SchoolMagazineTable/SchoolMagazineTable';
import TopBar from "../../../../../TopBar";

const SchoolMagazineList = () => {
  return (
    <div>
      <TopBar/>
      {/* SchoolMagazine table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> SchoolMagazine
        </button>
      </Link>

      {/* SchoolMagazine table section */}
      <SchoolMagazineTable />
    </div>
  );
};

export default SchoolMagazineList;
