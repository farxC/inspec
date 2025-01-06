import React from "react";
import { Modal } from "./Modal"

interface ImagesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ImagesModal = ({
    isOpen,
    onClose
}: ImagesModalProps) => {


    return (
        <Modal title="Imagens" hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
            <div className="modal-content">
                <p>TO DO...</p>
            </div>
        </Modal>
    )
}