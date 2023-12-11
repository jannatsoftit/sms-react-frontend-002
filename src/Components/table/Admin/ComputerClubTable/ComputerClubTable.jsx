/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import AdminSidebar from '../../../Sidebar/AdminSidebar';
import Footer from '../../../Footer';
import TopBar from '../../../TopBar';
import computerClubImage1 from '../../../../assets/computerClub/computerclub1.png';
import computerClubImage2 from '../../../../assets/computerClub/computerclub2.png';
import computerClubImage3 from '../../../../assets/computerClub/computerclub3.jpg';
import computerClubImage4 from '../../../../assets/computerClub/computerclub6.jpg';

const ParentTeachingTable = () => {
  return (
    <>
      <TopBar />
      <AdminSidebar>
        <section className='ftco-section' style={{ marginTop: '-80px' }}>
          <div className='container'>
            <div className='row admin_table'>
              {/* higher level */}
              <div className='col-md-12'>
                <div className=''>
                  {/* parent notice heading section */}
                  <div className='col-md-4 text-center'>
                    <h4 className='parent_notice_head'>Computer Club Table</h4>
                    <div className='admin-create parent_notice_link'>
                      <Link to='#' className='links'>
                        facility
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        computer-club
                      </Link>
                    </div>
                  </div>
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
                      <b>Computer Club</b>
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
                  </div>
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

export default ParentTeachingTable;
