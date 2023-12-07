const NotFound = () => {
  return (
    <>
      <div className='page_not_found_body'>
        <div id='notfound'>
          <div className='notfound'>
            <div className='notfound-404'>
              <h1>Oops!</h1>
            </div>
            <div className='page_404_notfound'>
            <h2>404 - Page not found</h2>
            </div>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
