import { React } from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import "../styles/home.css"


function Home() {
 

   return (
    <>  
      <Navbar/>
      <main className="home">

        <div className="home__container">

          <h2 className="home__title">
            Qué <span>bueno</span> verte!
          </h2>

          <Form/>

        </div>
      
      </main>
      <Footer/>
    </>
    );
  }
  
  export default Home;
  