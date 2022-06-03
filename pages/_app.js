// import '../styles/styleguide.scss'
import '../styles/styles.scss'
import Footer from '../templates/layout/footer'
import Header from '../templates/layout/header'
// import Head from 'next/head'
// import Script from 'next/script'
import React, { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {

    document.getElementById("leftsidebar__changbg").onclick = function () { functionaddclass() };
    function functionaddclass() {
      var element = document.getElementById("allsite");
      element.classList.toggle("allsite");
    }

  }, []);
  return (
    <>
      <div id="allsite">
        <div class="headermobile">
            <span class="open" id="openmenu">&#9776; open</span>
          </div>
      
          <Header />
     
        <div className="rightsidebar">
          <Component {...pageProps} />
          <Footer/>
      </div>
      </div>
     
    </>
  )
}

export default MyApp
