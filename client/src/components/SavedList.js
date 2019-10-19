import React from "react";

function SavedList(props) {
    return (
        <div className="card">
            <div className="card-body" key={props.id}>
                <button onClick={() => props.deleteBook(props.id)} type="button" className="btn btn-outline-success" id={props.id}>Delete</button>
                <button type="button" className="btn btn-outline-primary">
                    <a href={props.previewLink} target="_blank">View</a>
                </button>
                <p>{props.title}</p>
                <p>{props.author}</p>
                <img src={props.imgLink} />
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default SavedList;