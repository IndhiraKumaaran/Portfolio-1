import { HashRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import LoadingScreen from './Pages/LoadingScreen'
import { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <HashRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="Skills" element={<Skills />} />
              <Route path="Projects" element={<Projects />} />
              <Route path="Contact" element={<Contact />} />
            </Route>
          </Routes>
        </HashRouter>
      )}
    </>
  )
}

export default App
