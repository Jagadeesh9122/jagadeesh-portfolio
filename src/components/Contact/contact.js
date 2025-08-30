import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub ,FaLinkedin,FaInstagram} from "react-icons/fa";
import { Mail, Phone, MapPin } from 'lucide-react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_7jscray", // your service ID
        "template_1bweycf", // your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "ipDPqLvVZrW_r97_O" // your public key
      );

      alert("✅ Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jagadeeshbaddila@gamil.com",
      link: "mailto:jagadeeshbaddila@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9346825939",
      link: "tel:+919346825939"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vellore, Tamil Nadu, India",
      link: ""
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  placeholder="Tell me about your project or just say hello!"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Contact Information</h3>
              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <item.icon className="contact-icon" />
                    <div className="contact-item-content">
                      <div className="contact-item-label">{item.label}</div>
                      <a
                        href={item.link}
                        className="contact-item-value"
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="contact-info-card">
              <h3 className="contact-info-title">Follow Me</h3>
              <p style={{ textAlign: 'center', color: '#4a5568', marginBottom: '1.5rem' }}>
                Connect with me on social media for updates and tech discussions.
              </p>
              <div className="social-link-container">
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/jagadeeshbaddila/"><FaLinkedin className="social-media-icon"/></a>
                  <a href="https://github.com/Jagadeesh9122" ><FaGithub className="social-media-icon"/></a>
                  <a href="https://www.instagram.com/jagadeesssh/?hl=en" ><FaInstagram className="social-media-icon"/></a>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="contact-info-card availability-card">
              <h3 className="contact-info-title availability-title">Currently Available</h3>
              <p className="availability-description">
                I'm actively seeking new opportunities and interesting projects. 
                Whether it's a full-time position, freelance work, or collaboration, 
                I'm excited to discuss how we can work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
