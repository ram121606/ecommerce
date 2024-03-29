import Hero1 from '../assets/hero1.png';
import Hero2 from '../assets/hero2.png';
import Banner1 from '../assets/banner-1.jpg';
import Banner2 from '../assets/banner-2.jpg';
import Banner3 from '../assets/banner-3.jpg';
import Banner4 from '../assets/banner-4.jpg';
import Banner5 from '../assets/banner-5.jpg';
import Banner6 from '../assets/banner-6.jpg';
import Logo1 from '../assets/1.jpg';
import Logo2 from '../assets/2.jpg';
import Logo4 from '../assets/4.jpg';
import Timer from '../assets/timer.jpg';

import { Link } from "react-router-dom";
import "./Home.css";


function Home() {
    return (
        <div>
            <div className="ctr2">
                <img className="image" src={Hero1} alt='Hero1'></img>
                <img className="image" src={Hero2} alt='Hero2'></img>
                <Link to="/Products">
                    <button className="fixed-button">SHOP NOW...</button>
                </Link>
            </div><br></br> <br></br>
            <div className="logopng">
                <div>
                    <img src={Logo1} alt='Logo1' style={{ height: '70px', width: '70px', justifyContent: 'center' }}></img>
                    <h3>FREE DELIVERY</h3>
                    <p>Enjoy the convenience of free delivery on all orders</p></div>
                <div>
                    <img src={Logo2} alt='Logo2' style={{ height: '70px', width: '70px' }} ></img>
                    <h3>QUALITY GUARANTEE</h3><p>Our products come with a solid quality guarantee</p>
                </div>
                {/* <div>
                <img src={Logo3} alt='Logo3' style={{ height: '70px', width: '60px' }}></img>
                <h3>DAILY OFFERS</h3>
                <p>Explore daily offers and exclusive deals</p></div> */}
                <div><img src={Logo4} alt='Logo4' style={{ height: '70px', width: '70px' }}></img>
                    <h3>100% SECURE PAYMENT</h3>
                    <p> Ensuring your financial transactions are protected</p></div>
            </div>
            <br></br><br></br>
            <h1 className='H1'>SPECIAL PRODUCTS</h1>
            <div className="product-container" >
                <div className="product-item">
                    <div className="image-container">
                        <img src={Banner2} alt="banner" />
                        <h2>ACCESSORIES</h2>
                        <Link to="/Products">
                            <p className="cta-button">SHOP NOW</p>
                        </Link>
                    </div>
                </div>
                <div className="product-item">
                    <div className="image-container" >
                        <img src={Banner1} alt="Product 2" />
                        <h2>HOODIES</h2>
                        <Link to="/Products">
                            <p className="cta-button">SHOP NOW</p>
                        </Link>
                    </div>
                </div>
                <div className="product-item">
                    <div className="image-container">
                        <img src={Banner3} alt="Product 3" />
                        <h2>SHOES</h2>
                        <Link to="/Products">
                            <p className="cta-button">SHOP NOW</p>
                        </Link>
                    </div>
                </div>
            </div><br></br>
            <div className="product-container2" >
                <div className="product-item">
                    <div className="image-container">
                        <img src={Banner4} alt="Product 3" />
                        <h2>SHIRT</h2>
                        <Link to="/Products">
                            <p className="cta-button">SHOP NOW</p>
                        </Link>
                    </div>
                </div>
                <div className="product-item">
                    <div className="image-container">
                        <img src={Banner5} alt="Product 3" />
                        <h2>T-SHIRT</h2>
                        <Link to="/Products">
                            <p className="cta-button">SHOP NOW</p>
                        </Link>
                    </div>
                </div>
                <div className="product-item">
                    <div className="image-container">
                        <img src={Banner6} alt="Product 3" />
                        <h2>PERFUMES</h2>
                        <Link to="/Products">
                            <p className="cta-button">SHOP NOW</p>
                        </Link>
                    </div>
                </div>
            </div><br></br>
            <div className="timer">
                <div className="text-image">
                <img src={Timer} alt="Timerimage" className="rounded-image"></img></div>
               <div className="text-content"> <h2>SPECIAL OFFER</h2>
                <h3>-----Combo Pack-----</h3>
        <h4>Ends On February 14</h4>
            </div></div><br></br>
            <footer className="footer-content">
                <div className="footer-section about">
                    <h2>About</h2>
                    <Link to="/">
                        <a href="/shop">Home</a></Link><br></br>

                    <Link to="/Products">
                        <a href="/Products">Product</a></Link><br></br>

                    <Link to="/Products">
                        <a href="/blog">Blog</a></Link><br></br>
                    <Link to="/Products">
                        <a href="/contacts">Cart</a></Link></div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>+91 0987654321</p>
                    <p>yourmail@gmail.com</p>
                </div>
                <div className="footer-section social">
                    <h2>Social Media</h2>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
                <div><br></br>
                    <p className="copyright">&copy; Your Copyright 2021 All Rights Reserved</p>
                </div>
            </footer>

        </div>
    )
}
export default Home;