import './Header.css'
import React from 'react';
import logo from './images.jpg'
import banner from './leaderboard.jpg'

const Header = () => {
    return (
        <div className="container">
            <div>
                <img className="banner" src={banner} alt="" />
                <div className="centered">
                <p style={{fontSize:'50px',color:'crimson',fontWeight:'700'}}>Impact <br />The World!</p>
                    <p style={{ fontWeight: '500', fontSize: '20px' }}>WE WILL MAKE HISTORY TOGETHER</p>
                    <h1 style={{backgroundColor:'#0652DD',padding:'5px'}}>Total Budget : 100 Million USD</h1>
                </div>
            </div>
            <div className="header">
               <img className="logo" src={logo} alt="" />
             <nav>
                {/* <img src={logo} alt="" /> */}
                <a href="/About">About Us</a>
                <a href="/Blog">Blog</a>
                <a href="/Achivement">Achievement</a>
                 <a href="/Contact">Contact Us</a>
                 <button className="btn">Login</button>
             </nav>
            </div>
        </div>
    );
};

export default Header;