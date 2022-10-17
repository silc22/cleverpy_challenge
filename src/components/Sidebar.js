import "../styles/sidebar.css"

function Sidebar() {
    
   
    return (    
      <aside className="sidebar">
        <ul className="sidebar__menu">
          <li className="sidebar__icons">
              Telegram
          </li>
          <li className="sidebar__icons">
              Whatsapp
          </li>
          <li className="sidebar__icons">
              Github
          </li>
        </ul>
        
      </aside>
     );
   }
   
   export default Sidebar;