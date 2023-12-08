import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import BookListForm from '../../../../../forms/Admin/BookListForm/BookListForm';
import TopBar from "../../../../../TopBar";

const BookListCreate = () => {
  return (
    <div>
        <TopBar/>
      {/* BookList create table title section */}
      <Link to='/admin/classRooms' className='add_button'>
        <button type='button' className='btn'>
          BookList Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* BookList form section */}
      <BookListForm />
    </div>
  );
};

export default BookListCreate;
