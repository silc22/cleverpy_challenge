import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import HideSideBar from "../components/HideSideBar";
import "../styles/posts.css"

//redux
import { getAllPosts } from "../store/actions/posts/postsActions"
import { useDispatch } from "react-redux";


function Posts() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const user = JSON.parse(localStorage.getItem("users"))
   const [windowSize, setWindowSize] = useState(getWindowSize());

   useEffect(()=>{
      dispatch(getAllPosts())
   },[dispatch])
   

   useEffect(() => {
     function handleWindowResize() {
       setWindowSize(getWindowSize());
     }
     window.addEventListener('resize', handleWindowResize);
     return () => {
       window.removeEventListener('resize', handleWindowResize);
     }
   }, [])

   function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
   }   
 
    return (
       <section className="seccion">
        
         {user ? 
            <>
               <div className="seccion__dashboard">

                  {window.innerWidth < 780? <HideSideBar/> : ""}

                  <h3 className="seccion__title">
                     .xSc.
                  </h3>

                  <img
                     className="seccion__image"
                     alt={`usuario ${user.name}`}
                     src={`https://joeschmoe.io/api/v1/${user.gender}/${user.name}`}
                  />
                  
               </div>
               <div className="seccion__container">

                  {window.innerWidth < 780? "" : <Sidebar/> }
               
                  <div className="seccion__posts">
                     <Cards/>
                  </div>

               </div>
            </>
         :
            <div className="seccion__empty">

               <p className="seccion__message">
                  <span>Ups!</span>
                  Debes ingresar tus datos para ver el contenido.
               </p>

               <button 
                  className="seccion__back" 
                  onClick={()=>navigate("/")}>
                  Home
               </button>

            </div>
         }
      </section>
    );
  }


  
  export default (Posts);