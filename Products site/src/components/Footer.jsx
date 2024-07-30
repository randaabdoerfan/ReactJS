import { Link } from "react-router-dom"

const Footer = () => {
  return (
      <div className='container'>

        <nav style={{height:"50px",width:'100%'}} className='d-flex justify-content-center'>
          <Link style={{color:"white" ,marginRight:"40px"}} to="/">HOME</Link>
          <Link style={{color:"white" ,marginRight:"40px"}} to="/about">ABOUT</Link>
          <Link style={{color:"white" ,marginRight:"40px"}} to="products">PRODUCTS</Link>
          <Link style={{color:"white" ,marginRight:"40px"}} to="posts">POSTS</Link>
        </nav>
        
      </div>
    
  )
}

export default Footer