import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ReelDisplay from './ReelDisplay';
import { Pagination } from 'swiper/modules';


const Portfolio = () => {
  const reels = [
    "../../1.mp4",
    "../../2.mp4",
    "../../3.mp4",
    "../../4.mp4",
    "../../5.mp4",
    // "../../1.mp4",
   
  ];



  return (
    <div className="cv_portfolio_wrapper">
      <div className="cv_container container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="cv_tab_pane" id="tab-1" style={{ display: "block" }}>
              <h2 className="photoshoots-heading">Photoshoots</h2>
              <br />
              <div className="cv_gallery_item item-1">
                <Swiper
                  modules={[ Pagination]} // Add navigation and pagination modules
                  spaceBetween={10} // Space between slides
                  loop={true} // Enable infinite loop
                  pagination={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1, // Mobile view (phones)
                    },
                    768: {
                      slidesPerView: 2, // Tablet view
                    },
                    1024: {
                      slidesPerView: 4, // Desktop view (laptops)
                    },
                  }}
                >
                  {/* Slider Images */}
                  <SwiperSlide>
                    <div className="cv_gallery_img img-2">
                      <img src="../../Audi.jpg" className="img-fluid" style={{ width: "100%", height: "100%" }} alt="Audi" />
                      <span className="cv_gallery_hover">
                        <p>Photo Shoot</p>
                        <h4>Audi Q8 (2021)</h4>
                      </span>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="cv_gallery_img img-2">
                      <img src="../../cla.jpg" className="img-fluid" style={{ width: "100%", height: "100%" }} alt="Cla" />
                      <span className="cv_gallery_hover">
                        <p>Photo Shoot</p>
                        <h4>Cla 200 (2015)</h4>
                      </span>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="cv_gallery_img img-2">
                      <img src="../../v.jpg" className="img-fluid" style={{ width: "100%", height: "100%" }} alt="Land Cruiser" />
                      <span className="cv_gallery_hover">
                        <p>Photo Shoot</p>
                        <h4>Land Cruiser Vx8</h4>
                      </span>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="cv_gallery_img img-2">
                      <img src="../../w.jpg" className="img-fluid" style={{ width: "100%", height: "100%" }} alt="Velar" />
                      <span className="cv_gallery_hover">
                        <p>Photo Shoot</p>
                        <h4>Velar 2018</h4>
                      </span>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="cv_gallery_img img-2">
                      <img src="../../X5.jpg" className="img-fluid" style={{ width: "100%", height: "100%" }} alt="X5" />
                      <span className="cv_gallery_hover">
                        <p>Photo Shoot</p>
                        <h4>X5</h4>
                      </span>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="cv_gallery_img img-2">
                      <img src="../../Macan.jpg" className="img-fluid" style={{ width: "100%", height: "100%" }} alt="Macan" />
                      <span className="cv_gallery_hover">
                        <p>Photo Shoot</p>
                        <h4>Macan</h4>
                      </span>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <h2 className="photoshoots-heading" style={{marginTop:"30px",marginBottom:"30px"}}>Reels</h2>
              <ReelDisplay reels={reels} />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
