/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import AdminSidebar from '../../../Sidebar/AdminSidebar';
import Footer from '../../../Footer';
import TopBar from '../../../TopBar';
import academicLogo from '../../../../assets/AGAImage.png';

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
                    <h4 className='parent_notice_head'>Teacher Notice Table</h4>
                    <div className='admin-create parent_notice_link'>
                      <Link to='#' className='links'>
                        notice
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        teachers-notice
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
                      <b>Teacher's Notice Board</b>
                    </h4>
                  </div>

                  {/*  parent notice logo section*/}
                  <div className='parent_notice_card'>
                    <h3>
                      <img
                        src={academicLogo}
                        style={{
                          width: '60px',
                          height: '60px',
                          marginLeft: '320px',
                          marginBottom: '20px',
                        }}
                      ></img>
                    </h3>
                    <h5 style={{ textAlign: 'center' }}>
                      <b>Abdul Gafur Academy Primary & High School</b>
                    </h5>

                    <div style={{ marginTop: '20px' }}>
                      <h6>
                        <b>Date: </b>January01, 2023
                      </h6>
                      <h6>
                        <b>From: </b>Rachel Smith
                      </h6>
                      <h6>
                        <b>To: </b>Abdul Gafur Academy Primary and High School
                      </h6>
                    </div>

                    <p style={{ marginTop: '20px' }}>
                      We encourage you to read with your children at home at
                      least 5 times a week to foster a love of reading within
                      your child. We will be sending home 2 books a week to
                      engage with. These will be the Read Write Inc phonics
                      books and the Oxford Reading Tree Songbirds books. Once
                      your child is allocated their reading books, they will be
                      collected in at school on a Wednesday and new reading
                      books will be given out to children on a Friday. This
                      allows children to read 5 out of 7 days a week at home.
                      Please remember to write in your child's reading journal
                      every time they have read at home. Children will have the
                      opportunity to visit the library weekly. Please also
                      ensure that you keep the reading books in school bags as
                      we may want to record our reading with them in their
                      reading journals too!
                    </p>
                    <h6>
                      <b>Respectfully,</b>
                    </h6>
                    <h6>
                      <b>Chairmen Of Managing Committee</b>
                    </h6>
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
