/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';

const ClassRoomTable = () => {
  // ClassRoom data
  const [classRooms, setClassRooms] = useState(null);

  // ClassRoom table reload state
  const [reload, setReload] = useState(0);

  // ClassRoom table pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage; //lastIndex = 2 (lastIndex = 2, if recordsPerPage = 2  and lastIndex = 4, if recordsPerPage = 3...)
  const firstIndex = lastIndex - recordsPerPage; //firstIndex count kora hoy 2nd page theke...  //1st page record = recordsPerPage
  const records = classRooms?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil((classRooms || []).length / recordsPerPage); // classRoom.length = 0,2,4,6,8....
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

  // ClassRoom data delete function
  const handleDelete = (classRoom) => {
    if (
      confirm(`Are You sure you want to delete class Room ${classRoom.id}?`)
    ) {
      Swal.fire({
        title: 'Success!',
        text: 'Information Delete Successfully!!',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      fetch(`http://127.0.0.1:8000/api/classRooms/${classRoom.id}`, {
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

  //ClassRoom all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classRooms?`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setClassRooms(res.data?.classRooms);
      })
      .catch((error) => {
        console.error(error);
        setClassRooms(null);
      });
  }, [reload]);

  return (
    <>
      <Sidebar>
        <section className='ftco-section'>
          <div className='container'>
            <div className='col-md-6 text-center mb-5'>
              <h2 className='heading-section'>Class Room Table List</h2>
              <div className='admin'>
                <Link to='#' className='links'>
                  user
                </Link>
                <RxSlash />
                <Link to='' className='actives'>
                  class-rooms
                </Link>
              </div>
            </div>
            <div className='row admin_table'>
              <div className='col-md-12'>
                <div className='table-wrap'>
                  <table className='table table-responsive-xl'>
                    <thead>
                      <tr>
                        <th>Room Name</th>
                        <th>Room Number</th>
                        <th>Building Name</th>
                        <th>Area</th>
                        <th>Total Room</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {console.info(records)}

                      {records?.map((record, i) => {
                        return (
                          <tr className='alert' role='alert' key={i}>
                            <td>
                              <span>{record?.class_room_name}</span>
                            </td>
                            <td>
                              <span>{record?.room_number}</span>
                            </td>
                            <td>
                              <span>{record?.building_name}</span>
                            </td>
                            <td>
                              <span>{record?.area}</span>
                            </td>
                            <td>
                              <span>{record?.total_room}</span>
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
                                      to={`/admin/classRooms/${record?.id}/edit`}
                                    >
                                      Edit ClassRoom
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className='dropdown-item'
                                      onClick={() => handleDelete(record)}
                                    >
                                      Delete ClassRoom
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

            {/* ClassRoom list table pagination start  */}
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
            {/* ClassRoom list table pagination end  */}
          </div>
        </section>
        <Footer />
      </Sidebar>
    </>
  );
};

export default ClassRoomTable;
