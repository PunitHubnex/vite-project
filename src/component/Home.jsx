import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   
 <div className="cv_banner_wrapper">
              <div className="cv_container container-fluid  ">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="cv_banner_img">
                      <img src="../../images/banner-boy.webp" className="img-fluid bnr-boy" />
                      <img src="../../images/bnr-line.png" className="bnr-line" />
                      <img src="../../images/bnr-star.png" className="bnr-star" />
                      <img src="../../images/bnr-sqr.png" className="bnr-sqr" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="cv_banner_text">
                      <h5>UI/UX Designer</h5>
                      <h1>Hello! <span><img src="../../images/hand.svg" className="img-fluid" /></span> I Am</h1>
                      <h1 className="cv_profile_name" />
                      <Link to="/contact" className="cv_btn">Hire Me</Link>
                    </div>
                    <div className="cv_banner_box">
                      <h4>Freelance  &amp; Mobile UI/UX Designer</h4>
                      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Embarrassing hidden in the middle of text. All the Lorem Ipsum generate on the are Internet tend to repeat predefined chunks as necessary, making of this the first true generator on the Internet which don't look even you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
   
  )
}

export default Home
