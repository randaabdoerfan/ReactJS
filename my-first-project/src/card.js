export default function Card ({post1,post2,post3 ,post4}) {
    return (
        <div style={{
            display:"inline-flex",
            width:'25%',
            textAlign:"center",
        }}>
            <div style={{
            padding:" 15px 10px",
            margin: "10px auto",
            height:"550px",
            
            
            
            
        }}>
            <img src={ post1 } alt="" style={{
                width:"75%",
            }}/>
            <h2>{ post2 }</h2>
            <p>{ post3 }</p>
            <p>{ post4 }</p>

        </div>
        </div>
    );

}