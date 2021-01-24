import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Component

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    updateKey(e){
        var events = this.state.events;
        events[Number(e.currentTarget.getAttribute("index"))].key = e.currentTarget.value;
        this.setState({
            events: events
        })
        if(this.props.onChanged){
            this.props.onChanged(this.state.events)
        }
    }
    updateValue(e){
        var events = this.state.events;
        events[Number(e.currentTarget.getAttribute("index"))].value = e.currentTarget.value;
        this.setState({
            events: events
        })
        if(this.props.onChanged){
            this.props.onChanged(this.state.events)
        }
    }

    addInput(){
        var events = this.state.events;
        events.push({
            key:"",
            value:""
        })
        this.setState(
            {events:events}
        )
    }

    deleteIfEmpty(e){
        var events = this.state.events;
    
        var index = e.currentTarget.getAttribute("index");
        if(events[index].key==="" && events[index].value===""){
            events.splice(Number(e.currentTarget.getAttribute("index")),1)

        }
        this.setState({
            events: events
        })
    }


    render() {
        return (
            <div className="events">
                <header>Events</header>
                <div className="list">
                    {this.state.events.map((event, index)=>
                    <div key={index}>
                        <textarea value={event.key} key={index} index={index} 
                            onChange={this.updateKey.bind(this)} 
                            onBlur={this.deleteIfEmpty.bind(this)}
                            />
                            
                        <textarea value={event.value} key={index} index={index} 
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

export default Events;