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
                          <div className="desc">Computer Club.</div>
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
                          <div className="desc">Computer Club .</div>
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
                          <div className="desc">Computer Club</div>
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
                          <div className="desc">Computer Club</div>
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
                          <div className="desc">Computer Club</div>
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
                          <div className="desc">Computer Club</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
