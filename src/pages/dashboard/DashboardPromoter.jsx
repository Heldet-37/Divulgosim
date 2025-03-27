import { useState } from 'react'
import EventList from '../../components/events/EventList'
import TaskList from '../../components/tasks/TaskList'

function DashboardPromoter() {
  const [followedEvents, setFollowedEvents] = useState([]) // TODO: Carregar eventos seguidos
  const [tasks, setTasks] = useState([]) // TODO: Carregar tarefas

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard do Divulgador</h2>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Eventos Seguidos</h3>
            <p>{followedEvents.length}</p>
          </div>
          <div className="stat-card">
            <h3>Tarefas Concluídas</h3>
            <p>{tasks.filter(task => task.status === 'completed').length}</p>
          </div>
        </div>

        <div className="dashboard-section">
          <h3>Eventos Seguidos</h3>
          <EventList events={followedEvents} />
        </div>

        <div className="dashboard-section">
          <h3>Suas Tarefas</h3>
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  )
}

export default DashboardPromoter 