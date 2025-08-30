import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "NxtWatch(Youtube clone)",
      description: "Developed an engaging YouTube-inspired React platform featuring personalized video browsing, smart search, theme customization, and secure user authentication.",
      image: "https://res.cloudinary.com/dauwn6ihe/image/upload/v1755879219/Screenshot_2025-08-22_214258_jjbqa3.png",
      technologies: ["React JS", "JavaScript", "CSS", "Bootstrap", "Routing", "REST API Calls", "Local Storage", "JWT Token", "Authorization", "Authentication"],
    features: [
    "User authentication and JWT-based session management",
    "Browse videos by categories like Trending, Gaming, and Saved",
    "Search functionality for finding specific videos",
    "Theme customization with light and dark modes",
    "Protected routes with React Router for secure navigation"
    ],
      liveLink: "https://jagadeeshwatch.ccbp.tech/",
      githubLink: "#",
      type: "Full-Stack Web Application"
    },
    {
      title: "Trendzz",
      description: "Built a full-featured e-commerce platform inspired by Amazon and Flipkart, featuring secure user authentication, dynamic product browsing, and seamless checkout.",
      image: "https://res.cloudinary.com/dauwn6ihe/image/upload/v1755879602/Screenshot_2025-08-22_214941_ylbobo.png",
technologies: ["React JS", "JavaScript", "CSS", "Bootstrap", "Routing", "REST API Calls", "Local Storage", "JWT Token", "Authorization", "Authentication"],
     features: [
    "User authentication with JWT and secure sessions",
    "Dynamic product catalog with search and filters",
    "Detailed product pages with React components",
    "Shopping cart and smooth checkout process",
    "Admin panel for managing products and inventory"
  ],
      liveLink: "https://jagadeeshshop.ccbp.tech/",
      githubLink: "#",
      type: "React Dashboard Application"
    },
    {
      title: "Visit Jobs App",
      description: "Built a dynamic Jobs Portal with secure authentication, advanced filtering, detailed job views, and seamless navigation across Home, Jobs, and Job Details routes.",
      image: "https://res.cloudinary.com/dauwn6ihe/image/upload/v1755881454/Screenshot_2025-08-22_222034_p9iwq0.png",
      technologies: ["React JS", "JavaScript", "CSS", "Bootstrap", "Routing", "REST API Calls", "Local Storage", "JWT Token", "Authorization", "Authentication"],
      features: [
        "Secure user authentication and route protection with JWT",
    "Dynamic Home route with navigation to Jobs and Job Details",
    "Search and filter jobs by employment type, salary range, and keywords",
    "Real-time HTTP requests with loaders, failure, and retry views",
    "Responsive navigation with Header links and Logout functionality",
       "Not Found route handling for invalid URLs",
    "State management for multiple filters and query parameters"
      ],
      liveLink: "https://visitjobs.ccbp.tech/",
      githubLink: "#",
      type: "Full Stack Project"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            A showcase of my recent projects demonstrating various skills and technologies 
            I've worked with to create meaningful digital experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className={`project-content ${index % 2 === 1 ? 'reverse' : ''}`}>
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
                
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4 className="features-title">Key Features:</h4>
                    <ul className="features-list">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-actions">
                    <a
                      href={project.liveLink}
                      className="btn btn-primary action-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="btn btn-outline action-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h3 className="cta-title">Ready to Start Your Project?</h3>
          <p className="cta-description">
            Let's collaborate and bring your ideas to life with modern web technologies 
            and creative solutions.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="cta-button"
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;