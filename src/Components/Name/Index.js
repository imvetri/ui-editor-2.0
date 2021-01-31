import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Component

class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    updateChanges(e){
        this.setState({
            name: e.currentTarget.value
        })
        this.onChange(e);
    }

    onChange(e){
        if(this.props.onChange){
            this.props.onChange(this.state, e.currentTarget.value)
        }
    }

    render() {
        return (
            <div className="panel">
                <header>Name</header>
                <div className="list">
                    <textarea value={this.state.name} 
                        onChange={this.updateChanges.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Name;