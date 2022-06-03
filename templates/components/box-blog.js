import React, {memo,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ShowBlog({ databoxblog = [] }) {


  useEffect(() => {





    const triggers = document.getElementsByClassName('blog__item');
    const triggerArray = Array.from(triggers).entries();
    const modals = document.getElementsByClassName('modal');
    const closeButtons = document.getElementsByClassName('blog__close');
    for (let [index, trigger] of triggerArray) {
    const toggleModal = () => {
    modals[index].classList.toggle('show-modal');
        trigger.addEventListener("click", toggleModal);
    closeButtons[index].addEventListener("click", toggleModal);
    }

    }


  }, []);




  let { title,subtitle,listimg } = databoxblog
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
    
    
    <div className="blog" id="blog">
      <div className="container">
        <div className="blog__text">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
          <div className="blog__slider">
            
              <Slider {...settings}>    
                      {listimg.map((imgslider,index) =>(
                          <div  key={index} className="blog__item">
                              <div className="blog__img">
                                <img src={imgslider.img} alt="1"/>
                              </div>
                              <div className="blog__text">
                                <span className="blog__date">{imgslider.date} <a href="#">{imgslider.job}</a></span>
                                <h3 className="blog__name">{imgslider.name}</h3>
                              </div>                 
                          </div>
                      ))}
              </Slider>
          
          </div>
          <div className="blog__modals">        
                      {listimg.map((imgslider1,index1) =>(
                          <div  key={index1} className="modal blog__modal">
                            <div className="blog__innermodal">
                              <span className="blog__close">&times;</span>
                              <div className="blog__img">
                                  <img src={imgslider1.img} alt="1"/>
                              </div>
                              <div className="blog__text">
                                <span className="blog__date">{imgslider1.date} <a href="#">{imgslider1.job}</a></span>
                                <h3 className="blog__name">{imgslider1.name}</h3>
                                <div className="blog__description">
                                  <p>Just because we can't get out and about like we normally would, doesn’t mean we have to stop taking pictures. There’s still plenty you can do, provided you're prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes.</p>
                                </div>
                              </div>
                            </div>              
                          </div>
                      ))}       
          </div>        
      </div>
  </div>
  );
}

export default memo(ShowBlog)