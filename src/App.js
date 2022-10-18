import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Posts from "./pages/Posts"

//Redux
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  

  return (
    <BrowserRouter>
      <Provider store={store}>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Home/>}/>
          <Route path="/posts" element={<Posts/>}/>
        </Routes>

      </Provider>
    </BrowserRouter>
  );
}

export default App;
