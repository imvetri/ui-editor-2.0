import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Component

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
    }

    updateChanges(e){
        var types = this.state.types;
        types[Number(e.currentTarget.getAttribute("index"))] = e.currentTarget.value;
        this.setState({
            types: types
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
                <header>Content</header>
                <div className="list">
                    <textarea value={this.state.content} 
                        onChange={this.updateChanges.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Content;