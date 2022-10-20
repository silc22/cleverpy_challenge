import { useEffect } from "react";
import { getAllPosts } from "../store/actions/posts/postsActions"
import { useDispatch } from "react-redux";
import "../styles/posts.css"
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom";

function Posts() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const user = JSON.parse(localStorage.getItem("users"))

   useEffect(()=>{
      dispatch(getAllPosts())
   },[dispatch])
   
   
    return (
       <section className="seccion">
         {user ? 
         <>
         <div className="seccion__dashboard">
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
            <Sidebar/>
            <div className="seccion__posts">
               <Post />
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
            <button className="seccion__back" onClick={()=>navigate("/")}>
              Home
            </button>
         </div>
         }
      </section>
    );
  }


  
  export default (Posts);