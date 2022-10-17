import "../styles/post.css"
import Card from "./Card"
import { useSelector } from "react-redux";



function Post() {
    const {oneCard} = useSelector((state)=> state.post)




    return (
      <>
        {oneCard.length === 0 ?
        <div className="card">
          <p>Aun no has seleccionado ningun post</p>
        </div>
        :
        <Card/>
        }
      </>
    );
  }
  
  export default Post;