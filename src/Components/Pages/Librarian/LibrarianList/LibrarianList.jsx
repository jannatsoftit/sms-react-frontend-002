import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import LibrarianTable from '../../../table/LibrarianTable/LibrarianTable';

const LibrarianList = () => {
  return (
    <div>
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
