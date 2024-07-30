import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>

          <div className='logo'>
            <Link to="/">REACT</Link>
          
          </div>

          <nav className='nav nav-pills' >
          <Link style={{ color:"white" ,marginRight:"70px"}} to="/">HOME</Link>
          <Link style={{color:"white" ,marginRight:"70px"}} to="/about">ABOUT</Link>
          <Link style={{color:"white" ,marginRight:"70px"}} to="products">PRODUCTS</Link>
          <Link style={{color:"white" ,marginRight:"0px"}} to="posts">POSTS</Link>

     
          </nav>

        </div>
      </div>
    </header>
  )
}

export default Header