import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Utilities
import {get,set} from "../../../Utilities/Storage";

// Component

class Draggable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style:{
                position:"",
                left: get(this.props.type) && get(this.props.type).left || "",
                top: get(this.props.type) && get(this.props.type).top || "",
            }
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