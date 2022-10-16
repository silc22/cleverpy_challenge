import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import Footer from "./components/Footer";

//Redux
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<Posts/>}/>
        </Routes>
        <Footer/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
