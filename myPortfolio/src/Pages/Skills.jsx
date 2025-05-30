import React from 'react'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJava,
  FaDatabase,
  FaLeaf,
  FaJs,
} from 'react-icons/fa'
import { SiSpringboot } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact size={50} /> },
    { name: 'JavaScript', icon: <FaJs size={50} /> },
    { name: 'Java', icon: <FaJava size={50} /> },
    { name: 'Spring Boot', icon: <SiSpringboot size={50} /> },
    { name: 'HTML', icon: <FaHtml5 size={50} /> },
    { name: 'CSS', icon: <FaCss3Alt size={50} /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={50} /> },
    { name: 'MySQL', icon: <FaDatabase size={50} /> },
    { name: 'MongoDB', icon: <FaLeaf size={50} /> },
  ]

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Skills</h2>
      <div className="row justify-content-center">
        {skills.map(({ name, icon }, index) => (
          <div key={index} className="col-6 col-md-3 mb-4 d-flex justify-content-center">
            <div className="skill-card text-center p-4 rounded bg-light w-100" style={{ maxWidth: '180px' }}>
              <div className="skill-icon mb-3">{icon}</div>
              <h5 className="skill-name">{name}</h5>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skill-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
        }
        .skill-card:hover {
          transform: scale(1.1);
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
        }
        .skill-card:hover .skill-icon svg,
        .skill-card:hover .skill-name {
          color: #000 !important;
        }
        .skill-icon svg {
          transition: color 0.3s ease, transform 0.3s ease;
          color: #0d6efd;
        }
        .skill-name {
          font-weight: 500;
          color: #0d6efd;
          transition: color 0.3s ease;
        }
      `}</style>
    </div>
  )
}

export default Skills
