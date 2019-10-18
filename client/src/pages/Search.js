import React, { Component } from "react";
import Jumbo from "../components/Jumbo";
import BookSearch from "../components/BookSearch";
import Results from "../components/Results";

class Search extends Component {
    render() {
        return (
            <div>
                <Jumbo />
                <Results />
            </div>
        );
    }
}

export default Search;