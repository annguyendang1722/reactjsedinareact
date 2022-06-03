import React, {memo} from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ShowBoxBannerSlider({ datas = [] }) {

  let {background, itemsliders, title, subtitle , btn} = datas
  // console.log(datas)
  const settings = {
      dots: true,
      infinite: true,
      autoplay:true,  
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
  };

  return (
    
    <div class="innovation">
        <div class="innovation__background">
          <img alt="Data Farm" src={background} />
        </div>
        <div class="container">
                  <div class="innovation__carousel">
                      <Slider {...settings}>
                        {itemsliders.map((img,index) =>(
                          <picture className="carousel__item">
                            <source media="(max-width: 767px)" srcset={img.imageUrlMobile}/>
                            <img src={img.imageUrl}/>
                          </picture>
                        ))}
                      </Slider>
                  </div>
                  <div class="innovation__textbox">
                    <h2 className="innovation__title text--center">{title}</h2>
                    <div className="innovation__desc">{subtitle}</div>
                    <div className="innovation__link">{ btn && <a href={btn.url} className="btn">{btn.name}</a>}</div>
                  </div>
        </div>
    </div>
  );
}

export default memo(ShowBoxBannerSlider)