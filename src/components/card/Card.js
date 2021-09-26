import './Card.css'
import React from 'react';

const Card = (props) => {
    const { name, img, role, country, salary } = props.card
    const facebook = <i className="fa fa-facebook"></i>
    const twitter = <i className="fa fa-twitter"></i>
    const likedin = <i className="fa fa-linkedin"></i>
    const cart=<i className="fas fa-shopping-cart cart-icon"></i>
    return (
        <div className="card-container">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p className="role">{role}</p>
            <h3>{country}</h3>
            <p>Net Income: ${salary}</p>
            <div class="icon">
                <p>{facebook }</p>
                <p>{twitter}</p>
                <p>{likedin}</p>
            </div>
            <button
                onClick={() => props.handleCart(props.card)} className='btn-card'>{cart} add to cart
            </button>
        </div>
    );
};

export default Card;