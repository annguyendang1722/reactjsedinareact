import React, { memo, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import Fade from "react-reveal/Fade";
import fetch from 'isomorphic-unfetch'

function ShowTestimonial(props) {

  const [DataBoxTestimonial, setDataBoxTestimonial] = useState([])

  useEffect(() => {

    async function getDataBoxTestimonial() {
      const res = await fetch('https://raw.githubusercontent.com/annguyendang1722/createjson/master/BoxTestimonial.json')
      const posts = await res.json()
      setDataBoxTestimonial(posts)
    }
    getDataBoxTestimonial()
  }, []);



  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 15000,
    
    centerPadding: '15px',
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
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
      breakpoint: 767,
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
    }
    }
    ]
};

  return (
    
    <div className="testimonials" id="testimonial">
      <div className="container">
        <div className="testimonials__text">
          <h2>Testimonial</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
        </div>
        <div className="testimonials__slider">
          <div>
            <Slider {...settings}>    
                    {DataBoxTestimonial.map((imgslider,index) =>(
                       
                            <div   key={index} className="testimonials__item">
                               <Fade left cascade>
                                  <div key={index} className="testimonials__inner">
                                      <div className="testimonials__img">
                                        <img src={imgslider.img} alt="1"/>
                                        <div className="testimonials__info">
                                          <h3>{imgslider.name}</h3><p>{imgslider.job}</p>
                                        </div>
                                      </div>
                                      <p>{imgslider.description}</p>
                                  </div>
                                </Fade>
                            </div>
                       
                    ))}
            </Slider>
          </div>
        </div>
      </div>
  </div>

  );
}

export default ShowTestimonial