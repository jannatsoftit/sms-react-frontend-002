import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ParentTable = () => {
  // parent data
  const [parents, setParents] = useState(null);

  // parent table reload state
  const [reload, setReload] = useState(0);

  // parent table pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage; //lastIndex = 2 (lastIndex = 2, if recordsPerPage = 2  and lastIndex = 4, if recordsPerPage = 3...)
  const firstIndex = lastIndex - recordsPerPage;  //firstIndex count kora hoy 2nd page theke...  //1st page record = recordsPerPage
  const records = parents?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil((parents || []).length / recordsPerPage); // parents.length = 0,2,4,6,8....
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

  //parent data delete function
  const handleDelete = (parent) => {
    if (confirm(`Are You sure you want to delete parent ${parent.id}?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Delete Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      fetch(`http://127.0.0.1:8000/api/parents/${parent.id}`, {
        headers: {
          Accept: 'application/json',
        },
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((res) => {
          console.info(res);
          setReload((value) => ++value);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  //parent all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/parents?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setParents(res.data.parents);
      })
      .catch((error) => {
        console.error(error);
        setParents(null);
      });
  }, [reload]);

  return (
    <div>
      <section className='ftco-section'>
        <div className='container'>
          <div className='col-md-6 text-center mb-5'>
            <h2 className='heading-section'>Parent Table List</h2>
            <div className='admin'>
              <Link to='#' className='links'>
                user
              </Link>
              <RxSlash />
              <Link to='' className='actives'>
                parents
              </Link>
            </div>
          </div>
          <div className='row admin_table'>
            <div className='col-md-12'>
              <div className='table-wrap'>
                <table className='table table-responsive-xl'>
                  <thead>
                    <tr>
                    <th>Image</th>
                      <th>Designation</th>
                      <th>Department</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>User Info</th>
                      <th>Date Of Birth</th>
                      <th>Gender</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records?.map((record, i) => {
                      return (
                        <tr className='alert' role='alert' key={i}>
                          <td>
                            <img
                              className='rounded-circle'
                              src={`http://127.0.0.1:8000/storage/P_img/${record.image}`}
                              width='50px'
                              alt={record?.name}
                            />
                          </td>
                          <td>
                            <span>{record?.designation}</span>
                          </td>
                          <td>
                            <span>{record?.department}</span>
                          </td>
                          <td>
                            <span>{record?.email}</span>
                          </td>
                          <td>
                            <span>{record?.phone_number}</span>
                          </td>
                          <td>
                            <div className='user_information'>
                              <p>
                                <b>Info:</b> Blood Group:{record?.blood_group}, Address:{record?.address}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span>{record?.date_of_birth}</span>
                          </td>
                          <td>
                            <span>{record?.gender}</span>
                          </td>
                          <td>
                            <div className='dropdown'>
                              <button
                                className='btn btn-secondary dropdown-toggle'
                                type='button'
                                id='dropdownMenuButton1'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                              >
                                Actions
                              </button>
                              <ul
                                className='dropdown-menu'
                                aria-labelledby='dropdownMenuButton1'
                              >
                                <li>
                                  <Link
                                    className='dropdown-item'
                                    to={`/parents/${record?.id}`}
                                  >
                                    Show Parent
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className='dropdown-item'
                                    to={`/parents/${record?.id}/edit`}
                                  >
                                    Edit Parent
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className='dropdown-item'
                                    onClick={() => handleDelete(record)}
                                  >
                                    Delete Parent
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* parent list table pagination start  */}
          <nav className='pagination'>
            <ul className='pagination'>
              <li className='page-item'>
                <Link 
                  to={'#'} 
                  className='page-link' 
                  onClick={perPage}
                >
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
                <Link 
                  to={'#'} 
                  className='page-link' 
                  onClick={nextPage}
                >
                  Next
                </Link>
              </li>
            </ul>
          </nav>
          {/* parent list table pagination end  */}

        </div>
      </section>
    </div>
  );
};

export default ParentTable;
