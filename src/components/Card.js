import { useState } from "react";
import "../styles/card.css"
import { deleteCard } from "../store/actions/posts/postsActions"
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart, AiOutlineUserAdd, AiOutlineUser , AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded}  from 'react-icons/bi';
import { MdDeleteOutline }  from 'react-icons/md';
import { FiMoreHorizontal}  from 'react-icons/fi';


function Card() {
    const [like, setLike] = useState(false)
    const [friends, setFriends] = useState(false)
    const [post, setPost] = useState(false)
    const dispatch = useDispatch()
    const {oneCard} = useSelector((state)=> state.post)
   
    const getLike = () =>{
      setLike(!like)
    }
    const getFriends = () =>{
      setFriends(!friends)
    }
    const getRepost = () =>{
      setPost(!post)
    }


    return (    
        <>
        {oneCard.map((element)=>(
           <article className="article__card" key={element.id}>
                <div className="article__container--options">
                  <FiMoreHorizontal/>
                </div>
                <div className="article__container--data">
                  <div className="article__data">
                    <img
                    className="article__image"
                    alt={`usuario ${element.userId}`}
                    src={`https://joeschmoe.io/api/v1/${element.userId}`}
                    />
                    <p className="article__id">{element.userId}</p>
                  </div>
                    <button className="article__data--button" onClick={()=>getFriends()}>
                      {friends? <AiOutlineUser className="article__data--friends"/> : <AiOutlineUserAdd className="article__data--follow"/> }
                    </button>
                </div>

                <div className="article__container--content">
                  <p className="article__title">{element.title}</p>    
                  <p className="article__body">{element.body}</p>    
                </div>

                <div  className="article__container--buttons">
                  <button className="article__button--deleted" onClick={()=>dispatch(deleteCard(element.id))} >
                     <MdDeleteOutline/>
                  </button>
                  <button className="article__button--comment" >
                    <BiMessageRounded/>
                  </button>
                  <button className={post? "article__button--repost" : "article__button--inactive"} onClick={()=>getRepost()} >
                    <AiOutlineRetweet/>
                  </button>
                  <button className="article__button--like" onClick={()=> getLike()}>
                  {like? <AiFillHeart className="button__liked" /> : <AiOutlineHeart/>}
                  </button>
                </div>
            </article>
        ))}
      </>
     );
   }
   
   export default Card;
   