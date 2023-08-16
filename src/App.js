import React from 'react';
import Productlist from './components/ProductList';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import CartList from './components/CartList';

function App() {

  const [products, setProduct] = useState([

{

  "id":1,
  "name":"heineken beer",
  "url":"https://th.bing.com/th/id/OIP.MVar6WSmjZ-OOSt6vzIHHgHaHa?w=187&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "price":200,
  "details":"this is the beer"
},
{
  "id":2,
  "name":"heineken beer",
  "url":"https://th.bing.com/th/id/OIP.B49PKa400M4NqQ5dbQYsJAHaK5?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "price":400,
  "details":"this is very nicie"

},
{
  "id":3,
  "name":"heineken beer",
  "url":"https://th.bing.com/th/id/OIP.B49PKa400M4NqQ5dbQYsJAHaK5?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "price":400,
  "details":"this is very nicie"
}

 ]);
 const [cart, setCart] = useState([])
 const addtocart =(data)=>{
 // console.log(data);
 setCart([...cart,data])

 }


  return (
   <>
    {/*<h1>Cart Items: {cart.length</h1>*/}
    <Header CartItem={cart.length}/>
      <Productlist pro={products} addToCart={addtocart}/>
      <CartList pro={cart}></CartList>
   </>
   
  );
}

export default App;
