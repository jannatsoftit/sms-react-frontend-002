//import React from 'react';


const Profile = () => {
  

  return (
    <>
      <div className='container'>
        <div className='main-body'>
          <div className='row gutters-sm'>

            <div className='col-md-4 mb-3'>
              <div className='card'>
                <div className='card-body'>
                  <div className='d-flex flex-column align-items-center text-center'>
                    <img
                      src='https://bootdey.com/img/Content/avatar/avatar7.png'
                      alt='user-picture'
                      className='rounded-circle'
                      width='150'
                    />
                    <div className='mt-3'>
                      <h4>{userFirstName} {userLastName}</h4>
                      <p className='text-secondary mb-1'>
                        {userDesignation}
                      </p>
                      <p className='text-muted font-size-sm'>
                        {userAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-8'>
              <div className='card mb-3'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className='mb-0'>Full Name</h6>
                    </div>
                    <div className='col-sm-9 text-secondary'>
                      {userFirstName} {userLastName}
                    </div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className='mb-0'>Email</h6>
                    </div>
                    <div className='col-sm-9 text-secondary'>{userEmail}</div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className='mb-0'>Phone</h6>
                    </div>
                    <div className='col-sm-9 text-secondary'>
                      (088+) {userPhoneNumber}
                    </div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className='mb-0'>Gender</h6>
                    </div>
                    <div className='col-sm-9 text-secondary'>
                      {userGender}
                    </div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-3'>
                      <h6 className='mb-0'>Address</h6>
                    </div>
                    <div className='col-sm-9 text-secondary'>
                      {userAddress}
                    </div>
                  </div>
                  <hr />
                  <div className='row'>
                    <div className='col-sm-12'>
                      <a
                        className='btn btn-info '
                        target='__blank'
                        href='https://www.bootdey.com/snippets/view/profile-edit-data-and-skills'
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
