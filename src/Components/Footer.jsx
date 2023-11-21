import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer
        className='text-center text-white'
        style={{ backgroundColor: '#45637d' }}
      >
        {/* Copyright Start */}
        <div
          className='text-center p-3'
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)"}}
        >
          © 2023 Copyright - All rights reserved <br></br>
          <Link className='text-white' to={'//'}>
            Legal Stuff |
          </Link>
          <Link className='text-white' to={'//'}>
            Policy |
          </Link>
          <Link className='text-white' to={'//'}>
            Security
          </Link>
        </div>
        {/* Copyright  End */}
      </footer>
    </div>
  );
};

export default Footer;
