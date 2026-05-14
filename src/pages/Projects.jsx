import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useModal } from '../context/ModalContext'

function ClickableImg({ src, alt, className, style, images }) {
  const { openModal } = useModal()
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onClick={() => openModal(images, src)}
    />
  )
}

const boostImages = [
  '/midia/boost/boost1.png',
  '/midia/boost/boost2.png',
  '/midia/boost/boost3.png',
]

const gripImages = [
  '/midia/grip/grip1.png',
  '/midia/grip/grip2.png',
  '/midia/grip/grip3.png',
  '/midia/grip/grip4.png',
  '/midia/grip/grip5.png',
]

const plumaImages = [
  '/midia/pluma/pluma1.png',
  '/midia/pluma/pluma2.png',
  '/midia/pluma/pluma3.png',
  '/midia/pluma/pluma4.png',
]

const chatloveImages = [
  '/midia/chatlove/chatlove1.png',
  '/midia/chatlove/chatlove2.png',
  '/midia/chatlove/chatlove3.png',
]

const kuruxuImages = [
  '/midia/kuruxu/kuruxu1.png',
  '/midia/kuruxu/kuruxu2.png',
  '/midia/kuruxu/kuruxu3.png',
]

const dipietraImages = [
  '/midia/dipietra/1.png',
  '/midia/dipietra/2.png',
  '/midia/dipietra/3.png',
  '/midia/dipietra/4.png',
  '/midia/dipietra/5.png',
  '/midia/dipietra/6.png',
  '/midia/dipietra/7.png',
  '/midia/dipietra/8.png',
  '/midia/dipietra/9.png',
]

const catcatchImages = [
  '/midia/catcatch/screenshotcatcatchmenu.png',
  '/midia/catcatch/screenshotcatcatch1.png',
  '/midia/catcatch/screenshotcatcatch2.png',
  '/midia/catcatch/screenshotcatcatchgameover.png',
]

const casaImages = [
  '/midia/casadoescritorio/preview.png',
  '/midia/casadoescritorio/email-enviado.png',
  '/midia/casadoescritorio/falha-box.png',
  '/midia/casadoescritorio/email-enviado-box.png',
]

const btkImages = [
  '/midia/btksolutions/salvar-como.png',
  '/midia/btksolutions/sucesso.png',
  '/midia/btksolutions/falha.png',
  '/midia/btksolutions/preview.png',
]

