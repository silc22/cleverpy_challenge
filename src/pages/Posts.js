import { useEffect } from "react";
import { getAllPosts, showOneCard } from "../store/actions/posts/postsActions"
import { useDispatch, useSelector } from "react-redux";
import "../styles/posts.css"
import Post from "../components/Post";

function Posts() {
   const {cards} = useSelector((state)=> state.post)
   const dispatch = useDispatch()


   useEffect(()=>{
      dispatch(getAllPosts())
   },[dispatch])
  
   
    return (
     <section className="seccion__posts">
      
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
                     {card.userId}
                  </p>
                  <button onClick={()=>dispatch(showOneCard(card.id))}>
                     ver mas
                  </button>
               </div>
            ))}
        </div>
     </section>
    );
  }


  
  export default (Posts);