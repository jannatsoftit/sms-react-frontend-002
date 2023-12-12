import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TopBar = () => {
  const navigate = useNavigate();

  const userFirstName = localStorage.getItem("auth_name");
  const userLastName = localStorage.getItem("last_name");
	const userTopImage = localStorage.getItem("image");
	const userRoleId = localStorage.getItem("role");

  const logoutClick = () => {
    localStorage.clear();
    Swal.fire({
      title: "Success",
      text: "Logged Out Successfully!",
      icon: "success",
      confirmButtonText: "Ok",
    });
    navigate("/login");
  };

  var AuthButtons1 = "";
  var AuthButtons2 = "";

  if (localStorage.getItem("auth_token")) {
    AuthButtons2 = (
      <li>
        <a
          onClick={logoutClick}
          style={{ color: "black", cursor:'pointer', marginLeft:'25px' }}
        >
          Logout
        </a>
      </li>
    );
  }

  return (
    <>
       <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <div className='navbar-collapse' id='navbarSupportedContent'>
            <form className='d-flex search'>
              <input
                className='form-control me-2 search'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button
                className='btn btn-outline-dark'
                type='submit'
                style={{ backgroundColor: '#02727D', color: 'white' }}
              >
                Search
              </button>
            </form>
            <ul className='navbar-nav me-auto mb-2'>
              <li className='nav-item dropdown d-flex'>
								<div className="position-relative ">
									<img
										src={`http://127.0.0.1:8000/storage/AD_img/${userTopImage}`}
										alt={userFirstName}
										className="rounded-circle topbar_image"
									/>
									<div style={{paddingTop:'9px', width:'12px', borderRadius:'7px'}} className="position-relative translate-middle bg-success border border-light ">
										<div className="visually-hidden"></div>
									</div>	
								</div>
							
                <a
                  className='nav-link dropdown-toggle'
                  href='/'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'

                >
                  {userFirstName} {userLastName}
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  {
                    userRoleId === '1' ?
                    <li>
                    <Link className='dropdown-item' to='/admin/profile'>
											User Profile
                    </Link>
                  </li>
                  :
                  userRoleId === '2' ?
                    <li>
                    <Link className='dropdown-item' to='/student/profile'>
											User Profile
                    </Link>
                  </li>
                  :
                  userRoleId === '3' ?
                    <li>
                    <Link className='dropdown-item' to='/teacher/profile'>
											User Profile
                    </Link>
                  </li>
                  :
                  null
                  }
									<li>
									  {AuthButtons2}
									</li>
                </ul>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
