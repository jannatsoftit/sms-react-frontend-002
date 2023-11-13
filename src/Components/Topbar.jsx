const Topbar = () => {
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
                    <a className='dropdown-item' href='/'>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='/'>
                      Logout
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='/'>
                      Settings
                    </a>
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

export default Topbar;
