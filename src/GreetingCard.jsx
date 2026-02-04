import { useState } from 'react'
import './GreetingCard.css'

export default function GreetingCard({ pages }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [flippingForwardFrom, setFlippingForwardFrom] = useState(null)
  const [flippingBackFrom, setFlippingBackFrom] = useState(null)
  const totalPages = pages.length
  const isAnimating = flippingForwardFrom !== null || flippingBackFrom !== null

  const goNext = () => {
    if (currentPage < totalPages - 1 && !isAnimating) setFlippingForwardFrom(currentPage)
  }

  const goPrev = (e) => {
    e.stopPropagation()
    if (currentPage > 0 && !isAnimating) setFlippingBackFrom(currentPage)
  }

  const handleTransitionEnd = (e, index) => {
    if (e.propertyName !== 'transform') return
    if (index === flippingForwardFrom) {
      setCurrentPage(flippingForwardFrom + 1)
      setFlippingForwardFrom(null)
    }
    if (flippingBackFrom !== null && index === flippingBackFrom - 1) {
      setCurrentPage(flippingBackFrom - 1)
      setFlippingBackFrom(null)
    }
  }

  const isFlipped = (index) => {
    if (flippingForwardFrom !== null && index === flippingForwardFrom) return true
    if (flippingBackFrom !== null && index === flippingBackFrom - 1) return false
    if (index < currentPage) return true
    return false
  }

  const getZIndex = (index) => {
    if (flippingBackFrom !== null && index === flippingBackFrom - 1) return totalPages + 1
    if (flippingBackFrom !== null && index === flippingBackFrom) return 0
    if (index === currentPage || index === flippingForwardFrom) return totalPages + 1
    if (index < currentPage) return 0
    return totalPages - index
  }

  return (
    <div className="book-container">
      <div className="book" style={{ perspective: '1200px' }}>
        {pages.map((page, index) => (
          <div
            key={index}
            className={`page ${isFlipped(index) ? 'flipped' : ''}`}
            style={{ zIndex: getZIndex(index) }}
            onClick={index === currentPage && currentPage < totalPages - 1 && !isAnimating ? goNext : undefined}
            onTransitionEnd={(e) => handleTransitionEnd(e, index)}
          >
            <div className="page-inner">
              <div className="page-front">{page.content}</div>
              <div className="page-back" />
            </div>
          </div>
        ))}
      </div>
      <div className="book-controls">
        {currentPage > 0 && (
          <button type="button" className="btn-prev" onClick={goPrev}>
            上一页
          </button>
        )}
        <span className="page-indicator">
          {currentPage + 1} / {totalPages}
        </span>
        {currentPage < totalPages - 1 && (
          <button type="button" className="btn-next" onClick={goNext}>
            下一页
          </button>
        )}
      </div>
    </div>
  )
}
