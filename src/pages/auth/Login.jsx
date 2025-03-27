import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implementar lógica de login
    console.log('Login:', formData)
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
          <h2>Login</h2>
          <p>Acesse sua conta no Divulgosim</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
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

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Lembrar-me
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Esqueceu a senha?
            </Link>
          </div>

          <button type="submit" className="btn-submit">
            Entrar
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Ainda não tem uma conta?{' '}
            <Link to="/register" className="register-link">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login 