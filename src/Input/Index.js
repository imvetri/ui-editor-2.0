import React, { Component } from 'react';

// Styles.

import "./Style.css";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:this.props.value
        };
        
    }

    changed(e){
        this.setState({value:e.currentTarget.value})
        }

    render() {
        return (
            <input value={this.state.value} onChange={this.changed.bind(this)}/>
        );
    }
}

export default Input;
