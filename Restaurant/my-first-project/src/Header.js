import nav from './imgs/nav.png'
export default function Header(){
    return (
        <div style={{
            width:"100%",
            backgroundColor:"gray",   
            height:"70px" ,
            color:"white" ,  
            display:"inline-flex", 
            textAlign:"center",
            fontSize:"0px"    ,
            marign:"0px"     
        }}>
            <img style={{
                width:"30px",
                height:"30px",
                padding: " 20px 140px 10px 20px",
                
                
            }} src={nav} alt=""/>

            <h3 style={{
                fontWeight:"lighter",
                fontSize:"20px",  
                padding:"2px 420px 5px 420px "
            }}>Food</h3>
            <h3 style={{
                fontWeight:"lighter",
                fontSize:"20px",
                padding:"2px 10px 5px 200px"
                
            }}>Menu</h3>
        

        </div>
    );

    
}