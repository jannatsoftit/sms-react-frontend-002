/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import StudentSidebar from "../../../Sidebar/StudentSidebar";
import Footer from "../../../Footer";

const AdmissionCircularTable = () => {
  // admissionCircular data
  const [admissionCirculars, setAdmissionCirculars] = useState(null);

  // admissionCircular table reload state
  const [reload, setReload] = useState(0);

  // admissionCircular table pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage; //lastIndex = 2 (lastIndex = 2, if recordsPerPage = 2  and lastIndex = 4, if recordsPerPage = 3...)
  const firstIndex = lastIndex - recordsPerPage; //firstIndex count kora hoy 2nd page theke...  //1st page record = recordsPerPage
  const records = admissionCirculars?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil((admissionCirculars || []).length / recordsPerPage); // admissionCirculars.length = 0,2,4,6,8....
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

  //Admission Circular all data show in the table
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/admissionCirculars?`, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setAdmissionCirculars(res.data?.admissionCirculars);
      })
      .catch((error) => {
        console.error(error);
        setAdmissionCirculars(null);
      });
  }, [reload]);

  return (
    <>
      <StudentSidebar>
        <section className="ftco-section">
          <div className="container">
            <div className="col-md-7 text-center mb-5">
              <h2 className="heading-section">Admission Circular Table List</h2>
              <div className="admin">
                <Link to="#" className="links">
                  user
                </Link>
                <RxSlash />
                <Link to="" className="actives">
                  admission-circular
                </Link>
              </div>
            </div>
            <div className="admission_circular_row admin_table">
              <div className="col-md-2">
                <div className="">
                  <table className="table table-responsive-xl">
                    <thead>
                      <tr>
                        <th>Admission Circular</th>
                        <th>Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records?.map((record, i) => {
                        return (
                          <tr className="alert" role="alert" key={i}>
                            <td>
                              <span>{record?.title}</span>
                            </td>
                            <td>
                              { 
                                (record?.id) === 1 ? 
                              <div className="dropdown">
                                <button
                                  className="btn btn-secondary dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Actions
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to={"/student/admissionCirculars_ST/show"}
                                    >
                                      Show AdmissionCircular
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                                : 
                                (record?.id) === 2 ?
                              <div className="dropdown">
                                <button
                                  className="btn btn-secondary dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Actions
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to={"/student/admissionCirculars_OF/show"}
                                    >
                                      Show AdmissionCircular
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              :
                                (record?.id) === 3 ?
                              <div className="dropdown">
                                <button
                                  className="btn btn-secondary dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Actions
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to={"/student/admissionCirculars_OF/show"}
                                    >
                                      Show AdmissionCircular 1 to 5
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              :
                              null
                            } 
                            </td>  
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* admission Circular list table pagination start  */}
            <nav className="pagination">
              <ul className="pagination">
                <li className="page-item">
                  <Link to={"#"} className="page-link" onClick={perPage}>
                    Prev
                  </Link>
                </li>
                {numbers.map((n, i) => (
                  <li
                    className={`page-item ${currentPage === n ? "active" : ""}`}
                    key={i}
                  >
                    <Link
                      to={"#"}
                      className="page-link"
                      onClick={() => handleCPage(n)}
                    >
                      {n}
                    </Link>
                  </li>
                ))}
                <li className="page-item">
                  <Link to={"#"} className="page-link" onClick={nextPage}>
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
            {/* AdmissionCircular list table pagination end  */}
          </div>
        </section>
        <Footer />
      </StudentSidebar>
    </>
  );
};

export default AdmissionCircularTable;
