
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
          © 2020 Copyright:
          <a className='text-white' href='/'>
            MDBootstrap.com
          </a>
        </div>
        {/* Copyright  End */}
      </footer>
    </div>
  );
};

export default Footer;
