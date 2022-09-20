import React from 'react'
import { useState } from 'react'
import bookData from './ProductsData';

const Products = () => {

  //create state
  // const [data, setData] = useState(bookData);
  const [cartItems, setCartItems] = useState(0);
  const [cart, changeCartItem] = useState({
    cart: false
  });

  const cartList = () => {
    changeCartItem(true)
  }

  const increment = () => {
    setCartItems(cartItems + 1);
  }
  const decrement = () => {
    setCartItems(cartItems - 1);
  }
  return (
    <>
      <h2 className='tempH2'>Products</h2>
      <div>
        <h2 className='tempH2'>Cart Items : {cartItems}</h2>
      </div>
      <div className='containerProduct'>
        {
          bookData.map((values) => {
            return (
              <>
                <div className='boxP'>
                  <div className='content'>
                    <div className='alignment'>
                      <button onClick={() =>increment()} className='btn btn-primary'  >Add To Cart</button> <br></br>                      
                      <button onClick={() => decrement()} className='btn btn-danger'  >Remove Book</button><br></br>
                      {/* <button onClick={() => cartList()} className='btn btn-danger'  >Remove Book</button> */}
                    </div>
                    <h5 className='titleProduct'>{values.title}</h5>
                    <p className='alignment'>{values.description}</p>
                  </div>
                  <img src={values.imageP} alt='productImage' />
                </div>
              </>
            )
          })
        }



      </div>
    </>
  )
}

export default Products




