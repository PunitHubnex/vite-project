import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
<div className="cv_main_wrapper">
  {/* Loader Start */}
  <div className="cv_about_wrapper">
    <div className="cv_container container-fluid  ">
      <div className="row">
        <div className="col-12">
          <div className="cv_about_content">
            <div className="cv_about_img">
              <img src="../../images/about-img.webp" className="img-fluid" />
              <div className="cv_about_experience">
                <div className="cv_about_exp">
                  <h2>04</h2>
                  <span>
                    <p>YEARS</p>
                    <p>OF EXPERIENCE</p>
                  </span>
                </div>
                <div className="cv_about_rating">
                  <span>
                    {/* <img src="../../images/rating.svg" /> */}
                    <h6>Worked with</h6>
                  </span>
                  <p>200+ Clients </p>
                </div>
              </div>
            </div>
            <div className="cv_about_info">
              <h2>About Me</h2>
              <div className="cv_about_box">
                <h3>Who I’m</h3>
                <p>
                I’m a passionate 20-year-old college dropout from Jaipur who turned my love 
for storytelling into a dynamic career. From behind the camera to the editing suite, I bring 
stories to life through stunning visuals and sharp editing.
                </p>
                <p>
                As a videographer, video editor, 
and photographer, I capture moments that resonate. But my talents don’t stop there—I’m 
also a skilled scriptwriter and social media manager, crafting content that engages and 
excites. A automotive enthusiast at heart, I fuel my creativity with the same energy that 
drives my passion for video creation. Let’s create something unforgettable together
                </p>
              </div>
              <div className="cv_about_btn">
                <Link to="javascript:void(0);" className="cv_btn">
                  Download Resume
                </Link>
                <Link to="/contact" className="cv_btn">
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About Section End */}
  {/* Education Section Start */}
  {/* <section className="cv_education_wrapper">
    <div className="cv_container container-fluid">
      <div className="row align-items-center">
        <div className="col-xl-4">
          <div className="cv_edu_heading">
            <h2>Education</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="cv_edu_info">
            <div className="cv_edu_box box-1">
              <div className="cv_edu_title">
                <h4>Diploma In UI/UX Design</h4>
                <h1>2004</h1>
              </div>
              <div className="cv_edu_detail">
                <span>- New York</span>
                <p>
                  Embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generate on the are Internettend to repeat predefined chunks
                  as necessary, making of this the first true generator on the
                  Internet which don't look even you. Amet minim mollit.
                </p>
              </div>
            </div>
            <div className="cv_edu_box box-2">
              <div className="cv_edu_title">
                <h4>Diploma In UI/UX Design</h4>
                <h1>2006</h1>
              </div>
              <div className="cv_edu_detail">
                <span>- New York</span>
                <p>
                  Embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generate on the are Internettend to repeat predefined chunks
                  as necessary, making of this the first true generator on the
                  Internet which don't look even you. Amet minim mollit.
                </p>
              </div>
            </div>
            <div className="cv_edu_box box-3">
              <div className="cv_edu_title">
                <h4>Diploma In UI/UX Design</h4>
                <h1>2008</h1>
              </div>
              <div className="cv_edu_detail">
                <span>- New York</span>
                <p>
                  Embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generate on the are Internettend to repeat predefined chunks
                  as necessary, making of this the first true generator on the
                  Internet which don't look even you. Amet minim mollit.
                </p>
              </div>
            </div>
            <div className="cv_edu_box box-4">
              <div className="cv_edu_title">
                <h4>Diploma In UI/UX Design</h4>
                <h1>2009</h1>
              </div>
              <div className="cv_edu_detail">
                <span>- New York</span>
                <p>
                  Embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generate on the are Internettend to repeat predefined chunks
                  as necessary, making of this the first true generator on the
                  Internet which don't look even you. Amet minim mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* Education Section End */}
  {/* Experience Section Start */}
  <section className="cv_experience_wrapper">
    <div className="cv_container container-fluid">
      <div className="row align-items-center">
        <div className="col-xl-8">
          <div className="cv_exp_box">
            <h2>01</h2>
            <div className="cv_exp_com">
              <span>
                <h3>Junior Video Editor</h3>
                <h4>- Futuresys</h4>
              </span>
              <h5>(2021-2022)</h5>
            </div>
          </div>
          <div className="cv_exp_box">
            <h2>02</h2>
            <div className="cv_exp_com">
              <span>
                <h3>senior Video Grafer and editor</h3>
                <h4>- Xplo</h4>
              </span>
              <h5>(2022-2024)</h5>
            </div>
          </div>
         
        </div>
        <div className="col-xl-4">
          <div className="cv_exp_info">
            <div className="cv_exp_heading">
              <h2>My Experience</h2>
              <p>
I have 4 years of experience. <br />
( Certified by Adobe in after effects )
 {/* Completed high school */}
              </p>
              <ul>
                <li>
                  <a href="javascript:void(0);">
                    <img src="../../images/fig.svg" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img src="../../images/ps.svg" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img src="../../images/ai.svg" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img src="../../images/ae.svg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default About
