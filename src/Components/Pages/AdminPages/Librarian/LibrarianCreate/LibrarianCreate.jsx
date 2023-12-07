import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LibrarianForm from '../../../../forms/Admin/LibrarianForm/LibrarianForm';
import TopBar from "../../../../TopBar";

const LibrarianCreate = () => {
  return (
    <div>
      <TopBar/>
      {/* Librarian create table title section */}
      <Link to='/admin/librarians' className='add_button'>
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
