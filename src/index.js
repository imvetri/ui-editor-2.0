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
import Properties from "./Properties";

//Utilities
import Draggable from "./Utilities/Draggable";

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

    allowDrop(ev){
        ev.preventDefault();
    }

    render() {

        return (
            <div  onDragOver={this.allowDrop.bind(this)}>
                <Draggable>
                    <Type onChanged={this.onTypesChanged.bind(this)}/>
                </Draggable>
                <Draggable>
                    <Attributes onChanged={this.onAttributesChanged.bind(this)}/>
                </Draggable>
                <Draggable>
                    <Events onChanged={this.onEventsChanged.bind(this)}/>
                </Draggable>
                <Draggable>
                    <Content onChanged={this.onContentChanged.bind(this)}/>
                </Draggable>
                <Draggable>
                    <Properties/>
                </Draggable>
            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));