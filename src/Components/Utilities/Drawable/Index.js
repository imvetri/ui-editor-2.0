import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Component

class Drawable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this.props.children)
    }

    /**
     * Draw - Draw rectangles, Select(ctrl+click), Resize, Move
     * undo/redo - Travel history
     * 
     */

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Drawable;