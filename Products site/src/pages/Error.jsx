import { useNavigate } from "react-router-dom"


const Error = () => {
  const navigate= useNavigate()
  return (
    <main>
       <div className="pg-header">
        <div className="container">
          <h1>404 Error</h1>
        </div>
      </div>
      <div className="container content">
        <button style={{margin:'20px',borderRadius:"10px"}} type="button" class="btn btn-primary" onClick={()=> navigate('/')}>GO Back Home</button>
        <p>Page not found...</p>
       
      </div>
    </main>
  )
}

export default Error