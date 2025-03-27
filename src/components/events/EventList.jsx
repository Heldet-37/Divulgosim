import EventCard from './EventCard'

function EventList({ events }) {
  if (!events || events.length === 0) {
    return <p>Nenhum evento encontrado.</p>
  }

  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventList 