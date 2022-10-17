import { useState, React } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/home.css"


function Home() {
  const [newUser, setNewUser] = useState ({name: ""})
  const navigate = useNavigate()
  
  const inputHandler = (e) => {
    setNewUser({
        [e.target.name]: e.target.value
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (newUser.name === "" || newUser.name.length > 10 || newUser.name.length < 3){
    alert('There are fields incomplete, please complete them.') 
    }else{
      localStorage.setItem("users", JSON.stringify(newUser))
      navigate("/posts")
    }
}

   return (
    <>
        <main className="home">

          <div className="home__container">

            <h2 className="home__title">
              Qué <span>bueno</span> verte!
            </h2>

            <form className="home_form">

              <label 
                htmlFor="name"
                className="home__label">
                  ¿Cuál es tu nombre?
              </label>
              <input 
              className="home__input"
              type="text" 
              id="name" 
              name="name" 
              onChange={(e)=>inputHandler(e)}/>

              <Link 
              className="home__link"
              to="/" 
              onClick={(e) => submitForm(e)}>

                <button 
                className="home__button"
                type="submit">
                  Comenzar
                </button>

              </Link>
            </form>

          </div>
        
        </main>
    </>
    );
  }
  
  export default Home;
  