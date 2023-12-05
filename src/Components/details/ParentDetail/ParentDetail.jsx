const AdminDetail = ({ parent }) => {
  return (
    parent && (
      <div className='container'>
        <div className='row admin_show'>
          <div className='col-xl-8'>
            <div className='card'>
              <div className='card-body pb-0'>
                <div className='row align-items-center'>
                  <div className='col-md-4'>
                    <div className='text-center border-end'>
                      <img
                        className='img-fluid avatar-xxl rounded-circle'
                        src={`http://127.0.0.1:8000/storage/P_img/${parent?.image}`}
                        width='50px'
                        alt={parent?.name}
                      />
                      <h4 className='text-primary font-size-20 mt-3 mb-2'>
                        {parent?.first_name}
                      </h4>
                      <h5 className='text-muted font-size-13 mb-0'>
                        {parent?.designation}
                      </h5>
                    </div>
                  </div>
                  <div className='col-md-8'>
                    <div className='ms-3'>
                      <div>
                        <h4 className='card-title mb-2'>{parent?.department}</h4>
                        <p className='mb-0 text-muted'>
                          Hi I'm {parent?.first_name},has been the industry's standard dummy
                          text To an English person alteration text.
                        </p>
                      </div>
                      <div className='row my-4'>
                        <div className='col-md-12'>
                          <div>
                            <p className='text-muted mb-2 fw-medium'>
                              <i className='mdi mdi-email-outline me-2'></i>
                              Email Address: {parent?.email}
                            </p>
                            <p className='text-muted mb-2 fw-medium'>
                              <i className='mdi mdi-cellphone me-2'></i>
                              Phone Number: {parent?.phone_number}
                            </p>
                            <p className='text-muted mb-2 fw-medium'>
                              <i className='mdi mdi-calendar me-2'></i>
                              Date Of Birth: {parent?.date_of_birth}
                            </p>
                            <p className='text-muted mb-2 fw-medium'>
                              <i className='mdi mdi-gender-male-female me-2'></i>
                              Gender: {parent?.gender}
                            </p>
                            <p className='text-muted mb-2 fw-medium'>
                              <i className='mdi mdi-information me-2'></i>
                              Address: {parent?.address}, Blood Group: {parent?.blood_group}
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
    )
  );
};

export default AdminDetail;
