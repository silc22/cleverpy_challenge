import { useState, React } from "react"
import { useNavigate } from "react-router-dom"
import Alert from "./Alert"
import "../styles/form.css"

function Form() {
    const navigate = useNavigate()
    const [ alert, setAlert ] = useState({})
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
            showAlert({
                msg: "No pueden existir campos vacios. Los caracteres deben ser menor a 10 y mayor 3.",
                error: true
            }) 
            
        }else{
          localStorage.setItem("users", JSON.stringify(newUser))
          navigate("/posts")
        }
    }

    const showAlert = (alert) =>{
        setAlert(alert)
        setTimeout(()=>{
            setAlert({})
        },[5000])
    }
    const { msg } = alert

    return (    
        <form className="home__form">
            {  msg && <Alert alert={alert} />}
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
   