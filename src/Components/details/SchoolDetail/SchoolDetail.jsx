const SchoolDetail = ({ school }) => {
  return (
    school && (
      <div className='container'>
        <div className='row admin_show'>
          <div className='col-xl-8'>
            <div className='card'>
              <div className='card-body'>

              <div>
                <p style={{display: 'flex', justifyContent: 'center', fontSize: '60px', fontWeight: 'bold', color: 'blue'}}><bold>{school?.title}</bold></p>
                <p  style={{display: 'flex', justifyContent: 'center', fontSize: '20px', marginTop: '-30px', color: 'green'}}>Learn to Lead…</p>
              </div>

              <div>
                <p style={{display: 'flex', justifyContent: 'center', fontSize: '40px', fontWeight: 'bold'}}><bold>About</bold></p>
                <p  style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>With the approval of the Dhaka Education Board, the school was upgraded to Secondary level in June 2017.Ghatail Cantonment English School is a unique institution at Shaheed Salahuddin Cantonment. Like other institutions of its kind in different cantonments, this school is imparting education to the children of both military and civilians of the Ghatail area. From its very inception, this school was run by Station Headquarters, Ghatail. Later the responsibility was given to the Corps of Military Police Center and School (CMPC&S). After the unification of CMPC&S and the Army School of Education and Administration (ASEA) in 2008, this school was run by the Center and School of Military Police, Education and Administration (CSMEA). On the separation of these two institutes on 25 September 2011, the functioning responsibility was given to ASEA by the then Chief Patron. In January 2015, the school was again placed under Station Headquarters. Station Commander, Ghatail was the Chairman of the Managing Committee until 30 November 2018.</p>
              </div>

              <div>
                <p style={{display: 'flex', justifyContent: 'left', fontSize: '30px', fontWeight: 'bold'}}><bold>School Information</bold></p>
                <div className='row my-4'>
                        <div className='col-md-12'>
                          <div>
                            <p className='text-muted mb-2 fw-medium'>
                              <i className='mdi mdi-email-outline me-2'></i>
                              {school?.email}
                            </p>
                            <p className='text-muted mb-2 fw-medium'>
                              <i className='mdi mdi-cellphone-basic me-2'></i>
                              {school?.phone}
                            </p>
                            <p className='text-muted mb-2 fw-medium'>
                              <i className='mdi mdi-information me-2'></i>
                              {school?.address}
                            </p>
                            <p className='text-muted mb-2 fw-medium'>
                              <i className='mdi mdi-facebook me-2'></i>
                              {school?.facebook_page}
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
    )
  );
};

export default SchoolDetail;
