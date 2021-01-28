// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

// Components
import Type from "./Type";
import Attributes from "./Attributes";
import Events from "./Events";
import Content from "./Content";


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
    onEventsChanged(events){
        console.log(events)
    }
    onContentChanged(content){
        console.log(content)
    }

    render() {

        return (
            <div>
                <Type onChanged={this.onTypesChanged.bind(this)}/>
                <Attributes onChanged={this.onAttributesChanged.bind(this)}/>
                <Events onChanged={this.onEventsChanged.bind(this)}/>
                <Content onChanged={this.onContentChanged.bind(this)}/>
            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));