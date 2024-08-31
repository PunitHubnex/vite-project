import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Portfolio from './component/Portfolio';
import Strength from './component/Strenth';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`cv_main_wrapper ${menuOpen ? 'menu-open' : ''}`}>
      <header>
        <>
          {/* Loader Start */}
          <div className="loader">
            <div className="spinner">
              <img src="../../images/loader.gif" alt="loader" className="img-fluid" />
            </div>
          </div>
          {/* Loader End */}
          {/* Bottom To Top Start */}
          <div className="cv_top_icon">
           <Link id="button">
              <img src="../../images/gototop.svg" className="img-fluid" />
           </Link>
          </div>
          {/* Bottom To Top End */}
          {/* Header Section Start */}
          <div className="cv_header_wrapper">
            <div className="cv_container container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="cv_navbar">
                    <div className="cv_logo">
                     <Link href="/">
                        <img src="../../images/logo.png" className="img-fluid" />
                     </Link>
                    </div>
                    <button onClick={toggleMenu} className="cv_toggle_btn">
                      <svg className={`ham hamRotate ham7 ${menuOpen ? 'active' : ''}`} viewBox="0 0 100 100">
                        <path
                          className="line top"
                          d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
                        ></path>
                        <path className="line middle" d="m 70,50 h -40"></path>
                        <path
                          className="line bottom"
                          d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navbar Start */}
          <div className="cv_header_menu">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="cv_menus_wrapper">
                    <ul className="cv_menus">
                      <li>
                       <Link to="/" onClick={toggleMenu}  >Home</Link>
                      </li>
                      <li>
                       <Link to="/about" onClick={toggleMenu}>About</Link>
                      </li>
                      <li>
                       <Link className="active" to="/portfolio" onClick={toggleMenu}>
                          My Work
                       </Link>
                      </li>
                      <li>
                       <Link to="/strength" onClick={toggleMenu}  >Strength</Link>
                      </li>
                      <li>
                       <Link to="/contact" onClick={toggleMenu} >Contact</Link>
                      </li>
                    </ul>
                    <div className="cv_header_social">
                      <h4>Follow Me</h4>
                      <ul>
                        <li>
                         <Link to="javascript:void(0);">
                            <img src="../../images/fb.svg" />
                         </Link>
                        </li>
                        <li>
                         <Link to="javascript:void(0);">
                            <img src="../../images/in.svg" />
                         </Link>
                        </li>
                        <li>
                         <Link to="javascript:void(0);">
                            <img src="../../images/tw.svg" />
                         </Link>
                        </li>
                        <li>
                         <Link to="javascript:void(0);">
                            <img src="../../images/pi.svg" />
                         </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="cv_footer_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="cv_footer_text">
                  <p>
                    Copyright © <span id="copyYear" /> Portfolio. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="strength" element={<Strength />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
