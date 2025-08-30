import React from 'react';
import {  Github, Linkedin, Mail } from 'lucide-react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Jagadeesh9122",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jagadeeshbaddila/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:jagadeeshbaddila@gmail.com",
      label: "Email"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationItems = ["Home", "About", "Skills", "Services", "Portfolio", "Contact"];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <h3 className="footer-brand">Baddila Jagadeesh</h3>
            <p className="footer-description">
              ECE Student at VIT Vellore, passionate about full-stack development 
              and creating meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-links-title">Quick Links</h4>
            <div className="footer-links">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="footer-link"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="footer-section">
            <h4 className="footer-links-title">Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="footer-availability">
              Open for new opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>
            © {currentYear} Baddila Jagadeesh. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;