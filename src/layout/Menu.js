import { Link } from "react-router-dom";

const Menu =()=>{
    return(
        <>
                    <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" tabIndex="-1"  to={"/pages/About"}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" tabIndex="-1"  to={"/blog"}>Blog</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" tabIndex="-2"  to={"/pages/Services"}>Services</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" tabIndex="-3" to={"/pages/Contact"}>Contact</Link>
            </li>
     
          </ul>
        </div>
        </>
    )
}

export default Menu;