/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import { RxSlash } from 'react-icons/rx';
import HSTeachingStaffTable from '../../../table/Student/TeachingStaffTable/HSTeachingStaffTable';
import HTeachingStaffTable from '../../../table/Student/TeachingStaffTable/HTeachingStaffTable';
import PTeachingStaffTable from '../../../table/Student/TeachingStaffTable/PTeachingStaffTable';

import StudentSidebar from '../../../Sidebar/StudentSidebar';
import Footer from '../../../Footer';
import StudentTopBar from '../../../StudentTopBar';

const TeachingStaffTable = () => {
  return (
    <>
    <StudentTopBar/>
      <StudentSidebar>
        <section className='ftco-section'>
          <div className='container'>
            <div className='col-md-7 text-center mb-5 teaching-staff'>
              <h2 className='heading-section'>Teaching Staff Table List</h2>
              <div className='admin teaching-staff-link'>
                <Link to='#' className='links'>
                  school-staff
                </Link>
                <RxSlash />
                <Link to='' className='actives'>
                  teaching-staffs
                </Link>
              </div>
            </div>
            
            <div className='row admin_table'>
              {/* higher secondary level */}
              <HTeachingStaffTable />
            </div>

            <div className='row admin_table'>
              {/* secondary level */}
              <HSTeachingStaffTable />
            </div>

            <div className='row admin_table'>
              {/* primary level */}
              <PTeachingStaffTable />
            </div>

          </div>
        </section>
        <Footer />
      </StudentSidebar>
    </>
  );
};

export default TeachingStaffTable;
