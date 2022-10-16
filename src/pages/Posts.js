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
               <div key={card.id} className="seccion__card" onClick={()=>dispatch(showOneCard(card.id))}>
                  <p>
                     {card.userId}
                  </p>
                  <p>
                     {card.title}
                  </p>
               </div>
            ))}
        </div>
     </section>
    );
  }


  
  export default (Posts);