import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Cart from '../cart/Cart';
import './Leaderboard.css'


const Leaderboard = () => {
    const [cards, setCards] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./leader.JSON')
            .then(res => res.json())
        .then(data=>setCards(data))
    }, [])
    const handleCart = (card) => {
        const newCart = [...cart, card]
        setCart(newCart)
    }
    return (
        <div className="leaderboard-container">
            
            <div className="cards">
                
                {
                    cards.map(card=> <Card handleCart={handleCart} key={card.id} card={card}></Card>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Leaderboard;