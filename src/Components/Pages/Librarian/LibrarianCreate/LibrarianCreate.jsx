import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LibrarianForm from '../../../forms/LibrarianForm/LibrarianForm';

const LibrarianCreate = () => {
  return (
    <div>
      {/* Librarian create table title section */}
      <Link to='/librarians' className='add_button'>
        <button type='button' className='btn'>
          Librarian Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Librarian form section */}
      <LibrarianForm />
    </div>
  );
};

export default LibrarianCreate;