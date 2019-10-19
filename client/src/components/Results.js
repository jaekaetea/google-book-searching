import React, { Component } from "react";
import BookSearch from "./BookSearch";
import API from "../utils/API";
import ResultList from "./ResultList";

class Results extends Component {
    state = {
        results: [],
        search: ""
    };

    componentDidMount() {
        console.log("It's mounted");
    };

    searchBooks = query => {
        API.search(query)
            .then(res => {
                this.setState({ results: res.data.items });
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };

    saveBook = book => {
        console.log(book);
        const bookData = {
            id: book.id,
            title: book.title,
            author: book.author,
            description: book.description,
            previewLink: book.previewLink,
            imgLink: book.imgLink
        };
        API.saveBook({ bookData })
            .then(res => alert('"' + res.data.title + '"' + " has been saved."))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <BookSearch
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                {this.state.results.map(book => {
                    return (
                    <ResultList 
                        key={book.id}
                        id={book.id}
                        saveBook={this.saveBook}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Author Unavailable."}
                        description={book.volumeInfo.description ? book.volumeInfo.description : ""}
                        previewLink={book.volumeInfo.previewLink}
                        imgLink={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/130x175"} 
                    />
                )})}
            </div>
        )
    };
};

export default Results;