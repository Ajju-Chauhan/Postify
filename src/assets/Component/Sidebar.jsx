import { Link } from 'react-router-dom';
import Logo from './Logo.png';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 text-bg-dark sidebar" style={{ width: "180px" ,position: 'sticky'}}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        
        <span className="fs-4">Postify</span>
      </Link>
      <hr />
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link" aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Create-post" className="nav-link">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
