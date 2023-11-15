/* eslint-disable react/no-unescaped-entities */
//import React from 'react';

const AdminDetail = ( {admin} ) => {

  return (
    <div>
      <div className='container'>
        <div className='row admin_show'>
          <div className='col-xl-8'>
            <div className='card'>

              <div className='card-body pb-0'>
                <div className='row align-items-center'>
                  <div className='col-md-3'>
                    <div className='text-center border-end'>
                      <img
                        src='https://bootdey.com/img/Content/avatar/avatar1.png'
                        className='img-fluid avatar-xxl rounded-circle'
                        alt=''
                      />
                      <h4 className='text-primary font-size-20 mt-3 mb-2'>
                        Jansh Wells
                      </h4>
                      <h5 className='text-muted font-size-13 mb-0'>gh,j</h5>
                    </div>
                  </div>
                  <div className='col-md-9'>
                    <div className='ms-3'>
                      <div>
                        <h4 className='card-title mb-2'>Biography</h4>
                        <p className='mb-0 text-muted'>
                          Hi I'm Jansh,has been the industry's standard dummy
                          text To an English person alteration text.
                        </p>
                      </div>
                      <div className='row my-4'>
                        <div className='col-md-12'>
                          <div>
                            <p className='text-muted mb-2 fw-medium'>
                              <i className='mdi mdi-email-outline me-2'></i>
                              Janshwells@probic.com
                            </p>
                            <p className='text-muted fw-medium mb-0'>
                              <i className='mdi mdi-phone-in-talk-outline me-2'></i>
                              418-955-4703
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDetail;
