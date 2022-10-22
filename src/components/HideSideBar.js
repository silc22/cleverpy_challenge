import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu} from "react-icons/gi"
import { FaHome, FaRegBell} from 'react-icons/fa';
import { FiHash, FiMessageSquare, FiUsers } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import { SlClose}  from 'react-icons/sl';
import "../styles/sidebar.css"
import "../styles/hideSideBar.css"



function HideSideBar() {
    const [show, setShow] = useState(true)

    const openOneCard = ()=>{
        setShow(!show)
    }
   
    return (   
      <div className="hide">
        <GiHamburgerMenu 
          onClick={()=> openOneCard()} 
          className="hide__icon"/>
        {show ? "" :  
          <div className="hide__container">

            <SlClose className="hide__icon" onClick={()=> openOneCard()} />
            <ul className="sidebar__list" >

              <Link to="/" className="sidebar__link">
                <FaHome className="sidebar__icon"/>
                <li className="sidebar__item">
                    Home
                </li>
              </Link>

              <Link to="/posts" className="sidebar__link">
                <FiHash className="sidebar__icon"/>
                <li className="sidebar__item">
                    Explora
                </li>
              </Link>

              <Link to="/posts" className="sidebar__link">
                <FaRegBell className="sidebar__icon"/>
                <li className="sidebar__item">
                    Notificaciones
                </li>
              </Link>

              <Link to="/posts" className="sidebar__link">
                <FiMessageSquare className="sidebar__icon"/>
                <li className="sidebar__item">
                    Mensajes
                </li>
              </Link>

              <Link to="/posts" className="sidebar__link">
              <FiUsers className="sidebar__icon"/>
              <li className="sidebar__item">
                    Amigos
              </li>
              </Link>

              <Link to="/posts" className="sidebar__link">
                <AiOutlineStar className="sidebar__icon"/>
                <li className="sidebar__item">
                    Favoritos
                </li>
              </Link>

            </ul>

            <ul className="sidebar__list--config">

              <Link to="/posts" className="sidebar__link">
                <BsGear/>
                <li className="sidebar__item">
                    Configuración
                </li>
              </Link>

            </ul>
        
          </div>
        }

      </div>
     )
  }
   
   export default HideSideBar;
   