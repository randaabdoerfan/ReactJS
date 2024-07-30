import { Routes, Route , useNavigate} from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Posts from './pages/Posts.jsx';
import Products from './pages/Products.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Error from './pages/Error.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
	const navigate = useNavigate()
	return (
		<div>
		<div className='App'>
				<Header/>		
				<Routes>
				<Route index element={<Home />}/>
				<Route path='/about' element={<About />}/>
				<Route path='/posts' element={<Posts />}/>
				<Route path='/products' element={<Products />}/>
				<Route path='/products/products/:productId' element={<SingleProduct />}/>
				<Route path='*' element={<Error />}/>
			</Routes>
			</div>
			<div  style={{backgroundColor:'black',height:'150px',width:'100%'}}>
			
			<button style={{margin:'20px',borderRadius:"10px"}} type="button" className="btn btn-primary" onClick={()=>navigate('products')}>Go Forward</button>
			<br/>
			<button style={{margin:'20px',borderRadius:"10px"}} type="button" className="btn btn-primary" onClick={()=>navigate(-1)}>GO Back</button>
			<Footer/>
			</div>
			
		
		</div>
	);
}

export default App;
