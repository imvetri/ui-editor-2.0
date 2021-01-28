import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Component

class Draggable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dragPointer: "showDragable"
         };
    }

    startDrag(){
        console.log("Dragged")
    }

    endDrag(ev){
        console.log("DragEnd")
        this.setState({
            style : {
                position:"absolute",
                left: ev.clientX ,
                top: ev.clientY
            }
        })
    }


    render() {
        return (
            <div draggable="true" className={this.state.dragPointer}
            onDragStart={this.startDrag.bind(this)}
            onDragEnd={this.endDrag.bind(this)}
            style={this.state.style}>
                {this.props.children}
            </div>
        );
    }
}

export default Draggable;