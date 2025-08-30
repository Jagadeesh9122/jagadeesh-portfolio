import React from 'react';
import { BookOpen, Lightbulb, Zap, Users } from 'lucide-react';
import './about.css';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Curiosity",
      description: "Always eager to learn new technologies and explore innovative solutions to complex problems."
    },
    {
      icon: Zap,
      title: "Hard Work",
      description: "Dedicated to putting in the effort required to deliver high-quality results and exceed expectations."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Believe in collaborative development and the power of working together to achieve common goals."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my journey, education, and the values that drive my passion for development.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column - Personal Info & Education */}
          <div className="about-content">
            <div>
              <p className="about-text">
                I'm Baddila Jagadeesh, a passionate ECE student at VIT Vellore with a deep love for technology 
                and innovation. My journey into the world of programming began with curiosity and has evolved 
                into a genuine passion for creating meaningful digital experiences.
              </p>
              <p className="about-text">
                While my academic background is in Electronics and Communication Engineering, I've found my 
                true calling in full-stack development. I enjoy the challenge of bringing ideas to life through 
                code and creating applications that make a real difference.
              </p>
            </div>

            <div className="education-card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <BookOpen className="value-icon" style={{ margin: '0 1rem 0 0', width: '2rem', height: '2rem' }} />
                <div>
                  <h3 className="education-title">Bachelor of Technology</h3>
                  <p className="education-institution">Electronics and Communication Engineering</p>
                  <p className="education-institution">VIT Vellore</p>
                  <p className="education-duration">2022 - 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div>
            <h3 className="text-2xl font-bold text-center" style={{ marginBottom: '2rem', color: '#2d3748' }}>Core Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <value.icon className="value-icon" />
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;