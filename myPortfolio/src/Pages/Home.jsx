import React from 'react'

const Home = () => {
  return (
    <div className="container text-center mt-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <img
        src="/Portfolio-1/profilePic.jpg"
        alt="Profile"
        className="rounded-circle mb-4 shadow"
        width="150"
        height="150"
      />
      <h1 className="fw-bold" style={{ color: '#0f172a' }}>
        Hi, I am Indhira Kumaaran
      </h1>
      <p className="lead" style={{ color: '#0d9488', fontWeight: '500' }}>
        I'm a full stack developer — building modern web apps with React and Spring Boot.
      </p>
      <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
        From sleek React interfaces to robust Java APIs, I craft full stack experiences that are clean,
        fast, and built to scale.
      </p>

      <footer style={{ marginTop: '3rem', color: '#888', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Indhira Kumaaran. All rights reserved.
      </footer>
    </div>
  )
}

export default Home
