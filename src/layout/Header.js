import Menu from "./Menu";
import { Link } from "react-router-dom";

const Header =()=>{
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Eleventh navbar example">
      <div className="container-fluid">
      
        <Link className="navbar-brand" to={"/"}>Boilerplate</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Menu></Menu>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to={"/"} id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">My Account</Link>
              <ul className="dropdown-menu" aria-labelledby="dropdown09">
                <li>
                    <Link className="dropdown-item" to={"/dashboard/Profile"}>Profile</Link>
                </li>
                <li><Link className="dropdown-item" to={"/dashboard"}>Dashboard</Link></li>
                <li><Link className="dropdown-item" to={"/test"}>Test</Link></li>
                <li><Link className="dropdown-item" to={"/session/Signout"}>Signout</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
            <Menu></Menu>
        
        </>
    )
}

export default Header;