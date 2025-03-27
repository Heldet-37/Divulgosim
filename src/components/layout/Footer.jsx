import '../../styles/components/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <h3>Divulgosim</h3>
          <p>Conectando eventos e divulgadores</p>
        </div>
        
        <div className="footer-section">
          <h4>Plataforma</h4>
          <ul>
            <li><a href="/como-funciona">Como funciona</a></li>
            <li><a href="/eventos">Eventos</a></li>
            <li><a href="/divulgadores">Divulgadores</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Suporte</h4>
          <ul>
            <li><a href="/central-de-ajuda">Central de Ajuda</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="/termos-de-uso">Termos de Uso</a></li>
            <li><a href="/privacidade">Privacidade</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Divulgosim. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer 