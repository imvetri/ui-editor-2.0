import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Component

class Attributes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attributes: []
        };
    }

    updateKey(e){
        var attributes = this.state.attributes;
        attributes[Number(e.currentTarget.getAttribute("index"))].key = e.currentTarget.value;
        this.setState({
            attributes: attributes
        })
        if(this.props.onChanged){
            this.props.onChanged(this.state.attributes)
        }
    }
    updateValue(e){
        var attributes = this.state.attributes;
        attributes[Number(e.currentTarget.getAttribute("index"))].value = e.currentTarget.value;
        this.setState({
            attributes: attributes
        })
        if(this.props.onChanged){
            this.props.onChanged(this.state.attributes)
        }
    }

    addInput(){
        var attributes = this.state.attributes;
        attributes.push({
            key:"",
            value:""
        })
        this.setState(
            {attributes:attributes}
        )
    }

    deleteIfEmpty(e){
        var attributes = this.state.attributes;
    
        var index = e.currentTarget.getAttribute("index");
        if(attributes[index].key==="" && attributes[index].value===""){
            attributes.splice(Number(e.currentTarget.getAttribute("index")),1)

        }
        this.setState({
            attributes: attributes
        })
    }


    render() {
        return (
            <div className="attributes">
                <header>Attributes</header>
                <div className="list">
                    {this.state.attributes.map((attribute, index)=>
                    <div key={index}>
                        <textarea value={attribute.key} key={index} index={index} 
                            onChange={this.updateKey.bind(this)} 
                            onBlur={this.deleteIfEmpty.bind(this)}
                            />
                            
                        <textarea value={attribute.value} key={index} index={index} 
                            onChange={this.updateValue.bind(this)} 
                            onBlur={this.deleteIfEmpty.bind(this)}
                            />
                    </div>)}
                </div>
                <button onClick={this.addInput.bind(this)}>Add</button>
            </div>
        );
    }
}

export default Attributes;