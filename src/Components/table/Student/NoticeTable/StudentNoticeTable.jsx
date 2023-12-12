/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import StudentSidebar from '../../../Sidebar/StudentSidebar';
import Footer from '../../../Footer';
import StudentTopBar from '../../../StudentTopBar';
import academicLogo from '../../../../assets/AGAImage.png';

const ParentTeachingTable = () => {
  return (
    <>
      <StudentTopBar />
      <StudentSidebar>
        <section className='ftco-section' style={{ marginTop: '-80px' }}>
          <div className='container'>
            <div className='row admin_table'>
              {/* higher level */}
              <div className='col-md-12'>
                <div className=''>
                  {/* parent notice heading section */}
                  <div className='col-md-4 text-center'>
                    <h4 className='parent_notice_head'>Student Notice Table</h4>
                    <div className='admin-create parent_notice_link'>
                      <Link to='#' className='links'>
                        notice
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        students-notice
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
                      <b>Student's Notice Board</b>
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
                    <b style={{ fontSize: '20px' }}>Friday, December 10</b>
                    <p><b style={{ fontSize: '20px'}}>Important Message</b></p>

                      <h6>
                        <b>Date: </b>08/12/23
                      </h6>
                      <h6>
                        <b>Time: </b>7:30am
                      </h6>
                      <h6 style={{ paddingBottom:'30px', borderBottom:'3px solid'}}  >
                        <b>Message: </b>That's it.... lats day! Have a happy and safe Christmas.
                      </h6>
                    </div>

                    

                    <p style={{ marginTop: '20px'}}> 
                      Students, remember to check <Link to={''}>Student Notices </Link>
                      every morning before you start your day. 'Student Notices'
                      informs you of any teachers, that due to emergent leave,
                      may not be at school on that day and lessons may occur
                      differently. Students if any of your teachers appear on
                      'Student Notices' please check your email for further
                      advice. 
                      <p><b>Please note:</b> Notifications will be posted by
                      7:30am each school day.</p>
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
      </StudentSidebar>
    </>
  );
};

export default ParentTeachingTable;
