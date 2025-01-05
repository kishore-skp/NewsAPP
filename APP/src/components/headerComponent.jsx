// Header.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='container-fluid content-section'>
            <div className='row justify-content-center'>
                <div className='home page page-template page-template-template-portfolio page-template-template-portfolio-php'>
            <div id="page">
        <div className="container">
          <header id="masthead" className="site-header">
            <div className="site-branding">
              <h1 className="site-title"><a href="index.html" rel="home">People story</a></h1>
              <h2 className="site-description">Get your motivation from here</h2>
            </div>
            <nav id="site-navigation" className="main-navigation">
              <button className="menu-toggle">Menu</button>
              <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
              <div className="menu-menu-1-container">
                <ul id="menu-menu-1" className="menu">
                  <li><a href="/">Home</a></li>
                  <li><a href="#">Categories</a>
                    <ul className="sub-menu">
                      <li><a href="portfolio-item.html">Business</a></li>
                      <li><a href="blog-single.html">Sports</a></li>
                      <li><a href="shop-single.html">Enterpernurship</a></li>
                      <li><a href="portfolio-category.html">Entertainment</a></li>
                    </ul>
                  </li>
                  <li><a href="/categoryForm">About</a></li>
                  <li><a href="/articleForm">Blog</a></li>
                  <li><a href="/articleGrid">Contact</a></li>                 
                </ul>
              </div>
            </nav>
          </header>
          {/* #masthead */}
          {/* #content */}  
        </div>
        {/* .container */}
        <a href="#top" className="smoothup" title="Back to top"><span className="genericon genericon-collapse" /></a>
      </div>
            </div>
        </div>
        </div>
    );
};

export default HeaderComponent;
