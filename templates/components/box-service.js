import React, {memo} from "react";
import Fade from 'react-reveal/Fade';

function ShowService({ databoxservice = [] }) {

  let { title,subtitle,listicon } = databoxservice


  return (
    
    <div className="service" id="service">
      <div className="container">
        <div className="service__title">
          <h2> {title}</h2>
          <p> {subtitle}</p>
        </div>
        <div className="service__row">
        
            {listicon.map((icon,index) =>(
                <Fade left>
                  <div key={index} className="service__col">
                    <div className="service__inner">
                      <img className="service__img" src={icon.icon} alt={icon.title} />
                      <h3 className="service__work">  {icon.title}</h3>
                        { icon.btn && <a href={icon.btn.url} className="service__learn">{icon.btn.name}</a>}
                    </div>
                  </div>
                  </Fade>
            ))}

        </div>
      </div>
    </div>

  );
}

export default memo(ShowService)