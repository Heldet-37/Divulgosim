import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'promoter'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Register:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Criar Conta</h2>
          <p>Preencha os dados para se cadastrar</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Nome completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Digite seu nome"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Digite sua senha"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirme sua senha"
            />
          </div>

          <div className="form-group">
            <label htmlFor="userType">Tipo de conta</label>
            <div className="user-type-options">
              <label className={`user-type-option ${formData.userType === 'promoter' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="userType"
                  value="promoter"
                  checked={formData.userType === 'promoter'}
                  onChange={handleChange}
                />
                <span className="option-icon">📢</span>
                <span className="option-text">
                  <strong>Divulgador</strong>
                  <span>Quero divulgar eventos</span>
                </span>
              </label>
              
              <label className={`user-type-option ${formData.userType === 'organizer' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="userType"
                  value="organizer"
                  checked={formData.userType === 'organizer'}
                  onChange={handleChange}
                />
                <span className="option-icon">🎯</span>
                <span className="option-text">
                  <strong>Organizador</strong>
                  <span>Quero criar eventos</span>
                </span>
              </label>
            </div>
          </div>

          <div className="form-terms">
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>
                Li e aceito os <Link to="/terms">Termos de Uso</Link> e a{' '}
                <Link to="/privacy">Política de Privacidade</Link>
              </span>
            </label>
          </div>

          <button type="submit" className="btn-submit">
            Criar conta
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Já tem uma conta?{' '}
            <Link to="/login" className="login-link">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register 