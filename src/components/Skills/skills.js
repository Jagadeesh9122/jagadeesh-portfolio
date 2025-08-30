import React from 'react';
import { Code, Server, Database, Wrench, Terminal,ComputerIcon,CircleStar} from 'lucide-react';
import './skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React.js","JavaScript", "HTML", "CSS", "Bootstrap"],
      colorClass: "frontend"
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "Authentication"],
      colorClass: "backend"
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: ["MongoDB", "MySQL", "Firebase"],
      colorClass: "database"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code","Postman","Linux(Basic)"],
      colorClass: "tools"
    },
    {
      title: "CS Fundamentals",
      icon: ComputerIcon,
      skills: ["Data Structures & Algorithms" , "DBMS","Operating Systems","Computer Networks"],
      colorClass: "fundamentals"
    },
    {
      title: "Programming languages",
      icon: CircleStar,
      skills: ["Python","C++","JavaScript"],
      colorClass: "programming"
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skill-category-card ${category.colorClass}`}>
              <div className="skill-header">
                <category.icon className={`skill-icon ${category.colorClass}`} />
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="learning-message">
          <Terminal className="learning-icon" />
          <h3 className="learning-title">Always Learning</h3>
          <p className="learning-description">
            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
            languages, and tools to stay at the forefront of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;