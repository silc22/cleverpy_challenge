import { useEffect } from "react";
import { getAllPosts, showOneCard } from "../store/actions/posts/postsActions"
import { useDispatch, useSelector } from "react-redux";
import "../styles/posts.css"
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";

function Posts() {
   const {cards} = useSelector((state)=> state.post)
   const dispatch = useDispatch()
   const user = JSON.parse(localStorage.getItem("users"))


   useEffect(()=>{
      dispatch(getAllPosts())
   },[dispatch])

   
   
    return (
     <section className="seccion">
      <h3>Hola {user.name}!</h3>
      <div className="seccion__container">
         <Sidebar/>
         <div className="seccion__posts">
            <div className="seccion__indivualCard">
            <Post />
            </div>
            <div className="seccion__cards">
               {cards.map((card)=>(
                  <div key={card.id} className="seccion__card" >
                     <p>
                        {card.title}
                     </p>
                     <p>
                        posted by: {card.userId}
                     </p>
                     <button onClick={()=>dispatch(showOneCard(card.id))}>
                        +
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </div>
     </section>
    );
  }


  
  export default (Posts);