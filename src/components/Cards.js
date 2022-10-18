import "../styles/card.css"
import { useDispatch, useSelector } from "react-redux";
import { showOneCard } from "../store/actions/posts/postsActions"


function Cards() {
    const dispatch = useDispatch()
    const {cards} = useSelector((state)=> state.post)
   
    return (    
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
     );
   }
   
   export default Cards;