import React from 'react';
import { 
  Palette, 
  Smartphone, 
  Zap, 
  Shield, 
  Link, 
  LifeBuoy 
} from 'lucide-react';
import './services.css';

const Services = () => {
  const features = [
    {
      icon: Palette,
      title: "Modern Design",
      description: "Clean, intuitive interfaces that provide excellent user experience across all devices and platforms."
    },
    {
      icon: Smartphone,
      title: "Responsive Layout",
      description: "Fully responsive designs that work perfectly on desktop, tablet, and mobile devices."
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized code and modern techniques ensure lightning-fast loading times and smooth interactions."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security best practices and reliable architecture for peace of mind."
    },
    
{
  icon: Link,
  title: "Seamless API Integration",
  description: "Connecting applications with REST/GraphQL APIs for smooth data flow and powerful functionality."
},
    {
      icon: LifeBuoy,
      title: "Ongoing Support",
      description: "Continuous support and maintenance to keep your website running smoothly and up-to-date."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Planning",
      description: "Understanding your requirements and creating a detailed project roadmap."
    },
    {
      number: "2", 
      title: "Design",
      description: "Creating wireframes and mockups that align with your vision and goals."
    },
    {
      number: "3",
      title: "Development",
      description: "Building your application using modern technologies and best practices."
    },
    {
      number: "4",
      title: "Launch",
      description: "Testing, deploying, and ensuring everything works perfectly before going live."
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Comprehensive web development services to bring your digital vision to life.
          </p>
        </div>

        {/* Main Service Offering */}
        <div className="services-hero">
          <h3 className="services-hero-title">Web Design & Development</h3>
          <p className="services-hero-description">
            From concept to deployment, I create modern, responsive web applications 
            that deliver exceptional user experiences and drive business results.
          </p>
          <div className="services-hero-buttons">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="btn btn-primary btn-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-outline btn-lg"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <feature.icon className="feature-icon" />
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Development Process */}
        <div className="process-section">
          <h3 className="process-title">My Development Process</h3>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-number">{step.number}</div>
                <h4 className="process-step-title">{step.title}</h4>
                <p className="process-step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;