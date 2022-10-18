import "../styles/card.css"
import { deleteCard } from "../store/actions/posts/postsActions"
import { useDispatch, useSelector } from "react-redux";

function Card() {
    const dispatch = useDispatch()
    const {oneCard} = useSelector((state)=> state.post)
   
    return (    
        <>
        {oneCard.map((element)=>(
           <article className="article__card" key={element.id}>
                <p>{element.userId}</p>    
                <p>{element.title}</p>    
                <p>{element.body}</p>    
                <button onClick={()=>dispatch(deleteCard(element.id))}>
                eliminar card
                </button>
            </article>
        ))}
      </>
     );
   }
   
   export default Card;
   