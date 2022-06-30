import React, { memo, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import fetch from 'isomorphic-unfetch'

function ShowContact(props) {

  const [DataBoxContact, setDataBoxContact] = useState([])

  useEffect(() => {

    async function getDataBoxContact() {
      const res = await fetch('https://github.com/annguyendang1722/createjson/blob/master/BoxContact.json')
      const posts = await res.json()
      setDataBoxContact(posts)
    }
    getDataBoxContact()
  }, []);

  return (
    
    <div className="contactform" id="contact">
      <div className="contactform__container container">
        <div className="contactform__title">
          <h2>Contact</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
        </div>
        <Fade left cascade>
        <div className="contactform__info">

              {DataBoxContact.map((icon,index) =>(
               
                  <div key={index}  className="contactform__threecol">
                    
                          <div className="contactform__inner">
                            <div className="contactform__icon"><img src={icon.icon} alt={icon.title} /></div>
                            <div className="contactform__content">
                              <h3>{icon.title}</h3>
                              <ul>
                                <li>{ icon.btn1 && <a href={icon.btn1.url} className="">{icon.btn1.name}</a>}</li>
                                <li>{ icon.btn2 && <a href={icon.btn2.url} className="">{icon.btn2.name}</a>}</li>
                              </ul>
                            </div>
                          </div>
                   
                  </div>
               
                ))}



        </div>
        </Fade>
        <div className="contactform__formmap">
        <Fade left cascade>
          <div className="contactform__form">
            <div className="contactform__innerform">
              <div className="contactform__formtitle">
                <p>I'm always open to discussing product<br/><span> design work or partnerships.</span></p>
              </div>
              <form>
                <div className="form-item form-type-textfield"><input name="name" type="text" placeholder="Name *"/></div>
                <div className="form-item form-type-textfield"><input name="email" type="email" placeholder="Email *"/></div>
                <div className="form-item form-type-textfield"><textarea name="message" placeholder="Message *"></textarea>
                </div>
                <div className="form-item form-type-textfield"><button type="submit" className="color">Submit</button>
                </div>
              </form>
            </div>
          </div>
          </Fade>
          <Fade left cascade>
          <div className="contactform__map">
           <iframe className="embed-responsive-item" title="my location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"></iframe>
          </div>
          </Fade>
        </div>
      </div>
    </div>

  );
}

export default ShowContact