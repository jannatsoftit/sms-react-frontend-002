import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-router-dom";
import StudentSidebar from "../../../../../Sidebar/StudentSidebar";
import Footer from "../../../../../Footer";
import StudentTopBar from "../../../../../StudentTopBar";

const AdmissionCircularShow_ST = () => {
  return (
    <>
      <StudentTopBar />
      <StudentSidebar>
        {/* Admission CircularShow table title section */}
        <Link to="/student/admissionCirculars" className="add_button">
          <button type="button" className="btn">
            Admission Circular Table <AiOutlineArrowRight />
          </button>
        </Link>
        <div className="admission_circular_card">
          <div className="admission_circular_container">
            <div className="part_one">
              <h2>
                <b>
                  Abdul Gafur Academy Admission Notice & Result 2024 [Class 6 to
                  10]
                </b>
              </h2>
              <p>
                Abdul Gafur Academy Admission Notice & Result 2024. আব্দুল গফুর
                একাডেমী মাধ্যমিক বিদ্যালয় -এ ভর্তি ২০২৪। Abdul Gafur Academy
                Admission Notice 2024 and Abdul Gafur Academy Admission Result
                2023{" "}
                <Link to="http://rajukcollege.net."> gsa.teletalk.com.bd</Link>{" "}
                RUMC Admission 2024 for Class VI, VII and IX students in the
                Bangla and English for both boys and girls.
              </p>
            </div>

            <div className="part_one">
              <h5>
                <b>
                  আব্দুল গফুর একাডেমী মাধ্যমিক বিদ্যালয় ৬ষ্ঠ, ৭ম, ৮ম ৯ম ও ১০ম
                  শ্রেণীতে ভর্তির তথ্য ২০২৪ সেশন
                </b>
              </h5>
              <p>
                The Details of RUMC School ONLINE ADMISSION 2024 for VI-EM-DS,
                VI-EM-MS, VI-BM-DS and VI-BM-MS find easily from Here. We are
                describing the details of Abdul Gafur Academy Admission Notice
                with applying instructions; on the other hand after publishing
                the admission result as well. RUMC Admission 2024 For Class 6
                Admission Test Online information.The Authority Publish Abdul
                Gafur Academy (RUMC) Admission Notice For Class 6, 7, 8 & 9 for
                Day Shift and Morning Shift. But Class 9 Admission Will start
                After Publish JSC Result & JDC Result. However, students or
                guardian Will Get All Information About Abdul Gafur Academy
                School Admission 2024 Session.
              </p>
              <h3>
                <b>AGA Admission Notice 2024</b>
              </h3>
              <p>
                AGA Admission Notice has been publish at official website
                aga.edu.bd. Therefore, the RUMC Class 6, Class 7 & Class 8
                Circular make available here. Through, Eligible and Interested
                Candidates have to Apply online Through Abdul Gafur Academy
                Website Online System. All concern people may apply application.
                Whereas the application process and Information about School
                Section Admission 2024 Will Found Here on our Site.
              </p>
            </div>

            <div>
              <h3>
                <b>AGA Admission Apply Instruction:</b>
              </h3>
              <ul className="academic_list">
                <li>
                  1. Go to{" "}
                  <Link to="http://www.rajukcollege.net">
                    www.agaschool.net
                  </Link>
                </li>
                <li>2. Click Apply Now</li>
                <li>
                  3. Now Fill Up The Application Form Carefully and Click Submit
                  Button
                </li>
                <li>
                  4. After Submitting Application, You Will Get Reference Number
                  For Payment
                </li>
                <li>
                  5. If Payment Complete, Candidates able to download Admit Card
                </li>
              </ul>
            </div>

            <div className="part_one">
              <h3>
                <b>Abdul Gafur Academy Admission Result 2024</b>
              </h3>
              <p>
                Abdul Gafur Academy Authority going to publish the Class Six
                Admission Result 2024. After that they will be publish the
                others classes admission results via online by{" "}
                <Link to="http://rajukcollege.net/Pages/AddmissionAid/Result/Resultpage.aspx">
                  AGA Addmission Result
                </Link>{" "}
                webpage. If you thing you download and check the result via
                their Official website; you have to visit on{" "}
                <Link to="www.rajukcollege.net">
                  Abdul Gafur Academy Addmission Result
                </Link>{" "}
                website. So, Abdul Gafur Academy School Admission result Class
                6, 7 & 8 download{" "}
                <Link to="www.rajukcollege.net">
                  Abdul Gafur Academy Addmission Result
                </Link>{" "}
                for All version and Shift.
              </p>
              <h5>
                <b>
                  সরকারী ভর্তি নীতিমালা জারির পর ২০২৪ শিক্ষাবর্ষে স্কুল সেকশনে
                  ভর্তি বিজ্ঞপ্তি প্রকাশ করা হবে
                </b>
              </h5>
            </div>

            <div>
              <h6>
                <b>
                  Who are Finally Selected Candidates have Submit Admission Form
                  With Necessary Papers at Abdul Gafur Academy, Jessore
                </b>
              </h6>
              <ul>
                <li>Clearance Certificate of Previous School</li>
                <li>Attested Birth Certificate</li>
                <li>4 Copy P.P Size Photo</li>
                <li>Income Certificate of Parents</li>
                <li>Quota Certificate (IF Applicable)</li>
                <li>ID Card Fill up Copy</li>
              </ul>
            </div>
          </div>

          <div></div>
        </div>
        <Footer />
      </StudentSidebar>
    </>
  );
};

export default AdmissionCircularShow_ST;
