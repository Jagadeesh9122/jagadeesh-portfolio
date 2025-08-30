import React from 'react';
import { ChevronDown, Code2, Zap, Award } from 'lucide-react';
import './hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          
          {/* Content Section */}
          <div className="hero-content">
            
            {/* Status Badge */}
            <div className="status-badge">
              <div className="status-dot"></div>
              <span className="status-text">Available for projects</span>
            </div>

            {/* Main Heading */}
            <div className="hero-heading">
              <h1 className="main-title">
                Hello, I'm{" "}
                <span className="name-highlight">
                  <span className="name-text">
                    B.Jagadeesh
                  </span>
                  <div className="name-underline"></div>
                </span>
              </h1>
              
              <div className="subtitle-container">
                <p className="subtitle">
                  ECE Student & Fellow at NxtWave's Academy
                </p>
                <p className="role-text">
                  Full-Stack Developer in the Making
                </p>
              </div>
            </div>
            
            {/* Description */}
            <p className="hero-description">
            👋 Hey, I’m Jagadeesh — an ECE student and future full-stack developer.
I turn ideas into sleek web apps, blending code, creativity, and problem-solving.
Currently leveling up in frontend, backend & DSA at NxtWave CCBP 4.0 to build impactful digital experiences.
            </p>
            
            {/* CTA Buttons */}
            <div className="cta-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection("portfolio")}
              >
                View My Work
              </button>
              <button
                className="btn btn-outline"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              {[
                { number: "2+", label: "Years Learning" },
                { number: "5+", label: "Projects" },
                { number: "10+", label: "Technologies" }
              ].map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-container">
              
              {/* Main Image Container */}
              <div className="profile-image-container">
                <div className="profile-gradient-border">
                  <div className="profile-inner">
                    <img
                      src="https://res.cloudinary.com/dauwn6ihe/image/upload/v1738730205/jaggu_port_rummtm.jpg"
                      alt="Baddila Jagadeesh"
                      className="profile-image"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="floating-element floating-top-right">
                <div className="floating-content">
                  <Code2 className="floating-icon" />
                  <span className="floating-text">React.js</span>
                </div>
              </div>
              
              <div className="floating-element floating-bottom-left">
                <div className="floating-content">
                  <Zap className="floating-icon" />
                  <span className="floating-text">Full-Stack</span>
                </div>
              </div>
              
              <div className="floating-element floating-left">
                <div className="floating-content">
                  <Award className="floating-icon" />
                  <span className="floating-text">VIT Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-content">
            <span className="scroll-text">Scroll to explore</span>
            <button
              onClick={() => scrollToSection("about")}
              className="scroll-button"
              aria-label="Scroll to about section"
            >
              <ChevronDown className="scroll-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;