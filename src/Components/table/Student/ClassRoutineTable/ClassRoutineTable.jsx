/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { BsDownload } from 'react-icons/bs';
import StudentSidebar from '../../../Sidebar/StudentSidebar';
import Footer from '../../../Footer';

// CLASS ROUTINE file
const CLASSROUTINE_2_FILE_URL =
  'http://localhost:5173/classRoutine/class_routine_2023_for_class_2.pdf';
const CLASSROUTINE_4_FILE_URL =
  'http://localhost:5173/classRoutine/class_routine_2023_for_class_4.pdf';
const CLASSROUTINE_6_FILE_URL =
  'http://localhost:5173/classRoutine/class_routine_2023_for_class_6.pdf';
const CLASSROUTINE_9_FILE_URL =
  'http://localhost:5173/classRoutine/class_routine_2023_for_class_9.pdf';
const CLASSROUTINE_10_FILE_URL =
  'http://localhost:5173/classRoutine/class_routine_2023_for_class_10.pdf';

const ClassRoutineTable = () => {
  // ClassRoutine data
  const [classRoutines, setClassRoutines] = useState(null);

  // ClassRoutine table reload state
  const [reload, setReload] = useState(0);

  // ClassRoutine table pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage; //lastIndex = 2 (lastIndex = 2, if recordsPerPage = 2  and lastIndex = 4, if recordsPerPage = 3...)
  const firstIndex = lastIndex - recordsPerPage; //firstIndex count kora hoy 2nd page theke...  //1st page record = recordsPerPage
  const records = classRoutines?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil((classRoutines || []).length / recordsPerPage); // classRoutines.length = 0,2,4,6,8....
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

  //Class Routines all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classRoutines?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setClassRoutines(res.data?.classRoutines);
      })
      .catch((error) => {
        console.error(error);
        setClassRoutines(null);
      });
  }, [reload]);

  // download CLASS ROUTINE file from public folder
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = blobURL;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <>
      <StudentSidebar>
        <section className='ftco-section'>
          <div className='container'>
            <div className='col-md-6 text-center mb-5'>
              <h2 className='heading-section'>Class Routine Table List</h2>
              <div className='admin'>
                <Link to='#' className='links'>
                  user
                </Link>
                <RxSlash />
                <Link to='' className='actives'>
                  class-routines
                </Link>
              </div>
            </div>
            <div className='row admin_table'>
              <div className='col-md-12'>
                <div className='table-wrap'>
                  <table className='table table-responsive-xl'>
                    <thead>
                      <tr>
                        <th>Class Name</th>
                        <th>Routine</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records?.map((record, i) => {
                        return (
                          <tr className='alert' role='alert' key={i}>
                            <td>
                              <span>{record?.class_name}</span>
                            </td>
                            <td>
                              {record?.id === 1 ? (
                                <div>
                                  <button
                                    onClick={() => {
                                      downloadFileAtURL(
                                        CLASSROUTINE_2_FILE_URL
                                      );
                                    }}
                                    style={{
                                      backgroundColor: '#00A3FF',
                                      color: 'white',
                                    }}
                                  >
                                    <BsDownload /> Download
                                  </button>
                                </div>
                              ) : record?.id === 2 ? (
                                <div>
                                  <button
                                    onClick={() => {
                                      downloadFileAtURL(
                                        CLASSROUTINE_4_FILE_URL
                                      );
                                    }}
                                    style={{
                                      backgroundColor: '#00A3FF',
                                      color: 'white',
                                    }}
                                  >
                                    <BsDownload /> Download
                                  </button>
                                </div>
                              ) : record?.id === 3 ? (
                                <div>
                                  <button
                                    onClick={() => {
                                      downloadFileAtURL(
                                        CLASSROUTINE_6_FILE_URL
                                      );
                                    }}
                                    style={{
                                      backgroundColor: '#00A3FF',
                                      color: 'white',
                                    }}
                                  >
                                    <BsDownload /> Download
                                  </button>
                                </div>
                              ) : record?.id === 4 ? (
                                <div>
                                  <button
                                    onClick={() => {
                                      downloadFileAtURL(
                                        CLASSROUTINE_9_FILE_URL
                                      );
                                    }}
                                    style={{
                                      backgroundColor: '#00A3FF',
                                      color: 'white',
                                    }}
                                  >
                                    <BsDownload /> Download
                                  </button>
                                </div>
                              ) : record?.id === 5 ? (
                                <div>
                                  <button
                                    onClick={() => {
                                      downloadFileAtURL(
                                        CLASSROUTINE_10_FILE_URL
                                      );
                                    }}
                                    style={{
                                      backgroundColor: '#00A3FF',
                                      color: 'white',
                                    }}
                                  >
                                    <BsDownload /> Download
                                  </button>
                                </div>
                              ) : null}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* classRoutine list table pagination start  */}
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
            {/* classRoutine list table pagination end  */}
          </div>
        </section>
        <Footer />
      </StudentSidebar>
    </>
  );
};

export default ClassRoutineTable;
