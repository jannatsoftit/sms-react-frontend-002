/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
import AdminSidebar from "../../../Sidebar/AdminSidebar";
import Footer from "../../../Footer";
import TopBar from "../../../TopBar";
import libraryImage1 from "../../../../assets/libraryImage/library1.png";
import libraryImage2 from "../../../../assets/libraryImage/library2.png";
import libraryImage3 from "../../../../assets/libraryImage/library3.jpg";
import libraryImage4 from "../../../../assets/libraryImage/library4.jpg";
import ComputerClubTable from "../ComputerClubTable/ComputerClubTable";
import MultimediaTable from "../MultimediaTable/MultimediaTable";

const FacilityTable = () => {
  return (
    <>
      <TopBar />
      <AdminSidebar>
        <section className="ftco-section" style={{ marginTop: "-80px" }}>
          <div className="container">
            <div className="row admin_table">
              {/* Library Facility */}
              <div className="col-md-12">
                <div className="">
                  {/* Library Facility title section */}
                  <div className="parent_notice_title">
                    <h4
                      style={{
                        width: "340px",
                        backgroundColor: "#053270",
                        borderRadius: "5px",
                        border: "3px solid black",
                        color: "#F7FBFF",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <b>Library Facility</b>
                    </h4>
                  </div>

                  {/*  Library Facility logo section*/}
                  <div className="parent_notice_card">
                    <div className="row align-items-start library_image_1">
                      <div className="col">
                        <div className="responsive">
                          <div className="gallery">
                            <a target="_blank" href="img_5terre.jpg">
                              <img
                                src={libraryImage1}
                                alt="Cinque Terre"
                                width="600"
                                height="400"
                              />
                            </a>
                            <div className="desc">Library Room.</div>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div className="responsive">
                          <div className="gallery">
                            <a target="_blank" href="img_5terre.jpg">
                              <img
                                src={libraryImage3}
                                alt="Cinque Terre"
                                width="600"
                                height="400"
                              />
                            </a>
                            <div className="desc">Library Room.</div>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div className="responsive">
                          <div className="gallery">
                            <a target="_blank" href="img_5terre.jpg">
                              <img
                                src={libraryImage2}
                                alt="Cinque Terre"
                                width="600"
                                height="400"
                              />
                            </a>
                            <div className="desc">Library Room.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row align-items-start library_image_2">
                      <div className="col">
                        <div className="responsive">
                          <div className="gallery">
                            <a target="_blank" href="img_5terre.jpg">
                              <img
                                src={libraryImage3}
                                alt="Cinque Terre"
                                width="600"
                                height="400"
                              />
                            </a>
                            <div className="desc">Library Room.</div>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div className="responsive">
                          <div className="gallery">
                            <a target="_blank" href="img_5terre.jpg">
                              <img
                                src={libraryImage4}
                                alt="Cinque Terre"
                                width="600"
                                height="400"
                              />
                            </a>
                            <div className="desc">Library Room.</div>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div className="responsive">
                          <div className="gallery">
                            <a target="_blank" href="img_5terre.jpg">
                              <img
                                src={libraryImage1}
                                alt="Cinque Terre"
                                width="600"
                                height="400"
                              />
                            </a>
                            <div className="desc">Library Room.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* library Modal start */}
                    <div className="">
                      <button
                        type="button"
                        className="btn btn-primary library_details_button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Library Facility Details
                      </button>

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog library_details_modal">
                          <div clclassNameass="modal-content">
                            <div className="modal-header">
                              <h3
                                className="modal-title"
                                id="exampleModalLabel"
                                style={{fontFamily:'Georgia Times New Roman, Times, serif'}}
                              >
                                Library Details:
                              </h3>
                            </div>
                            <div className="library_details">
                              <p><b>Total Library Room - </b> 2 Library Rooms.</p>
                              <p><b>Total Element - </b> 30 chairs, 6 Tables, 12 Book Shelfs, 10 light,
                              5 Fan.  
                              </p>
                              <p><b>Total Books - </b>3000 Books.</p>
                              <p><b>Location - </b>East, Shapla Building and Jamuna Building.</p>
                              <p><b>Library Room Assistant - </b>Farukh.</p>
                              <p><b>Area - </b>300 square feet.</p>

                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-info"
                                data-bs-dismiss="modal"
                                
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* library Modal end */}
                  </div>

                  {/* Computer Club section*/}
                  <ComputerClubTable />

                  {/* Multimedia section*/}
                  <MultimediaTable />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </AdminSidebar>
    </>
  );
};

export default FacilityTable;
