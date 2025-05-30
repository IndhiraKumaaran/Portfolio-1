import React, { useEffect, useState } from 'react'

const LoadingScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)  // start fade out
      setTimeout(() => {
        onFinish()       // remove after fade out ends
      }, 500)            // Bootstrap fade duration is 0.5s
    }, 2000)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-white text-dark
                  ${visible ? 'fade show' : 'fade'}`}
      style={{ zIndex: 9999, pointerEvents: visible ? 'auto' : 'none' }}
    >
      <div className="scene mb-5">
        <div className="cube">
          <div className="face front">IK</div>
          <div className="face back">IK</div>
          <div className="face right">IK</div>
          <div className="face left">IK</div>
          <div className="face top">IK</div>
          <div className="face bottom">IK</div>
        </div>
      </div>
      <h2 style={{ fontFamily: 'Cinzel, serif', letterSpacing: '2px', color: '#000' }}>
        Loading...
      </h2>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap');

        .scene {
          width: 100px;
          height: 100px;
          perspective: 600px;
          filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.2));
        }
        .cube {
          width: 100px;
          height: 100px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateCube 3s linear infinite;
          margin: auto;
          box-shadow: none;
        }
        .face {
          position: absolute;
          width: 100px;
          height: 100px;
          background: #fff;
          color: #000;
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 2.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #000;
          user-select: none;
          border-radius: 8px;
          box-shadow: none;
        }
        .front  { transform: translateZ(50px); }
        .back   { transform: rotateY(180deg) translateZ(50px); }
        .right  { transform: rotateY(90deg) translateZ(50px); }
        .left   { transform: rotateY(-90deg) translateZ(50px); }
        .top    { transform: rotateX(90deg) translateZ(50px); }
        .bottom { transform: rotateX(-90deg) translateZ(50px); }

        @keyframes rotateCube {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen
