import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdNotificationsActive } from 'react-icons/md';
import { PiUsersFill } from 'react-icons/pi';
import { TbBooks } from 'react-icons/tb';
import { FaSchoolFlag } from "react-icons/fa6";
import BarChart from './BarChart';
import TeacherSidebar from '../../../Sidebar/TeacherSidebar';
import Footer from '../../../Footer';
import TeacherTopBar from '../../../TeacherTopBar';
//import Calendar1 from './Calendar1';

const TeacherDashboard = () => {
  const userDepartment = localStorage.getItem('department');
  const SchoolId = localStorage.getItem('school_id');

  return (
    <>
      <TeacherTopBar />
      <TeacherSidebar>
        <div className='p-3 pb-5' style={{marginLeft:'40px'}}>
          <div className='container-fluid  dashboard_table'>
            <div className='school_dashboard'>
              {
                (SchoolId) === '1' ?
                <h6><b style={{marginLeft:'320px', marginTop:'15px'}}><FaSchoolFlag style={{marginTop:'-5px'}}/>{" "}Abdul Gafur Academy Primary and High School</b></h6>
                :
                <h4>Abdul Gafur Academy Primary and High School</h4>
              }

            </div>
            <div style={{ marginTop: '20px',}}>
              <h3 className='dashboard_page_title'>
                <span className='dashboard-page-title-icon bg-gradient-primary text-black mr-2'>
                  <i className='mdi mdi-home'></i>
                </span>
                {userDepartment} Dashboard
              </h3>
            </div>

            <div className='row'>
              <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-3'>
                <div className='d-flex p-4 justify-content-center align-items-center bg-white shadow-lg' style={{borderRadius:'5px'}}>
                  <PiUsersFill className='icons text-secondary' />
                  <div className='info'>
                    <span>Students</span>
                    <h2>167</h2>
                  </div>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-3'>
                <div className='d-flex p-4 justify-content-center align-items-center bg-white shadow-lg' style={{borderRadius:'5px'}}>
                  <FaChalkboardTeacher className='icons text-success' />
                  <div className='info'>
                    <span>Teacher</span>
                    <h2>20</h2>
                  </div>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-3'>
                <div className='d-flex p-4 justify-content-center align-items-center bg-white shadow-lg' style={{borderRadius:'5px'}}>
                  <TbBooks className='icons text-danger' />
                  <div className='info'>
                    <span>Activity</span>
                    <h2>16</h2>
                  </div>
                </div>
              </div>

              <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-3'>
                <div className='d-flex p-4 justify-content-center align-items-center bg-white shadow-lg' style={{borderRadius:'5px'}}>
                  <MdNotificationsActive className='icons text-info' />
                  <div className='info'>
                    <span>Notification</span>
                    <h2>6</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-12 col-md-9 p-3 mt-4'>
              <BarChart />
              </div>
              <div className='col-12 col-md-3 p-3' >
                {/* <Calendar1 /> */}
              </div>
            </div>


            {/* google map */}
            <div className='row dash_map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.9331509937015!2d89.
              20040797411622!3d23.172639810713665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
              1!3m3!1m2!1s0x39ff112a602d68ff%3A0xb3b85ec88687eb53!2z4KaG4Kas4KeN4Kam4KeB4Kay
              IOCml-Cmq-CngeCmsCDgpo_gppXgpr7gpqHgp4fgpq7gp4Ag4Kau4Ka-4Kan4KeN4Kav4Kau4Ka_4KaVIOCmrOCmv-CmpuCnjeCmr-CmvuCms
              uCmr-CmvA!5e0!3m2!1sen!2sbd!4v1701937958811!5m2!1sen!2sbd" 
              width="1200" 
              height="350" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>


          </div>
        </div>
        <Footer />
      </TeacherSidebar>
    </>
  );
};

export default TeacherDashboard;
