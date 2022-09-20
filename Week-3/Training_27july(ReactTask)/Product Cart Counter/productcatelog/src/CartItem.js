import React from "react";

class CartItem extends React.Component{
    constructor(){  //------------------------------>STATE OBJECT
        super()
         {/*to call the constructor of parent 
    class we will use constructor in child class* */}
        this.state={
            price: 8999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }

    // {/*Arrow functions will automatically bind */}

    increaseQuantity=()=>
    {
        // this.state.qty +=1;
        console.log('this', this.state)
        //setstate form 1 by giving this an object
        //calling set state we can trigger or re-render an updated value of a component
        //BTS----> REACT WILL TAKE THE BELOW OBJECT & MERGE IT WITH THE STATE OBJECT(SHALLOW MERGING-
        //REACT WILL ONLY CHANGE THE PARTICULAR QTY WITHOUT TOUCHING THE OTHER QUANTITY) & 
        //RENDER FUNCTION WILL BE CALLED WITH THE UPDATED DATA

        // this.setState(
        //     {
        //         qty: this.state.qty + 1
        //     }
        // );

        //setstate form-2 by giving fucntiion & what does react internally, it will pass the 
        //previous state to us
        this.setState((prevState)=>{
            return{
                qty: prevState.qty + 1
            }
        });
    }
    render(){
        const { price, title, qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs {price}</div>
                    <div style={ { color: '#777'} }>Qty {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons */}
  
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={this.increaseQuantity}
                        />

                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>

                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"/>
                    </div>
                </div>

            </div>
        );
    }
}

{/* STYLING ITEMS USING OBJECTS*/}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;

{/* STATES STORE OUR LOCAL DATA. IT'S JUST SIMPLE JS OBJECT */}

{
/* STATES={
    TITLE:
    PRICE:
    QTY:
    IMG:
} */
}

//SUMMARY

/*
1-WE CREATED A CARTITEM COMPONENT & IMPORTED IT FROM A CARTITEM FILE & IMPORTED IT IN APP.JS
2-IN CARTITEM FILE--> WE HAVE ADDED THE JSX BEFORE IMG TAG & THE START OF RENDER()
3-ADDED 3 BUTTONS
4- ADDED THE STATE, LEARNT ABOUT STATE, & HOW WE CAN SET A DEFAULT STATE IN OUR CONSTRUCTOR
5- HOW TO ATTACH EVENT LISTENER TO OUR BUTTONS, USING THE ONCLICK ATTRIBUTE, & PASSING IT THE REFERENCE OF INCREASEQUANTITY
6- HOW TO BIND THE VALUE OF THIS INSIDE MY INCREASEQUANTITY FUNCTION USING ARROW FUNCTIONS
*/