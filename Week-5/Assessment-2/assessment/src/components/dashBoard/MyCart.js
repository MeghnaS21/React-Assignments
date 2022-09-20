// import React from 'react'

// const MyCart = () => {
//   return (
//     <div>MyCart</div>
//   )
// }

// export default MyCart

import React from 'react'
import { useState } from 'react'
import bookData from '../productsCart/ProductsData';

const MyCart = () => {

    //create state
    // const [data, setData] = useState(bookData);
    const [cartItems, setCartItems] = useState(0);
    const [cart, changeCartItem] = useState("false");

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
                                            <button onClick={() => {
                                                increment();
                                                cartList();
                                            }} className='btn btn-primary'  >Add To Cart</button> <br></br>
                                            <button onClick={() => decrement()} className='btn btn-danger'  >Remove Book</button><br></br>
                                            {/* <button onClick={() => } className='btn btn-danger'  >Remove Book</button> */}
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

export default MyCart




