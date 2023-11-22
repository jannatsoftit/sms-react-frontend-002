import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LibrarianDetail from '../../../details/LibrarianDetail/LibrarianDetail';

const LibrarianShow = () => {
  const { librarianId } = useParams();

  const [librarian, setLibrarian] = useState(null);

  // Librarian data show
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/librarians/${librarianId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setLibrarian(response.data?.librarian);
      })
      .catch((error) => {
        console.error(error);
        setLibrarian(null);
      });
  }, [librarianId]);

  return (
    <div>

      {/* Librarian create table title section */}
      <Link to='/librarians' className='add_button'>
        <button type='button' className='btn'>
          Librarian Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Librarian data details component */}
      <LibrarianDetail librarian={librarian} />
      
    </div>
  );
};

export default LibrarianShow;
