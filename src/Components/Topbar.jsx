import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const TopBar = () => {
  const navigate = useNavigate();

  const logoutClick = () => {
    localStorage.clear();
    Swal.fire({
      title: 'Success',
      text: 'Logged Out Successfully!',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
    navigate('/');
  };

  var AuthButtons1 = '';
  var AuthButtons2 = '';

  if (localStorage.clear()) {

    AuthButtons1 = (
      <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
        <li>
          <Link className='dropdown-item' to='/login'>
            Login
          </Link>
        </li>
        <li>
          <Link className='dropdown-item' href='/register'>
            Register
          </Link>
        </li>
      </ul>
    );
  } else {
    AuthButtons2 = (
      <li>
        <button
          className='btn btn-outline-dark'
          onClick={logoutClick}
          style={{ backgroundColor: '#ADD8E6', color: 'black' }}
        >
          Logout
        </button>
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
                style={{ backgroundColor: '#ADD8E6', color: 'black' }}
              >
                Search
              </button>
            </form>
            <ul className='navbar-nav me-auto mb-2'>
              <li className='nav-item dropdown d-flex'>
                <a
                  className='nav-link dropdown-toggle'
                  href='/'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  User
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <Link className='dropdown-item' to='/##'>
                      Profile
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {AuthButtons2}
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
