import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        //this.searchBooks("Harry Potter");
    };

    searchBooks = query => {
        API.search(query)
            .then(res => {
                //this.setState({ results: res.data });
                console.log(res);
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
        API.saveBook({
            id: book.id,
            title: book.title,
            author: book.author,
            description: book.description,
            previewLink: book.previewLink,
            imgLink: book.imgLink
        })
            .then(res => console.log(res + "yasss"))
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
                        title={book.volumeInfo.title || ""}
                        author={book.volumeInfo.authors || ""}
                        description={book.volumeInfo.description || ""}
                        previewLink={book.volumeInfo.previewLink || ""}
                        imgLink={book.volumeInfo.imageLinks.smallThumbnail != undefined ? book.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/150x200"} 
                    />
                )})}
            </div>
        )
    };
};

export default Results;