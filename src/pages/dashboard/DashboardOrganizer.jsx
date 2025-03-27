import { useState } from 'react'
import EventList from '../../components/events/EventList'
import EventForm from '../../components/events/EventForm'

function DashboardOrganizer() {
  const [showEventForm, setShowEventForm] = useState(false)
  const [events, setEvents] = useState([]) // TODO: Carregar eventos do backend

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard do Organizador</h2>
        <button 
          className="btn btn-primary"
          onClick={() => setShowEventForm(true)}
        >
          Criar Novo Evento
        </button>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total de Eventos</h3>
            <p>{events.length}</p>
          </div>
          <div className="stat-card">
            <h3>Eventos Ativos</h3>
            <p>{events.filter(event => event.status === 'active').length}</p>
          </div>
        </div>

        <div className="dashboard-events">
          <h3>Seus Eventos</h3>
          <EventList events={events} />
        </div>
      </div>

      {showEventForm && (
        <EventForm 
          onClose={() => setShowEventForm(false)}
          onSubmit={(eventData) => {
            // TODO: Implementar criação de evento
            console.log('Novo evento:', eventData)
          }}
        />
      )}
    </div>
  )
}

export default DashboardOrganizer 