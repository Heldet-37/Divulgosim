import TaskCard from './TaskCard'

function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return <p>Nenhuma tarefa disponível.</p>
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList 