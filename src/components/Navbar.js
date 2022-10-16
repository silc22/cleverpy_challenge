import { Link } from "react-router-dom";
import "../styles/navbar.css"

function Navbar() {

 
   
    return (   
      <>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/" className="menu__link">
              Home
            </Link>
          </li>
          <li className="menu__item">
          <Link to="/posts" className="menu__link">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
      </> 
     );
   }
   
   export default Navbar;
   