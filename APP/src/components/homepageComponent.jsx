import React, { useState, useEffect } from "react";
import blogComponent from "./blogComonent";
import { Link } from 'react-router-dom'; // Add this import
import {getHomeData} from "../services/service"
export function HomepageComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    homePageLoad();
  },[])
  const homePageLoad = async () => {
    let homePageData = await getHomeData();
    console.log(homePageData, '.............result');
    
  };
  const images = [
    "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1048276/pexels-photo-1048276.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1675153/pexels-photo-1675153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1506799/pexels-photo-1506799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const Card = ({ image, title, author, date }) => (
    <div className="card">
      <a href="#">
        <img className="card-img" src={image} alt={title} />
      </a>
      <div className="card-content">
        <div className="card-tags">
        <span className="category-name">Cooking</span>       
        </div>
        <a href="#" className="card-title">{title}</a>
        <p className="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="card-footer">
        <a href="#">
          <img className="author-img" src="https://tailwindcss.com/img/jonathan.jpg" alt={author} />
        </a>
        <div className="author-info">
          <a href="#" className="author-name">{author}</a>
          <p className="date">{date}</p>
        </div>
      </div>
    </div>
  );

  const trendingNews = [
    {
      image: "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      heading: "Breaking News: Market Hits Record High"
    },
    {
      image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      heading: "Tech Giants Release New Features"
    },
    {
      image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      heading: "Sports Events Continue to Rise in Popularity"
    },
    {
      image: "https://images.pexels.com/photos/1048276/pexels-photo-1048276.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      heading: "Global Warming: The Latest Reports"
    },
    {
      image: "https://images.pexels.com/photos/1048276/pexels-photo-1048276.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      heading: "Global Warming: The Latest Reports"
    }
  ];

  return (
    <div className="container">
      {/* First row with 75% and 25% cards */}
      <div className="first-row">
        <div className="most-viewed card">
        <h1 className="section-title">Top Picks</h1> {/* Top Picks title */}
          <div className="carousel">
            <button className="carousel-button prev" onClick={handlePrevClick}> {"<"} </button>
            <img className="carousel-img" src={images[currentIndex]} alt="Most Viewed" />
            <button className="carousel-button next" onClick={handleNextClick}>{">"}</button>
          </div>
          <div className="card-content">
        <div className="card-tags">
          <span className="category-name">Cooking</span>       
          </div>
        <a href="#" className="card-title">Simplest Salad Recipe ever</a>
        <p className="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="card-footer">
        <a href="#">
          <img className="author-img" src="https://tailwindcss.com/img/jonathan.jpg" alt="sathis" />
        </a>
        <div className="author-info">
          <a href="#" className="author-name">Sathis kumar Nalluchamy</a>
          <p className="date">24 Nov 2024</p>
        </div>
      </div>
        </div>
        <div className="trending-new">
        <h1 className="section-title">Trending News</h1> {/* Trending News title */}

          <div className="trending-cards">
            {trendingNews.map((item, index) => (
              <div key={index} className="trending-card">
                <div className="trending-card-image">
                  <img src={item.image} alt={item.heading} />
                </div>
                <div className="trending-card-content">
                  <a href="#" className="trending-card-title">{item.heading}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="section-title">Latest News</h1> {/* Latest News title */}
      {/* 6 Cards in a grid below */}
      <div className="card-grid">
      <Link to="/blogComponent" className="trending-card-title">
        <Card
          image="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Simplest Salad Recipe ever"
          author="Jonathan Reinink"
          date="Aug 18 2024"
        />
        </Link>
        <Card
          image="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Salad Ideas of Asian Chefs"
          author="Jonathan Reinink"
          date="Aug 18"
        />
        <Card
          image="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Best Pizza in Town"
          author="Jonathan Reinink"
          date="Aug 18 2024"
        />
        <Card
          image="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Simplest Salad Recipe ever"
          author="Jonathan Reinink"
          date="Aug 18 2024"
        />
        <Card
          image="https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Salad Ideas of Asian Chefs"
          author="Jonathan Reinink"
          date="Aug 18 2024"
        />
        <Card
          image="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Best Pizza in Town"
          author="Jonathan Reinink"
          date="Aug 18 2024"
        />
      </div>
    </div>
  );
}
