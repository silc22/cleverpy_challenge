import { useState } from "react";
import "../styles/cards.css"
import { useDispatch, useSelector } from "react-redux";
import { showOneCard, openOneCard } from "../store/actions/posts/postsActions"
import {AiOutlinePlusCircle} from "react-icons/ai"
import Card from "./Card";


function Cards() {
    const dispatch = useDispatch()
    const {cards} = useSelector((state)=> state.post)
    const [show, setShow] = useState(false)

    const openOneCard = (boolean)=>{
        setShow(boolean)
    }
   
    return (
        
            <div className="seccion__cards">
            {cards.map((card)=>(
                <div key={card.id} className={show === true ? "seccion__card seccion__card--background" : "seccion__card"}>
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
                   <AiOutlinePlusCircle onClick={()=> openOneCard(true)}/>
                </button>
            </div>
            ))}
            {<Card 
            estado={show}
            cambiarEstado={setShow} />}
            </div>   
            );
        }
        
        export default Cards;