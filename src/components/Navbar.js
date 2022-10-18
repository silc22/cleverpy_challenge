import { Link } from "react-router-dom";
import "../styles/navbar.css"

function Navbar() {

   
    return (   
      <nav className="menu">

        <div className="menu__container">

          <p className="menu__title">
            .xSc.
          </p>

          <ul className="menu__list">
            
            <li className="menu__item">
              <Link to="/" className="menu__link">
                Home
              </Link>
            </li>
            <li className="menu__item--principal">
              <Link to="/posts" className="menu__link">
                Posts
              </Link>
            </li>

          </ul>
          
        </div> 

      </nav>
     );
   }
   
   export default Navbar;
   