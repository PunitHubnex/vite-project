import React from 'react';

const Strenth = () => {
  return (
    <div>
      <div className="cv_main_wrapper">
        {/* What I Do Section */}
        <div className="cv_do_wrapper">
          <div className="cv_container container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-4">
                <div className="cv_do_heading">
                  <h2>What I Do</h2>
                  <p>
                    I specialize in capturing compelling visuals and editing them into powerful stories. With years of experience in videography and post-production, I create videos that leave a lasting impact.
                  </p>
                </div>
                <div className="cv_do_img">
                  <img src="../../images/do_img.webp" className="img-fluid" alt="Videography" />
                </div>
              </div>
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="cv_do_box">
                      <div className="cv_do_icon">
                        <img src="../../images/do-icon1.svg" alt="Cinematography" />
                      </div>
                      <div className="cv_do_text">
                        <h4>Cinematography</h4>
                        <p>
                          Crafting visually stunning sequences that elevate the narrative and engage the audience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cv_do_box">
                      <div className="cv_do_icon">
                        <img src="../../images/do-icon2.svg" alt="Video Editing" />
                      </div>
                      <div className="cv_do_text">
                        <h4>Video Editing</h4>
                        <p>
                          Transforming raw footage into cohesive, polished stories with professional editing techniques.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cv_do_box">
                      <div className="cv_do_icon">
                        <img src="../../images/do-icon3.svg" alt="Color Grading" />
                      </div>
                      <div className="cv_do_text">
                        <h4>Color Grading</h4>
                        <p>
                          Enhancing the visual tone and mood of your videos to make them truly cinematic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cv_do_box">
                      <div className="cv_do_icon">
                        <img src="../../images/do-icon4.svg" alt="Sound Design" />
                      </div>
                      <div className="cv_do_text">
                        <h4>Sound Design</h4>
                        <p>
                          Crafting immersive audio experiences that complement the visual storytelling.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <section className="cv_award_wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-6">
                <div className="cv_award_box">
                  <div className="cv_award_icon">
                    <img src="../../images/award-1.svg" alt="Happy Clients" />
                  </div>
                  <div className="cv_award_text">
                    <h1>
                      <span className="timer" data-from={0} data-to={150} data-speed={2000} />
                      +
                    </h1>
                    <h4>Happy Clients</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="cv_award_box">
                  <div className="cv_award_icon">
                    <img src="../../images/award-2.svg" alt="Projects Completed" />
                  </div>
                  <div className="cv_award_text">
                    <h1 className="timer" data-from={0} data-to={200} data-speed={2000} />
                    <h4>Projects Completed</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="cv_award_box">
                  <div className="cv_award_icon">
                    <img src="../../images/award-3.svg" alt="Awards Won" />
                  </div>
                  <div className="cv_award_text">
                    <h1 className="timer" data-from={0} data-to={30} data-speed={2000} />
                    <h4>Awards Won</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="cv_skill_wrapper">
          <div className="cv_container container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="cv_skill_box">
                      <div className="cv_skill_icon">
                        <img src="../../images/skill-1.svg" alt="Adobe Premiere Pro" />
                      </div>
                      <div className="cv_skill_progress">
                        <div className="cv_skill_text">
                          <h4>Adobe Premiere Pro</h4>
                          <p>95%</p>
                        </div>
                        <div className="cv_skill_bar">
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cv_skill_box">
                      <div className="cv_skill_icon">
                        <img src="../../images/skill-2.svg" alt="Final Cut Pro" />
                      </div>
                      <div className="cv_skill_progress">
                        <div className="cv_skill_text">
                          <h4>Final Cut Pro</h4>
                          <p>90%</p>
                        </div>
                        <div className="cv_skill_bar">
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cv_skill_box">
                      <div className="cv_skill_icon">
                        <img src="../../images/skill-3.svg" alt="DaVinci Resolve" />
                      </div>
                      <div className="cv_skill_progress">
                        <div className="cv_skill_text">
                          <h4>DaVinci Resolve</h4>
                          <p>85%</p>
                        </div>
                        <div className="cv_skill_bar">
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cv_skill_box">
                      <div className="cv_skill_icon">
                        <img src="../../images/skill-4.svg" alt="After Effects" />
                      </div>
                      <div className="cv_skill_progress">
                        <div className="cv_skill_text">
                          <h4>After Effects</h4>
                          <p>95%</p>
                        </div>
                        <div className="cv_skill_bar">
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
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
                      From editing complex video projects to crafting compelling visual narratives, my skillset covers all aspects of post-production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Projects Section */}
        <section className="cv_project_wrapper">
          <div className="cv_container container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="cv_sec_heading">
                  <h2>Latest Reel</h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cv_project_box">
                  <div className="cv_project_img">
                    <img src="../../images/project-1.webp" className="img-fluid" alt="Commercial Ad Campaign" />
                  </div>
                  <div className="cv_project_text">
                    <h4>Commercial Ad Campaign</h4>
                    <p>
                      Directed and edited a series of commercials for a high-profile brand, resulting in increased engagement and sales.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cv_project_box">
                  <div className="cv_project_img">
                    <img src="../../images/project-2.webp" className="img-fluid" alt="Music Video" />
                  </div>
                  <div className="cv_project_text">
                    <h4>Music Video</h4>
                    <p>
                      Cinematography and editing for a popular music video that gained over 1 million views within a week of release.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cv_project_box">
                  <div className="cv_project_img">
                    <img src="../../images/project-3.webp" className="img-fluid" alt="Documentary Film" />
                  </div>
                  <div className="cv_project_text">
                    <h4>Documentary Film</h4>
                    <p>
                      Edited and color graded a feature-length documentary, which was featured in multiple film festivals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Media Partners Section */}
        <section className="cv_client_wrapper">
          <div className="cv_container container-fluid">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-3">
                <div className="cv_sec_heading">
                  <h2>Trusted Media Partners</h2>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="cv_client_slider slick-initialized slick-slider">
                <div className="slick-track" style={{ 
  opacity: 1, 
  width: '100%', 
  transform: 'translate3d(0px, 0px, 0px)', 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  flexWrap: 'wrap' 
}}>
  <div className="cv_client_box slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" tabIndex={0} style={{ width: '30%', maxWidth: '145px' }}>
    <img src="../../Baatchit.png" className="img-fluid" alt="Media Partner 1" />
  </div>
  <div className="cv_client_box slick-slide slick-active" data-slick-index={1} aria-hidden="false" tabIndex={0} style={{ width: '30%', maxWidth: '145px' }}>
    <img src="../../danik.png" className="img-fluid" alt="Media Partner 2" />
  </div>
  <div className="cv_client_box slick-slide" data-slick-index={2} aria-hidden="true" tabIndex={-1} style={{ width: '30%', maxWidth: '145px' }}>
    <img src="../../kunwar_custom.png" className="img-fluid" alt="Media Partner 3" />
  </div>
  <div className="cv_client_box slick-slide" data-slick-index={3} aria-hidden="true" tabIndex={-1} style={{ width: '30%', maxWidth: '145px' }}>
    <img src="../../logo.png" className="img-fluid" alt="Media Partner 4" />
  </div>
  <div className="cv_client_box slick-slide" data-slick-index={4} aria-hidden="true" tabIndex={-1} style={{ width: '30%', maxWidth: '145px' }}>
    <img src="../../swing.png" className="img-fluid" alt="Media Partner 5" />
  </div>
  <div className="cv_client_box slick-slide" data-slick-index={5} aria-hidden="true" tabIndex={-1} style={{ width: '30%', maxWidth: '145px' }}>
    <img src="../../traking_baba.png" className="img-fluid" alt="Media Partner 6" />
  </div>
</div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Strenth;
