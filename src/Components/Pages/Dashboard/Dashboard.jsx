import { PiUsersFill } from 'react-icons/pi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { TbBooks } from 'react-icons/tb';
import { MdNotificationsActive } from 'react-icons/md';
import BarChart from './BarChart';
import Table from './Table';

const Dashboard = () => {
  return (
    <>
    Dashboard
    {/* <div className='p-3 bg-light'>
      <div className='container-fluid'>
        
        <div className='row'>

          <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-3'>
            <div className='d-flex p-4 justify-content-center align-items-center bg-white shadow-lg'>
              <PiUsersFill className='icons text-secondary'/>
              <div className='info'>
                <span>Students</span>
                <h2>167</h2>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-3'>
            <div className='d-flex p-4 justify-content-center align-items-center bg-white shadow-lg'>
              <FaChalkboardTeacher className='icons text-success'/>
              <div className='info'>
                <span>Teacher</span>
                <h2>20</h2>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-3'>
            <div className='d-flex p-4 justify-content-center align-items-center bg-white shadow-lg'>
              <TbBooks className='icons text-danger' />
              <div className='info'>
                <span>Activity</span>
                <h2>16</h2>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-6 col-md-3 col-lg-3 p-3'>
            <div className='d-flex p-4 justify-content-center align-items-center bg-white shadow-lg'>
              <MdNotificationsActive className='icons text-info' />
              <div className='info'>
                <span>Notification</span>
                <h2>0</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-md-6 p-3 mt-4'>
            <BarChart />
          </div>
          <div className='col-12 col-md-6 p-3'>
            <Table />
          </div>

        </div>
      </div>
    </div> */}
    </>
  )
}

export default Dashboard;
