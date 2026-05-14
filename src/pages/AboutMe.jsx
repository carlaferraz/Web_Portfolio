import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/sobremim.css'

export default function AboutMe() {
  return (
    <>
      <Header />
      <main className="container my-5">
        <Nav />

        <section id="about-intro" className="row mb-5 align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2 className="feminine-title">About Me</h2>
            <p className="lead feminine-text">
              Hi there! I'm Carla! An Information Systems student at PUCPR, passionate about design, technology, kittens, and questionable horror movies.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src="/midia/eu.jpg" alt="Carla Araujo" className="img-fluid rounded shadow" style={{ maxWidth: '350px' }} />
          </div>
        </section>

        <hr className="feminine-divider-light" />

        <section id="timeline" className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center mb-5 feminine-title">Academic & Professional Path</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="p-4 border rounded shadow-sm h-100 timeline-card">
                <h3 className="text-center mb-3 year-title">2026</h3>
                <ul className="timeline-list">
                  <li>
                    <strong>Swift Student Challenge</strong>
                    <p>Developed an innovative app playground using Swift and computer vision.</p>
                  </li>
                  <li>
                    <strong>Director of Communication</strong>
                    <p>Managing digital presence and visual identity for the Academic Center.</p>
                  </li>
                </ul>
                <div className="timeline-media">
                  <video src="/midia/sobremim/shaide.MOV" controls muted loop playsInline className="rounded shadow-sm w-100"></video>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="p-4 border rounded shadow-sm h-100 timeline-card">
                <h3 className="text-center mb-3 year-title">2025</h3>
                <ul className="timeline-list">
                  <li><strong>Apple Developer Academy</strong><p>Focus on iOS Development and Human-Centered Design.</p></li>
                  <li><strong>Dean's List Recognition</strong><p>Awarded for outstanding academic performance at PUCPR.</p></li>
                </ul>
                <div className="timeline-media-grid">
                  <img src="/midia/sobremim/academy2025.jpg" alt="Academy" />
                  <img src="/midia/sobremim/deanslist.jpg" alt="Dean's List" />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="p-4 border rounded shadow-sm h-100 timeline-card">
                <h3 className="text-center mb-3 year-title">2024</h3>
                <ul className="timeline-list">
                  <li><strong>Information Systems at PUCPR</strong><p>Transitioning from design to technical engineering.</p></li>
                  <li><strong>Python Automation</strong><p>Automated email systems and dynamic PDF generators.</p></li>
                </ul>
                <div className="timeline-media-grid">
                  <img src="/midia/sobremim/2024.png" alt="PUCPR" />
                  <img src="/midia/btksolutions/preview.png" alt="Automation" />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="p-4 border rounded shadow-sm h-100 timeline-card">
                <h3 className="text-center mb-3 year-title">2023</h3>
                <ul className="timeline-list">
                  <li><strong>Architectural Projects</strong><p>Professional interior design and functional architecture.</p></li>
                </ul>
                <div className="timeline-media-grid">
                  <img src="/midia/sobremim/2023.png" alt="Architecture" />
                  <img src="/midia/eu.jpg" alt="Work" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="feminine-divider-light" />

        <section id="habilidades" className="container my-5">
          <div className="row">
            <div className="col-12">
              <h2 className="feminine-title text-center mb-5">Professional Skills</h2>
            </div>
          </div>

          {[
            {
              icon: 'fab fa-apple', title: 'iOS Development',
              skills: ['Swift', 'SwiftUI', 'UIKit', 'CoreML & Vision', 'ARKit & HealthKit', 'CoreData & SwiftData', 'SpriteKit & AVFoundation', 'MVVM / MVC / Design Patterns'],
            },
            {
              icon: 'fas fa-code', title: 'Programming & Automation',
              skills: ['Python', 'Java', 'MySQL / SQL', 'OOP (Object-Oriented Programming)', 'Python Automation (PDF & Email)', 'VBA'],
            },
            {
              icon: 'fas fa-paint-brush', title: 'Web & Design',
              skills: ['HTML5 & CSS3', 'JavaScript (Basic)', 'UI/UX Design', 'Figma', 'Game & Narrative Design'],
            },
            {
              icon: 'fas fa-chart-line', title: 'Data & Tools',
              skills: ['Power BI', 'Power Query', 'Git & Xcode', 'Agile & CBL Methodologies', 'Microsoft Office Certified'],
            },
            {
              icon: 'fas fa-users', title: 'Core Skills',
              skills: ['Communication & Presentation', 'Team-Oriented & Extroverted', 'Adaptable & Proactive', 'Analytical Problem-Solving'],
            },
            {
              icon: 'fas fa-language', title: 'Languages',
              skills: ['English (Advanced - TOEFL)', 'Spanish (Advanced - SIELE)', 'Portuguese (Native)'],
            },
          ].map(({ icon, title, skills }) => (
            <div key={title} className="skill-category mb-4">
              <h3 className="feminine-subtitle"><i className={icon}></i> {title}</h3>
              <div className="skills-container">
                {skills.map(s => <span key={s} className="skill-item">{s}</span>)}
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
