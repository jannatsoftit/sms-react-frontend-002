import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import StudentSidebar from "../../../Sidebar/StudentSidebar";
import Footer from "../../../Footer";


const ExpanseCategoryTable = () => {
  // ExpanseCategory data
  const [expanseCategories, setExpanseCategories] = useState(null);

  // ExpanseCategory table reload state
  const [reload, setReload] = useState(0);

  // ExpanseCategory table pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage; //lastIndex = 2 (lastIndex = 2, if recordsPerPage = 2  and lastIndex = 4, if recordsPerPage = 3...)
  const firstIndex = lastIndex - recordsPerPage; //firstIndex count kora hoy 2nd page theke...  //1st page record = recordsPerPage
  const records = expanseCategories?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil((expanseCategories || []).length / recordsPerPage); // expanseCategories.length = 0,2,4,6,8....
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  // handle prePage, nextPage and CurrentPage function

  const perPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  //expanseCategory all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/expanseCategories?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setExpanseCategories(res.data?.expanseCategories);
      })
      .catch((error) => {
        console.error(error);
        setExpanseCategories(null);
      });
  }, [reload]);

  return (
    <>
      <StudentSidebar>
        <section className='ftco-section'>
          <div className='container' style={{marginLeft:'120px'}}>
            <div className='col-md-7 text-center mb-5' style={{marginTop:'60px'}}>
              <h2 className='heading-section'>Expanse Category Table List</h2>
              <div className='admin'>
                <Link to='#' className='links'>
                  user
                </Link>
                <RxSlash />
                <Link to='' className='actives'>
                  expanse-categories
                </Link>
              </div>
            </div>
            <div className='row admin_table'>
              <div className='col-md-4'>
                <div className=''>
                  <table className='table table-responsive-xl'>
                    <thead>
                      <tr >
                        <th><div style={{marginLeft:'330px'}}>Expanse Category Name</div></th>
                      </tr>
                    </thead>
                    <tbody>
                      {records?.map((record, i) => {
                        return (
                          <tr className='alert' role='alert' key={i}>
                            <td>
                              <span style={{marginLeft:'380px'}}>{record?.name}</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* expanseCategory list table pagination start  */}
            <nav className='pagination'>
              <ul className='pagination'>
                <li className='page-item'>
                  <Link to={'#'} className='page-link' onClick={perPage}>
                    Prev
                  </Link>
                </li>
                {numbers.map((n, i) => (
                  <li
                    className={`page-item ${currentPage === n ? 'active' : ''}`}
                    key={i}
                  >
                    <Link
                      to={'#'}
                      className='page-link'
                      onClick={() => handleCPage(n)}
                    >
                      {n}
                    </Link>
                  </li>
                ))}
                <li className='page-item'>
                  <Link to={'#'} className='page-link' onClick={nextPage}>
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
            {/* expanseCategory list table pagination end  */}
          </div>
        </section>
        <Footer />
      </StudentSidebar>
    </>
  );
};

export default ExpanseCategoryTable;
