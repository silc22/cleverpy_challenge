import "../styles/cards.css"
import { useDispatch, useSelector } from "react-redux";
import { showOneCard } from "../store/actions/posts/postsActions"
import {AiOutlinePlusCircle} from "react-icons/ai"


function Cards() {
    const dispatch = useDispatch()
    const {cards} = useSelector((state)=> state.post)
   
    return (    
        <div className="seccion__cards">
            {cards.map((card)=>(
            <div key={card.id} className="seccion__card" >
                <img
                    className="article__image"
                    alt={`usuario ${card.userId}`}
                    src={`https://joeschmoe.io/api/v1/${card.userId}`}
                />
                <div className="seccion__content">
                    <p className="seccion__content--title">
                        {card.title}
                    </p>
                    <p className="seccion__content--user">
                        posted by: {card.userId}
                    </p>
                </div>
                <button className="seccion__button" onClick={()=>dispatch(showOneCard(card.id))}>
                   <AiOutlinePlusCircle/>
                </button>
            </div>
            ))}
        </div>
     );
   }
   
   export default Cards;