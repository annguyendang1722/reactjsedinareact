import React, { memo, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import Fade from "react-reveal/Fade";
import fetch from 'isomorphic-unfetch'




function ShowPortfolio(props) {
  const [DataBoxPortfolio, setDataBoxPortfolio] = useState([])


  useEffect(() => {

    async function getDataBoxPortfolio() {
      const res = await fetch('https://62a200f4cc8c0118ef5b0812.mockapi.io/listimgportfolio')
      const posts = await res.json()
      setDataBoxPortfolio(posts)
    }
    getDataBoxPortfolio()
  }, []);


  // let { title,subtitle,listimg } = databoxportfolio
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 15000,
  
    centerPadding: '15px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 991,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        }
        },
  
        {
        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        }
        },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }

    ]
};

  return (
    
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio__text">
          <h2>Portfolio</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.11</p>
        </div>

        <div className="portfolio__slider">
            <Slider {...settings}>
                        {DataBoxPortfolio.map((imgslider,index) =>(
                        
                          <div key={index} className="portfolio__item">
                              <Fade left cascade>
                                  <div className="portfolio__img">
                                    <img src={imgslider.img} alt="1"/>
                                  </div>
                              </Fade>
                          </div>
                         
                        ))}
            </Slider>
        </div>

      </div>


    </div>

  );
}

export default ShowPortfolio