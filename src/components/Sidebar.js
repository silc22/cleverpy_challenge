import { Link } from "react-router-dom";
import "../styles/sidebar.css"

function Sidebar() {
    
   
    return (    
      <aside className="sidebar">
        <ul className="sidebar__list">
            <li className="sidebar__item">
              <Link to="/" className="sidebar__link">
                Home
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/posts" className="sidebar__link">
                Explora
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/posts" className="sidebar__link">
                Notificaciones
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/posts" className="sidebar__link">
                Mensajes
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/posts" className="sidebar__link">
                Amigos
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/posts" className="sidebar__link">
                Favoritos
              </Link>
            </li>
          </ul>
        
      </aside>
     );
   }
   
   export default Sidebar;