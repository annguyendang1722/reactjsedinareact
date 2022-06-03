import React, {memo} from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DataFarm({ data = [] }) {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      Previous
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      Next
    </button>
  );

  const settings = {
      dots: false,
      infinite: true,
      autoplay:true,  
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
  };

  return (
    <div className="banner">
        <ul className="banner__show">
          <Slider {...settings}>
            {data.map((banner) => {
              let { id, imageUrl, title, subtitle, btn } = banner;
              return (
                <li key={id} className="banner__item">
                  <div className="banner__img">
                      {<img src={imageUrl} />}
                  </div>
                  <div class="banner__content">
                      <div className="container">
                        <h2 className="banner__title">{title}</h2>
                        <h2 className="banner__subtitle">{subtitle}</h2>
                        { btn && <a href={btn.url} className="btn">{btn.name}</a>}
                    </div>
                  </div>
                </li>
              );
            })}
          </Slider>
        </ul>
    </div>
  );
}

export default memo(DataFarm)