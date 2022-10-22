import { useState } from "react";
import Card from "./Card";
import {AiOutlinePlusCircle} from "react-icons/ai"
import "../styles/cards.css"

//redux
import { useDispatch, useSelector } from "react-redux";
import { showOneCard } from "../store/actions/posts/postsActions"


function Cards() {
    const [show, setShow] = useState(false)
    const {cards} = useSelector((state)=> state.post)
    const dispatch = useDispatch()

    const openOneCard = (boolean)=>{
        setShow(boolean)
    }
   
    return (
        
            <div className="seccion__cards">
                {cards.map((card)=>(
                    <div 
                        key={card.id} 
                        className={show? "seccion__card seccion__card--background" : "seccion__card"}
                    >

                    <div className="seccion__content--user">
                        <img
                            className="seccion__image"
                            alt={`usuario ${card.userId}`}
                            src={`https://joeschmoe.io/api/v1/${card.userId}`}
                        />
                        <button 
                            className="seccion__button" 
                            onClick={()=>dispatch(showOneCard(card.id))}
                        >
                            <AiOutlinePlusCircle onClick={()=> openOneCard(true)}/>
                        </button>
                    </div>

                    <div className="seccion__content--data">
                        <p className="seccion__user--title">
                            {card.title}
                        </p>
                        <p className="seccion__user--id">
                            posted by: {card.userId}
                        </p>
                    </div>
                    </div>
                ))}

                {<Card 
                state={show}
                changeState={setShow}/>}
            </div>   
            );
        }
        
        export default Cards;