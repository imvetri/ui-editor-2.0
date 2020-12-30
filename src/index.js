// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

// Components
import Type from "./Type";


class Index extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div> hello<Type/>
            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));