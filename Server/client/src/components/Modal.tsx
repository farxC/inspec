import React from 'react'

interface ModalProps {
    isOpen: boolean;
    hasCloseBtn: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

export const Modal = ({
    isOpen,
    hasCloseBtn,
    onClose,
    children,
    title
}: ModalProps) => {

    const modalRef = React.useRef<HTMLDialogElement | null>(null);

    React.useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isOpen])

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }

    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        const modalElement = modalRef.current;
        if (event.key === "Escape") {
            handleCloseModal();
        }
    }


    return (
        <dialog className="border rounded" ref={modalRef} onKeyDown={handleKeyDown}>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className="modal-header">
                        <h5 className='modal-title'>{title}</h5>
                    </div>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
            <div className='d-flex justify-content-end'>
                <button type='button' className='btn btn-danger d-flex ' onClick={handleCloseModal} >
                    Fechar
                </button>
            </div>
        </dialog>

    )
}