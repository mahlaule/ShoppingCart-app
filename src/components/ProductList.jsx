import React from 'react'
import './Productlist.css'

function Productlist({pro, addToCart}){




    return(
       
        
<div className ="product">
{
  pro.map((x,i)=>{
    return(
    <div className= "card" key={i}>
  <img src={x.url} />
  <h1>{x.name}</h1>
  <p className="price">R{x.price}</p>
  <p>{x.details}</p>
  <p><button onClick={()=>addToCart(x)}>Add to Cart</button></p>
</div>)

    

    

  }) 
    
}
</div>



        
    )
};

export default Productlist;