import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="cv_main_wrapper">
  <div className="cv_map_wrapper">
    <div className="cv_container container-fluid">
      <div className="row align-items-center">
        <div className="col-xl-8">
          <div className="cv_map_content">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5240877215124!2d76.04315457607015!3d22.96774781837043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963172b725b9649%3A0xca9958ddaa36af60!2sPixelNX!5e0!3m2!1sen!2sin!4v1701171479634!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="cv_map_info">
            <div className="cv_map_heading">
              <h2>Get In Touch</h2>
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
  </div>
  {/* Do Section End */}
  {/* Address Section Start */}
  <section className="cv_address_wrapper">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="cv_address_box">
            <div className="cv_address_icon">
              <img src="../../images/add-1.svg" />
            </div>
            <div className="cv_address_text">
              <h5>Phone</h5>
              <a href="tel:+918112289951">+91 81122 89951</a>
  <a href="tel:+918112289951">+91 81122 89951</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="cv_address_box">
            <div className="cv_address_icon">
              <img src="../../images/add-2.svg" />
            </div>
            <div className="cv_address_text">
              <h5>Email</h5>
              <a href="mailto:St7807861@gmail.com">St7807861@gmail.com</a>
      <a href="mailto:utkarsh7ven@gmail.com">utkarsh7ven@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="cv_address_box">
            <div className="cv_address_icon">
              <img src="../../images/add-3.svg" />
            </div>
            <div className="cv_address_text">
              <h5>Address</h5>
              <a href="javascript:void(0);">
                71 Pilgrim Avenue Chevy Chase, MD 20815
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Address Section End */}
  {/* Form Section Start */}
  {/* <section className="cv_form_wrapper">
    <form className="cv_contact_form">
      <div className="cv_container container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-4">
            <div className="cv_client_heading">
              <h2>Contact Us</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="off"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  autoComplete="off"
                />
              </div>
              <div className="col-md-6">
                <textarea placeholder="Message" defaultValue={""} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="cv_contact_btn">
              <a href="javascript:void(0);" className="cv_btn">
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section> */}
</div>

    </div>
  )
}

export default Contact
