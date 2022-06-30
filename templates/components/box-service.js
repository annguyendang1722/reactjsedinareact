import React, { memo, useEffect, useState } from "react";
import Fade from 'react-reveal/Fade';
import fetch from 'isomorphic-unfetch'

function ShowService(props) {

 const [DataBoxService, setDataBoxService] = useState([])

  useEffect(() => {

    async function getDataBoxService() {
      const res = await fetch('https://raw.githubusercontent.com/annguyendang1722/createjson/master/BoxService.json')
      const posts = await res.json()
      setDataBoxService(posts)
    }
    getDataBoxService()



    const accordions = document.querySelectorAll('.service__row');

    for (const accordion of accordions) {
      const panels = accordion.querySelectorAll('.service__col');
      for (const panel of panels) {
        const head = panel.querySelector('.service__inner');
        head.addEventListener('click', () => {
          for (const otherPanel of panels) {
            if (otherPanel !== panel) {
              otherPanel.classList.remove('service__open');
            }
          }
          panel.classList.toggle('service__open');
        });
      }
    }

  }, []);


  return (
    
    <div className="service" id="service">
      <div className="container">
        <div className="service__title">
          <h2> What I Do</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
        </div>
        <Fade left cascade>
        <div className="service__row">
        
            {DataBoxService.map((icon,index) =>(
              
                  <div key={index} className="service__col">
                     
                        <div className="service__inner">
                          <img className="service__img" src={icon.icon} alt={icon.title} />
                          <h3 className="service__work">  {icon.title}</h3>
                            { icon.btn && <a href={icon.btn.url} className="service__learn">{icon.btn.name}<span></span></a>}

                            <div className="service__modal">
                                  <div className="service__innermodal">
                                    <span className="service__close">&times;</span>
                                    <div className="service__img">
                                      <img src="http://edinareact.ibthemespro.com/img/service/4.jpg" alt="1"/>
                                    </div>
                                    <div className="service__text">
                              
                                      <h3 className="service__name">Forzo Immobile</h3>
                                      <div className="service__description">
                                        <p>Just because we can't get out and about like we normally would, doesn’t mean we have to stop
                                          taking pictures. There’s still plenty you can do, provided you're prepared to use some
                                          imagination. Here are a few ideas to keep you shooting until normal life resumes.</p>
                                      </div>
                                    </div>
                                  </div>
                            </div>



                        </div>
                     
                  </div>
               
            ))}

        </div>
        </Fade>
      </div>
    </div>

  );
}

export default ShowService