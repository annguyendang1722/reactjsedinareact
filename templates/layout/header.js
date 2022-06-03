import Image from 'next/image'
import Navbar from './nav'
import React, { useEffect, useState } from "react"

export default function Header() {


  useEffect(() => {

    var x = window.matchMedia("(max-width: 991px)")
    functionresponsive(x) // Call listener function at run time
    x.addListener(functionresponsive) // Attach listener function on state changes
    var header = document.getElementById("clickmenu");
    var btns = header.getElementsByClassName("clickmenu__item");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("clickmenu__active");
        current[0].className = current[0].className.replace(" clickmenu__active", "");
        this.className += " clickmenu__active";
      });
    }

    function functionresponsive(x) {
      document.getElementById("closemenu").onclick = function () { functionclosemenu() };
      function functionclosemenu() {
        document.getElementById("mySidenav").style.width = "0px";
      }
      document.getElementById("openmenu").onclick = function () { functionopenmenu() };
      function functionopenmenu() {
        document.getElementById("mySidenav").style.width = "320px";
      }
    }

  }, []);

  return (  

  <div>  
        <div id="mySidenav" className="leftsidebar">
          <a href="#" className="closemenu" id="closemenu">×</a>
          <div className="leftsidebar__logo" id="leftsidebar__logo">
            <a href="#">
              <img className="leftsidebar__logo--white" src="images/dark.png" alt="brand"/>
              <img className="leftsidebar__logo--black" src="images/light.png" alt="brand"/>
            </a>
            <div className="leftsidebar__changbg" id="leftsidebar__changbg">
              <span className="leftsidebar__changbg--white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z">
                  </path>
                </svg>
              </span>
              <span className="leftsidebar__changbg--black">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z">
                  </path>
                </svg>
              </span>
            </div>
          </div>
          <div className="leftsidebar__menu">
            <ul id="clickmenu" className="clickmenu">
              <li className="clickmenu__item clickmenu__active">
                <a href="#home"><img className="svg custom" src="images/home.svg" alt="icon"/>Home</a>
              </li>
              <li className="clickmenu__item">
                <a href="#about"><img className="svg custom" src="images/human.svg" alt="icon"/>About</a>
              </li>
              <li className="clickmenu__item">
                <a href="#service"><img className="svg custom" src="images/service.svg" alt="icon"/>Service</a>
              </li>
              <li className="clickmenu__item">
                <a href="#portfolio"><img className="svg custom" src="images/portfolio.svg" alt="icon"/>Portfolio</a>
              </li>
              <li className="clickmenu__item">
                <a href="#testimonial"><img className="svg custom" src="images/testimonial.svg" alt="icon"/>Testimonial</a>
              </li>
              <li className="clickmenu__item">
                <a href="#blog"><img className="svg custom" src="images/blog.svg" alt="icon"/>Blog</a>
              </li>
              <li className="clickmenu__item">
                <a href="#contact"><img className="svg custom" src="images/contact.svg" alt="icon"/>Contact</a>
              </li>
            </ul>
          </div>
          <div className="leftsidebar__author">
            <div className="author__image">
              <img src="images/avatar.jpg" alt="brand"/>
            </div>
            <div className="author__text">
              <h3>Nelson</h3>
              <a href="mailto:ib-themes21@gmail.com">support@gmail.com</a>
            </div>
          </div>
        </div>
  </div>
  )
}