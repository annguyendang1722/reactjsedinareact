import React, {memo,useEffect} from "react";

import Reveal from 'react-reveal/Zoom';

function ShowHome({ databoxhome = [] }) {

  let {img,name,work,subtitle,listsocialicon,btn } = databoxhome

  useEffect(() => {


    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
    
    TxtRotate.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
    
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
    
      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
      var that = this;
      var delta = 300 - Math.random() * 100;
    
      if (this.isDeleting) { delta /= 2; }
    
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
    
      setTimeout(function() {
        that.tick();
      }, delta);
    };
    
    window.onload = function() {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
    };
  


  }, []);

  return (
    <div className="person" id="home">
      <div className="person__container">
          <Reveal effect="fadeUp"> 
                <div className="person__img">
                  <img src={img} />
                </div>
                <div className="person__text">
                  <h5> {name} </h5>
                  <h1  class="nerdy-pen__text">    
                  <span class="txt-rotate" data-period="200" data-rotate='["Web Developer", "Graphic Designer"]'>{work}</span> </h1>
                  <p>{subtitle} </p>
                </div>
                  <ul className="person__social">
                      {listsocialicon.map((socialicon,index) =>(
                        <li key={index} >
                        <a href={socialicon.link} target="_blank">
                          <img src={socialicon.icon} />
                        </a>
                      </li>
                            ))}
                  </ul>
                <div className="person__download">
                  {btn && <a href={btn.url} className="btn">{btn.name}</a>}
                </div>
          </Reveal>
      </div>
    </div>


  );
}

export default memo(ShowHome)