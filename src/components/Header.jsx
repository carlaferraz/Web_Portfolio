export default function Header() {
  return (
    <header className="background-draw">
      <div className="container text-center content-box">
        <div className="profile-data">
          <div className="profile-pic mb-3">
            <img src="/midia/carla.png" alt="Carla Araujo" className="rounded-circle" width="130" />
          </div>
          <h2 className="name">Carla Ferraz de Araujo</h2>
          <div className="social-links mb-3">
            <a href="https://www.instagram.com/carlacarlinhe/" target="_blank" rel="noreferrer" className="me-3">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/carlaferrazdearaujo/" target="_blank" rel="noreferrer" className="me-3">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/carlaferraz" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <h4 className="profile-info-description">Information Systems | PUCPR</h4>
          <div className="profile__buttons mt-3">
            <a href="/midia/CV_Carla_Araujo_2024.pdf" className="cv-button" download>
              My Resume <i className="fas fa-download"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=51123456789" target="_blank" rel="noreferrer" className="feminine-outline-button">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
