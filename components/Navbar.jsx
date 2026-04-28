"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Navbar.css";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // AOS Init
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  // Bootstrap JS (CLIENT SIDE ONLY)
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
    
    

      {/* ✅ HERO SECTION */}
      <section className="header-section py-5">
        <div className="container hero-section">
          <div className="row justify-content-center text-center mt-5 pt-5">
            <div className="col-md-10" data-aos="fade-up">

              <h4 className="hero-title">
                Business & Legal Services <br /> Under One Roof
              </h4>

              <p className="hero-subtitle">
                Business Registration, Trademark, Taxation, Legal Compliance &
                Legal Services in few clicks.
              </p>

              <div className="hero-buttons mt-4">
                <button className="hero-btn primary">View Services</button>
                <button className="hero-btn secondary">Hire Experts</button>
              </div>

              {/* ✅ STATS */}
              <div className="row hero-stats align-items-center">
                <div className="col-md-3">
                  <h5 className="stats-text">
                    Over the years, we have delivered some extraordinary results.
                  </h5>
                </div>

                <div className="col-md-9">
                  <div className="row">

                    <div className="col">
                      <div className="stat-box">
                        <h3>850+</h3>
                        <p>Projects <br /> Delivered</p>
                      </div>
                    </div>

                    <div className="col">
                      <div className="stat-box">
                        <h3>88%</h3>
                        <p>Client <br /> Retention</p>
                      </div>
                    </div>

                    <div className="col">
                      <div className="stat-box">
                        <h3>150+</h3>
                        <p>Experts <br /> Team</p>
                      </div>
                    </div>

                    <div className="col">
                      <div className="stat-box">
                        <h3>15+</h3>
                        <p>Years <br /> Experience</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;