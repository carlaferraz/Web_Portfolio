import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ModalProvider } from './context/ModalContext'
import Projects from './pages/Projects'
import Design from './pages/Design'
import AboutMe from './pages/AboutMe'
import ImageModal from './components/ImageModal'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/design" element={<Design />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
        <ImageModal />
        <BackToTop />
      </ModalProvider>
    </BrowserRouter>
  )
}
