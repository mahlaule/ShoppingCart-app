import React from 'react'
import './CartList.css'

function CartList({pro}){

  

    return(
      <div className='cartarea'>
      
<table className='table'>
  <thead>
    <tr>
      <th>s.No</th>
      <th>image</th>
      <th>product name</th>
      <th>price</th>
      <th>quantity</th>
    </tr>
  </thead>
{
  pro.map((x,i)=>{
    return(
      <tr key={i}>
        <td>{i+1}</td>
        <td> <img src={x.url} alt={x.name} className='cartImg'/></td>
        <td>{x.name}</td>
        <td>{x.price}</td>
        <td>1</td>

      </tr>
     )

    })
  }
    

    </table>
    </div>
    )
}

  
    



    
export default CartList;