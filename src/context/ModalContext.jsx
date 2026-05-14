import { createContext, useContext, useState, useCallback } from 'react'

const ModalContext = createContext(null)

export function ModalProvider({ children }) {
  const [state, setState] = useState({ images: [], currentIndex: 0, isOpen: false })

  const openModal = useCallback((imageList, src) => {
    const idx = imageList.indexOf(src)
    setState({ images: imageList, currentIndex: idx >= 0 ? idx : 0, isOpen: true })
  }, [])

  const closeModal = useCallback(() => {
    setState(s => ({ ...s, isOpen: false }))
  }, [])

  const changeImage = useCallback((direction) => {
    setState(s => {
      const len = s.images.length
      const next = (s.currentIndex + direction + len) % len
      return { ...s, currentIndex: next }
    })
  }, [])

  return (
    <ModalContext.Provider value={{ ...state, openModal, closeModal, changeImage }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
