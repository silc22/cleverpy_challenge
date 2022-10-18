import { useState, React } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/form.css"

function Form() {
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState ({
        name: "",
        gender: ""
      })

    const inputHandler = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
      }
    
      const submitForm = (e) => {
        e.preventDefault()
        if (newUser.name ==="" | newUser.gender === "" || newUser.name.length > 10 || newUser.name.length < 3){
            alert('There are fields incomplete, please complete them.') 
            navigate("/")
        }else{
          localStorage.setItem("users", JSON.stringify(newUser))
          navigate("/posts")
        }
    }
   
    return (    
        <form className="home_form">
            <label htmlFor="name" className="home__label">
                ¿Cuál es tu nombre?
            </label>
            <input 
            className="home__input"
            type="text" 
            id="name" 
            name="name" 
            onChange={e=>inputHandler(e)}/>

            <p className="home__label">Género</p>
            <select className="home__select" required name="gender" id="gender" onChange={e=>inputHandler(e)}>
                <option className="home__option" defaultValue="Elige una opción">Elige una opción</option>
                <option className="home__option" value="male"> Hombre </option>
                <option className="home__option" value="female"> Mujer </option>
            </select>
                <button className="home__button" type="submit" onClick={(e) => submitForm(e)}>
                    Comenzar
                </button>
        </form>
     );
   }
   
   export default Form;
   