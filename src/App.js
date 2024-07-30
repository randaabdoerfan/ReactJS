
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import PageNoFound from './PageNotFound';
import Order from './Order';
import { useState } from 'react';

function App() {
  const [Randa,setRanda] = useState('R')
  console.log(Randa)
const navigate = useNavigate()

  return (
    <div>
      <div style={{width:"100%",
        backgroundColor:"black",
        height:"50px",
        color:"white",
        display:"inline-flex",
      }}>
      <Link style={{color:"white", marginLeft:"20px",marginRight:"567px"}} to='/header'>Header</Link>
      <Link style={{color:"white",marginRight:"567px"}} to='/footer'>Footer</Link>
      <Link style={{color:"white",marginRight:"20px"}} to='/about'>About</Link>
      </div>
      <h1 onClick={()=> setRanda("randood")}>{Randa}</h1>
      <br/>
      <Routes>
        <Route path='/header' element={<Header/>}/>
        <Route path='/footer' element={<Footer/>}/>   
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<PageNoFound/>}/>
        <Route path='/order' element={<Order/>} />
      </Routes>
      <br/>
      <br/>
      <br/>
      <br/>
      <button onClick={()=> navigate('order')}>Order</button>
      <br/>
      <button onClick={()=> navigate(-1)}>Back to Order </button>
    </div>
  );
}

export default App;
