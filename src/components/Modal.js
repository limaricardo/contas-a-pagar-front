import React, { useRef } from "react";
import "../stylesCSS/Modal.css"

const Modal = ({ children, showModal, setShowModal }) => {

    const modalRef = useRef()

    const closeModal = (e) => {
        if(e.target === modalRef.current){
            setShowModal(false);
        }
    }

    return (
        showModal &&
        <div className="Modal" ref={modalRef} onClick={closeModal}>
            <div className="Modal_container">
                {children}
            </div>
        </div>
    )
}

export default Modal;