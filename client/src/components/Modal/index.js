import React, { useState } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, activator }) => {
  const [show, setShow] = useState(false)

  const content = show && (
    <div className="overlay">
      <div className="modal">
        <button
          className="modal-close"
          type="button"
          onClick={() => setShow(false)}
        >
          X
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )

  return (
    <>
      {activator({ setShow })}
      {createPortal(content, document.body)}
    </>
  )
}

export default Modal
