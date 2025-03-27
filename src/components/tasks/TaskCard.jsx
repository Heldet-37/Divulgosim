function TaskCard({ task }) {
  return (
    <div className="task-card">
      <div className="task-header">
        <h4>{task.title}</h4>
        <span className={`task-status ${task.status}`}>
          {task.status}
        </span>
      </div>
      <p>{task.description}</p>
      <div className="task-details">
        <span>Tipo: {task.type}</span>
        {task.image && <img src={task.image} alt="Task reference" />}
      </div>
      <div className="task-actions">
        <button className="btn btn-primary">
          Marcar como Concluída
        </button>
        <button className="btn btn-secondary">
          Ver Detalhes
        </button>
      </div>
    </div>
  )
}

export default TaskCard 