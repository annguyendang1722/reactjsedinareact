import Head from "next/head";


import ShowHome from "../templates/components/box-home";
import ShowAbout from "../templates/components/box-about";
import ShowPortfolio from "../templates/components/box-portfolio";
import ShowTestimonial from "../templates/components/box-testimonial";
import ShowBlog from "../templates/components/box-blog";

import ShowService from "../templates/components/box-service";
import ShowContact from "../templates/components/box-contact";


import { BoxHome , BoxAbout,BoxPortfolio,BoxTestimonial, BoxService,BoxBlog, BoxContact} from "../api-data/components/edinareact";




export default function Edinareact() {
return (
<div className="site">
   <Head>
      <title>Sentius Digital Styleguide</title>
      <meta name="description" content="Sentius Digital Styleguide" />
      <link rel="icon" href="/favicon.ico" />
   </Head>
   <main className="main">
  
        <ShowHome databoxhome = {BoxHome}/>
        <ShowAbout databoxabout = {BoxAbout}/>
        <ShowService databoxservice = {BoxService}/>
        <ShowPortfolio databoxportfolio = {BoxPortfolio}/>
        <ShowTestimonial databoxtestimonial = {BoxTestimonial}/>
        <ShowBlog databoxblog = {BoxBlog}/>
        <ShowContact databoxcontact = {BoxContact}/>

   </main>
</div>
);
}