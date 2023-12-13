import Footer from "../../../Footer";
import schoolImage from '../../../../../public/schoolMagazine/school_image_agap.jpg';

const SchoolDetail = ({ school }) => {
  return (
    school && (
      <>
        <div className='container'>
          <div className='row admin_show'>
            <div className='col-xl-8'>
              <div className='card'>
                <div className='card-body'>
                <div className="school_image">
                      <img src={schoolImage} 
                        width='670px' 
                        height='350px' 
                        style={{marginLeft:'80px', marginBottom:'30px'}}
                      />
                  </div>
                  <div>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        color: 'blue',
                      }}
                    >
                      <bold>{school?.title}</bold>
                    </p>
                  </div>

                  <div>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '35px',
                        fontWeight: 'bold',
                      }}
                    >
                      <bold>About</bold>
                    </p>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '15px',
                      }}
                    >
                      A school is both the educational institution and building
                      designed to provide learning spaces and learning
                      environments for the teaching of students under the
                      direction of teachers. Most countries have systems of
                      formal education, which is sometimes compulsory. In these
                      systems, students progress through a series of schools
                      that can be built and operated by both government and
                      private organization. The names for these schools vary by
                      country but generally include primary school for young
                      children and secondary school for teenagers who have
                      completed primary education.
                    </p>
                  </div>

                  <div>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '35px',
                        fontWeight: 'bold',
                      }}
                    >
                      Our Vision
                    </p>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '15px',
                      }}
                    >
                      “Education for Enlightenment.”
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '35px',
                        fontWeight: 'bold',
                      }}
                    >
                      Our Mission
                    </p>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '15px',
                      }}
                    >
                      Our Mission is to provide high quality education and
                      childcare in a safe, respectful and inclusive environment
                      that builds a foundation for life-long learning.
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '35px',
                        fontWeight: 'bold',
                      }}
                    >
                      Motto
                    </p>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '15px',
                      }}
                    >
                      “Learn to Lead”
                    </p>
                  </div>

                  <div>
                    <p
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '30px',
                        fontWeight: 'bold',
                      }}
                    >
                      <bold>School Information</bold>
                    </p>
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
        <Footer />
      </>
    )
  );
};

export default SchoolDetail;
