/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
import { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";
import Swal from "sweetalert2";
import TeacherSidebar from "../../../Sidebar/TeacherSidebar";
import Footer from "../../../Footer";

// offline exam routine file
const EXAMROUTINE_2_FILE_URL ="http://localhost:5173/examRoutine/exam_routine_2023_for_class_2.pdf";
const EXAMROUTINE_4_FILE_URL ="http://localhost:5173/examRoutine/exam_routine_2023_for_class_4.pdf";
const EXAMROUTINE_6_FILE_URL ="http://localhost:5173/examRoutine/exam_routine_2023_for_class_6.pdf";
const EXAMROUTINE_9_FILE_URL ="http://localhost:5173/examRoutine/exam_routine_2023_for_class_9.pdf";
const EXAMROUTINE_10_FILE_URL ="http://localhost:5173/examRoutine/exam_routine_2023_for_class_10.pdf";

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

    //Offline Exam all data show in the table
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/offlineExams?`, {
        headers: {
          Accept: "application/json",
        },
        method: "GET",
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

    // download exam-routine file from public folder
    const downloadFileAtURL = (url) => {
      fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      })
      
    };

  return (
    <>
      <TeacherSidebar>
        <section className="ftco-section">
          <div className="container">
            <div className="col-md-7 text-center mb-5 mt-5">
              <h2 className="heading-section">Offline Exam Table List</h2>
              <div className="admin" style={{marginLeft:'30px'}}>
                <Link to="#" className="links">
                  examination
                </Link>
                <RxSlash />
                <Link to="" className="actives">
                  offline-exams
                </Link>
              </div>
            </div>
            <div className="row admin_table offline_exam_table">
              <div className="col-md-12">
                <div className="">
                  <table className="table table-responsive-xl">
                    <thead>
                      <tr>
                        <th>Exam Name</th>
                        <th>Starting Time</th>
                        <th>Ending Time</th>
                        <th>Total Marks</th>
                        <th>Exam Routine</th>
                      </tr>
                    </thead>
                    <tbody>
                      {console.info(records)}

                      {records?.map((record, i) => {
                        return (
                          <tr className="alert" role="alert" key={i}>
                            <td>
                              <span>{record?.exam_name}</span>
                            </td>
                            <td>
                              <span>{record?.exam_start_time}</span>
                            </td>
                            <td>
                              <span>{record?.exam_end_time}</span>
                            </td>
                            <td>
                              <span>{record?.total_marks}</span>
                            </td>
                            <td>
                            { 
                            (record?.id) === 2 ? 
                            (
                              <div>
                                <button
                                  onClick={() => {
                                    downloadFileAtURL(EXAMROUTINE_2_FILE_URL);
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
                                    downloadFileAtURL(EXAMROUTINE_4_FILE_URL);
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
                                    downloadFileAtURL(EXAMROUTINE_6_FILE_URL);
                                  }}
                                  style={{ backgroundColor: "#00A3FF", color:'white' }}
                                >
                                  <BsDownload /> Download
                                </button>
                              </div>
                            )
                            :
                            (record?.id) === 6 ? 
                            (
                              <div>
                                <button
                                  onClick={() => {
                                    downloadFileAtURL(EXAMROUTINE_9_FILE_URL);
                                  }}
                                  style={{ backgroundColor: "#00A3FF", color:'white' }}
                                  
                                >
                                  <BsDownload /> Download
                                </button>
                              </div>
                            )
                            :
                            (record?.id) === 7 ? 
                            (
                              <div>
                                <button
                                  onClick={() => {
                                    downloadFileAtURL(EXAMROUTINE_10_FILE_URL);
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
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Offline Exam list table pagination start  */}
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
            {/* Offline Exam list table pagination end  */}
          </div>
        </section>
        <Footer />
      </TeacherSidebar>
    </>
  );
};

export default OfflineExamTable;
