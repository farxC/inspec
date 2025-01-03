import React from "react"



export const SearchItem = () => {

    return (
        <section className="d-flex justify-content-center">
            <div className='col-sm-2'>
                <div className='input-group mb-1 mt-4'>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id='osNumber'>Nº</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Insira o número da O.S" aria-label="Insira o número da O.S" aria-describedby='osNumber' />
                    <div className='input-group-append'>
                        <button className="btn btn-outline-secondary" type="submit">Buscar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}