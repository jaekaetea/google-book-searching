import React, { Component } from "react";
import API from "../utils/API";
import SavedList from "./SavedList";

class Results extends Component {
    state = {
        saved: [],
        search: ""
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                //console.log(res);
                this.setState({ saved: res.data });
            })
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                {this.state.saved.map(book => {
                    return (
                    <SavedList 
                        key={book.id}
                        id={book._id}
                        deleteBook={this.deleteBook}
                        title={book.title || ""}
                        author={book.author}
                        description={book.description}
                        previewLink={book.previewLink}
                        imgLink={book.imgLink || "https://via.placeholder.com/150x200"} 
                    />
                )})}
            </div>
        )
    };
};

export default Results;