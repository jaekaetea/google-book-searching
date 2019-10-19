import React, { Component } from "react";
import Jumbo from "../components/Jumbo";
import Save from "../components/Save";

class Saved extends Component {
    render() {
        return (
            <div>
                <Jumbo />
                <Save />
            </div>
        );
    }
}

export default Saved;