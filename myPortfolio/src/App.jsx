import { useState, useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import LoadingScreen from './Pages/LoadingScreen'
function App() {
  const [loading, setLoading] = useState(true)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    )
  )

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  )
}

export default App
