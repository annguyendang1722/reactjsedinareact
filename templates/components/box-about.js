import React, { memo } from "react";
import Fade from 'react-reveal/Fade';

function ShowAbout({ databoxabout = [] }) {

  let {titlemain, title, subtitle,titleskill ,subtitleskill ,listskill,btn,img,year,experiance } = databoxabout


  return (

    <div className="about" id="about">
      <div className="container">
        <h2 className="about__title">{titlemain}</h2>
        <div className="about__row">
          <Fade left>
            <div className="about__left">     
              <div className="about__info">
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
              <div className="about__skill">
                <h3>{titleskill}</h3>
                <p>{subtitleskill}</p>
              </div>
              <div className="about__listprogress">
                  <div className="about__progress">
                    <div className="about__label">React.Js</div>
                    <div className="about__bg">
                      <div className="about__bar" style={{width: "90%"}}></div>
                    </div>
                  </div>
                    {listskill.map((skill,index) =>(
                      <div key={index}  className="about__progress">
                        <div className="about__label">{skill.label}</div>
                        <div className="about__bg">
                          <div className="about__bar" style={{width: skill.width}}></div>
                        </div>
                      </div>
                    ))}
                </div>           
              { btn && <a href={btn.url} className="about__see btn">{btn.name}</a>}
            </div>
          </Fade>
          <Fade right>
            <div className="about__right">
              <img src={img} alt="About Me"/>
              <div className="about__year">
                <h3>{year}</h3>
                <span>{experiance}</span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>

  );
}

export default memo(ShowAbout)