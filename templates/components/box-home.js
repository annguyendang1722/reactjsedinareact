import React, {memo,useEffect,useState} from "react";
import Head from 'next/head';
import Fade from "react-reveal/Fade";
import fetch from 'isomorphic-unfetch'


function ShowHome(props) {

  const [DataBoxHome, setDataBoxHome] = useState([])

  useEffect(() => {

    async function getDataBoxHome() {
      const res = await fetch('https://62a200f4cc8c0118ef5b0812.mockapi.io/listsocialicon')
      const posts = await res.json()
      setDataBoxHome(posts)
    }
    getDataBoxHome()





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
    
      this.el.innerHTML = '<span className="wrap">'+this.txt+'</span>';
    
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
          <Fade bottom>
                <div className="person__img">
                  <img src="http://edinareact.ibthemespro.com/img/hero/2.jpg" />
                </div>
                <div className="person__text">
                  <h5> Hello, I'm Rokers Nelson</h5>
                  <h1  className="nerdy-pen__text">    
                  <span className="txt-rotate" data-period="200" data-rotate='["Web Developer", "Graphic Designer"]'>Web Developer</span> </h1>
                  <p> I'm a Freelancer Front-end React Developer based In USA, over 6 years of professional experience. </p>
                  </div>
                  <ul className="person__social">
                      {DataBoxHome.map((socialicon,index) =>(
                        <li key={index} >
                        <a href={socialicon.link} target="_blank">
                          <img src={socialicon.icon} />
                        </a>
                      </li>
                            ))}
                  </ul>
                <div className="person__download">
                  <a href="http://edinareact.ibthemespro.com/img/cv.jpg" className="btn">Download CV</a>
                </div>
          </Fade>
      </div>
    </div>


  );
}

export default ShowHome