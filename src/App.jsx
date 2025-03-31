import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Events from './pages/Events'
import Promoters from './pages/Promoters'
import HowItWorks from './pages/HowItWorks'
import DashboardOrganizer from './pages/dashboard/DashboardOrganizer'
import DashboardPromoter from './pages/dashboard/DashboardPromoter'
import OrganizerProfile from './pages/dashboard/organizer/Profile'
import OrganizerAnalytics from './pages/dashboard/organizer/Analytics'
import OrganizerSettings from './pages/dashboard/organizer/Settings'
import OrganizerPromoters from './pages/dashboard/organizer/Promoters'
import PromoterTasks from './pages/dashboard/promoter/Tasks'
import PromoterProfile from './pages/dashboard/promoter/Profile'
import PromoterSettings from './pages/dashboard/promoter/Settings'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: (props) => ({
      'html, body': {
        scrollBehavior: 'smooth',
        bg: props.colorMode === 'light' ? 'gray.50' : 'gray.900',
        color: props.colorMode === 'light' ? 'gray.800' : 'whiteAlpha.900',
      },
      '#root': {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
      'main': {
        flex: '1 0 auto',
        paddingTop: '64px',
      },
    }),
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <AnimatePresence mode="wait">
            <main style={{ flex: 1, width: '100%', paddingTop: '64px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eventos" element={<Events />} />
                <Route path="/divulgadores" element={<Promoters />} />
                <Route path="/como-funciona" element={<HowItWorks />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Rotas do Organizador */}
                <Route path="/dashboard/organizer" element={<DashboardOrganizer />} />
                <Route path="/dashboard/organizer/profile" element={<OrganizerProfile />} />
                <Route path="/dashboard/organizer/analytics" element={<OrganizerAnalytics />} />
                <Route path="/dashboard/organizer/settings" element={<OrganizerSettings />} />
                <Route path="/dashboard/organizer/promoters" element={<OrganizerPromoters />} />
                
                {/* Rotas do Divulgador */}
                <Route path="/dashboard/promoter" element={<DashboardPromoter />} />
                <Route path="/dashboard/promoter/tasks" element={<PromoterTasks />} />
                <Route path="/dashboard/promoter/profile" element={<PromoterProfile />} />
                <Route path="/dashboard/promoter/settings" element={<PromoterSettings />} />
              </Routes>
            </main>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ChakraProvider>
  )
}

export default App