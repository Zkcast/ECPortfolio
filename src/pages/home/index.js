import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";



export const Home = () => {

  let [animation, setAnima] = useState(true)

  let [hover, setHover] = useState(false)
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          {/* <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div> */}
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div style={{ marginTop: '10%' }} className="intro mx-auto">
                <Link style={{ textDecoration: 'none' }} to='/about'><h2 id="blink" className="mb-1x aboutlink">{introdata.title}  <span className='contactme'><FaAngleDown/></span></h2></Link>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                        introdata.animated.fifth,
                        introdata.animated.sixth,
                        introdata.animated.seventh,
                        introdata.animated.eighth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 20,
                    }}
                  />
                </h1>
                <div className="description_code_div">
                <code className="mb-1x description_code">{introdata.description}</code> 
                </div>
                <br/>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                  <Link to="/skills">
                    <div id="button_h" style={{color: "white"}} className="ac_btn btn">
                      Skills
                      <div className="ring one"></div>
                      <div ClassName="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                  <Link to="/contact">
                    <div id="button_h" style={{color: "white"}} className="ac_btn btn">
                      Contact
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
