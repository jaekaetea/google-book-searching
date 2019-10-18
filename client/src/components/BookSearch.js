import React from "react";

function BookSearch(props) {
    return (
        <div className="col-sm-11" id="bookSearch">
            Book Search
            <br/>
            <br/>
            <form>
                <div className="form-group">
                    <small id="bookSearch" className="form-text text-muted">Book</small>
                    <input onChange={props.handleInputChange} name="search" value={props.search} type="text" className="form-control" id="bookSearch" aria-describedby="bookSearch" placeholder="Search for books" />
                    <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
                    <small id="bookSearch" className="form-text text-muted">May you find an adventure for your soul.</small>
                </div>
            </form>
        </div>
    );
}

export default BookSearch;