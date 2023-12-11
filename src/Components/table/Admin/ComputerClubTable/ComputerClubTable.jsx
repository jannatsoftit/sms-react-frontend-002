/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import computerClubImage1 from '../../../../assets/computerClub/computerclub1.png';
import computerClubImage2 from '../../../../assets/computerClub/computerclub2.png';
import computerClubImage3 from '../../../../assets/computerClub/computerclub3.jpg';
import computerClubImage4 from '../../../../assets/computerClub/computerclub6.jpg';

const ComputerClubTable = () => {
  return (
    <>
      <section className='ftco-section' style={{ marginTop: '-80px' }}>
        <div className='container'>
          <div className='row admin_table'>
            {/* higher level */}
            <div className='col-md-12'>
              <div className=''>
                {/* parent notice title section */}
                <div className='parent_notice_title'>
                  <h4
                    style={{
                      width: '340px',
                      backgroundColor: '#053270',
                      borderRadius: '5px',
                      border: '3px solid black',
                      color: '#F7FBFF',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <b>Computer Lab</b>
                  </h4>
                </div>

                {/*  Library Facility logo section*/}
                <div className='parent_notice_card'>
                  <div className='row align-items-start library_image_1'>

                    <div className='col'>
                      <div className="responsive">
                      <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                          <img src={computerClubImage1} alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Computer Club.</div>
                      </div>
                    </div>
                    </div>


                    <div className='col'>
                      <div className="responsive">
                      <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                          <img src={computerClubImage2} alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Computer Club .</div>
                      </div>
                    </div>
                    </div>

                    <div className='col'>
                      <div className="responsive">
                      <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                          <img src={computerClubImage3} alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Computer Club</div>
                      </div>
                    </div>
                    </div>

                  </div>


                  <div className='row align-items-start library_image_2'>
                    <div className='col'>
                      <div className="responsive">
                      <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                          <img src={computerClubImage4} alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Computer Club</div>
                      </div>
                    </div>
                    </div>

                    <div className='col'>
                      <div className="responsive">
                      <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                          <img src={computerClubImage1} alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Computer Club</div>
                      </div>
                    </div>
                    </div>

                    <div className='col'>
                      <div className="responsive">
                      <div className="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                          <img src={computerClubImage3} alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div className="desc">Computer Club</div>
                      </div>
                    </div>
                    </div>

                  </div>

                    {/* computer Modal start */}
                    <div className="">
                      <button
                        type="button"
                        className="btn btn-primary library_details_button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                      >
                        Computer Lab Details
                      </button>

                      <div
                        className="modal fade"
                        id="exampleModal2"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel2"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog library_details_modal">
                          <div clclassNameass="modal-content">
                            <div className="modal-header">
                              <h3
                                className="modal-title"
                                id="exampleModalLabel2"
                                style={{fontFamily:'Georgia Times New Roman, Times, serif'}}
                              >
                                Computer Lab Details:
                              </h3>
                            </div>
                            <div className="library_details">
                              <p><b>Total Computer Lab - </b> 1 Computer Lab Room.</p>
                              <p><b>Total Element - </b> 30 chairs, 6 Tables, 10 light,
                              5 Fan. 
                              </p>
                              <p><b>Total Computers - </b>40 Computers.</p>
                              <p><b>Location - </b>East, Jamuna Building.</p>
                              <p><b>Computer Lab Assistant - </b>Fajlul Rahman (Computer Training Teacher).</p>
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
                    {/* computer Modal end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComputerClubTable;
