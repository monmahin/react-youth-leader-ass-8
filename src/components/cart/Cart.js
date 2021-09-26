import './Cart.css'
import React from 'react';

const Cart = (props) => {
    const { cart } = props
    const user=<i className="fas fa-user-circle user"></i>
    let total = 0;
    for (const info of cart) {
        total = total + info.salary
    }
    const title = cart.map(info => <div key={info.id} className="info" >
        <img src={info.img} alt="" />
        <h3>{info.name}
            <br />
            <hr/>
            <address
             style={{ fontSize: '16px', textAlign: 'right', fontWeight:'200' }}>
                {info.role}
            </address>
        </h3>
    </div>)
   
    return (
        <div className="cart-container">
            <h1 className="add-leader"> {user} Added Leader: {cart.length}</h1>
            <p>{title}</p>
            <hr/>
        
            <h2 style={{color:'crimson'}}>Total cost: ${total}</h2>
            <hr/>
        </div>
    );
};

export default Cart;