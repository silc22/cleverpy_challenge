import {BsTelegram} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import {AiFillGithub} from "react-icons/ai"
import "../styles/footer.css"

function Footer() {
    
   
    return (    
      <footer className="footer">
        <ul className="footer__menu">
          <li className="footer__icon">
            <BsTelegram/>
          </li>
          <li className="footer__icon">
              <IoLogoWhatsapp/>
          </li>
          <li className="footer__icon">
              <AiFillGithub/>
          </li>
        </ul>
      </footer>
     );
   }
   
   export default Footer;
   