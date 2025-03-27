function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>{event.description}</p>
      <div className="event-details">
        <span>{event.date}</span>
        <span>{event.value}</span>
      </div>
      <div className="event-actions">
        <button className="btn btn-primary">Ver Detalhes</button>
        <button className="btn btn-secondary">Seguir Evento</button>
      </div>
    </div>
  )
}

export default EventCard 