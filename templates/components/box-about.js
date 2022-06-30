import React, { memo, useEffect, useState } from "react";
import Head from 'next/head';
import Fade from "react-reveal/Fade";
import fetch from 'isomorphic-unfetch'

function ShowAbout(props) {



  const [DataBoxAbout, setDataBoxAbout] = useState([])

  useEffect(() => {

    async function getDataBoxAbout() {
      const res = await fetch('https://62a200f4cc8c0118ef5b0812.mockapi.io/listskill')
      const posts = await res.json()
      setDataBoxAbout(posts)
    }
    getDataBoxAbout()
  }, []);
  return (

    <div className="about" id="about">
      <div className="container">
        <h2 className="about__title">About me</h2>
        <div className="about__row">
          <Fade left cascade>
            <div className="about__left">
              <div className="about__info">
                <h3>Hi, I'm Rokers Nelson</h3>
                <p>I'm a Freelancer Front-end Developer with over 6 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people.</p>
              </div>
              <div className="about__skill">
                <h3>What is my skill level?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
              </div>
              <div className="about__listprogress">

                {DataBoxAbout.map((skill, index) => (
                  <div key={index} className="about__progress">
                    <div className="about__label">{skill.label}</div>
                    <div className="about__bg">
                      <div className="about__bar" style={{ width: skill.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="about__see btn">See more</a>
            </div>
          </Fade>
          <Fade right cascade>
            <div className="about__right">
              <img src="http://edinareact.ibthemespro.com/img/about/2.jpg" alt="About Me" />
              <div className="about__year">
                <h3>6+ Years</h3>
                <span>Of Experiance</span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>

  );
}

export default ShowAbout