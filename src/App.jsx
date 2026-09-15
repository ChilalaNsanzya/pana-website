import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Menus from './pages/Menus'
import Reservations from './pages/Reservations'
import Disclaimer from './pages/Disclaimer'
import Contact from './pages/Contact'

// Matches Vite's base, so routing works both at a subpath (GitHub Pages)
// and at the root (custom domain).
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

function App() {
  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
