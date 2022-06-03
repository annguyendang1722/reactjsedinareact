import React, {memo} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ShowPortfolio({ databoxportfolio = [] }) {

  let { title,subtitle,listimg } = databoxportfolio
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="portfolio__slider">
        <Slider {...settings}>
         
                        {listimg.map((imgslider,index) =>(
                          <div key={index} className="portfolio__item">
                            <div className="portfolio__img">
                              <img src={imgslider.img} alt="1"/>
                            </div>
                          </div>
                        ))}
          </Slider>
        </div>

      </div>


    </div>

  );
}

export default memo(ShowPortfolio)