//import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Pagination = () => {

  const [admins, setAdmins] = useState(null);

  pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPrePage = 5;
  const lastIndex = currentPage * recordsPrePage;
  const firstIndex = lastIndex - recordsPrePage;
  const records = admins.splice(firstIndex, lastIndex);
  const nPage = Math.ceil(admins.length / recordsPrePage); // admin.length = 0,5,10,15,20....
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  // handle prePage, nextPage and CurrentPage function


  return (
    <>
      <div>
        <nav>
          <ul className='pagination'>
            <li className='page-item'>
              <Link to={'/'} className='page-link' onClick={perPage}>
                Prev
              </Link>
            </li>
            {
              numbers.map((n, i) => (
                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                  <Link to={'/'} className='page-item' onClick={handleCPage}>
                    {n}
                  </Link>
                </li>
              ))
            }
            <li className='page-item'>
              <Link to={'/'} className='page-link' onClick={nextPage}>
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Pagination;
