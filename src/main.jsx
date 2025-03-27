import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Importando os estilos
import './styles/global.css'
import './styles/components/auth.css'
import './styles/components/navbar.css'
import './styles/components/footer.css'
import './styles/components/dashboard.css'
import './styles/components/home.css'
import './styles/components/events.css'
import './styles/components/tasks.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
