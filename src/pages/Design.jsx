import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useModal } from '../context/ModalContext'
import '../styles/design.css'

function ClickableImg({ src, alt, className, images }) {
  const { openModal } = useModal()
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={() => openModal(images, src)}
    />
  )
}

const meandrosImages = [
  '/midia/design/meandros/me1.png',
  '/midia/design/meandros/me2.png',
  '/midia/design/meandros/me3.png',
  '/midia/design/meandros/me4.png',
  '/midia/design/meandros/me5.png',
  '/midia/design/meandros/me6.png',
  '/midia/design/meandros/me7.png',
  '/midia/design/meandros/me8.png',
  '/midia/design/meandros/me9.png',
  '/midia/design/meandros/me10.png',
  '/midia/design/meandros/me11.png',
  '/midia/design/meandros/maqme1.png',
  '/midia/design/meandros/maqme2.png',
]

const croquiImages = [
  '/midia/design/croqui/croqui1.png',
  '/midia/design/croqui/croqui2.png',
  '/midia/design/croqui/croqui3.png',
  '/midia/design/croqui/croqui4.png',
]

const maquetesImages = [
  '/midia/design/maquetes/maqmaq1.png',
  '/midia/design/maquetes/maqmaq2.png',
  '/midia/design/maquetes/maqmaq3.png',
  '/midia/design/maquetes/maqmaq4.png',
  '/midia/design/maquetes/maqmaq5.png',
  '/midia/design/maquetes/maqmaq6.png',
  '/midia/design/maquetes/maqmaq7.png',
]

const renderImages = [
  '/midia/design/render/render1.png',
  '/midia/design/render/render2.png',
  '/midia/design/render/render3.png',
  '/midia/design/render/render4.png',
]

const pessoaisImages = [
  '/midia/design/pessoais/des1.png',
  '/midia/design/pessoais/des2.png',
  '/midia/design/pessoais/des3.png',
  '/midia/design/pessoais/des4.png',
  '/midia/design/pessoais/des5.png',
  '/midia/design/pessoais/des6.png',
  '/midia/design/pessoais/des7.png',
  '/midia/design/pessoais/des8.png',
  '/midia/design/pessoais/des9.png',
  '/midia/design/pessoais/des10.png',
]

