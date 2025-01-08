import React from "react";
import { Modal } from "./Modal"
import { ImageCard } from "./Image";

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
            <div className="row container">
               <ImageCard/>
               <ImageCard/>
               <ImageCard/>
               
            </div>
        </Modal>
    )
}