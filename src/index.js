// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

// Components
import Type from "./Components/Type";
import Attributes from "./Components/Attributes";
import Events from "./Components/Events";
import Content from "./Components/Content";
import Properties from "./Components/Properties";

//Utilities
import Draggable from "./Components/Utilities/Draggable";

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
                <Draggable type="Type">
                    <Type onChanged={this.onTypesChanged.bind(this)}/>
                </Draggable>
                <Draggable type="Attributes">
                    <Attributes onChanged={this.onAttributesChanged.bind(this)}/>
                </Draggable>
                <Draggable type="Events">
                    <Events onChanged={this.onEventsChanged.bind(this)}/>
                </Draggable>
                <Draggable type="Content">
                    <Content onChanged={this.onContentChanged.bind(this)}/>
                </Draggable>
                <Draggable type="Properties">
                    <Properties/>
                </Draggable>
            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));