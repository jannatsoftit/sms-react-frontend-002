/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import AdminSidebar from '../../../Sidebar/AdminSidebar';
import Footer from '../../../Footer';
import TopBar from '../../../TopBar';
import academicLogo from '../../../../assets/AGAImage.png';

const ParentNoticeTable = () => {
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
                    <h4 className='parent_notice_head'>Parent Notice Table</h4>
                    <div className='admin-create parent_notice_link'>
                      <Link to='#' className='links'>
                        notice
                      </Link>
                      <RxSlash />
                      <Link to='' className='links'>
                        parents-notice
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
                      <b>Parent's Notice Board</b>
                    </h4>
                  </div>

                  {/*  parent notice logo section*/}
                  <div className='parent_notice_card'>

                    <h3><img src={academicLogo} style={{width: '60px', height:'60px', marginLeft:'320px', marginBottom:'20px'}}></img></h3>
                    <h5 style={{textAlign:'center', }}><b>Abdul Gafur Academy Primary & High School</b></h5>
                    
                    <div style={{marginTop:'20px' }}>
                    <h6><b>Date: </b>January01, 2023</h6>
                    <h6><b>From: </b>Rachel Smith</h6>
                    <h6><b>To: </b>Abdul Gafur Academy Primary and High School</h6>
                    </div>

                    <p style={{marginTop:'20px' }}>
                      Please ensure that your child has their book bag, a water
                      bottle and a sun hat in school everyday.
                    </p>
                    <p>
                      It is important to apply sun cream before your child comes
                      to school as we will be working and exploring inside and
                      outside.
                    </p>
                    <p>
                      Children will be participating in PE every Monday and
                      Wednesday so please ensure they have their kit at school.
                      Thank you for your support and co-operation.
                    </p>

                    <h6><b>Respectfully,</b></h6>
                    <h6><b>Chairmen Of Managing Committee</b></h6>
                    
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

export default ParentNoticeTable;
