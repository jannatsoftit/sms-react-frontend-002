/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import StudentSidebar from '../../../Sidebar/StudentSidebar';
import Footer from '../../../Footer';
import StudentTopBar from '../../../StudentTopBar';
import magagineImage1 from '../../../../../public/managingCommittee/mg1.png';
import magagineImage2 from '../../../../../public/managingCommittee/mg2.png';
import magagineImage3 from '../../../../../public/managingCommittee/mg3.png';
import magagineImage4 from '../../../../../public/managingCommittee/mg4.png';
import magagineImage5 from '../../../../../public/managingCommittee/mg5.png';
import magagineImage6 from '../../../../../public/managingCommittee/mg6.png';
import magagineImage7 from '../../../../../public/managingCommittee/mg7.png';
import magagineImage8 from '../../../../../public/managingCommittee/mg8.png';

const ManagingCommitteeTable = () => {
  // Managing CommitteeTable data

  //Managing CommitteeTable  all data show in the table

  return (
    <>
    <StudentTopBar/>
      <StudentSidebar>
        <section className='ftco-section'>
          <div className='container'>
            <div className='col-md-8 text-center mb-5 mt-5'>
              <h2 className='heading-section'>Managing Committee Table</h2>
              <div className='admin' style={{marginLeft:'60px'}}>
                <Link to='#' className='links'>
                  administration
                </Link>
                <RxSlash />
                <Link to='' className='actives'>
                  managing-committee
                </Link>
              </div>
            </div>

            <div className='teaching_staff_title'>
              <h4
                style={{
                  marginTop: '40px',
                  width: '400px',
                  backgroundColor: '#053270',
                  borderRadius: '5px',
                  border: '3px solid black',
                  color: '#F7FBFF',
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '-30px',
                }}
              >
                <b>Managing Committee Members</b>
              </h4>
            </div>

            <div className='managing_committee_card'>
              {/* 1st image row start */}
              <div className='row align-items-start'>
                <div className='col'>
                  <img
                    className='rounded float-start managing_committee_image1'
                    src={magagineImage1}
                    alt='image'
                  />
                </div>
                <div className='col'>
                  <img
                    className='rounded float-start managing_committee_image1'
                    src={magagineImage2}
                    alt='image'
                  />
                </div>
                <div className='col'>
                  <img
                    className='rounded float-start managing_committee_image1'
                    src={magagineImage3}
                    alt='image'
                  />
                </div>
                <div className='col'>
                  <img
                    className='rounded float-start managing_committee_image1'
                    src={magagineImage4}
                    alt='image'
                  />
                </div>
              </div>

              <div className='row align-items-start'>
                <div className='col'>
                  <div className='row managing_committee_text1'>
                    <p className='rounded float-start'>
                      A K M Arif <br />
                      Chairman
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>

                <div className='col'>
                  <div className='row managing_committee_text1'>
                    <p className='rounded float-start'>
                      MD Mahbubul Hasan <br />
                      Principal
                      <br />
                      Member Secretary
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>

                <div className='col'>
                  <div className='row managing_committee_text1'>
                    <p className='rounded float-start'>
                      D.H.M Arefin <br />
                      Co-opt Member
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>

                <div className='col'>
                  <div className='row managing_committee_text1'>
                    <p className='rounded float-start'>
                      Masuda Sultana <br />
                      Co-opt Member
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>
              </div>
              {/* 1st image row end */}

              {/* 2nd image row start */}
              <div className='row align-items-start'>
                <div className='col'>
                  <img
                    className='rounded float-start managing_committee_image2'
                    src={magagineImage5}
                    alt='image'
                  />
                </div>
                <div className='col'>
                  <img
                    className='rounded float-start managing_committee_image2'
                    src={magagineImage6}
                    alt='image'
                  />
                </div>
                <div className='col'>
                  <img
                    className='rounded float-start managing_committee_image2'
                    src={magagineImage7}
                    alt='image'
                  />
                </div>
                <div className='col'>
                  <img
                    className='rounded float-start managing_committee_image2'
                    src={magagineImage8}
                    alt='image'
                  />
                </div>
              </div>

              <div className='row align-items-start'>
                <div className='col'>
                  <div className='row managing_committee_text2'>
                    <p className='rounded float-start'>
                      Arif Hossain<br />
                      Chairman
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>

                <div className='col'>
                  <div className='row managing_committee_text2'>
                    <p className='rounded float-start'>
                      Khadija Islam<br />
                      Co-opt Member
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>

                <div className='col'>
                  <div className='row managing_committee_text2'>
                    <p className='rounded float-start'>
                      Sharif Islam <br />
                      Guardian Member
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>

                <div className='col'>
                  <div className='row managing_committee_text2'>
                    <p className='rounded float-start'>
                        Amin Hasan <br />
                      Guardian Member
                      <br />
                      Managing Committee
                      <br />
                      Abdul Gafur Academy Primary & high School.
                    </p>
                  </div>
                </div>
              </div>
              {/* 2nd image row end */}
            </div>
          </div>
        </section>
        <Footer />
      </StudentSidebar>
    </>
  );
};

export default ManagingCommitteeTable;