export default function Design() {
  return (
    <>
      <Header />
      <main className="container my-5">
        <Nav />

        <img src="/midia/design/banner.png" alt="Portfolio Banner" className="full-width-image" />

        <div className="row my-5">
          <div className="col-12 col-md-6 feminine-section">
            <h2 className="feminine-title">INDEX</h2>
            <div className="index-container">
              <ol className="index-list">
                <a href="#meandros"><li>Meandros Residence</li></a>
                <a href="#croquis"><li>Expression Sketches</li></a>
                <a href="#maquetes"><li>Scale Models</li></a>
                <a href="#renders"><li>Renders</li></a>
                <a href="#pessoais"><li>Personal Works</li></a>
              </ol>
            </div>
          </div>
        </div>

        <div className="feminine-divider"></div>

        {/* MEANDROS */}
        <div className="container my-5">
          <div className="row">
            <div className="col-12 feminine-section">
              <h2 className="feminine-title" id="meandros">Meandros Residence</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 feminine-section">
              <ClickableImg src="/midia/design/meandros/me1.png" alt="Aerial Perspective" className="img-fluid" images={meandrosImages} />
              <p>Aerial Perspective</p>
              <div className="row mt-5">
                <div className="col-12 col-md-4 mb-4">
                  <ClickableImg src="/midia/design/meandros/me2.png" alt="" className="img-fluid" images={meandrosImages} />
                  <p>Aerial Perspective</p>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <ClickableImg src="/midia/design/meandros/me3.png" alt="" className="img-fluid" images={meandrosImages} />
                  <p>Living Room Perspective</p>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <ClickableImg src="/midia/design/meandros/me4.png" alt="" className="img-fluid" images={meandrosImages} />
                  <p>Piano Room Perspective</p>
                </div>
              </div>
            </div>
            <div>
              <p><span>Use: </span>Residential</p>
              <p><span>Location: </span>Dr. Aluízio França St.</p>
              <p><span>Area: </span>500 m²</p>
              <p>
                Meandros Residence, strategically located in front of the iconic Barigui Park, draws inspiration from the beautiful curves of the park's central lake.
                <br /><br />
                Spanning an impressive 500 m², Meandros offers comfort, harmony, and natural beauty, perfectly blending sophistication with nature. Its curved design, generous spaces, and attention to detail make it an exceptional choice for a family of four seeking elegant living within a stunning natural setting.
                <br /><br />
                With a privileged location and high-standard amenities, this residence serves as a natural refuge amidst urban chaos. Its organic forms successfully integrate the exterior nature with the internal environment, creating an immersion of the building within the surrounding greenery.
              </p>
            </div>
          </div>

          <hr />
          <div><h3>Sketches</h3></div>
          <div className="row">
            <div className="col-12 col-md-4 feminine-section mb-4">
              <ClickableImg src="/midia/design/meandros/me6.png" alt="" className="img-fluid" images={meandrosImages} />
              <p>Second Floor Plan 1:100</p>
              <ClickableImg src="/midia/design/meandros/me7.png" alt="" className="img-fluid mt-3" images={meandrosImages} />
              <p>Aerial View 1:200</p>
            </div>
            <div className="col-12 col-md-8 feminine-section">
              <ClickableImg src="/midia/design/meandros/me5.png" alt="" className="img-fluid" images={meandrosImages} />
              <p>First Floor Plan 1:100</p>
            </div>
          </div>
          <div className="row">
            {[
              { src: '/midia/design/meandros/me8.png', label: 'Rear Elevation 1:75' },
              { src: '/midia/design/meandros/me10.png', label: 'Left Elevation 1:75' },
              { src: '/midia/design/meandros/me9.png', label: 'Right Elevation 1:75' },
              { src: '/midia/design/meandros/me11.png', label: 'Front Elevation 1:75' },
            ].map(({ src, label }) => (
              <div key={src} className="col-6 col-md-3 feminine-section mb-4">
                <ClickableImg src={src} alt="" className="img-fluid" images={meandrosImages} />
                <p>{label}</p>
              </div>
            ))}
          </div>

          <hr />
          <div><h3>Scale Models</h3></div>
          <div className="row">
            <div className="col-12 col-md-6 feminine-section mb-4">
              <ClickableImg src="/midia/design/meandros/maqme1.png" alt="" className="img-fluid mb-4" images={meandrosImages} />
              <p>Model 1:250</p>
            </div>
            <div className="col-12 col-md-6 feminine-section mb-4">
              <ClickableImg src="/midia/design/meandros/maqme2.png" alt="" className="img-fluid mb-4" images={meandrosImages} />
              <p>Model 1:250</p>
            </div>
          </div>
        </div>

        <div className="feminine-divider"></div>

        {/* CROQUIS */}
        <div className="container my-5">
          <div className="row">
            <div className="col-12 feminine-section">
              <h2 className="feminine-title" id="croquis">Expression Sketches</h2>
            </div>
          </div>
          <div className="row">
            {[
              { src: '/midia/design/croqui/croqui1.png', label: 'MASP (São Paulo Museum of Art)' },
              { src: '/midia/design/croqui/croqui2.png', label: 'Largo da Ordem (Historical Center)' },
              { src: '/midia/design/croqui/croqui3.png', label: 'Japan Square' },
              { src: '/midia/design/croqui/croqui4.png', label: 'Paço da Liberdade' },
            ].map(({ src, label }) => (
              <div key={src} className="col-12 col-md-6 feminine-section mb-4">
                <ClickableImg src={src} alt="" className="img-fluid mb-4" images={croquiImages} />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="feminine-divider"></div>

        {/* MAQUETES */}
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-md-6 feminine-section mb-4">
              <h2 className="feminine-title" id="maquetes">Scale Models</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 feminine-section mb-4">
              <ClickableImg src="/midia/design/maquetes/maqmaq1.png" alt="" className="img-fluid" images={maquetesImages} />
              <p>Alvorada Palace 1:200</p>
              <ClickableImg src="/midia/design/maquetes/maqmaq2.png" alt="" className="img-fluid mb-2" images={maquetesImages} />
              <p>Alvorada Palace 1:200</p>
            </div>
            <div className="col-12 col-md-6 feminine-section mb-4">
              <ClickableImg src="/midia/design/maquetes/maqmaq3.png" alt="" className="img-fluid mb-5" images={maquetesImages} />
              <p>Feudal House 1:200</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 feminine-section mb-4">
              <ClickableImg src="/midia/design/maquetes/maqmaq4.png" alt="" className="img-fluid" images={maquetesImages} />
              <p>Maison Carrée Temple 1:200</p>
            </div>
            <div className="col-12 col-md-6 feminine-section mb-4">
              <ClickableImg src="/midia/design/maquetes/maqmaq7.png" alt="" className="img-fluid mb-2" images={maquetesImages} />
              <p>Temple of Hephaestus 1:200</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ClickableImg src="/midia/design/maquetes/maqmaq6.png" alt="" className="img-fluid mb-2" images={maquetesImages} />
              <p>Tensegrity Table</p>
            </div>
            <div className="col-6">
              <ClickableImg src="/midia/design/maquetes/maqmaq5.png" alt="" className="img-fluid mb-2" images={maquetesImages} />
              <p>Tensegrity Table</p>
            </div>
          </div>
        </div>

        <div className="feminine-divider"></div>

        {/* RENDERS */}
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-md-6 feminine-section mb-4">
              <h2 className="feminine-title" id="renders">Renders</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 feminine-section mb-4">
              <ClickableImg src="/midia/design/render/render1.png" alt="" className="img-fluid mb-2" images={renderImages} />
              <p>A Verdadeira Chinesa Restaurant Project</p>
              <ClickableImg src="/midia/design/render/render2.png" alt="" className="img-fluid mb-2" images={renderImages} />
              <p>A Verdadeira Chinesa Restaurant Project</p>
            </div>
            <div className="col-12 col-md-6 feminine-section mb-4">
              <ClickableImg src="/midia/design/render/render3.png" alt="" className="img-fluid mb-2" images={renderImages} />
              <p>A Verdadeira Chinesa Restaurant Project</p>
              <ClickableImg src="/midia/design/render/render4.png" alt="" className="img-fluid mb-2" images={renderImages} />
              <p>A Verdadeira Chinesa Restaurant Project</p>
            </div>
          </div>
        </div>

        <div className="feminine-divider"></div>

        {/* PESSOAIS */}
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-md-6 feminine-section mb-4">
              <h2 className="feminine-title" id="pessoais">Personal Works</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 feminine-section mb-4">
              <ClickableImg src="/midia/design/pessoais/des5.png" alt="" className="img-fluid mb-4" images={pessoaisImages} />
              <p>Design: The Death and Life of Great American Cities - Jane Jacobs</p>
            </div>
            <div className="col-12 col-md-6 feminine-section mb-4">
              <ClickableImg src="/midia/design/pessoais/des10.png" alt="" className="img-fluid mb-4" images={pessoaisImages} />
              <p>Observational Painting: Passeio Público</p>
            </div>
          </div>
          <hr />
          <div className="row">
            {[
              { src: '/midia/design/pessoais/des1.png', label: 'Journal Design: Beijing in the Chinese Revolution' },
              { src: '/midia/design/pessoais/des2.png', label: 'Journal Design: Beijing in the Chinese Revolution' },
              { src: '/midia/design/pessoais/des3.png', label: 'Journal Design: Beijing in the Chinese Revolution' },
              { src: '/midia/design/pessoais/des4.png', label: 'Journal Design: Beijing in the Chinese Revolution' },
            ].map(({ src, label }, i) => (
              <div key={src} className={`col-12 col-md-6 feminine-section mb-4`}>
                <ClickableImg src={src} alt="" className="img-fluid mb-4" images={pessoaisImages} />
                <p>{label}</p>
              </div>
            ))}
          </div>
          <hr />
          <div className="row">
            {[
              { src: '/midia/design/pessoais/des6.png', label: 'Design: Urbanist Ideas' },
              { src: '/midia/design/pessoais/des7.png', label: 'Design: Urbanist Ideas' },
              { src: '/midia/design/pessoais/des8.png', label: 'Design: Urbanist Ideas' },
              { src: '/midia/design/pessoais/des9.png', label: 'Design: Urbanist Ideas' },
            ].map(({ src, label }) => (
              <div key={src} className="col-12 col-md-6 feminine-section mb-4">
                <ClickableImg src={src} alt="" className="img-fluid mb-4" images={pessoaisImages} />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
