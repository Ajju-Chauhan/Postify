import { Link } from 'react-router-dom';
import Logo from './Logo.png';

const Header = () => {
  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom" style={{ position: "fixed", top: "0", left: "0", right: "0", zIndex: "100", backgroundColor: "white" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32">
            <img src={Logo} alt="Logo" className="me-2" style={{ width: "40px" }} />
          </svg>
          <span className="fs-4" style={{ fontWeight: "900", fontFamily: "cursive" }}>Postify</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><Link to="/" className="nav-link" aria-current="page">Home</Link></li>
          <li className="nav-item text-info"><Link to="/Create-post" className="nav-link">Create-Post</Link></li>
        </ul>
      </header>
      {/* Add padding-top to body to prevent content from being hidden under the fixed header */}
      <style>{`body { padding-top: 70px; }`}</style>
    </>
  );
};

export default Header;
