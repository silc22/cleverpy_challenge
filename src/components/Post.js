import "../styles/cards.css"
import Card from "./Card"
import { useSelector } from "react-redux";



function Post() {
    const {oneCard} = useSelector((state)=> state.post)
    const user = JSON.parse(localStorage.getItem("users"))




    return (
      <>
        {oneCard.length === 0 ?
        <article className="article__container">
          <p className="article__massage--user">
            {user.name}
          </p>
          <p className="article__massage">
            hecha un vistazo al detalle de las últimas novedades!
          </p>
        </article>
        :
        <Card/>
        }
      </>
    );
  }
  
  export default Post;