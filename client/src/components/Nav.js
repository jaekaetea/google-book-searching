import React from "react";

function NavTabs(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/"
                            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
                            Saved
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavTabs;