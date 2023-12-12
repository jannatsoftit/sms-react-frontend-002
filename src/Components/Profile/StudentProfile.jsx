//import React from 'react';

import StudentSidebar from '../Sidebar/StudentSidebar';
import Footer from '../Footer';
import TopBar from '../TopBar';

const StudentProfile = () => {
  const userFirstName = localStorage.getItem("auth_name");
  const userLastName = localStorage.getItem("last_name");
  const userEmail = localStorage.getItem("email");
  const userAddress = localStorage.getItem("address");
  const userPhoneNumber = localStorage.getItem("phone_number");
  const userGender = localStorage.getItem("gender");
  const userBloodGroup = localStorage.getItem("blood_group");
  const userDepartment = localStorage.getItem("department");
  const userTopImage = localStorage.getItem("image");

  return (
    <>
    <TopBar />
      <StudentSidebar>
      <div className="body">
        <div className="container">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card profile_design_1">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center profile_text">
                      <img
                        src={`http://127.0.0.1:8000/storage/AD_img/${userTopImage}`} 
                        alt="user-picture"
                        className="rounded-circle profile_image"
                        width="250"
                      />
                      <div className="mt-3">
                        <h4>
                          {userFirstName} {userLastName}
                        </h4>
                        <p className="text-secondary mb-1">{userDepartment}</p>
                        <p className="text-muted font-size-sm">{userAddress}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="card mb-3 profile_design_2">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {userFirstName} {userLastName}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{userEmail}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        (088+) {userPhoneNumber}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Gender</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {userGender}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {userAddress}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Blood Group</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {userBloodGroup}
                      </div>
                    </div>

                    <div className="row">
                      {/* <div className="col-sm-12">
                        <a
                          className="btn btn-info "
                          target="__blank"
                          href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                        >
                          Edit
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
      </StudentSidebar>
    </>
  );
};

export default StudentProfile;
