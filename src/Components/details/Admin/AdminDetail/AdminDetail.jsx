import Footer from "../../../Footer";

const AdminDetail = ({ admin }) => {
  return (
    admin && (
      <>
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
                          src={`http://127.0.0.1:8000/storage/AD_img/${admin?.image}`}
                          width='50px'
                          alt={admin?.name}
                        />
                        <h4 className='text-primary font-size-20 mt-3 mb-2'>
                          {admin?.first_name}
                        </h4>
                        <h5 className='text-muted font-size-13 mb-0'>
                          {admin?.designation}
                        </h5>
                      </div>
                    </div>
                    <div className='col-md-8'>
                      <div className='ms-3'>
                        <div>
                          <h4 className='card-title mb-2'>
                            {admin?.department}
                          </h4>
                          <p className='mb-0 text-muted'>
                            Hi I'm {admin?.first_name},has been the industry's
                            standard dummy text To an English person alteration
                            text.
                          </p>
                        </div>
                        <div className='row my-4'>
                          <div className='col-md-12'>
                            <div>
                              <p className='text-muted mb-2 fw-medium'>
                                <i className='mdi mdi-email-outline me-2'></i>
                                Email Address: {admin?.email}
                              </p>
                              <p className='text-muted mb-2 fw-medium'>
                                <i className='mdi mdi-cellphone me-2'></i>
                                Phone Number: {admin?.phone_number}
                              </p>
                              <p className='text-muted mb-2 fw-medium'>
                                <i className='mdi mdi-calendar me-2'></i>
                                Date Of Birth: {admin?.date_of_birth}
                              </p>
                              <p className='text-muted mb-2 fw-medium'>
                                <i className='mdi mdi-gender-male-female me-2'></i>
                                Gender: {admin?.gender}
                              </p>
                              <p className='text-muted mb-2 fw-medium'>
                                <i className='mdi mdi-information me-2'></i>
                                Address: {admin?.address}, Blood Group:{' '}
                                {admin?.blood_group}
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
        <Footer />
      </>
    )
  );
};

export default AdminDetail;
