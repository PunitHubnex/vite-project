import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <div className="cv_banner_wrapper">
      <div className="cv_container container-fluid">
        <div className="row">
          <div className="col-xl-6">
            <div className="cv_banner_img">
              <img src="../../non.PNG" className="img-fluid bnr-boy" width={1500} alt="Banner Boy"/>
              <img src="../../images/bnr-line.png" className="bnr-line" alt="Line Decoration"/>
              <img src="../../images/bnr-star.png" className="bnr-star" alt="Star Decoration"/>
              <img src="../../images/bnr-sqr.png" className="bnr-sqr" alt="Square Decoration"/>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="cv_banner_text">
              <h5>Crafting Visual Stories</h5>
              <h1>Hello! <span><img src="../../images/hand.svg" className="img-fluid" alt="Hand Wave"/></span> I Am</h1>
              <h1 className="cv_profile_name" > Utkarsh</h1>
              <Link to="/contact" className="cv_btn">Let's Create Together</Link>
            </div>
            <div className="cv_banner_box">
              <h4>Freelance & Full-Service Media Agency</h4>
              <p>We specialize in video and photo shoots, professional editing, and social media management. 
From creating captivating visuals to ensuring your content reaches the right audience, we handle 
it all. Let us help you tell your story with creativity and precision</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
