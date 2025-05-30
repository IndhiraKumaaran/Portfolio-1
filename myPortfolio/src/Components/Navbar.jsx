import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-lg rounded-bottom" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container-fluid">
          <span
            className="navbar-brand d-flex align-items-center justify-content-center ik-ring"
            onClick={() => navigate('/')}
          >
            IK
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {['/', '/Skills', '/Projects', '/Contact'].map((route, index) => (
                <li className="nav-item" key={index}>
                  <span
                    className="nav-link nav-hover"
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(route)}
                  >
                    {route === '/' ? 'Home' : route.replace('/', '')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap');

        .ik-ring {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          border: 2px solid rgb(39, 39, 39);
          color:rgb(39, 39, 39);
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 1.3rem;
          transition: all 0.3s ease;
          box-shadow: 0 0 0 transparent;
          cursor: pointer;
        }

        .ik-ring:hover {
          transform: scale(1.15);
          box-shadow: 0 0 10px #000, 0 0 20px #000;
          background-color: #fff;
          color: #000;
          border-color: #fff;
        }

        .nav-hover {
          color: #222;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .nav-hover:hover {
          color: #0d6efd;
          transform: scale(1.05);
        }

        .navbar {
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  )
}

export default Navbar
