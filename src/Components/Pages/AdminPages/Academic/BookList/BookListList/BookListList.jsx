import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import BookListTable from '../../../../../table/Admin/BookListTable/BookListTable';
import TopBar from "../../../../../TopBar";

const BookListList = () => {
  return (
    <div>
      <TopBar/>
      {/* BookList table title section */}
      <Link to='create' className='add_button'>
        <button type='button' className='btn'>
          <HiPlus /> BookList
        </button>
      </Link>

      {/* BookList table section */}
      <BookListTable />
    </div>
  );
};

export default BookListList;
