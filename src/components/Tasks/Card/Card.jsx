import React from 'react'

function Card() {
    return (
    <div className="card mx-3 my-3" style={{width: "18rem"}}>
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary" style={{fontSize: "0.9em"}}>Mark as Completed</button>
        </div>
    </div>
    )
}

export default Card
