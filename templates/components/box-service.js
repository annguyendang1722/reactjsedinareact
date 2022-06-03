import React, {memo} from "react";

function ShowService({ databoxservice = [] }) {

  let { title,subtitle,listicon } = databoxservice


  return (
    
    <div className="service" id="service">
      <div class="container">
        <div className="service__title">
          <h2> {title}</h2>
          <p> {subtitle}</p>
        </div>
        <div className="service__row">
        
            {listicon.map((icon,index) =>(
                  <div key={index} className="service__col">
                    <div className="service__inner">
                      <img className="service__img" src={icon.icon} alt={icon.title} />
                      <h3 className="service__work">  {icon.title}</h3>
                        { icon.btn && <a href={icon.btn.url} className="service__learn">{icon.btn.name}</a>}
                    </div>
                  </div>
            ))}

        </div>
      </div>
    </div>

  );
}

export default memo(ShowService)