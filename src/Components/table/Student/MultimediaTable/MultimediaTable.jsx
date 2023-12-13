/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
import MCImage1 from "../../../../../public/MultimediaClass/mulC1.jpg";
import MCImage2 from "../../../../../public/MultimediaClass/mulC2.jpg";
import MCImage3 from "../../../../../public/MultimediaClass/mulC3.jpg";

const MultimediaTable = () => {
  return (
    <>
      <section className="ftco-section" style={{ marginTop: "-130px" }}>
        <div className="container">
          <div className="row admin_table">
            {/* Multimedia level */}
            <div className="col-md-12">
              <div className="">
                {/* Multimedia title section */}
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
                    <b>Multimedia Class Room</b>
                  </h4>
                </div>

                {/*  Multimedia logo section*/}
                <div className="parent_notice_card">
                  <div className="row align-items-start library_image_1">
                    <div className="col">
                      <div className="responsive">
                        <div className="gallery">
                          <a target="_blank" href="img_5terre.jpg">
                            <img
                              src={MCImage1}
                              alt="Cinque Terre"
                              width="600"
                              height="400"
                            />
                          </a>
                          <div className="desc">Multimedia ClassRoom</div>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="responsive">
                        <div className="gallery">
                          <a target="_blank" href="img_5terre.jpg">
                            <img
                              src={MCImage2}
                              alt="Cinque Terre"
                              width="600"
                              height="400"
                            />
                          </a>
                          <div className="desc">Multimedia ClassRoom</div>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="responsive">
                        <div className="gallery">
                          <a target="_blank" href="img_5terre.jpg">
                            <img
                              src={MCImage3}
                              alt="Cinque Terre"
                              width="600"
                              height="400"
                            />
                          </a>
                          <div className="desc">Multimedia ClassRoom</div>
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
                              src={MCImage1}
                              alt="Cinque Terre"
                              width="600"
                              height="400"
                            />
                          </a>
                          <div className="desc">Multimedia ClassRoom</div>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="responsive">
                        <div className="gallery">
                          <a target="_blank" href="img_5terre.jpg">
                            <img
                              src={MCImage2}
                              alt="Cinque Terre"
                              width="600"
                              height="400"
                            />
                          </a>
                          <div className="desc">Multimedia ClassRoom</div>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="responsive">
                        <div className="gallery">
                          <a target="_blank" href="img_5terre.jpg">
                            <img
                              src={MCImage3}
                              alt="Cinque Terre"
                              width="600"
                              height="400"
                            />
                          </a>
                          <div className="desc">Multimedia ClassRoom</div>
                        </div>
                      </div>
                    </div>
                  </div>

                    {/* Multimedia Modal start */}
                    <div className="">
                      <button
                        type="button"
                        className="btn btn-primary library_details_button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal3"
                      >
                        Multimedia ClassRoom Details
                      </button>

                      <div
                        className="modal fade"
                        id="exampleModal3"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel3"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog library_details_modal">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h3
                                className="modal-title"
                                id="exampleModalLabel3"
                                style={{fontFamily:'Georgia Times New Roman, Times, serif'}}
                              >
                                Multimedia ClassRoom Details:
                              </h3>
                            </div>
                            <div className="library_details">
                              <p><b>Total Multimedia ClassRoom - </b> 10 Multimedia ClassRoom.</p>
                              <p><b>Total Element - </b> 30 chairs, 6 Tables, 10 light,
                              5 Fan. 
                              </p>
                              <p><b>Total Multimedia - </b>10 Multimedia.</p>
                              <p><b>Location - </b>East, Shapla Building.</p>
                              <p><b>Multimedia ClassRoom Assistant - </b>Rahman (Multimedia Class Teacher).</p>
                              <p><b>Area - </b>400 square feet.</p>

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
                    {/* Multimedia Modal end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MultimediaTable;
