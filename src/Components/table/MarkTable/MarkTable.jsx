/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const MarkTable = () => {
  // Mark data
  const [marks, setMarks] = useState(null);
  console.log(marks);

  // Mark table reload state
  const [reload, setReload] = useState(0);

  // Mark table pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2;
  const lastIndex = currentPage * recordsPerPage; //lastIndex = 2 (lastIndex = 2, if recordsPerPage = 2  and lastIndex = 4, if recordsPerPage = 3...)
  const firstIndex = lastIndex - recordsPerPage; //firstIndex count kora hoy 2nd page theke...  //1st page record = recordsPerPage
  const records = marks?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil((marks || []).length / recordsPerPage); // marks.length = 0,2,4,6,8....
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

  // Mark data delete function
  const handleDelete = (mark) => {
    if (confirm(`Are You sure you want to delete mark ${mark.id}?`)) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Delete Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      fetch(`http://127.0.0.1:8000/api/marks/${mark.id}`, {
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

  //mark all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/marks?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setMarks(res.data?.marks);
      })
      .catch((error) => {
        console.error(error);
        setMarks(null);
      });
  }, [reload]);

  return (
    <div>
      <section className='ftco-section'>
        <div className='container'>
          <div className='col-md-6 text-center mb-5'>
            <h2 className='heading-section'>Mark Table List</h2>
            <div className='admin'>
              <Link to='#' className='links'>
                user
              </Link>
              <RxSlash />
              <Link to='' className='actives'>
                marks
              </Link>
            </div>
          </div>
          <div className='row admin_table'>
            <div className='col-md-12'>
              <div className='table-wrap'>
                <table className='table table-responsive-xl'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Student Name</th>
                      <th>Total Marks</th>
                      <th>Grade Point</th>
                      <th>Class name</th>
                      <th>Letter Grade</th>
                      <th>Section</th>
                      <th>Comment</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.info(records)}

                    {records?.map((record, i) => {
                      return (
                        <tr className='alert' role='alert' key={i}>
                          <td>
                            <span>{record?.id}</span>
                          </td>
                          <td>
                            <span>{record?.student_name}</span>
                          </td>
                          <td>
                            <span>{record?.total_marks}</span>
                          </td>
                          <td>
                            <span>{record?.grade_point}</span>
                          </td>
                          <td>
                            <span>{record?.class_name}</span>
                          </td>
                          <td>
                            <span>{record?.letter_grade}</span>
                          </td>
                          <td>
                            <span>{record?.section}</span>
                          </td>
                          <td>
                            <span>{record?.comment}</span>
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
                                    to={`/marks/${record?.id}/edit`}
                                  >
                                    Edit Mark
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className='dropdown-item'
                                    onClick={() => handleDelete(record)}
                                  >
                                    Delete Mark
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

          {/* Exam Category list table pagination start  */}
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
          {/* Exam Category list table pagination end  */}
        </div>
      </section>
    </div>
  );
};

export default MarkTable;
