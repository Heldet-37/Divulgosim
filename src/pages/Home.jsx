import { Link } from 'react-router-dom'
import EventList from '../components/events/EventList'
import { useState } from 'react'

function Home() {
  const [featuredEvents] = useState([]) // TODO: Carregar eventos do backend

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Divulgue eventos e seja recompensado</h1>
          <p>A plataforma que conecta organizadores de eventos com divulgadores profissionais</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">Começar a Divulgar</Link>
            <Link to="/register?type=organizer" className="btn btn-secondary">Sou Organizador</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero-image.svg" alt="Divulgação de eventos" />
        </div>
      </section>

      <section className="features">
        <h2>Como funciona</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📢</div>
            <h3>Divulgadores</h3>
            <p>Encontre eventos para divulgar e ganhe recompensas por cada tarefa concluída</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Organizadores</h3>
            <p>Crie eventos e defina tarefas de divulgação para aumentar seu alcance</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Recompensas</h3>
            <p>Sistema de bonificação baseado em desempenho e engajamento</p>
          </div>
        </div>
      </section>

      {featuredEvents.length > 0 && (
        <section className="featured-events">
          <h2>Eventos em Destaque</h2>
          <EventList events={featuredEvents} />
        </section>
      )}

      <section className="cta">
        <div className="cta-content">
          <h2>Pronto para começar?</h2>
          <p>Junte-se a nossa comunidade de divulgadores e organizadores</p>
          <Link to="/register" className="btn btn-primary">Criar Conta Grátis</Link>
        </div>
      </section>
    </div>
  )
}

export default Home 