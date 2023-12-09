/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { BsDownload } from "react-icons/bs";
import Swal from 'sweetalert2';
import AdminSidebar from "../../../Sidebar/AdminSidebar";
import Footer from "../../../Footer";


// BOOK LIST file
const BOOKLIST_2_FILE_URL ="http://localhost:5173/book_list_2023_for_class_2.pdf";
const BOOKLIST_4_FILE_URL ="http://localhost:5173/book_list_2023_for_class_4.pdf";
const BOOKLIST_6_FILE_URL ="http://localhost:5173/book_list_2023_for_class_6.pdf";
const BOOKLIST_9_FILE_URL ="http://localhost:5173/book_list_2023_for_class_9.pdf";
const BOOKLIST_10_FILE_URL ="http://localhost:5173/book_list_2023_for_class_10.pdf";

const SchoolMagazineTable = () => {  //schoolMagazines
  // SchoolMagazine data
  const [schoolMagazines, setSchoolMagazines] = useState(null);

  // SchoolMagazine table reload state
  const [reload, setReload] = useState(0);

  // SchoolMagazine table pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage; //lastIndex = 2 (lastIndex = 2, if recordsPerPage = 2  and lastIndex = 4, if recordsPerPage = 3...)
  const firstIndex = lastIndex - recordsPerPage; //firstIndex count kora hoy 2nd page theke...  //1st page record = recordsPerPage
  const records = schoolMagazines?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil((schoolMagazines || []).length / recordsPerPage); // schoolMagazines.length = 0,2,4,6,8....
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

  // schoolMagazines data delete function
  const handleDelete = (schoolMagazine) => {
    if (
      confirm(`Are You sure you want to delete book list ${schoolMagazine.id}?`)
    ) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Delete Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      fetch(`http://127.0.0.1:8000/api/schoolMagazines/${schoolMagazine.id}`, {
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

  //schoolMagazines all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/schoolMagazines?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setSchoolMagazines(res.data?.bookLists);
      })
      .catch((error) => {
        console.error(error);
        setSchoolMagazines(null);
      });
  }, [reload]);

    // download School Magazines file from public folder
    const downloadFileAtURL = (url) => {
      const fileName = url.split("/").pop();
      const aTag = document.createElement("a");
      aTag.href = url;
      aTag.setAttribute("download", fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    };

  return (
    <>
      <AdminSidebar>
        <section className='ftco-section'>
          <div className='container'>
            <div className='col-md-6 text-center mb-5'>
              <h2 className='heading-section'>School Magazine Table</h2>
              <div className='admin'>
                <Link to='#' className='links'>
                  user
                </Link>
                <RxSlash />
                <Link to='' className='actives'>
                  school-magazines
                </Link>
              </div>
            </div>
            <div className='row admin_table'>
              <div className='col-md-12'>
                <div className='table-wrap'>
                  <table className='table table-responsive-xl'>
                    <thead>
                      <tr>
                        <th>School Magazine Year</th>
                        <th>School Magazine</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {console.info(records)}

                      {records?.map((record, i) => {
                        return (
                          <tr className='alert' role='alert' key={i}>
                            <td>
                              <span>{record?.magazine_name}</span>
                            </td>
                            <td>
                            { 
                            (record?.id) === 1 ?
                            (
                              <div>
                                <button
                                  onClick={() => {
                                    downloadFileAtURL(BOOKLIST_2_FILE_URL);
                                  }}
                                  style={{ backgroundColor: "#00A3FF", color:'white' }}
                                  
                                >
                                  <BsDownload /> Download
                                </button>
                              </div>
                            ) 
                            : 
                            (record?.id) === 2 ?
                            (
                              <div>
                                <button
                                  onClick={() => {
                                    downloadFileAtURL(BOOKLIST_4_FILE_URL);
                                  }}
                                  style={{ backgroundColor: "#00A3FF", color:'white' }}
                                >
                                  <BsDownload /> Download
                                </button>
                              </div>
                            )
                            :
                            (record?.id) === 3 ?
                            (
                              <div>
                                <button
                                  onClick={() => {
                                    downloadFileAtURL(BOOKLIST_6_FILE_URL);
                                  }}
                                  style={{ backgroundColor: "#00A3FF", color:'white' }}
                                >
                                  <BsDownload /> Download
                                </button>
                              </div>
                            )
                            :
                            (record?.id) === 4 ?
                            (
                              <div>
                                <button
                                  onClick={() => {
                                    downloadFileAtURL(BOOKLIST_9_FILE_URL);
                                  }}
                                  style={{ backgroundColor: "#00A3FF", color:'white' }}
                                >
                                  <BsDownload /> Download
                                </button>
                              </div>
                            )
                            :
                            (record?.id) === 5 ?
                            (
                              <div>
                                <button
                                  onClick={() => {
                                    downloadFileAtURL(BOOKLIST_10_FILE_URL);
                                  }}
                                  style={{ backgroundColor: "#00A3FF", color:'white' }}
                                >
                                  <BsDownload /> Download
                                </button>
                              </div>
                            )
                            :
                            null
                            
                            }
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
                                      to={`/admin/schoolMagazines/${record?.id}/edit`}
                                    >
                                      Edit SchoolMagazine
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className='dropdown-item'
                                      onClick={() => handleDelete(record)}
                                    >
                                      Delete SchoolMagazine
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

            {/* SchoolMagazine list table pagination start  */}
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
            {/* SchoolMagazine list table pagination end  */}
          </div>
        </section>
        <Footer />
      </AdminSidebar>
    </>
  );
};

export default SchoolMagazineTable;
