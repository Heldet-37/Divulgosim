import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import DashboardOrganizer from './pages/dashboard/DashboardOrganizer'
import DashboardPromoter from './pages/dashboard/DashboardPromoter'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/organizer" element={<DashboardOrganizer />} />
            <Route path="/dashboard/promoter" element={<DashboardPromoter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
