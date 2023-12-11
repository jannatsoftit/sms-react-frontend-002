/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import AdminSidebar from '../../../Sidebar/AdminSidebar';
import Footer from '../../../Footer';
import TopBar from '../../../TopBar';
import libraryImage1 from '../../../../assets/libraryImage/library1.png';
import libraryImage2 from '../../../../assets/libraryImage/library2.png';
import libraryImage3 from '../../../../assets/libraryImage/library3.jpg';
import libraryImage4 from '../../../../assets/libraryImage/library4.jpg';
import libraryImage5 from '../../../../assets/libraryImage/library5.jpg';

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
                    <h4 className='parent_notice_head'>Multimedia Class Table</h4>
                    <div className='admin-create parent_notice_link'>
                      <Link to='#' className='links'>
                        facility
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        multimedia-classes
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
                      <b>Multimedia Class Room</b>
                    </h4>
                  </div>

                  {/*  Library Facility logo section*/}
                  <div className='parent_notice_card'>
                    {/* carousel start */}
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src={libraryImage1} className="d-block w-100" alt="multimedia-image"/>
                          <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img src={libraryImage1} className="d-block w-100" alt="multimedia-image"/>
                          <div className="carousel-caption d-none d-md-block"/>
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img src={libraryImage1} className="d-block w-100" alt="multimedia-image"/>
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                          </div>
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                      </div>
                    {/* carousel end */}
                    
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
