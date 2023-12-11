/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import libraryImage1 from '../../../../assets/libraryImage/library1.png';
import libraryImage2 from '../../../../assets/libraryImage/library2.png';
import libraryImage3 from '../../../../assets/libraryImage/library3.jpg';
import libraryImage4 from '../../../../assets/libraryImage/library4.jpg';
import libraryImage5 from '../../../../assets/libraryImage/library5.jpg';

const ParentTeachingTable = () => {
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
                    <b>Multimedia Class Room</b>
                  </h4>
                </div>

                {/*  Library Facility logo section*/}
                <div className='parent_notice_card'>
                  {/* carousel start */}
                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={libraryImage1} className="d-block" alt="image"/>
                      </div>
                      <div className="carousel-item">
                        <img src={libraryImage2} className="d-block" alt="image"/>
                      </div>
                      <div className="carousel-item">
                        <img src={libraryImage3} className="d-block" alt="image"/>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  {/* carousel end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParentTeachingTable;
