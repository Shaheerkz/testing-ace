import React from 'react'
import PrimaryBtn from '../components/PrimaryBtn'
import {useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
function Hero() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <section className='hero-sec'>
        <div className='container container-c'>
            <div className='row'>
                <div className='col-lg-8 col-sm-12'>
                    <div className='banner-text' data-aos="fade-left">
                        <h1>We Empower <span> Innovations</span></h1>
                        <p>We are a people-focused organization that solves <br /> business problems through technology.</p>
                        <PrimaryBtn className='my-3' text='learn more'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero