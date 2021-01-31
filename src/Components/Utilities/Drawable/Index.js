import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Utilities
import {get,set} from "../../../Utilities/Storage";


// Component


class Drawable extends Component {

    constructor(props) {
        super(props);
        debugger;
        this.state = this.props.state || JSON.parse(get("Drawable")) || { "style": { "position": "fixed", "top": "226px", "left": "398px", "height": "242px", "width": "466px", "borderWidth": "1px", "borderStyle": "solid", "borderColor": "green", "cursor": "crosshair", "border-width": "9px", "border-color": "#545496", "border-style": "dashed" }, "Div": [{ "style": { "position": "fixed", "top": "280px", "left": "436px", "height": "173px", "width": "353px", "borderWidth": "1px", "borderStyle": "solid", "borderColor": "green", "cursor": "crosshair" }, "Div": [{ "style": { "position": "fixed", "top": "341px", "left": "518px", "height": "73px", "width": "97px", "borderWidth": "1px", "borderStyle": "solid", "borderColor": "green" }, "Div": [], "id": "div59301", "mode": "Draw", "EventsBuilder": [], "PropertiesControl": [{ "style": { "top": "0px", "left": "-170px", "position": "absolute", "display": "none" }, "id": "containement", "class": "black setup", "height": "242px", "width": "466px", "top": "226px", "left": "398px", "color": "#874a4a", "space": "100px", "fontSize": "10px", "borderWidth": "1px", "borderColor": "#545496", "borderStyle": "dashed" }] }], "mode": "Draw", "EventsBuilder": [], "PropertiesControl": [{ "style": { "top": "0px", "left": "-170px", "position": "absolute", "display": "none" }, "id": "containement", "class": "black setup", "height": "242px", "width": "466px", "top": "226px", "left": "398px", "color": "#874a4a", "space": "100px", "fontSize": "10px", "borderWidth": "1px", "borderColor": "#545496", "borderStyle": "dashed" }], "clientX": 518, "clientY": 341, "origin": false, "showOptions": true, "events": { "onClick": "alert();" }, "grabbing": false }], "mode": "Save", "PropertiesControl": [{ "style": { "top": "0px", "left": "-170px", "position": "absolute", "display": "none" }, "id": "containement", "class": "black setup", "height": "242px", "width": "466px", "top": "226px", "left": "398px", "color": "#874a4a", "space": "100px", "fontSize": "10px", "borderWidth": "1px", "borderColor": "#545496", "borderStyle": "dashed" }], "grabbing": false, "origin": false, "divId": "div46035", "id": "div123", "showOptions": true, "clientX": 468, "clientY": 345, "eventReducer": "", "events": { "onClick": "alert('onClick success')", "onMouseOut": "alert('mouse out success')" }, "EventsBuilder": [] };

        // Generate css as a separate file on download
    }


    div123onMouseOver(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        if (state.mode === "Draw") {
            state.style.cursor = "crosshair";
        }
        e.stopPropagation();


        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    div123onMouseDown(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        function create(type, x, y, text) {
            var item = document.createElement(type);
            item.style.position = "fixed";
            item.style.left = x + "px";
            item.style.top = y + "px";
            item.style['border-width'] = "1px";
            item.style['border-color'] = "green";
            item.style['border-style'] = "solid";
            item.id = "div" + ~~(Math.random() * 100000);
            if (text) {
                item.innerText = text;
            }
            return item;
        }

        let target = e.target;

        if (e.button === 0) {
            if (state.mode === "Draw") {
                state.clientX = e.clientX;
                state.clientY = e.clientY;
                var div = create("div", e.clientX, e.clientY);
                var parent = e.target;
                parent.appendChild(div);

                state.divId = div.id;
                state.origin = true;
            }
        }

        if (state.mode === "Move") {
            state.style.cursor = "grabbing";
            state.grabbing = true;
        }
        delete window.eClientY;
        delete window.eClientX;


        e.stopPropagation()
        console.log("mouseDown")
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    div123onMouseMove(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        if (state.mode === "Draw") {
            if (state.origin) {
                var div = document.getElementById(state.divId);
                var rect = div.getBoundingClientRect();
                div.style.width = e.clientX - rect.left;
                div.style.height = e.clientY - rect.top;
            }
        }

        if (state.style.cursor == "grabbing" && state.grabbing) {
            var rect = e.target.getBoundingClientRect();

            window.eClientY = window.eClientY || e.clientY;
            window.eClientX = window.eClientX || e.clientX;

            e.target.style.top = (-window.eClientY + e.clientY) + rect.top + "px";
            e.target.style.left = (-window.eClientX + e.clientX) + rect.left + "px";

            window.eClientY = e.clientY;
            window.eClientX = e.clientX;
        }

        e.stopPropagation()
        console.log("mouseMove")

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    div123onMouseUp(e) {
        var state = JSON.parse(JSON.stringify(this.state))


        if (state.mode === "Draw") {
            if (e.button === 0) {
                state.origin = false;
            }
            let createdDiv = document.getElementById(state.divId);
            delete state.divId;

            if (state.clientX == e.clientX && state.clientY == e.clientY) {
                state.showOptions = !state.showOptions;
            }
            else {

                state.Div.push({
                    style: {
                        position: createdDiv.style.position,
                        top: createdDiv.style.top,
                        left: createdDiv.style.left,
                        height: createdDiv.style.height,
                        width: createdDiv.style.width,
                        borderWidth: createdDiv.style["border-width"],
                        borderStyle: createdDiv.style["border-style"],
                        borderColor: createdDiv.style["border-color"]
                    },
                    Div: [],
                    id: createdDiv.id,
                    mode: "Draw",
                    EventsBuilder: [],
                    PropertiesControl: [state.PropertiesControl[0]]
                })
            }
            createdDiv.remove();
        }
        if (state.mode === "Move") {
            e.target.style.cursor = "pointer";
            state.grabbing = false;
            state.style.top = e.target.style.top;
            state.style.left = e.target.style.left;
        }

        if (state.mode === "Resize") {
            state.style.height = e.target.style.height;
            state.style.width = e.target.style.width;
        }

        e.stopPropagation()
        console.log("mouseUp")

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (state.mode === 'Draw' && e.button === 0) {
            this.props.onDrawFinish ? this.props.onDrawFinish(e) : null;
        }

        if (state.mode === "Move") {
            this.props.onMoveFinish ? this.props.onMoveFinish(e) : null;
        }

        if (state.mode === "Resize") {
            this.props.onResizeFinish ? this.props.onResizeFinish(e) : null;
        }
    }

    DivonDrawFinish(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.Div[e.index] = e.state;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onDrawFinish ? this.props.onDrawFinish(e) : null;
        }
    }

    modeonMouseDown(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        e.stopPropagation();
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    modeonMouseUp(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        e.stopPropagation();
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    DivonMoveFinish(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.Div[e.index] = e.state;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onMoveFinish ? this.props.onMoveFinish(e) : null;
        }
    }

    DivonResizeFinish(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.Div[e.index] = e.state;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onResizeFinish ? this.props.onResizeFinish(e) : null;
        }
    }

    DivonDelete(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.Div.splice(e.index, 1);

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onModeChange ? this.props.onModeChange(e) : null;
        }
    }

    modeonChange(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.mode = e.target.value;
        if (state.mode === "Resize") {
            state.style.resize = "both";
            state.style.overflow = "auto";
        } else {
            delete state.style.resize;
            delete state.style.overflow;
        } if (state.mode === "Edit") {
            state.PropertiesControl[0].style.display = "block";
            state.PropertiesControl[0].style.top = "0px";
            state.PropertiesControl[0].style.left = "-170px";
            state.PropertiesControl[0].height = state.style.height;
            state.PropertiesControl[0].width = state.style.width;
            state.PropertiesControl[0].top = state.style.top;
            state.PropertiesControl[0].left = state.style.left;
            state.PropertiesControl[0].borderWidth = state.style.borderWidth;
        } else {
            state.PropertiesControl[0].style.display = "none";
        } if (state.mode === "Save") {
            set("Drawable", JSON.stringify(state));
        }

        if (state.mode === "Events") {
            debugger;
            let index = components.findIndex(component => component.name === "Div")
            let events = state.events || {
                "onClick": ""
            };
            components[index].events.filter(event => event.id === state.id).forEach(event => {
                events[event.name] = event.reducer.reducer;
            })
            state.EventsBuilder = [{
                "style": {
                    "top": "0px",
                    "left": "-150px",
                    "position": "absolute"
                },
                "textAreaStyle": {
                    "position": "absolute",
                    "top": "40px",
                    "left": "0px",
                    "width": "150px"
                },
                "eventName": "onClick",
                "eventReducer": "",
                "events": events
            }];
        } else {
            state.EventsBuilder = [];
        }
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (state.mode === "Delete") {
            this.props.onDelete ? this.props.onDelete(e) : null;
        }

        if (state.mode !== "Delete") {
            this.props.onModeChange ? this.props.onModeChange(e) : null;
        }
    }

    DivonStyleChange(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.Div[e.index] = e.state;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onStyleChange ? this.props.onStyleChange(e) : null;
        }
    }

    DivonModeChange(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.Div[e.index] = e.state;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onModeChange ? this.props.onModeChange(e) : null;
        }
    }

    DivonEventsChange(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.Div[e.index] = e.state;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onEventsChange ? this.props.onEventsChange(e) : null;
        }
    }

    render() {
        return (<div className="Div" style={this.state.style} id="div123" onMouseUp={this.div123onMouseUp.bind(this)} onMouseMove={this.div123onMouseMove.bind(this)} onMouseDown={this.div123onMouseDown.bind(this)} onMouseOver={this.div123onMouseOver.bind(this)} >{this.props.children}
            {
                this.state.showOptions ?
                    <select name="mode" value={this.state.mode} id="mode" onChange={this.modeonChange.bind(this)} onMouseUp={this.modeonMouseUp.bind(this)} onMouseDown={this.modeonMouseDown.bind(this)}>
                        <optgroup label="Tools">
                            <option value="Draw">Draw</option>
                            <option value="Move">Move</option>
                            <option value="Resize">Resize</option>
                            <option value="Delete">Delete</option>
                            <option value="Save">Save</option>
                            <option value="Edit">Edit</option>
                            <option value="Events">Events</option>
                        </optgroup>
                    </select>
                    : null}
            {this.state.Div.map((item, i) => <Drawable onEventsChange={this.DivonEventsChange.bind(this)} onModeChange={this.DivonModeChange.bind(this)} onStyleChange={this.DivonStyleChange.bind(this)} onDelete={this.DivonDelete.bind(this)} onResizeFinish={this.DivonResizeFinish.bind(this)} onMoveFinish={this.DivonMoveFinish.bind(this)} onDrawFinish={this.DivonDrawFinish.bind(this)} state={item} key={~~(Math.random() * 10000)} index={i}></Drawable>)}
        </div>)
    }
}

export default Drawable;