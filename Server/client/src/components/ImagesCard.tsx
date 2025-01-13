import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import React from 'react'
import { ImagesModal } from './ImagesModal';
import { Report } from '../@types/reportData';

interface ImagesCardProps extends Report {
    onClick?: () => void,
}


export function ImagesCard({
    onClick,
    reportDate,
    imagePathFailureEvidence,
    imagePathIdentifier,
    imagePathOverView,
    id
}: ImagesCardProps) {
    const [isOpen, setOpen] = React.useState<boolean>(false);

    const toggleModal = () => {
        setOpen(!isOpen)

    }

    return (
        <div className="col-md-4 p-2 g-col-5">
            <div className="card mb-4 box-shadow">
                <button className='btn btn-outline light' onClick={toggleModal}>
                    <img className="card-img-top" src="thumbnail.webp" alt="" />
                </button>
                <ImagesModal isOpen={isOpen} onClose={toggleModal} />
                <div className="card-body">
                    <p className="card-text"> Labels, data e celular quem enviou</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" onClick={toggleModal} className="btn btn-sm btn-outline-secondary">Visualizar Imagens</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Baixar Imagens</button>
                        </div>
                        
                            <ul className='list-group list-group-flush w-25'>
                                <li className='list-group-item'>
                                    <small className="text-muted">Ordem de serviço:</small>
                                    <p className='font-weight-bold' style={{fontSize: 11}}>{id}</p>
                                </li>
                                <li className='list-group-item'>
                                    <small className="text-muted">Enviado em:</small>
                                    <p className='font-weight-bold' style={{fontSize: 11}}>{reportDate}</p>
                                </li>

                            </ul>
                      

                    </div>
                </div>
            </div>
        </div>

    )

}