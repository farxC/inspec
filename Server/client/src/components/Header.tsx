import React from "react"



export const Header = () => {
    return(
        <header>
            <section className="collapse bg-dark" id="navbarHeader">
                <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">Sobre a aplicação</h4>
                        <p className="text-muted">Aplicação Inspec criada como ferramenta de análise e registro de Ordens de Serviço</p>
                    </div>
                </div>
                </div>
            </section>
            <section className="navbar navbar-dark bg-dark box-shadow">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <h1 className="text-white">Revoltis</h1>
                    </a>
                    
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </section>
    </header>
    )
}