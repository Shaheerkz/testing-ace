import React from "react";
import square from '../assets/images/square.png'
import henry from '../assets/images/henry.png'
import little from '../assets/images/little-c.png'
import enbrigde from '../assets/images/Enbrigde.png'
import gojel from '../assets/images/gojek.png'
function GlobalBrands() {
  return (
    <section className="global-brand">
      <div className="container" data-aos="fade-down">
        <div className="brands-title">
            <h3>Trusted By <span> Brands Globally</span></h3>
        </div>
        <div className="brands-img d-flex flex-wrap">
         <img src={square} className=""/>
         <img src={henry} className=""/>
         <img src={little} className=""/>
         <img src={enbrigde} className=""/>
         <img src={gojel} className=""/>
        </div>
      </div>
    </section>
  );
}

export default GlobalBrands;
