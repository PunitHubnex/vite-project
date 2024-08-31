import React from 'react'

const Strenth = () => {
  return (
    <div>
      <div className="cv_main_wrapper">
  <div className="cv_do_wrapper">
    <div className="cv_container container-fluid">
      <div className="row align-items-center">
        <div className="col-xl-4">
          <div className="cv_do_heading">
            <h2>What I Do</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="cv_do_img">
            <img src="../../images/do_img.webp" className="img-fluid" />
          </div>
        </div>
        <div className="col-xl-8">
          <div className="row">
            <div className="col-sm-6">
              <div className="cv_do_box">
                <div className="cv_do_icon">
                  <img src="../../images/do-icon1.svg" />
                </div>
                <div className="cv_do_text">
                  <h4>Website Design</h4>
                  <p>
                    Embarrassing hidden in the middle of text. All the Ipsum
                    generate on the are Internettend.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="cv_do_box">
                <div className="cv_do_icon">
                  <img src="../../images/do-icon2.svg" />
                </div>
                <div className="cv_do_text">
                  <h4>Graphic Design</h4>
                  <p>
                    Embarrassing hidden in the middle of text. All the Ipsum
                    generate on the are Internettend.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="cv_do_box">
                <div className="cv_do_icon">
                  <img src="../../images/do-icon3.svg" />
                </div>
                <div className="cv_do_text">
                  <h4>Logo Design</h4>
                  <p>
                    Embarrassing hidden in the middle of text. All the Ipsum
                    generate on the are Internettend.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="cv_do_box">
                <div className="cv_do_icon">
                  <img src="../../images/do-icon4.svg" />
                </div>
                <div className="cv_do_text">
                  <h4>Web Development</h4>
                  <p>
                    Embarrassing hidden in the middle of text. All the Ipsum
                    generate on the are Internettend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Do Section End */}
  {/* Award Section Start */}
  <section className="cv_award_wrapper">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-6">
          <div className="cv_award_box">
            <div className="cv_award_icon">
              <img src="../../images/award-1.svg" />
            </div>
            <div className="cv_award_text">
              <h1>
                <span
                  className="timer"
                  data-from={0}
                  data-to={100}
                  data-speed={2000}
                />
                +
              </h1>
              <h4>Happy Clients</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="cv_award_box">
            <div className="cv_award_icon">
              <img src="../../images/award-2.svg" />
            </div>
            <div className="cv_award_text">
              <h1
                className="timer"
                data-from={0}
                data-to={80}
                data-speed={2000}
              />
              <h4>Project Done</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="cv_award_box">
            <div className="cv_award_icon">
              <img src="../../images/award-3.svg" />
            </div>
            <div className="cv_award_text">
              <h1
                className="timer"
                data-from={0}
                data-to={20}
                data-speed={2000}
              />
              <h4>Award Won</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Award Section End */}
  {/* Skill Section Start */}
  <section className="cv_skill_wrapper">
    <div className="cv_container container-fluid">
      <div className="row align-items-center">
        <div className="col-xl-8">
          <div className="row">
            <div className="col-md-6">
              <div className="cv_skill_box">
                <div className="cv_skill_icon">
                  <img src="../../images/skill-1.svg" />
                </div>
                <div className="cv_skill_progress">
                  <div className="cv_skill_text">
                    <h4>Figma</h4>
                    <p>95%</p>
                  </div>
                  <div className="cv_skill_bar">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cv_skill_box">
                <div className="cv_skill_icon">
                  <img src="../../images/skill-2.svg" />
                </div>
                <div className="cv_skill_progress">
                  <div className="cv_skill_text">
                    <h4>Photoshop</h4>
                    <p>95%</p>
                  </div>
                  <div className="cv_skill_bar">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cv_skill_box">
                <div className="cv_skill_icon">
                  <img src="../../images/skill-3.svg" />
                </div>
                <div className="cv_skill_progress">
                  <div className="cv_skill_text">
                    <h4>Illustrator</h4>
                    <p>95%</p>
                  </div>
                  <div className="cv_skill_bar">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cv_skill_box">
                <div className="cv_skill_icon">
                  <img src="../../images/skill-4.svg" />
                </div>
                <div className="cv_skill_progress">
                  <div className="cv_skill_text">
                    <h4>After Effect</h4>
                    <p>95%</p>
                  </div>
                  <div className="cv_skill_bar">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cv_skill_box">
                <div className="cv_skill_icon">
                  <img src="../../images/skill-5.svg" />
                </div>
                <div className="cv_skill_progress">
                  <div className="cv_skill_text">
                    <h4>CorelDraw</h4>
                    <p>95%</p>
                  </div>
                  <div className="cv_skill_bar">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="cv_skill_box">
                <div className="cv_skill_icon">
                  <img src="../../images/skill-6.svg" />
                </div>
                <div className="cv_skill_progress">
                  <div className="cv_skill_text">
                    <h4>Premiere Pro</h4>
                    <p>95%</p>
                  </div>
                  <div className="cv_skill_bar">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="cv_exp_info">
            <div className="cv_exp_heading">
              <h2>My Skills</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Skill Section End */}
  {/* Project Section Start */}
  <section className="cv_project_wrapper">
    <div className="cv_container container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="cv_sec_heading">
            <h2>Latest Projects</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="cv_project_content">
            <div className="cv_project_box">
              <div className="cv_project_img">
                <img src="../../images/proj-1.webp" className="img-fluid" />
              </div>
              <div className="cv_project_text">
                <div className="cv_project_heading">
                  <p>Development</p>
                  <span>
                    <img src="../../images/time.svg" />1 Month Ago
                  </span>
                </div>
                <div className="cv_project_title">
                  <p>Best Wireframe Tools For Web Designers.</p>
                </div>
              </div>
            </div>
            <div className="cv_project_box">
              <div className="cv_project_img">
                <img src="../../images/proj-2.webp" className="img-fluid" />
              </div>
              <div className="cv_project_text">
                <div className="cv_project_heading">
                  <p>Development</p>
                  <span>
                    <img src="../../images/time.svg" />1 Month Ago
                  </span>
                </div>
                <div className="cv_project_title">
                  <p>Best Wireframe Tools For Web Designers.</p>
                </div>
              </div>
            </div>
            <div className="cv_project_box">
              <div className="cv_project_img">
                <img src="../../images/proj-3.webp" className="img-fluid" />
              </div>
              <div className="cv_project_text">
                <div className="cv_project_heading">
                  <p>Development</p>
                  <span>
                    <img src="../../images/time.svg" />1 Month Ago
                  </span>
                </div>
                <div className="cv_project_title">
                  <p>Best Wireframe Tools For Web Designers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  {/* Project Section End */}
  {/* Client Section Start */}
  <section className="cv_client_wrapper">
    <div className="cv_container container-fluid">
      <div className="row align-items-center">
        <div className="col-xl-4">
          <div className="cv_exp_info">
            <div className="cv_client_heading">
              <h2>Our Clients</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="cv_client_info">
            <div className="cv_client_box">
              <div className="cv_client_img">
                <img src="../../images/client-1.png" />
              </div>
              <div className="cv_client_img">
                <img src="../../images/client-2.png" />
              </div>
              <div className="cv_client_img">
                <img src="../../images/client-3.png" />
              </div>
            </div>
            <div className="cv_client_box">
              <div className="cv_client_img">
                <img src="../../images/client-4.png" />
              </div>
              <div className="cv_client_img">
                <img src="../../images/client-5.png" />
              </div>
              <div className="cv_client_img">
                <img src="../../images/client-6.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer Section End */}
</div>

    </div>
  )
}

export default Strenth
