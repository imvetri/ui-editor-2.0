(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,,,,,,,function(e,t,n){var r=n(10);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,'body {\r\n    position:relative;\r\n    color: #d9d9d9;\r\n    font-family: "Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;\r\n    margin: 0px;\r\n    background: black;\r\n}\r\n\r\nli , label, p, .rules , input, textarea{\r\n    font-size: 9px;\r\n}\r\n\r\ninput, textarea { \r\n    background: #2b2b2b;\r\n    color: #d9d9d9;\r\n    opacity: 0.75;\r\n    vertical-align: bottom;\r\n}\r\n\r\ninput[type="text"] {\r\n    -webkit-appearance: textarea;\r\n    color: rgba(255,255,255,0.5);\r\n    border-color: rgba(0,0,0,0.9);\r\n    border-width: 1px;\r\n    padding: 7px;\r\n}\r\n\r\nul label input {\r\n    width: 10px;\r\n}\r\n\r\nul, li {\r\n    padding-left: 5px;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nbutton, select{\r\n    color: rgba(255,255,255,0.5);\r\n    border-color: rgba(0,0,0,0.9);\r\n    border-width: 1px;\r\n    padding: 5px;\r\n    background-color: #343a40;\r\n    margin-left: 4px;\r\n}\r\n\r\nselect:focus{\r\n    \r\n    outline: 1px solid white;\r\n}\r\n\r\nbutton i{\r\n    padding-right:4px;\r\n}\r\n\r\nselect:focus, \r\nbutton:hover,\r\nul label:hover, \r\nli:hover, \r\n.content:hover {\r\n    color: #fff;\r\n    background: rgb(43, 43, 43);\r\n}\r\n\r\nul,li, ul label {\r\n    color: rgba(255,255,255,0.5);\r\n}\r\n\r\n\r\n#index{\r\n    margin:-4px;\r\n}\r\n\r\n.CodeMirror {\r\n    border: 1px solid black;\r\n    margin-top:5px;\r\n}\r\n\r\n.container{\r\n    padding: 5px;\r\n    background: #2C3134;\r\n}\r\n\r\n',""])},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),s=(r=i)&&r.__esModule?r:{default:r};n(13);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={types:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"updateChanges",value:function(e){var t=this.state.types;t[Number(e.currentTarget.getAttribute("index"))]=e.currentTarget.value,this.setState({types:t}),this.onChange(e)}},{key:"addInput",value:function(){var e=this.state.types;e.push(""),this.setState({types:e})}},{key:"deleteIfEmpty",value:function(e){var t=this.state.types;""===e.currentTarget.value&&t.splice(Number(e.currentTarget.getAttribute("index")),1),this.setState({types:t})}},{key:"onChange",value:function(e){this.props.onChange&&this.props.onChange(this.state,e.currentTarget.value)}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"panel"},s.default.createElement("header",null,"Type"),s.default.createElement("div",{className:"list"},this.state.types.map((function(t,n){return s.default.createElement("textarea",{value:t,key:n,index:n,onChange:e.updateChanges.bind(e),onBlur:e.deleteIfEmpty.bind(e),onFocus:e.onChange.bind(e)})}))),s.default.createElement("button",{onClick:this.addInput.bind(this)},"Add"))}}]),t}(i.Component);t.default=o},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\r\n/* Show selected asset with a light dashed outline */\r\n\r\n\r\n.list textarea{\r\n    border: 1px lightgray solid;\r\n    display: block;\r\n    width:200px;\r\n    margin-top:5px;\r\n    margin-bottom:5px;\r\n}\r\n\r\n.panel{\r\n    border:1px solid grey;\r\n    max-width: 210px;\r\n    padding:5px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.panel textarea:focus{\r\n    border:2px lime solid;\r\n    outline:none !important;\r\n}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),s=(r=i)&&r.__esModule?r:{default:r};n(16);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={attributes:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"updateKey",value:function(e){var t=this.state.attributes;t[Number(e.currentTarget.getAttribute("index"))].key=e.currentTarget.value,this.setState({attributes:t}),this.props.onChanged&&this.props.onChanged(this.state.attributes)}},{key:"updateValue",value:function(e){var t=this.state.attributes;t[Number(e.currentTarget.getAttribute("index"))].value=e.currentTarget.value,this.setState({attributes:t}),this.props.onChanged&&this.props.onChanged(this.state.attributes)}},{key:"addInput",value:function(){var e=this.state.attributes;e.push({key:"",value:""}),this.setState({attributes:e})}},{key:"deleteIfEmpty",value:function(e){var t=this.state.attributes,n=e.currentTarget.getAttribute("index");""===t[n].key&&""===t[n].value&&t.splice(Number(e.currentTarget.getAttribute("index")),1),this.setState({attributes:t})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"attributes"},s.default.createElement("header",null,"Attributes"),s.default.createElement("div",{className:"list"},this.state.attributes.map((function(t,n){return s.default.createElement("div",{key:n},s.default.createElement("textarea",{value:t.key,key:n,index:n,onChange:e.updateKey.bind(e),onBlur:e.deleteIfEmpty.bind(e)}),s.default.createElement("textarea",{value:t.value,key:n,index:n,onChange:e.updateValue.bind(e),onBlur:e.deleteIfEmpty.bind(e)}))}))),s.default.createElement("button",{onClick:this.addInput.bind(this)},"Add"))}}]),t}(i.Component);t.default=o},function(e,t,n){var r=n(17);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\r\n/* Show selected asset with a light dashed outline */\r\n\r\n\r\n.attributes .list textarea{\r\n    border: 1px lightgray solid;\r\n    display: inline;\r\n    width:200px;\r\n    margin-top:5px;\r\n    margin-bottom:5px;\r\n}\r\n\r\n.attributes{\r\n    border:1px solid grey;\r\n    max-width: 440px;\r\n    padding:5px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.attributes textarea:focus{\r\n    border:2px lime solid;\r\n    outline:none !important;\r\n}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),s=(r=i)&&r.__esModule?r:{default:r};n(19);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={events:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"updateKey",value:function(e){var t=this.state.events;t[Number(e.currentTarget.getAttribute("index"))].key=e.currentTarget.value,this.setState({events:t}),this.props.onChanged&&this.props.onChanged(this.state.events)}},{key:"updateValue",value:function(e){var t=this.state.events;t[Number(e.currentTarget.getAttribute("index"))].value=e.currentTarget.value,this.setState({events:t}),this.props.onChanged&&this.props.onChanged(this.state.events)}},{key:"addInput",value:function(){var e=this.state.events;e.push({key:"",value:""}),this.setState({events:e})}},{key:"deleteIfEmpty",value:function(e){var t=this.state.events,n=e.currentTarget.getAttribute("index");""===t[n].key&&""===t[n].value&&t.splice(Number(e.currentTarget.getAttribute("index")),1),this.setState({events:t})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"events"},s.default.createElement("header",null,"Events"),s.default.createElement("div",{className:"list"},this.state.events.map((function(t,n){return s.default.createElement("div",{key:n},s.default.createElement("textarea",{value:t.key,key:n,index:n,onChange:e.updateKey.bind(e),onBlur:e.deleteIfEmpty.bind(e)}),s.default.createElement("textarea",{value:t.value,key:n,index:n,onChange:e.updateValue.bind(e),onBlur:e.deleteIfEmpty.bind(e)}))}))),s.default.createElement("button",{onClick:this.addInput.bind(this)},"Add"))}}]),t}(i.Component);t.default=o},function(e,t,n){var r=n(20);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\r\n/* Show selected asset with a light dashed outline */\r\n\r\n\r\n.events .list textarea{\r\n    border: 1px lightgray solid;\r\n    display: inline;\r\n    width:200px;\r\n    margin-top:5px;\r\n    margin-bottom:5px;\r\n}\r\n\r\n.events{\r\n    border:1px solid grey;\r\n    max-width: 440px;\r\n    padding:5px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.events textarea:focus{\r\n    border:2px lime solid;\r\n    outline:none !important;\r\n}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),s=(r=i)&&r.__esModule?r:{default:r};n(22);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={content:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"updateChanges",value:function(e){var t=this.state.types;t[Number(e.currentTarget.getAttribute("index"))]=e.currentTarget.value,this.setState({types:t}),this.onChange(e)}},{key:"onChange",value:function(e){this.props.onChange&&this.props.onChange(this.state,e.currentTarget.value)}},{key:"render",value:function(){return s.default.createElement("div",{className:"panel"},s.default.createElement("header",null,"Content"),s.default.createElement("div",{className:"list"},s.default.createElement("textarea",{value:this.state.content,onChange:this.updateChanges.bind(this)})))}}]),t}(i.Component);t.default=o},function(e,t,n){var r=n(23);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\r\n/* Show selected asset with a light dashed outline */\r\n\r\n\r\n.list textarea{\r\n    border: 1px lightgray solid;\r\n    display: block;\r\n    width:200px;\r\n    margin-top:5px;\r\n    margin-bottom:5px;\r\n}\r\n\r\n.panel{\r\n    border:1px solid grey;\r\n    max-width: 210px;\r\n    padding:5px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.panel textarea:focus{\r\n    border:2px lime solid;\r\n    outline:none !important;\r\n}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),s=(r=i)&&r.__esModule?r:{default:r};n(25);var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=n.props.state||{style:{top:"100px",left:"408px",position:"absolute"},height:"100px",width:"100px",top:"100px",left:"100px",borderWidth:"100px",borderColor:"#874a4a",space:"100px",fontSize:"10px",color:"#ffffff"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"lessheightonClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.height.split("px")[0])-1;t.height=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onHeightChange&&this.props.onHeightChange(e)}},{key:"moreheightonClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.height.split("px")[0])+1;t.height=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onHeightChange&&this.props.onHeightChange(e)}},{key:"lesswidthonClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.width.split("px")[0])-1;t.width=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onWidthChange&&this.props.onWidthChange(e)}},{key:"morewidthonClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.width.split("px")[0])+1;t.width=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onWidthChange&&this.props.onWidthChange(e)}},{key:"lesstoponClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.top.split("px")[0])-1;t.top=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onTopChange&&this.props.onTopChange(e)}},{key:"moretoponClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.top.split("px")[0])+1;t.top=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onTopChange&&this.props.onTopChange(e)}},{key:"moreleftonClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.left.split("px")[0])-1;t.left=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onLeftChange&&this.props.onLeftChange(e)}},{key:"lessleftonClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.left.split("px")[0])+1;t.left=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onLeftChange&&this.props.onLeftChange(e)}},{key:"lessborderonClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.borderWidth.split("px")[0])-1;t.borderWidth=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onBorderWidthChange&&this.props.onBorderWidthChange(e)}},{key:"moreborderonClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.borderWidth.split("px")[0])+1;t.borderWidth=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onBorderWidthChange&&this.props.onBorderWidthChange(e)}},{key:"morespaceonClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.space.split("px")[0])+1;t.space=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onPaddingChange&&this.props.onPaddingChange(e)}},{key:"lessspaceonClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.space.split("px")[0])-1;t.space=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onPaddingChange&&this.props.onPaddingChange(e)}},{key:"lessSizeonClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.fontSize.split("px")[0])-1;t.fontSize=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onFontSizeChange&&this.props.onFontSizeChange(e)}},{key:"moreSizeonClick",value:function(e){var t=JSON.parse(JSON.stringify(this.state)),n=Number(t.fontSize.split("px")[0])+1;t.fontSize=n+"px",this.setState(t),e.state=t,e.index=this.props.index,this.props.onFontSizeChange&&this.props.onFontSizeChange(e)}},{key:"idonChange",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.classes=e.currentTarget.value,this.setState(t),e.state=t,e.index=this.props.index}},{key:"fontcoloronChange",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.fontColor=e.target.value,this.setState(t),e.state=t,e.index=this.props.index,this.props.onFontColorChange&&this.props.onFontColorChange(e)}},{key:"morecoloronChange",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.borderColor=e.target.value,this.setState(t),e.state=t,e.index=this.props.index,this.props.onBorderColorChange&&this.props.onBorderColorChange(e)}},{key:"propertiesonMouseMove",value:function(e){var t=JSON.parse(JSON.stringify(this.state));e.stopPropagation(),this.setState(t),e.state=t,e.index=this.props.index}},{key:"propertiesonMouseDown",value:function(e){var t=JSON.parse(JSON.stringify(this.state));e.stopPropagation(),this.setState(t),e.state=t,e.index=this.props.index}},{key:"propertiesonMouseOver",value:function(e){var t=JSON.parse(JSON.stringify(this.state));e.stopPropagation(),this.setState(t),e.state=t,e.index=this.props.index}},{key:"propertiesonMouseUp",value:function(e){var t=JSON.parse(JSON.stringify(this.state));e.stopPropagation(),this.setState(t),e.state=t,e.index=this.props.index}},{key:"borderStyleonChange",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.borderStyle=e.target.value,this.setState(t),e.state=t,e.index=this.props.index,this.props.onBorderStyleChange&&this.props.onBorderStyleChange(e)}},{key:"render",value:function(){return s.default.createElement("div",{class:"properties",id:"properties",onMouseUp:this.propertiesonMouseUp.bind(this),onMouseOver:this.propertiesonMouseOver.bind(this),onMouseDown:this.propertiesonMouseDown.bind(this),onMouseMove:this.propertiesonMouseMove.bind(this),style:this.state.style},this.props.children,s.default.createElement("div",null,s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Height"),s.default.createElement("button",{class:"less",id:"lessheight",onClick:this.lessheightonClick.bind(this)},s.default.createElement("i",{class:"fa fa-minus"})),s.default.createElement("input",{type:"text",value:this.state.height}),s.default.createElement("button",{class:"more",id:"moreheight",onClick:this.moreheightonClick.bind(this)},s.default.createElement("i",{class:"fa fa-plus"}))),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Width"),s.default.createElement("button",{class:"less",id:"lesswidth",onClick:this.lesswidthonClick.bind(this)},s.default.createElement("i",{class:"fa fa-minus"})),s.default.createElement("input",{type:"text",value:this.state.width}),s.default.createElement("button",{class:"more",id:"morewidth",onClick:this.morewidthonClick.bind(this)},s.default.createElement("i",{class:"fa fa-plus"})))),s.default.createElement("div",null,s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Position"),s.default.createElement("select",{name:"position",value:this.state.position,id:"position"},s.default.createElement("option",null,"static"),s.default.createElement("option",null,"relative"),s.default.createElement("option",null,"absolute"),s.default.createElement("option",null,"fixed"))),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Top"),s.default.createElement("button",{class:"less",id:"lesstop",onClick:this.lesstoponClick.bind(this)},s.default.createElement("i",{class:"fa fa-minus"})),s.default.createElement("input",{type:"text",value:this.state.top}),s.default.createElement("button",{class:"more",id:"moretop",onClick:this.moretoponClick.bind(this)},s.default.createElement("i",{class:"fa fa-plus"}))),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Left"),s.default.createElement("button",{class:"less",id:"moreleft",onClick:this.moreleftonClick.bind(this)},s.default.createElement("i",{class:"fa fa-minus"})),s.default.createElement("input",{type:"text",value:this.state.left}),s.default.createElement("button",{class:"more",id:"lessleft",onClick:this.lessleftonClick.bind(this)},s.default.createElement("i",{class:"fa fa-plus"}))),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Right"),s.default.createElement("button",{class:"less",id:"lessRight"},s.default.createElement("i",{class:"fa fa-minus"})),s.default.createElement("input",{type:"text",value:this.state.right}),s.default.createElement("button",{class:"more",id:"moreRight"},s.default.createElement("i",{class:"fa fa-plus"}))),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Bottom"),s.default.createElement("button",{class:"less",id:"moreBottom"},s.default.createElement("i",{class:"fa fa-minus"})),s.default.createElement("input",{type:"text",value:this.state.bottom}),s.default.createElement("button",{class:"more",id:"lessBottom"},s.default.createElement("i",{class:"fa fa-plus"})))),s.default.createElement("div",null,s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Display"),s.default.createElement("select",{name:"display",value:this.state.display,id:"display"},s.default.createElement("option",null,"block"),s.default.createElement("option",null,"inline"),s.default.createElement("option",null,"inline-block"),s.default.createElement("option",null,"flex"),s.default.createElement("option",null,"grid")))),s.default.createElement("div",null,s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Border")),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Width"),s.default.createElement("button",{class:"less",id:"lessborder",onClick:this.lessborderonClick.bind(this)},s.default.createElement("i",{class:"fa fa-minus"})),s.default.createElement("input",{type:"text",value:this.state.borderWidth}),s.default.createElement("button",{class:"more",id:"moreborder",onClick:this.moreborderonClick.bind(this)},s.default.createElement("i",{class:"fa fa-plus"}))),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Color"),s.default.createElement("input",{type:"color",id:"morecolor",onChange:this.morecoloronChange.bind(this),value:this.state.borderColor})),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Style"),s.default.createElement("select",{name:"borderStyle",value:this.state.borderStyle,id:"borderStyle",onChange:this.borderStyleonChange.bind(this)},s.default.createElement("option",null,"dotted"),s.default.createElement("option",null,"dashed"),s.default.createElement("option",null,"solid"),s.default.createElement("option",null,"double"),s.default.createElement("option",null,"groove"),s.default.createElement("option",null,"ridge"),s.default.createElement("option",null,"inset"),s.default.createElement("option",null,"outset"),s.default.createElement("option",null,"none"),s.default.createElement("option",null,"hidden")))),s.default.createElement("div",null,s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Padding")),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Top"),s.default.createElement("button",{class:"less",id:"lesspaddingtop"},s.default.createElement("i",{class:"fa fa-minus"})),s.default.createElement("input",{type:"text",value:this.state.paddingtop}),s.default.createElement("button",{class:"more",id:"morepaddingtop"},s.default.createElement("i",{class:"fa fa-plus"}))),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Left"),s.default.createElement("button",{class:"less",id:"morepaddingleft"},s.default.createElement("i",{class:"fa fa-minus"})),s.default.createElement("input",{type:"text",value:this.state.paddingleft}),s.default.createElement("button",{class:"more",id:"lesspaddingleft"},s.default.createElement("i",{class:"fa fa-plus"}))),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Right"),s.default.createElement("button",{class:"less",id:"lesspaddingRight"},s.default.createElement("i",{class:"fa fa-minus"})),s.default.createElement("input",{type:"text",value:this.state.paddingright}),s.default.createElement("button",{class:"more",id:"morepaddingRight"},s.default.createElement("i",{class:"fa fa-plus"}))),s.default.createElement("div",{class:"bottomPadding"},s.default.createElement("span",{class:"name"},"Bottom"),s.default.createElement("button",{class:"less",id:"morepaddingBottom"},s.default.createElement("i",{class:"fa fa-minus"})),s.default.createElement("input",{type:"text",value:this.state.paddingbottom}),s.default.createElement("button",{class:"more",id:"lesspaddingBottom"},s.default.createElement("i",{class:"fa fa-plus"})))),s.default.createElement("div",null,s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Font")),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Family"),s.default.createElement("input",{type:"text",class:"long",value:this.state.fontFamily})),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Size"),s.default.createElement("button",{class:"less",id:"lessSize",onClick:this.lessSizeonClick.bind(this)},s.default.createElement("i",{class:"fa fa-minus"})),s.default.createElement("input",{type:"text",value:this.state.fontSize}),s.default.createElement("button",{class:"more",id:"moreSize",onClick:this.moreSizeonClick.bind(this)},s.default.createElement("i",{class:"fa fa-plus"}))),s.default.createElement("div",null,s.default.createElement("span",{class:"name"},"Color"),s.default.createElement("input",{type:"color",id:"fontcolor",onChange:this.fontcoloronChange.bind(this),value:this.state.color}))))}}]),t}(i.Component);t.default=o},function(e,t,n){var r=n(26);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".properties {\r\n    border: 1px solid #2C3134;\r\n     width: 165px;\r\n     font-size: 10px;\r\n     background: rgb(64, 64, 64);\r\n     color: rgba(255,255,255,0.5);\r\n    }\r\n    \r\n    .properties input{\r\n        width: 50px;\r\n        padding: 5px;\r\n        margin-left: 4px;\r\n    }\r\n    \r\n    .properties input.long{\r\n        width: 100px;\r\n    }\r\n    \r\n    .properties > div {\r\n        border: 1px solid #2C3134;\r\n        padding: 8px;\r\n    }\r\n    \r\n    .properties > div > div:not(:first-child){\r\n        margin-top:7px;\r\n    }\r\n    \r\n    span.name {\r\n        display: inline-block;\r\n        width: 40px;\r\n    }\r\n    \r\n    .properties .space{\r\n     border: 1px solid #2C3134;\r\n    }\r\n    \r\n    .less{\r\n        height: 21px;\r\n        width: 21px;\r\n        border: 1px solid #2C3134;\r\n    }\r\n    \r\n    .more{\r\n        height: 21px;\r\n        width: 21px;\r\n        border: 1px solid #2C3134;\r\n    }\r\n    \r\n    .properties select {\r\n        border: 1px solid black;\r\n        font-size: 10px;\r\n        background: #2b2b2b;\r\n        color: rgba(255,255,255,0.5);\r\n        width: 100px;\r\n        padding: 5px;\r\n        margin-left: 4px;\r\n    }",""])},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=c(a),s=c(n(5));n(9);var o=c(n(12)),l=c(n(15)),u=c(n(18)),p=c(n(21)),d=c(n(24));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"onTypesChanged",value:function(e,t){console.log(e,t)}},{key:"onAttributesChanged",value:function(e){console.log(e)}},{key:"onEventsChanged",value:function(e){console.log(e)}},{key:"onContentChanged",value:function(e){console.log(e)}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(o.default,{onChanged:this.onTypesChanged.bind(this)}),i.default.createElement(l.default,{onChanged:this.onAttributesChanged.bind(this)}),i.default.createElement(u.default,{onChanged:this.onEventsChanged.bind(this)}),i.default.createElement(p.default,{onChanged:this.onContentChanged.bind(this)}),i.default.createElement(d.default,null))}}]),t}(a.Component);console.log("Source code https://github.com/imvetri/ui-editor"),s.default.render(i.default.createElement(f,null),document.getElementById("index"))}]]);