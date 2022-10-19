import { useEffect } from "react";
import { getAllPosts } from "../store/actions/posts/postsActions"
import { useDispatch, useSelector } from "react-redux";
import "../styles/posts.css"
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";

function Posts() {
   const dispatch = useDispatch()
   const user = JSON.parse(localStorage.getItem("users"))
   const {cards} = useSelector((state)=> state.post)

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
         :<p>debes ingresar tus datos primero para ver los posteos</p>}
      </section>
    );
  }


  
  export default (Posts);