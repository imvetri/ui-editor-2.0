import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Component

class Type extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: []
        };
    }

    updateChanges(e){
        var types = this.state.types;
        types[Number(e.currentTarget.getAttribute("index"))] = e.currentTarget.value;
        this.setState({
            types: types
        })
    }

    addInput(){
        var types = this.state.types;
        types.push("")
        this.setState(
            {types:types}
        )
    }

    deleteIfEmpty(e){
        var types = this.state.types;
        if(e.currentTarget.value===""){
            types.splice(Number(e.currentTarget.getAttribute("index")),1)
        }
        this.setState({
            types: types
        })
    }

    render() {
        return (
            <div className="panel">
                <header>Type</header>
                <div className="list">
                    {this.state.types.map((type, index)=><textarea value={type} key={index} index={index} onChange={this.updateChanges.bind(this)} onBlur={this.deleteIfEmpty.bind(this)}/>)}
                </div>
                <button onClick={this.addInput.bind(this)}>Add</button>
            </div>
        );
    }
}

export default Type;
