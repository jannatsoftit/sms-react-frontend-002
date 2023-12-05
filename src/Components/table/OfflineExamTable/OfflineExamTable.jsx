/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';

const OfflineExamTable = () => {
  // Offline Exam data
  const [offlineExams, setOfflineExams] = useState(null);

  // Offline Exam table reload state
  const [reload, setReload] = useState(0);

  // Offline Exam table pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage; //lastIndex = 2 (lastIndex = 2, if recordsPerPage = 2  and lastIndex = 4, if recordsPerPage = 3...)
  const firstIndex = lastIndex - recordsPerPage; //firstIndex count kora hoy 2nd page theke...  //1st page record = recordsPerPage
  const records = offlineExams?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil((offlineExams || []).length / recordsPerPage); // offlineExams.length = 0,2,4,6,8....
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

  // Offline Exam data delete function
  const handleDelete = (offlineExam) => {
    if (
      confirm(`Are You sure you want to delete offline exam ${offlineExam.id}?`)
    ) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Delete Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      fetch(`http://127.0.0.1:8000/api/offlineExams/${offlineExam.id}`, {
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

  //Offline Exam all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/offlineExams?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setOfflineExams(res.data?.offlineExams);
      })
      .catch((error) => {
        console.error(error);
        setOfflineExams(null);
      });
  }, [reload]);

  return (
    <>
      <Sidebar>
        <section className='ftco-section'>
          <div className='container'>
            <div className='col-md-6 text-center mb-5'>
              <h2 className='heading-section'>Offline Exam Table List</h2>
              <div className='admin'>
                <Link to='#' className='links'>
                  user
                </Link>
                <RxSlash />
                <Link to='' className='actives'>
                  offline-exams
                </Link>
              </div>
            </div>
            <div className='row admin_table'>
              <div className='col-md-12'>
                <div className='table-wrap'>
                  <table className='table table-responsive-xl'>
                    <thead>
                      <tr>
                        <th>Exam Name</th>
                        <th>Paper</th>
                        <th>Class Name</th>
                        <th>Section</th>
                        <th>Subject Code</th>
                        <th>Exam Date</th>
                        <th>Exam Start Time</th>
                        <th>Exam End Time</th>
                        <th>Building Name</th>
                        <th>Room Number</th>
                        <th>Total Marks</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {console.info(records)}

                      {records?.map((record, i) => {
                        return (
                          <tr className='alert' role='alert' key={i}>
                            <td>
                              <span>{record?.exam_name}</span>
                            </td>
                            <td>
                              <span>{record?.paper}</span>
                            </td>
                            <td>
                              <span>{record?.class_name}</span>
                            </td>
                            <td>
                              <span>{record?.section}</span>
                            </td>
                            <td>
                              <span>{record?.subject_code}</span>
                            </td>
                            <td>
                              <span>{record?.date_time}</span>
                            </td>
                            <td>
                              <span>{record?.exam_start_time}</span>
                            </td>
                            <td>
                              <span>{record?.exam_end_time}</span>
                            </td>
                            <td>
                              <span>{record?.building_name}</span>
                            </td>
                            <td>
                              <span>{record?.room_number}</span>
                            </td>
                            <td>
                              <span>{record?.total_marks}</span>
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
                                      to={`/admin/offlineExams/${record?.id}/edit`}
                                    >
                                      Edit Offline Exam
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className='dropdown-item'
                                      onClick={() => handleDelete(record)}
                                    >
                                      Delete Offline Exam
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

            {/* Offline Exam list table pagination start  */}
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
            {/* Offline Exam list table pagination end  */}
          </div>
        </section>
        <Footer />
      </Sidebar>
    </>
  );
};

export default OfflineExamTable;
