import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import LibrarianTable from '../../../../table/Admin/LibrarianTable/LibrarianTable';
import TopBar from "../../../../TopBar";

const LibrarianList = () => {
  return (
    <div>
      <TopBar/>
      {/* Librarian table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> Librarian
        </button>
      </Link>

      {/* Librarian table section */}
      <LibrarianTable />
    </div>
  );
};

export default LibrarianList;
