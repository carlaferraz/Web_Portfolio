import { useEffect } from 'react'
import { useModal } from '../context/ModalContext'

export default function ImageModal() {
  const { isOpen, images, currentIndex, closeModal, changeImage } = useModal()

  useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return
      if (e.key === 'ArrowRight') changeImage(1)
      if (e.key === 'ArrowLeft') changeImage(-1)
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, changeImage, closeModal])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className="modal-backdrop fade show" onClick={closeModal} />
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close" />
            </div>
            <div className="modal-body text-center">
              <img
                src={images[currentIndex]}
                alt=""
                style={{ maxHeight: '80vh', width: 'auto', display: 'block', margin: '0 auto', objectFit: 'contain' }}
              />
              {images.length > 1 && (
                <div className="d-flex justify-content-between mt-3">
                  <button className="btn btn-secondary" onClick={() => changeImage(-1)}>&#10094; Previous</button>
                  <button className="btn btn-secondary" onClick={() => changeImage(1)}>Next &#10095;</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
