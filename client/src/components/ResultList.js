import React from "react";

function ResultList(props) {
    return (
        <div className="card">
            <div className="card-body" key={props.id}>
                <button onClick={() => props.saveBook(props)} type="button" className="btn btn-outline-success" id={props.id}>Save</button>
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

export default ResultList;