(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1936:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(1),o=n.n(r),a=n(1937),i=n.n(a);n(2129),n(2128);function u(t){return o.a.createElement("span",{className:"BootstrapSliderWrapper"},o.a.createElement(i.a,t))}},2128:function(t,e,n){},2549:function(t,e,n){"use strict";n.d(e,"b",function(){return l}),n.d(e,"a",function(){return p}),n.d(e,"c",function(){return y});var r=n(2736),o=n(17),a=n(2550);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=.25,c={LAT_MIN:-90,LAT_MAX:90,LNG_MIN:-180,LNG_MAX:180};function s(t){var e=o.extent(t,function(t){return t[1]}),n=o.extent(t,function(t){return t[0]}),r=e[0]===e[1]?function(t){return[t[0]-u<c.LAT_MIN?c.LAT_MIN:t[0]-u,t[1]+u>c.LAT_MAX?c.LAT_MAX:t[1]+u]}(e):e,a=n[0]===n[1]?function(t){return[t[0]-u<c.LNG_MIN?c.LNG_MIN:t[0]-u,t[1]+u>c.LNG_MAX?c.LNG_MAX:t[1]+u]}(n):n;return[[a[0],r[0]],[a[1],r[1]]]}function l(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;try{var o=s(e);return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}({},t,Object(r.a)({height:t.height,width:t.width,padding:n,bounds:o}))}catch(e){return console.error("Could not auto zoom",e),t}}function p(t,e,n,r){var o,i,u=t,c=n;return u.js_tooltip&&(c=Object(a.a)(u.js_tooltip)),c&&(o=function(t){t.picked?e({content:c(t),x:t.x,y:t.y+30}):e(null)}),u.js_onclick_href?i=function(t){var e=Object(a.a)(u.js_onclick_href)(t);window.open(e)}:u.table_filter&&void 0!==r&&(i=function(t){return r(t.object[u.line_column])}),{onClick:i,onHover:o,pickable:Boolean(o)}}var f={p1:.01,p5:.05,p95:.95,p99:.99};function y(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sum",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return"count"===e?function(t){return t.length}:(t=e in f?function(t,r){var a;return a=n?t.sort(function(t,e){return o.ascending(n(t),n(e))}):t.sort(o.ascending),o.quantile(a,f[e],r)}:o[e],n?function(e){return t(e.map(n))}:function(e){return t(e)})}},2550:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var r=n(2581),o=n.n(r),a=n(2582),i=n.n(a),u=n(17),c=n(2553);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={console:console,_:i.a,colors:c,d3array:u};function p(t,e,n){var r={},a="SAFE_EVAL_"+Math.floor(1e6*Math.random());r[a]={};var i=a+"="+t,u=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}({},l,e);Object.keys(u).forEach(function(t){r[t]=u[t]});try{return o.a.runInNewContext(i,r,n),r[a]}catch(t){return function(){return t}}}},2553:function(t,e,n){"use strict";n.r(e),n.d(e,"hexToRGB",function(){return o});var r=n(62);function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:255;if(!t)return[0,0,0,e];var n=Object(r.f)(t);return[n.r,n.g,n.b,e]}},2557:function(t,e,n){"use strict";n.d(e,"a",function(){return O});var r=n(226),o=n.n(r),a=n(1),i=n.n(a),u=n(0),c=n.n(u),s=n(2576),l=n(2558);n(2577),n(2566);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){b(t,e,n[e])})}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var g=2e3,w={viewport:c.a.object.isRequired,layers:c.a.array.isRequired,setControlValue:c.a.func,mapStyle:c.a.string,mapboxApiAccessToken:c.a.string.isRequired,onViewportChange:c.a.func},O=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=h(e).call(this,t))||"object"!==p(o)&&"function"!=typeof o?v(r):o).tick=n.tick.bind(v(v(n))),n.onViewportChange=n.onViewportChange.bind(v(v(n))),n.state={previousViewport:t.viewport,timer:setInterval(n.tick,g)},n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,i.a.Component),n=e,a=[{key:"getDerivedStateFromProps",value:function(t,e){return t.viewport!==e.viewport?{viewport:y({},t.viewport),previousViewport:e.viewport}:null}}],(r=[{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"onViewportChange",value:function(t){var e=Object.assign({},t),n=y({},this.state.previousViewport,e);this.props.onViewportChange(n)}},{key:"tick",value:function(){var t=this;if(this.state&&!o()(this.state.previousViewport,this.props.viewport)){var e=this.props.setControlValue,n=this.props.viewport;e&&e("viewport",n),this.setState(function(){return{previousViewport:t.props.viewport}})}}},{key:"layers",value:function(){return this.props.layers.some(function(t){return"function"==typeof t})?this.props.layers.map(function(t){return"function"==typeof t?t():t}):this.props.layers}},{key:"render",value:function(){var t=this.props.viewport;return i.a.createElement(s.b,f({},t,{mapStyle:this.props.mapStyle,onViewportChange:this.onViewportChange,mapboxApiAccessToken:this.props.mapboxApiAccessToken}),i.a.createElement(l.i,f({},t,{layers:this.layers(),initWebGLParameters:!0})))}}])&&d(n.prototype,r),a&&d(n,a),e}();O.propTypes=w,O.defaultProps={mapStyle:"light",onViewportChange:function(){},setControlValue:function(){}}},2560:function(t,e,n){"use strict";n.d(e,"a",function(){return y});var r=n(1),o=n.n(r),a=n(0),i=n.n(a);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f={label:i.a.string.isRequired,value:i.a.string.isRequired},y=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,l(e).apply(this,arguments))}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,o.a.PureComponent),n=e,(r=[{key:"render",value:function(){return o.a.createElement("div",null,this.props.label,o.a.createElement("strong",null,this.props.value))}}])&&c(n.prototype,r),a&&c(n,a),e}();y.propTypes=f},2566:function(t,e,n){},2567:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(8),o=n.n(r);function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=[1,0,1,0,0,0,0];function u(t,e){var n=parseInt(o()(e).format("x"),10);return parseInt(o()(e).add(t).format("x"),10)-n}var c=function(t,e){var n,r,c=o()(Math.min.apply(Math,a(t))),s=o()(Math.max.apply(Math,a(t)));if(-1!==e.indexOf("/")){var l=e.split("/",2);l[0].endsWith("Z")?(r=o()(l[0]),n=o.a.duration(l[1])):(r=o()(l[1]),n=o.a.duration(l[0]))}else r=function(t,e){var n=o()(t).subtract(e),r=t.toArray(),a=n.toArray(),u=r.map(function(t,e){return a[e]!==t}).indexOf(!0),c=r.map(function(t,e){if(e===u){var n=t-a[e];return t-(t-i[e])%n}return e<u||-1===u?t:i[e]});return o()(c)}(c,n=o.a.duration(e));for(var p=o()(r);p<c;)p.add(n);for(;p>c;)p.subtract(n);for(var f=o()(r);f>s;)f.subtract(n);for(;f<s;)f.add(n);var y=null!=e?[p,o()(p).add(n)]:[p,f],b=t.every(function(t){return null===t});return{start:parseInt(p.format("x"),10),end:parseInt(f.format("x"),10),getStep:u.bind(this,n),values:y.map(function(t){return parseInt(t.format("x"),10)}),disabled:b}}},2568:function(t,e,n){"use strict";var r=n(1),o=n.n(r),a=n(0),i=n.n(a),u=n(2557),c=n(1032),s=n.n(c),l=n(28),p=n(1936);n(2569);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var m={start:i.a.number.isRequired,step:i.a.number.isRequired,end:i.a.number.isRequired,values:i.a.array.isRequired,onChange:i.a.func,loopDuration:i.a.number,maxFrames:i.a.number,orientation:i.a.oneOf(["horizontal","vertical"]),reversed:i.a.bool,disabled:i.a.bool,range:i.a.bool},v=function(t){function e(t){var n,r,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=b(e).call(this,t))||"object"!==f(o)&&"function"!=typeof o?h(r):o).state={intervalId:null};var a=t.end-t.start,i=Math.min(t.maxFrames,a/t.step),u=a/i;return n.intervalMilliseconds=t.loopDuration/i,n.increment=u<t.step?t.step:u-u%t.step,n.onChange=n.onChange.bind(h(h(n))),n.play=n.play.bind(h(h(n))),n.pause=n.pause.bind(h(h(n))),n.stepBackward=n.stepBackward.bind(h(h(n))),n.stepForward=n.stepForward.bind(h(h(n))),n.getPlayClass=n.getPlayClass.bind(h(h(n))),n.formatter=n.formatter.bind(h(h(n))),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,o.a.PureComponent),n=e,(r=[{key:"componentDidMount",value:function(){s.a.bind(["space"],this.play)}},{key:"componentWillUnmount",value:function(){s.a.unbind(["space"])}},{key:"onChange",value:function(t){this.props.onChange(t.target.value),null!=this.state.intervalId&&this.pause()}},{key:"getPlayClass",value:function(){return null==this.state.intervalId?"fa fa-play fa-lg slider-button":"fa fa-pause fa-lg slider-button"}},{key:"play",value:function(){if(!this.props.disabled)if(null!=this.state.intervalId)this.pause();else{var t=setInterval(this.stepForward,this.intervalMilliseconds);this.setState({intervalId:t})}}},{key:"pause",value:function(){clearInterval(this.state.intervalId),this.setState({intervalId:null})}},{key:"stepForward",value:function(){var t=this,e=this.props,n=e.start,r=e.end,o=e.step,a=e.values;if(!e.disabled){var i=(Array.isArray(a)?a:[a,a+o]).map(function(e){return e+t.increment}),u=i[1]>r?i[0]-n:0;this.props.onChange(i.map(function(t){return t-u}))}}},{key:"stepBackward",value:function(){var t=this,e=this.props,n=e.start,r=e.end,o=e.step,a=e.values;if(!e.disabled){var i=(Array.isArray(a)?a:[a,a+o]).map(function(e){return e-t.increment}),u=i[0]<n?r-i[1]:0;this.props.onChange(i.map(function(t){return t+u}))}}},{key:"formatter",value:function(t){if(this.props.disabled)return Object(l.b)("Data has no time steps");var e=t;return Array.isArray(t)?t[0]===t[1]&&(e=[t[0]]):e=[t],e.map(function(t){return new Date(t).toUTCString()}).join(" : ")}},{key:"render",value:function(){var t=this.props,e=t.start,n=t.end,r=t.step,a=t.orientation,i=t.reversed,u=t.disabled,c=t.range,s=t.values;return o.a.createElement("div",{className:"play-slider"},o.a.createElement("div",{className:"play-slider-controls padded"},o.a.createElement("i",{className:"fa fa-step-backward fa-lg slider-button ",onClick:this.stepBackward}),o.a.createElement("i",{className:this.getPlayClass(),onClick:this.play}),o.a.createElement("i",{className:"fa fa-step-forward fa-lg slider-button ",onClick:this.stepForward})),o.a.createElement("div",{className:"play-slider-scrobbler padded"},o.a.createElement(p.a,{value:c?s:s[0],range:c,formatter:this.formatter,change:this.onChange,min:e,max:n,step:r,orientation:a,reversed:i,disabled:u?"disabled":"enabled"})))}}])&&y(n.prototype,r),a&&y(n,a),e}();function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){O(t,e,n[e])})}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}v.propTypes=m,v.defaultProps={onChange:function(){},loopDuration:15e3,maxFrames:100,orientation:"horizontal",reversed:!1,disabled:!1,range:!0},n.d(e,"a",function(){return k});var P={getLayers:i.a.func.isRequired,start:i.a.number.isRequired,end:i.a.number.isRequired,getStep:i.a.func,values:i.a.array.isRequired,aggregation:i.a.bool,disabled:i.a.bool,viewport:i.a.object.isRequired,children:i.a.node,mapStyle:i.a.string,mapboxApiAccessToken:i.a.string.isRequired,setControlValue:i.a.func,onViewportChange:i.a.func,onValuesChange:i.a.func},k=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=_(e).call(this,t))||"object"!==g(o)&&"function"!=typeof o?S(r):o).onViewportChange=n.onViewportChange.bind(S(S(n))),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(e,o.a.Component),n=e,(r=[{key:"onViewportChange",value:function(t){var e=this.props.disabled?w({},t):w({},t,{height:t.height+20});this.props.onViewportChange(e)}},{key:"render",value:function(){var t=this.props,e=t.start,n=t.end,r=t.getStep,a=t.disabled,i=t.aggregation,c=t.children,s=t.getLayers,l=t.values,p=t.onValuesChange,f=t.viewport,y=t.setControlValue,b=t.mapStyle,d=t.mapboxApiAccessToken,h=s(l),m=w({},f,{height:a?f.height:f.height-20});return o.a.createElement("div",null,o.a.createElement(u.a,{viewport:m,layers:h,setControlValue:y,mapStyle:b,mapboxApiAccessToken:d,onViewportChange:this.onViewportChange}),!a&&o.a.createElement(v,{start:e,end:n,step:r(e),values:l,range:!i,onChange:p}),c)}}])&&j(n.prototype,r),a&&j(n,a),e}();k.propTypes=P,k.defaultProps={aggregation:!1,disabled:!1,mapStyle:"light",setControlValue:function(){},onViewportChange:function(){},onValuesChange:function(){}}},2569:function(t,e,n){},2570:function(t,e,n){"use strict";var r=n(226),o=n.n(r),a=n(1),i=n.n(a),u=n(0),c=n.n(u),s=n(2557),l=n(158),p=n(2568),f=n(2572),y=n(2553),b=n(2567),d=n(2550),h=n(2549);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){w(t,e,n[e])})}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var S=l.CategoricalColorNamespace.getScale;var P={formData:c.a.object.isRequired,mapboxApiKey:c.a.string.isRequired,setControlValue:c.a.func.isRequired,viewport:c.a.object.isRequired,getLayer:c.a.func.isRequired,getPoints:c.a.func.isRequired,payload:c.a.object.isRequired,onAddFilter:c.a.func,setTooltip:c.a.func},k=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=j(e).call(this,t))||"object"!==m(o)&&"function"!=typeof o?C(r):o).state=n.getStateFromProps(t),n.getLayers=n.getLayers.bind(C(C(n))),n.onValuesChange=n.onValuesChange.bind(C(C(n))),n.onViewportChange=n.onViewportChange.bind(C(C(n))),n.toggleCategory=n.toggleCategory.bind(C(C(n))),n.showSingleCategory=n.showSingleCategory.bind(C(C(n))),n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(e,i.a.PureComponent),n=e,(r=[{key:"componentWillReceiveProps",value:function(t){t.payload.form_data!==this.state.formData&&this.setState(g({},this.getStateFromProps(t)))}},{key:"onValuesChange",value:function(t){this.setState({values:Array.isArray(t)?t:[t,t+this.state.getStep(t)]})}},{key:"onViewportChange",value:function(t){this.setState({viewport:t})}},{key:"getStateFromProps",value:function(t,e){var n=t.payload.data.features||[],r=n.map(function(t){return t.__timestamp}),o=function(t,e){var n=t.color_picker||{r:0,g:0,b:0,a:1},r=[n.r,n.g,n.b,255*n.a],o=S(t.color_scheme),a={};return e.forEach(function(e){var i;null==e.cat_color||a.hasOwnProperty(e.cat_color)||(i=t.dimension?Object(y.hexToRGB)(o(e.cat_color),255*n.a):r,a[e.cat_color]={color:i,enabled:!0})}),a}(t.formData,n);if(e&&t.payload.form_data===e.formData)return g({},e,{categories:o});var a=t.payload.form_data.time_grain_sqla||t.payload.form_data.granularity||"P1D",i=Object(b.a)(r,a);return{start:i.start,end:i.end,getStep:i.getStep,values:i.values,disabled:i.disabled,viewport:t.formData.autozoom?Object(h.b)(t.viewport,t.getPoints(n)):t.viewport,selected:[],lastClick:0,formData:t.payload.form_data,categories:o}}},{key:"getLayers",value:function(t){var e=this.props,n=e.getLayer,r=e.payload,o=e.formData,a=e.onAddFilter,i=e.setTooltip,u=r.data.features?v(r.data.features):[];(u=this.addColor(u,o),o.js_data_mutator)&&(u=Object(d.a)(o.js_data_mutator)(u));u=t[0]===t[1]||t[1]===this.end?u.filter(function(e){return e.__timestamp>=t[0]&&e.__timestamp<=t[1]}):u.filter(function(e){return e.__timestamp>=t[0]&&e.__timestamp<t[1]});var c=this.state.categories;return o.dimension&&(u=u.filter(function(t){return c[t.cat_color]&&c[t.cat_color].enabled})),[n(o,g({},r,{data:g({},r.data,{features:u})}),a,i)]}},{key:"addColor",value:function(t,e){var n=e.color_picker||{r:0,g:0,b:0,a:1},r=S(e.color_scheme);return t.map(function(t){return e.dimension?g({},t,{color:Object(y.hexToRGB)(r(t.cat_color),255*n.a)}):t})}},{key:"toggleCategory",value:function(t){var e=this.state.categories[t],n=g({},this.state.categories,w({},t,g({},e,{enabled:!e.enabled})));Object.values(n).every(function(t){return!t.enabled})&&Object.values(n).forEach(function(t){t.enabled=!0}),this.setState({categories:n})}},{key:"showSingleCategory",value:function(t){var e=g({},this.state.categories);Object.values(e).forEach(function(t){t.enabled=!1}),e[t].enabled=!0,this.setState({categories:e})}},{key:"render",value:function(){return i.a.createElement("div",{style:{position:"relative"}},i.a.createElement(p.a,{getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,onValuesChange:this.onValuesChange,disabled:this.state.disabled,viewport:this.state.viewport,onViewportChange:this.onViewportChange,mapboxApiAccessToken:this.props.mapboxApiKey,mapStyle:this.props.formData.mapbox_style,setControlValue:this.props.setControlValue},i.a.createElement(f.a,{categories:this.state.categories,toggleCategory:this.toggleCategory,showSingleCategory:this.showSingleCategory,position:this.props.formData.legend_position})))}}])&&O(n.prototype,r),o&&O(n,o),e}();function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){V(t,e,n[e])})}return t}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function D(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}k.propTypes=P,n.d(e,"b",function(){return I}),n.d(e,"a",function(){return N});var L={formData:c.a.object.isRequired,payload:c.a.object.isRequired,setControlValue:c.a.func.isRequired,viewport:c.a.object.isRequired,onAddFilter:c.a.func,setTooltip:c.a.func},q={onAddFilter:function(){},setTooltip:function(){}};function I(t,e){var n=function(n){function r(t){var n,o,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),o=this,n=!(a=x(r).call(this,t))||"object"!==E(a)&&"function"!=typeof a?D(o):a;var i=t.viewport,u=t.formData.autozoom?Object(h.b)(i,e(t.payload.data.features)):i;return n.state={viewport:u,layer:n.computeLayer(t)},n.onViewportChange=n.onViewportChange.bind(D(D(n))),n}var a,u,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(r,i.a.PureComponent),a=r,(u=[{key:"componentWillReceiveProps",value:function(t){var e=A({},t.formData,{viewport:null}),n=A({},this.props.formData,{viewport:null});o()(e,n)&&t.payload===this.props.payload||this.setState({layer:this.computeLayer(t)})}},{key:"onViewportChange",value:function(t){this.setState({viewport:t})}},{key:"computeLayer",value:function(e){var n=e.formData,r=e.payload,o=e.onAddFilter,a=e.setTooltip;return t(n,r,o,a)}},{key:"render",value:function(){var t=this.props,e=t.formData,n=t.payload,r=t.setControlValue,o=this.state,a=o.layer,u=o.viewport;return i.a.createElement(s.a,{mapboxApiAccessToken:n.data.mapboxApiKey,viewport:u,layers:[a],mapStyle:e.mapbox_style,setControlValue:r,onViewportChange:this.onViewportChange})}}])&&T(a.prototype,u),c&&T(a,c),r}();return n.propTypes=L,n.defaultProps=q,n}function N(t,e){function n(n){var r=n.formData,o=n.payload,a=n.setControlValue,u=n.onAddFilter,c=n.setTooltip,s=n.viewport;return i.a.createElement(k,{formData:r,mapboxApiKey:o.data.mapboxApiKey,setControlValue:a,viewport:s,getLayer:t,payload:o,onAddFilter:u,setTooltip:c,getPoints:e})}return n.propTypes=L,n.defaultProps=q,n}},2572:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var r=n(1),o=n.n(r),a=n(0),i=n.n(a);n(2573);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b={categories:i.a.object,toggleCategory:i.a.func,showSingleCategory:i.a.func,position:i.a.oneOf([null,"tl","tr","bl","br"])},d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,f(e).apply(this,arguments))}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,o.a.PureComponent),n=e,(r=[{key:"render",value:function(){var t,e=this;if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;var n=Object.entries(this.props.categories).map(function(t){var n=s(t,2),r=n[0],a=n[1],i={color:"rgba("+a.color.join(", ")+")"},u=a.enabled?"◼":"◻";return o.a.createElement("li",{key:r},o.a.createElement("a",{href:"#",onClick:function(){return e.props.toggleCategory(r)},onDoubleClick:function(){return e.props.showSingleCategory(r)}},o.a.createElement("span",{style:i},u)," ",r))}),r="t"===this.props.position.charAt(0)?"top":"bottom",a="r"===this.props.position.charAt(1)?"right":"left",i=(c(t={position:"absolute"},r,"0px"),c(t,a,"10px"),t);return o.a.createElement("div",{className:"legend",style:i},o.a.createElement("ul",{className:"categories"},n))}}])&&l(n.prototype,r),a&&l(n,a),e}();d.propTypes=b,d.defaultProps={categories:{},toggleCategory:function(){},showSingleCategory:function(){},position:"tr"}},2573:function(t,e,n){},2578:function(t,e){},2579:function(t,e){},2580:function(t,e){},2629:function(t,e,n){"use strict";n.r(e),n.d(e,"getLayer",function(){return p});var r=n(2558),o=n(1),a=n.n(o),i=n(28),u=n(2549),c=n(2570),s=n(2560);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e,n,o){var c,p=e.data.features,f=t.color_picker,y=t.target_color_picker;return new r.a(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){l(t,e,n[e])})}return t}({id:"path-layer-".concat(t.slice_id),data:p,getSourceColor:function(t){return t.sourceColor||t.color||[f.r,f.g,f.b,255*f.a]},getTargetColor:function(t){return t.targetColor||t.color||[y.r,y.g,y.b,255*y.a]},strokeWidth:t.stroke_width?t.stroke_width:3},Object(u.a)(t,o,(c=t,function(t){return a.a.createElement("div",{className:"deckgl-tooltip"},a.a.createElement(s.a,{label:"".concat(Object(i.b)("Start (Longitude, Latitude)"),": "),value:"".concat(t.object.sourcePosition[0],", ").concat(t.object.sourcePosition[1])}),a.a.createElement(s.a,{label:"".concat(Object(i.b)("End (Longitude, Latitude)"),": "),value:"".concat(t.object.targetPosition[0],", ").concat(t.object.targetPosition[1])}),c.dimension&&a.a.createElement(s.a,{label:"".concat(c.dimension,": "),value:"".concat(t.object.cat_color)}))}))))}e.default=Object(c.a)(p,function(t){var e=[];return t.forEach(function(t){e.push(t.sourcePosition),e.push(t.targetPosition)}),e})}}]);