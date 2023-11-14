import { RxSlash } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const AdminTable = () => {
  return (
    <div>
      <section className='ftco-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 text-center mb-5'>
              <h2 className='heading-section'>Admin Table List</h2>
              <div className='admin'>
                <Link to={'#'}>User</Link>
                <RxSlash />
                <Link to={'/user/admin'}>Admin List</Link>
              </div>
            </div>
          </div>
          <div className='row admin_table'>
            <div className='col-md-12'>
              <div className='table-wrap'>
                <table className='table table-responsive-xl'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Designation</th>
                      <th>Email</th>
                      <th>User Info</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='alert' role='alert'>
                      <td>
                        <span>image</span>
                      </td>
                      <td>
                        <span>Admin</span>
                      </td>
                      <td>
                        <span>markotto@email.com</span>
                      </td>
                      <td>
                        <div className='email'>
                          <span>markotto@email.com</span>
                          <span>Added: 01/03/2020</span>
                        </div>
                      </td>
                      <td>
                        <span>Delete, Edit, Details</span>
                      </td>
                    </tr>
                    {/* 
                    <tr className='alert' role='alert'>
                    <td>
                        <span>image</span>
                      </td>
                      <td>
                        <span>Admin</span>
                      </td>
                      <td>
                        <span>markotto@email.com</span>
                      </td>
                      <td>
                        <div className='email'>
                          <span>markotto@email.com</span>
                          <span>Added: 01/03/2020</span>
                        </div>
                      </td>
                      <td>
                        <span>Delete, Edit, Details</span>
                      </td>
                    </tr>

                    <tr className='alert' role='alert'>
                    <td>
                        <span>image</span>
                      </td>
                      <td>
                        <span>Admin</span>
                      </td>
                      <td>
                        <span>markotto@email.com</span>
                      </td>
                      <td>
                        <div className='email'>
                          <span>markotto@email.com</span>
                          <span>Added: 01/03/2020</span>
                        </div>
                      </td>
                      <td>
                        <span>Delete, Edit, Details</span>
                      </td>
                    </tr>

                    <tr className='alert' role='alert'>
                    <td>
                        <span>image</span>
                      </td>
                      <td>
                        <span>Admin</span>
                      </td>
                      <td>
                        <span>markotto@email.com</span>
                      </td>
                      <td>
                        <div className='email'>
                          <span>markotto@email.com</span>
                          <span>Added: 01/03/2020</span>
                        </div>
                      </td>
                      <td>
                        <span>Delete, Edit, Details</span>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminTable;
