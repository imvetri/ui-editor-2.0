// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

// Components
import Type from "./Type";
import Attributes from "./Attributes";


class Index extends Component {
    constructor(props) {
        super(props);
    }

    onTypesChanged(types, selected){
        console.log(types, selected)
    }

    onAttributesChanged(attributes){
        console.log(attributes)
    }

    render() {

        return (
            <div>
                <Type onChanged={this.onTypesChanged.bind(this)}/>
                <Attributes onChanged={this.onAttributesChanged.bind(this)}/>
            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));