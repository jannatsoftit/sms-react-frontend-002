/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const TeacherTable = () => {

  // Teacher data
  const [teachers, setTeachers] = useState(null);

  // Teacher table reload state
  const [reload, setReload] = useState(0);

  // Teacher table pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage; //lastIndex = 2 (lastIndex = 2, if recordsPerPage = 2  and lastIndex = 4, if recordsPerPage = 3...)
  const firstIndex = lastIndex - recordsPerPage;  //firstIndex count kora hoy 2nd page theke...  //1st page record = recordsPerPage
  const records = teachers?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil((teachers || []).length / recordsPerPage); // teacher.length = 0,2,4,6,8....
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

  //Teacher data delete function
  const handleDelete = (teacher) => {
    if (confirm(`Are You sure you want to delete teacher ${teacher.id}?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Delete Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      fetch(`http://127.0.0.1:8000/api/teachers/${teacher.id}`, {
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

  //Teacher all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/teachers?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setTeachers(res.data.teachers);
      })
      .catch((error) => {
        console.error(error);
        setTeachers(null);
      });
  }, [reload]);

  return (
    <div>
      <section className='ftco-section'>
        <div className='container'>
          <div className='col-md-6 text-center mb-5'>
            <h2 className='heading-section'>Teacher Table List</h2>
            <div className='admin'>
              <Link to='#' className='links'>
                user
              </Link>
              <RxSlash />
              <Link to='' className='actives'>
                teachers
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
                      <th>Email</th>
                      <th>User Info</th>
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
                              src={`http://127.0.0.1:8000/storage/T_img/${record.image}`}
                              width='50px'
                              alt={record?.name}
                            />
                          </td>
                          <td>
                            <span>{record?.designation}</span>
                          </td>
                          <td>
                            <span>{record?.email}</span>
                          </td>
                          <td>
                            <div className='user_information'>
                              <p>
                                <b>Gender:</b> {record?.gender}
                              </p>
                              <p>
                                <b>Department:</b> {record?.department}
                              </p>
                              <p>
                                <b>Phone Number:</b> {record?.phone_number}
                              </p>
                              <p>
                                <b>Date Of Birth:</b> {record?.date_of_birth}
                              </p>
                              <p>
                                <b>Info:</b> {record?.blood_group}, {record?.address}
                              </p>
                            </div>
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
                                    to={`/teachers/${record?.id}`}
                                  >
                                    Show Teacher
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className='dropdown-item'
                                    to={`/teachers/${record?.id}/edit`}
                                  >
                                    Edit Teacher
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className='dropdown-item'
                                    onClick={() => handleDelete(record)}
                                  >
                                    Delete Teacher
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

          {/* Teacher list table pagination start  */}
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
          {/* Teacher list table pagination end  */}

        </div>
      </section>
    </div>
  );
};

export default TeacherTable;
