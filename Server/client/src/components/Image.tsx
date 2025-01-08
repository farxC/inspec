import React from "react"

export const ImageCard = () => {
    return (
        <div className="col-sm-4">
            <div className="card">
                <img className="card-img-top" src="thumbnail.webp" alt="thumb" />
                <h6 className="card-title text-center text-muted">Nome da label</h6>
            </div>
        </div>
    )
}