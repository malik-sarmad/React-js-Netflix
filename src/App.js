import './App.css';
import {Routes,BrowserRouter, Route } from 'react-router-dom';
import Home from './Compenents/Home';

const App =()=>{
return(
  <BrowserRouter>
  
  <Routes> 
    <Route exact path='/' element={<Home/>}/> 
  </Routes>
  </BrowserRouter>
)
}

export default App;
