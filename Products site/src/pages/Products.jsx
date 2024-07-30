import PRODUCTS from '.././data'
import { Link } from "react-router-dom";

const Products = () => {

  return (
    <main>
      
    <div className="pg-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1>Products</h1>
          </div>
        </div>
      </div>
      
    </div>

    <div  className="container content">
      <div className="row products-row">
      {PRODUCTS.map(product => {
        return(
          <div className='col-lg-4' key={product.id}>
           <div style={{
          display:"inline-flex",
          width:'33%',
          textAlign:"center",
      }}>
          <div>
          <div className="card" style={{
          padding:" 15px 10px",
          margin: "10px",
          height:"700px",
          paddingBlock:"10px",      
      }}>
          <div className="img-warp">
          <img src={ product.image } alt="" style={{
              width:"350px",
              height:"380px"
          }}/>
          </div>
          <div className="card-body">
          <h2>{ product.name }</h2>
          <p>{ product.details }</p>
          <div style={{display:'inline-block'}} className="d-flex justify-content-between align-items-center">
          <span>Price:<strong className='price'>{ product.price }</strong></span>
          <Link style={{margin:'20px',borderRadius:"10px" ,fontSize:'17px'}} className='btn btn-primary btn-sm' to={`products/${product.id}`}>Details &#8594;</Link>
          </div>
          
          
          </div>

      </div>
      </div>
      </div>
            </div>
        
        )
      })}
       
      </div>
      </div>

  </main>
  )

}

export default Products