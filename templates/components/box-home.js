import React, {memo} from "react";

function ShowHome({ databoxhome = [] }) {

  let {img,name,work,subtitle,listsocialicon,btn } = databoxhome
  
  return (
    
    <div className="person" id="home">
      <div className="person__container">
          <div className="person__img">
            <img src={img} />
          </div>
          <div className="person__text">
            <h5> {name} </h5>
            <h1> {work} </h1>
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
      </div>
    </div>


  );
}

export default memo(ShowHome)