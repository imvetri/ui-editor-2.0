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
<<<<<<< HEAD
        this.onChange(e);
=======
>>>>>>> e18aa9f623139daa0088d9454c49299dc23e7967
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

<<<<<<< HEAD
    onChange(e){
        if(this.props.onChange){
            this.props.onChange(this.state, e.currentTarget.value)
        }
    }

=======
>>>>>>> e18aa9f623139daa0088d9454c49299dc23e7967
    render() {
        return (
            <div className="panel">
                <header>Type</header>
                <div className="list">
<<<<<<< HEAD
                    {this.state.types.map((type, index)=><textarea value={type} key={index} index={index} 
                        onChange={this.updateChanges.bind(this)} 
                        onBlur={this.deleteIfEmpty.bind(this)}
                        onFocus={this.onChange.bind(this)}/>)}
=======
                    {this.state.types.map((type, index)=><textarea value={type} key={index} index={index} onChange={this.updateChanges.bind(this)} onBlur={this.deleteIfEmpty.bind(this)}/>)}
>>>>>>> e18aa9f623139daa0088d9454c49299dc23e7967
                </div>
                <button onClick={this.addInput.bind(this)}>Add</button>
            </div>
        );
    }
}

export default Type;
