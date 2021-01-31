import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Component

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            value:""
        };
    }

    updateChangesKey(e){
        this.setState({
            key: e.currentTarget.value
        })
        this.onChange(e);
    }

    updateChangesValue(e){
        this.setState({
            value: e.currentTarget.value
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
            <div className="content">
                <header>Content</header>
                <div className="">
                    <textarea value={this.state.content} 
                        onChange={this.updateChangesKey.bind(this)}/>
                    <textarea value={this.state.content} 
                        onChange={this.updateChangesValue.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Content;