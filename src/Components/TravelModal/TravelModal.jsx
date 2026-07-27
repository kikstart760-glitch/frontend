import React from 'react'
import '../TravelModal/TravelModal.css'
import { Modal } from 'react-bootstrap'
import { IoClose } from "react-icons/io5";

function TravelModal({ show, handleClose, destination }) {
    if (!destination) return null;
  return (
      <>
          <Modal
              show={show}
              onHide={handleClose}
              centered
              size="xl"
              backdrop="static"
              className="travel-modal"
          >
              <button
                  className="modal-close-btn"
                  onClick={handleClose}
              >
                  <IoClose />
              </button>

              <Modal.Body className="p-0">

                  <img
                      src={destination.img}
                      alt={destination.title}
                      className="travel-modal-image"
                  />

                  <div className="travel-modal-content">

                      <h2>{destination.title}</h2>

                      <p>{destination.desc}</p>

                  </div>

              </Modal.Body>
          </Modal>
      </>
  )
}

export default TravelModal
