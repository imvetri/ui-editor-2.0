import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Utilities
import {get,set} from "../../../Utilities/Storage";

// Component

class Draggable extends Component {
    constructor(props) {
        super(props);
        let style = get(this.props.type)  || {};
        this.state = {
            style: style
        };
    }


    endDrag(ev){
        let style = {
            position:"absolute",
            left: ev.clientX ,
            top: ev.clientY
        }
        this.setState({
            style : style
        })

        set(this.props.type, style)
    }


    render() {
        return (
            <div draggable="true" className={this.state.dragPointer}
            onDragEnd={this.endDrag.bind(this)}
            style={this.state.style}>
                {this.props.children}
            </div>
        );
    }
}

export default Draggable;