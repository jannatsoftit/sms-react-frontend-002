import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-router-dom";
import academicCalendar from '../../../../../../assets/AGACalendar.png';
import academicLogo from '../../../../../../assets/AGAImage.png';
import AdminSidebar from "../../../../../Sidebar/AdminSidebar";
import Footer from "../../../../../Footer";
import TopBar from "../../../../../TopBar";

const AcademicCalenderShow = () => {
  return (
    <>
      <TopBar />
      <AdminSidebar>
        {/* Admission CircularShow table title section */}
        <Link to="/admin/dashboard" className="add_button">
          <button type="button" className="btn">
            Back to Home<AiOutlineArrowRight />
          </button>
        </Link>

        <div className="academic_calender_container">
          <div className="academic_calender_card">

            <div className="academic_calender_one">
              <img src={academicLogo} style={{width: '80px', height:'80px',}}></img>
              <span style={{fontSize: '20px'}}> | Abdul Gafur Academy Primary & High School</span>
              <p style={{fontSize: '15px', marginLeft:'100px', marginTop:'-35px'}}>Kazipar, Jessore, Bangladesh</p>   
            </div>

            <div className="academic_calender_two">
              <h2><b>Academic Calender</b></h2>
              <h2 style={{fontSize: '25px'}}><b>2023 - 2024</b></h2>
            </div>

            <div className="academic_calender_image2">
              <img src={academicCalendar} width='900px' height='950px'></img>
            </div>


          </div>
        </div>
        <Footer />
      </AdminSidebar>
    </>
  );
};

export default AcademicCalenderShow;
