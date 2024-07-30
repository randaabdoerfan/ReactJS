import React, { useEffect, useState } from 'react'

export const Posts = () => {
  const [posts,setPosts]=useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPosts(json))
  },[])
   return (
    <main className="posts">
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Posts</h1>
            </div>
            
          </div>
        </div>
      </div>
      <div className="container content">
        
            <div className="row">
              {posts.map(x => {
                return(
                  <div className='col-sm-6' key={x.id}>
                    <div className='card-body' style={{borderBlock:'1px solid black'}}></div>
                    <h3 className='card-title'>{x.title}</h3>
                    <p className='card-text'>{x.body}</p>
                  </div>
                )})

              }
              
             
            </div>
      
      </div>
    </main>
  )
}


 


export default Posts