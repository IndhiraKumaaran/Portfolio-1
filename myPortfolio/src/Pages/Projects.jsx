import React from 'react'
import { FaReact, FaJava, FaGithub } from 'react-icons/fa'
import {
  SiSpringboot,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      name: 'E-commerce Platform',
      description:
        'Built a full-stack app for browsing products and managing shopping carts.',
      tech: [<FaReact />, <FaJava />, <SiSpringboot />, <SiMysql />],
      github: 'https://github.com/IndhiraKumaaran/E-commerce-Project',
    },
    {
      name: 'Task Manager App',
      description:
        'Designed a full-stack task management app with user authentication and task categorization.',
      tech: [<FaReact />, <FaJava />, <SiSpringboot />, <SiMysql />],
      github: 'https://github.com/IndhiraKumaaran/task-manager',
    },
    {
      name: 'Weather Now',
      description:
        'Developed a responsive weather app fetching real-time data via API.',
      tech: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
      github: 'https://github.com/IndhiraKumaaran/weatherApp',
    },
  ]

  return (
    <div className="container my-5">
      <h2
        className="text-center fw-bold mb-5"
        style={{ fontFamily: 'Segoe UI', color: '#222' }}
      >
        Projects
      </h2>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-12 col-md-5 project-card bg-white rounded-4 p-4 m-3"
            style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              fontFamily: 'Segoe UI',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            }}
          >
            <h4 className="mb-2 project-name text-primary fw-semibold">
              {project.name}
            </h4>
            <p className="text-muted mb-3">{project.description}</p>
            <div className="d-flex flex-wrap gap-3 fs-4 mb-3">
              {project.tech.map((Icon, i) => (
                <span key={i} className="tech-icon text-primary">
                  {Icon}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              className="btn btn-outline-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="me-2" />
              GitHub
            </a>
          </div>
        ))}
      </div>

      <style>{`
        .project-card:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
        }
        .project-card:hover .tech-icon,
        .project-card:hover .project-name {
          color: #000 !important;
        }
      `}</style>
    </div>
  )
}

export default Projects