export default function Projects() {
  return (
    <>
      <Header />
      <main className="container my-5">
        <Nav />

        <img src="/midia/banner-pro.png" alt="Portfolio Banner" className="full-width-image" />

        <section className="row my-5">
          <div className="col-md-12 feminine-section">
            <h2 className="feminine-title">INDEX</h2>
            <div className="index-container mt-4">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="feminine-subtitle"><i className="fab fa-apple"></i> iOS Development</h3>
                  <ol className="index-list">
                    <a href="#boost" className="index"><li>Boost (Loong) - Fitness</li></a>
                    <a href="#grip" className="index"><li>Grip - Pole Dance Tracker</li></a>
                    <a href="#pluma" className="index"><li>Pluma - AI Narrative</li></a>
                    <a href="#chatlove" className="index"><li>ChatLove - AI Dating Sim</li></a>
                    <a href="#kuruxu" className="index"><li>Kuruxu - Indigenous AR</li></a>
                  </ol>
                </div>
                <div className="col-md-6">
                  <h3 className="feminine-subtitle"><i className="fas fa-code"></i> Scripting & Web</h3>
                  <ol className="index-list">
                    <a href="#dipietra" className="index"><li>Di Pietra E-commerce</li></a>
                    <a href="#catcatch" className="index"><li>Cat Catch Game</li></a>
                    <a href="#group" className="index"><li>Email Automation</li></a>
                    <a href="#btk" className="index"><li>PDF Budget Automation</li></a>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="feminine-divider"></div>

        <section id="projects">

          {/* BOOST */}
          <div className="row project-row align-items-center">
            <div className="col-md-6 feminine-section">
              <h2 className="feminine-title" id="boost">BOOST (LOONG)</h2>
              <h3 className="feminine-subtitle">iOS DEVELOPMENT | HEALTH & FITNESS</h3>
              <p className="feminine-text">
                Developed at the Apple Developer Academy, our team sought to deliver value to adults who seek sports as a way to improve their health and lives but lack the motivation to do so. Loong is a guide app that introduces running to sedentary adults as a way to improve their quality of life. Through an 8-week training plan, we provide motivation and engagement for sports, allowing for gradual and constant progress.
              </p>
              <div className="my-3">
                <h3 className="feminine-subtitle">Technologies Used:</h3>
                <ul className="feminine-languages">
                  <li className="feminine-language-item"><i className="fab fa-swift"></i> Swift</li>
                  <li className="feminine-language-item"><i className="fas fa-heartbeat"></i> HealthKit</li>
                  <li className="feminine-language-item"><i className="fas fa-mobile-alt"></i> UIKit</li>
                </ul>
              </div>
              <div className="my-5">
                <a href="https://apps.apple.com/br/app/boost-running/id6747902328" target="_blank" rel="noreferrer" className="feminine-button">App Store</a>
              </div>
            </div>
            <div className="col-md-6 feminine-section">
              <video src="/midia/boost/Loong.mp4" controls preload="none" style={{ maxHeight: '80vh', width: '100%', borderRadius: '15px' }}></video>
              <div className="mobile-gallery-grid">
                {boostImages.map(src => (
                  <ClickableImg key={src} src={src} alt="Boost screenshot" images={boostImages} />
                ))}
              </div>
            </div>
          </div>

          <div className="feminine-divider"></div>

          {/* GRIP */}
          <div className="row my-5 align-items-center">
            <div className="col-md-6 feminine-section order-md-2">
              <h2 className="feminine-title" id="grip">GRIP</h2>
              <h3 className="feminine-subtitle">iOS DEVELOPMENT | SWIFT DATA</h3>
              <p className="feminine-text">
                Tracking the progress of students in Pole Dance can be a complex process. Each person has their own pace, specific difficulties, and unique achievements... and organizing all of this in a clear and practical way is not always simple. With Grip, this changes. Developed for Pole Dance instructors, the app makes progression tracking much more intuitive and visual.
              </p>
              <div className="my-3">
                <h3 className="feminine-subtitle">Technologies Used:</h3>
                <ul className="feminine-languages">
                  <li className="feminine-language-item"><i className="fab fa-swift"></i> SwiftUI</li>
                  <li className="feminine-language-item"><i className="fas fa-database"></i> SwiftData</li>
                  <li className="feminine-language-item"><i className="fas fa-file-pdf"></i> PDFKit</li>
                </ul>
              </div>
              <div className="my-5">
                <a href="https://apps.apple.com/br/app/grip-pole-dance/id6751820798" target="_blank" rel="noreferrer" className="feminine-button">App Store</a>
              </div>
            </div>
            <div className="col-md-6 feminine-section order-md-1">
              <video src="/midia/grip/grip.mp4" controls preload="none" className="project-video-ios" style={{ maxHeight: '80vh', width: '100%', borderRadius: '15px' }}></video>
              <div className="mobile-gallery-grid" style={{ alignItems: 'center' }}>
                {gripImages.map(src => (
                  <ClickableImg key={src} src={src} alt="Grip screenshot" className="img-fluid me-2" style={{ maxWidth: '30%' }} images={gripImages} />
                ))}
              </div>
            </div>
          </div>

          <div className="feminine-divider"></div>

          {/* PLUMA */}
          <div className="row my-5 align-items-center">
            <div className="col-md-6 feminine-section">
              <h2 className="feminine-title" id="pluma">PLUMA 🪶</h2>
              <h3 className="feminine-subtitle">AI & EDUCATION | UIKIT</h3>
              <p className="feminine-text">
                Pluma is an interactive app developed at the Apple Developer Academy PUCPR where the user and AI build a narrative together, chapter by chapter. The idea was born from a personal desire to improve my Spanish studies and explore how artificial intelligence can stimulate creative writing and language learning, transforming the process into something fun and collaborative.
              </p>
              <div className="my-3">
                <h3 className="feminine-subtitle">Technologies Used:</h3>
                <ul className="feminine-languages">
                  <li className="feminine-language-item"><i className="fab fa-swift"></i> UIKit</li>
                  <li className="feminine-language-item"><i className="fas fa-brain"></i> Foundation Models</li>
                  <li className="feminine-language-item"><i className="fas fa-wave-square"></i> Combine</li>
                  <li className="feminine-language-item"><i className="fas fa-play-circle"></i> AVFoundation</li>
                </ul>
              </div>
              <div className="my-5">
                <a href="https://testflight.apple.com/join/HDb7Thbb" target="_blank" rel="noreferrer" className="feminine-button">TestFlight</a>
              </div>
            </div>
            <div className="col-md-6 feminine-section">
              <video src="/midia/pluma/pluma.mp4" controls preload="none" className="project-video-ios" style={{ maxHeight: '80vh', width: '100%', borderRadius: '15px' }}></video>
              <div className="mobile-gallery-grid" style={{ alignItems: 'center' }}>
                {plumaImages.map(src => (
                  <ClickableImg key={src} src={src} alt="Pluma screenshot" className="img-fluid me-2" style={{ maxWidth: '30%' }} images={plumaImages} />
                ))}
              </div>
            </div>
          </div>

          <div className="feminine-divider"></div>

          {/* CHATLOVE */}
          <div className="row my-5 align-items-center">
            <div className="col-md-6 feminine-content order-md-2">
              <h2 className="feminine-title" id="chatlove">CHATLOVE ❤️‍🔥</h2>
              <h3 className="feminine-subtitle">AI DATING SIMULATOR | OPENAI API</h3>
              <p className="feminine-text">
                What if ChatGPT suddenly became obsessed with you? That is the premise of <strong>ChatLOVE</strong>. Born from a joke about how talking to an AI can sometimes feel like talking to a partner, I developed this dating simulator where the chatbot becomes dangerously infatuated with the user.
              </p>
              <div className="my-3">
                <h3 className="feminine-subtitle">Technologies Used:</h3>
                <ul className="feminine-languages">
                  <li className="feminine-language-item"><i className="fas fa-robot"></i> OpenAI API</li>
                  <li className="feminine-language-item"><i className="fab fa-swift"></i> SwiftUI</li>
                  <li className="feminine-language-item"><i className="fas fa-play-circle"></i> AVFoundation</li>
                  <li className="feminine-language-item"><i className="fas fa-bell"></i> Local Notifications</li>
                </ul>
              </div>
              <div className="my-5">
                <a href="https://apps.apple.com/br/app/chatlove/id6749601893" target="_blank" rel="noreferrer" className="feminine-button">App Store</a>
              </div>
            </div>
            <div className="col-md-6 text-center order-md-1">
              <video src="/midia/chatlove/chatlove.mp4" controls preload="none" muted loop playsInline className="project-video-ios" style={{ maxHeight: '80vh', width: '100%', borderRadius: '15px' }}></video>
              <div className="mobile-gallery-grid" style={{ alignItems: 'center' }}>
                {chatloveImages.map(src => (
                  <ClickableImg key={src} src={src} alt="ChatLove screenshot" className="img-fluid me-2" style={{ maxWidth: '30%' }} images={chatloveImages} />
                ))}
              </div>
            </div>
          </div>

          <div className="feminine-divider"></div>

          {/* KURUXU */}
          <div className="row my-5 align-items-center">
            <div className="col-md-6 feminine-section">
              <h2 className="feminine-title" id="kuruxu">KURUXU</h2>
              <h3 className="feminine-subtitle">AUGMENTED REALITY | EDTECH</h3>
              <p className="feminine-text">
                Kuruxu is an educational app that integrates Augmented Reality (AR) as a powerful tool for teaching indigenous astronomy to children. The project was designed to evoke the feeling of geolocated astronomical observation, making the user feel as if they are holding a "piece of the sky" in their hands.
              </p>
              <div className="my-3">
                <h3 className="feminine-subtitle">Technologies Used:</h3>
                <ul className="feminine-languages">
                  <li className="feminine-language-item"><i className="fas fa-vr-cardboard"></i> ARKit</li>
                  <li className="feminine-language-item"><i className="fas fa-cube"></i> SceneKit</li>
                  <li className="feminine-language-item"><i className="fab fa-swift"></i> SwiftUI</li>
                  <li className="feminine-language-item"><i className="fas fa-lightbulb"></i> TipKit</li>
                </ul>
              </div>
              <div className="my-5">
                <a href="https://testflight.apple.com/join/4RMejPqN" target="_blank" rel="noreferrer" className="feminine-button">TestFlight</a>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <video src="/midia/kuruxu/kuruxu.mp4" controls preload="none" muted loop playsInline className="project-video-ios" style={{ maxHeight: '80vh', width: '100%', borderRadius: '15px' }}></video>
              <div className="mobile-gallery-grid" style={{ alignItems: 'center' }}>
                {kuruxuImages.map(src => (
                  <ClickableImg key={src} src={src} alt="Kuruxu screenshot" className="img-fluid me-2" style={{ maxWidth: '30%' }} images={kuruxuImages} />
                ))}
              </div>
            </div>
          </div>

          <div className="feminine-divider"></div>

          {/* DI PIETRA */}
          <div className="row my-5">
            <div className="col-md-6 feminine-section">
              <h2 className="feminine-title" id="dipietra">SITE DI PIETRA ARMARINHOS</h2>
              <h3 className="feminine-subtitle">WEB DEVELOPMENT</h3>
              <p className="feminine-text">
                I developed the Di Pietra Armarinhos website, focused on wholesale sales, where customers can request quotes through an integrated form. Instead of making direct purchases, users select the desired items and submit their requests for evaluation. The platform is designed to present products clearly and accessibly, ensuring intuitive navigation.
              </p>
              <div className="my-3">
                <h3 className="feminine-subtitle">Technologies Used:</h3>
                <ul className="feminine-languages">
                  <li className="feminine-language-item"><i className="fab fa-html5"></i> HTML</li>
                  <li className="feminine-language-item"><i className="fab fa-css3-alt"></i> CSS</li>
                  <li className="feminine-language-item"><i className="fab fa-js"></i> JavaScript</li>
                  <li className="feminine-language-item"><i className="fab fa-php"></i> PHP</li>
                  <li className="feminine-language-item"><i className="fas fa-database"></i> MySQL</li>
                  <li className="feminine-language-item"><i className="fas fa-pencil-alt"></i> PhotoShop</li>
                </ul>
              </div>
              <div className="my-5">
                <a href="https://dipietraarmarinhos.com.br/" target="_blank" rel="noreferrer" className="feminine-button">Website</a>
              </div>
            </div>
            <div className="col-md-6 feminine-section">
              <video src="/midia/dipietra/dpietra.mp4" controls preload="none" style={{ maxHeight: '80vh', width: '100%', borderRadius: '15px' }}></video>
              <div className="project-gallery-grid">
                {dipietraImages.map(src => (
                  <ClickableImg key={src} src={src} alt="Di Pietra screenshot" images={dipietraImages} />
                ))}
              </div>
            </div>
          </div>

          <div className="feminine-divider"></div>

          {/* CAT CATCH */}
          <div className="row mt-5">
            <div className="col-md-6 feminine-section">
              <video src="/midia/catcatch/catcatch.mp4" controls preload="none" style={{ maxHeight: '85%', borderRadius: '15px' }}></video>
            </div>
            <div className="col-md-6 feminine-content">
              <h2 className="feminine-title" style={{ marginTop: '30px' }} id="catcatch">CAT CATCH</h2>
              <h3 className="feminine-subtitle">GAME DESIGN AND PROGRAMMING</h3>
              <p className="feminine-text">
                <span>"Cat Catch"</span> is a fun adventure where you take control of an agile and hungry cat! Dive into a colorful world filled with challenges, where your goal is to devour as many mice as possible while dodging treacherous poisonous potions that threaten your mission.
              </p>
              <div>
                <h3 className="feminine-subtitle">Technologies Used:</h3>
                <ul className="feminine-languages">
                  <li className="feminine-language-item"><i className="fab fa-python"></i> Python</li>
                  <li className="feminine-language-item"><i className="fas fa-desktop"></i> PyGame</li>
                  <li className="feminine-language-item"><i className="fas fa-pencil-alt"></i> ClipStudio Paint</li>
                </ul>
              </div>
              <div className="my-5">
                <a href="/midia/catcatch/catcatch.exe" className="feminine-button" download>Install Game</a>
                <a href="https://github.com/carlaferraz/Cat-Catch" target="_blank" rel="noreferrer" className="feminine-outline-button">GitHub</a>
              </div>
              <div className="mt-4 d-flex flex-wrap">
                {catcatchImages.map(src => (
                  <ClickableImg key={src} src={src} alt="Cat Catch screenshot" className="img-fluid me-2" style={{ maxWidth: '23%' }} images={catcatchImages} />
                ))}
              </div>
            </div>
          </div>

          <div className="feminine-divider"></div>

          {/* CASA DO ESCRITÓRIO */}
          <div className="container my-5">
            <div className="row mb-4 mt-4">
              <div className="col-md-6 mb-4 feminine-section">
                <video src="/midia/casadoescritorio/group.mp4" controls preload="none" className="w-100" style={{ maxHeight: '100%', borderRadius: '15px' }}></video>
                <div className="mt-4 d-flex flex-wrap">
                  {casaImages.map(src => (
                    <ClickableImg key={src} src={src} alt="Casa do Escritório screenshot" className="img-fluid me-2" style={{ maxWidth: '23%' }} images={casaImages} />
                  ))}
                </div>
              </div>
              <div className="col-md-6 feminine-content">
                <h2 className="feminine-title" style={{ marginTop: '30px' }} id="group">AUTOMATED EMAIL SYSTEM - CASA DO ESCRITÓRIO</h2>
                <h3 className="feminine-subtitle">PYTHON AUTOMATION</h3>
                <p>
                  I developed a Python-based application to automate email delivery, solving a critical system overload issue caused by mass messaging. The application utilizes an Excel database, allowing users to define the subject, message body, and attachments. Emails are sent in batches of 10 through integration with Microsoft Outlook.
                  <br />
                  <small className="text-muted">Note: To ensure privacy and comply with company guidelines, certain details have been modified, and all email addresses used are fictitious.</small>
                </p>
                <div className="my-5">
                  <h3 className="feminine-subtitle">Technologies Used:</h3>
                  <ul className="feminine-languages">
                    <li className="feminine-language-item"><i className="fab fa-python"></i> Python</li>
                    <li className="feminine-language-item"><i className="fas fa-desktop"></i> Tkinter</li>
                    <li className="feminine-language-item"><i className="fas fa-chart-bar"></i> Microsoft Excel</li>
                  </ul>
                </div>
                <div className="my-5">
                  <div className="d-flex flex-wrap">
                    <a href="/midia/casadoescritorio/email_app.exe" className="feminine-button" download>Install</a>
                    <a href="https://github.com/carlaferraz/Automacao-Email" target="_blank" rel="noreferrer" className="feminine-outline-button">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feminine-divider"></div>

          {/* BTK SOLUTIONS */}
          <div className="container my-5">
            <div className="row mb-4 mt-4">
              <div className="col-md-6 mb-4 feminine-section">
                <video src="/midia/btksolutions/exe.mp4" controls preload="none" className="w-100" style={{ maxHeight: '100%', borderRadius: '15px' }}></video>
                <div className="mt-4 d-flex flex-wrap">
                  {btkImages.map(src => (
                    <ClickableImg key={src} src={src} alt="BTK Solutions screenshot" className="img-fluid me-2" style={{ maxWidth: '23%' }} images={btkImages} />
                  ))}
                </div>
              </div>
              <div className="col-md-6 feminine-content">
                <h2 className="feminine-title" style={{ marginTop: '30px' }} id="btk">AUTOMATED PDF QUOTE GENERATION - BTK SOLUTIONS</h2>
                <h3 className="feminine-subtitle">PYTHON AUTOMATION</h3>
                <p>
                  I developed a Python application to automatically generate quote PDFs formatted according to the company's specific templates. The application processes data from an Excel spreadsheet, allowing users to input information such as product lists, pricing, and client details. With a single click, the system generates ready-to-send PDF documents.
                </p>
                <small className="text-muted">Note: To ensure privacy and comply with company guidelines, certain details have been modified, and all data used in this demonstration is fictitious.</small>
                <div className="my-5">
                  <h3 className="feminine-subtitle">Technologies Used:</h3>
                  <ul className="feminine-languages">
                    <li className="feminine-language-item"><i className="fab fa-python"></i> Python</li>
                    <li className="feminine-language-item"><i className="fas fa-desktop"></i> Tkinter</li>
                    <li className="feminine-language-item"><i className="fas fa-file-pdf"></i> FPDF</li>
                    <li className="feminine-language-item"><i className="fas fa-chart-bar"></i> Microsoft Excel</li>
                  </ul>
                </div>
                <div className="my-5">
                  <a href="https://github.com/carlaferraz/Automacao-Orcamentos-PDF" target="_blank" rel="noreferrer" className="feminine-outline-button">GitHub</a>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  )
}
