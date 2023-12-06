import { FaChalkboardTeacher } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { PiUsersFill } from "react-icons/pi";
import { TbBooks } from "react-icons/tb";
import BarChart from "./BarChart";
import Table from "./Table";

import Sidebar from "../../Sidebar";
import TopBar from "../../TopBar";
import Footer from "../../Footer";



const Dashboard = () => {

  const userName = localStorage.getItem("auth_name");

  return (
    <>
    <TopBar/>
    <Sidebar>
      <div className="p-3 pb-5">
        <div className="container-fluid  dashboard_table">
          <div style={{marginTop: '20px',}}>
            <h3 className="dashboard_page_title">
              <span className="dashboard-page-title-icon bg-gradient-primary text-black mr-2">
              <i className="mdi mdi-home"></i>
              </span>
                {userName} Dashboard
            </h3>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6 col-md-3 col-lg-3 p-3">
              <div className="d-flex p-4 justify-content-center align-items-center bg-white shadow-lg">
                <PiUsersFill className="icons text-secondary" />
                <div className="info">
                  <span>Students</span>
                  <h2>167</h2>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3 col-lg-3 p-3">
              <div className="d-flex p-4 justify-content-center align-items-center bg-white shadow-lg">
                <FaChalkboardTeacher className="icons text-success" />
                <div className="info">
                  <span>Teacher</span>
                  <h2>20</h2>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3 col-lg-3 p-3">
              <div className="d-flex p-4 justify-content-center align-items-center bg-white shadow-lg">
                <TbBooks className="icons text-danger" />
                <div className="info">
                  <span>Activity</span>
                  <h2>16</h2>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3 col-lg-3 p-3">
              <div className="d-flex p-4 justify-content-center align-items-center bg-white shadow-lg">
                <MdNotificationsActive className="icons text-info" />
                <div className="info">
                  <span>Notification</span>
                  <h2>0</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 p-3 mt-4">
              <BarChart />
            </div>
            <div className="col-12 col-md-6 p-3">
              <Table />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </Sidebar>
    </>
  );
};

export default Dashboard;
