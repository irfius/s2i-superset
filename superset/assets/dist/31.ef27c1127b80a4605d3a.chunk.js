(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1936:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(1),o=n.n(r),a=n(1937),i=n.n(a);n(2129),n(2128);function u(e){return o.a.createElement("span",{className:"BootstrapSliderWrapper"},o.a.createElement(i.a,e))}},2128:function(e,t,n){},2549:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return b});var r=n(2736),o=n(17),a=n(2550);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=.25,c={LAT_MIN:-90,LAT_MAX:90,LNG_MIN:-180,LNG_MAX:180};function s(e){var t=o.extent(e,function(e){return e[1]}),n=o.extent(e,function(e){return e[0]}),r=t[0]===t[1]?function(e){return[e[0]-u<c.LAT_MIN?c.LAT_MIN:e[0]-u,e[1]+u>c.LAT_MAX?c.LAT_MAX:e[1]+u]}(t):t,a=n[0]===n[1]?function(e){return[e[0]-u<c.LNG_MIN?c.LNG_MIN:e[0]-u,e[1]+u>c.LNG_MAX?c.LNG_MAX:e[1]+u]}(n):n;return[[a[0],r[0]],[a[1],r[1]]]}function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;try{var o=s(t);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){i(e,t,n[t])})}return e}({},e,Object(r.a)({height:e.height,width:e.width,padding:n,bounds:o}))}catch(t){return console.error("Could not auto zoom",t),e}}function p(e,t,n,r){var o,i,u=e,c=n;return u.js_tooltip&&(c=Object(a.a)(u.js_tooltip)),c&&(o=function(e){e.picked?t({content:c(e),x:e.x,y:e.y+30}):t(null)}),u.js_onclick_href?i=function(e){var t=Object(a.a)(u.js_onclick_href)(e);window.open(t)}:u.table_filter&&void 0!==r&&(i=function(e){return r(e.object[u.line_column])}),{onClick:i,onHover:o,pickable:Boolean(o)}}var f={p1:.01,p5:.05,p95:.95,p99:.99};function b(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sum",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return"count"===t?function(e){return e.length}:(e=t in f?function(e,r){var a;return a=n?e.sort(function(e,t){return o.ascending(n(e),n(t))}):e.sort(o.ascending),o.quantile(a,f[t],r)}:o[t],n?function(t){return e(t.map(n))}:function(t){return e(t)})}},2550:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(2581),o=n.n(r),a=n(2582),i=n.n(a),u=n(17),c=n(2553);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={console:console,_:i.a,colors:c,d3array:u};function p(e,t,n){var r={},a="SAFE_EVAL_"+Math.floor(1e6*Math.random());r[a]={};var i=a+"="+e,u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}({},l,t);Object.keys(u).forEach(function(e){r[e]=u[e]});try{return o.a.runInNewContext(i,r,n),r[a]}catch(e){return function(){return e}}}},2553:function(e,t,n){"use strict";n.r(t),n.d(t,"hexToRGB",function(){return o});var r=n(62);function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:255;if(!e)return[0,0,0,t];var n=Object(r.f)(e);return[n.r,n.g,n.b,t]}},2557:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var r=n(226),o=n.n(r),a=n(1),i=n.n(a),u=n(0),c=n.n(u),s=n(2576),l=n(2558);n(2577),n(2566);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){y(e,t,n[t])})}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=2e3,w={viewport:c.a.object.isRequired,layers:c.a.array.isRequired,setControlValue:c.a.func,mapStyle:c.a.string,mapboxApiAccessToken:c.a.string.isRequired,onViewportChange:c.a.func},O=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=h(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?m(r):o).tick=n.tick.bind(m(m(n))),n.onViewportChange=n.onViewportChange.bind(m(m(n))),n.state={previousViewport:e.viewport,timer:setInterval(n.tick,g)},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,i.a.Component),n=t,a=[{key:"getDerivedStateFromProps",value:function(e,t){return e.viewport!==t.viewport?{viewport:b({},e.viewport),previousViewport:t.viewport}:null}}],(r=[{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"onViewportChange",value:function(e){var t=Object.assign({},e),n=b({},this.state.previousViewport,t);this.props.onViewportChange(n)}},{key:"tick",value:function(){var e=this;if(this.state&&!o()(this.state.previousViewport,this.props.viewport)){var t=this.props.setControlValue,n=this.props.viewport;t&&t("viewport",n),this.setState(function(){return{previousViewport:e.props.viewport}})}}},{key:"layers",value:function(){return this.props.layers.some(function(e){return"function"==typeof e})?this.props.layers.map(function(e){return"function"==typeof e?e():e}):this.props.layers}},{key:"render",value:function(){var e=this.props.viewport;return i.a.createElement(s.b,f({},e,{mapStyle:this.props.mapStyle,onViewportChange:this.onViewportChange,mapboxApiAccessToken:this.props.mapboxApiAccessToken}),i.a.createElement(l.i,f({},e,{layers:this.layers(),initWebGLParameters:!0})))}}])&&d(n.prototype,r),a&&d(n,a),t}();O.propTypes=w,O.defaultProps={mapStyle:"light",onViewportChange:function(){},setControlValue:function(){}}},2560:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var r=n(1),o=n.n(r),a=n(0),i=n.n(a);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f={label:i.a.string.isRequired,value:i.a.string.isRequired},b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,l(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",null,this.props.label,o.a.createElement("strong",null,this.props.value))}}])&&c(n.prototype,r),a&&c(n,a),t}();b.propTypes=f},2566:function(e,t,n){},2567:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(8),o=n.n(r);function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=[1,0,1,0,0,0,0];function u(e,t){var n=parseInt(o()(t).format("x"),10);return parseInt(o()(t).add(e).format("x"),10)-n}var c=function(e,t){var n,r,c=o()(Math.min.apply(Math,a(e))),s=o()(Math.max.apply(Math,a(e)));if(-1!==t.indexOf("/")){var l=t.split("/",2);l[0].endsWith("Z")?(r=o()(l[0]),n=o.a.duration(l[1])):(r=o()(l[1]),n=o.a.duration(l[0]))}else r=function(e,t){var n=o()(e).subtract(t),r=e.toArray(),a=n.toArray(),u=r.map(function(e,t){return a[t]!==e}).indexOf(!0),c=r.map(function(e,t){if(t===u){var n=e-a[t];return e-(e-i[t])%n}return t<u||-1===u?e:i[t]});return o()(c)}(c,n=o.a.duration(t));for(var p=o()(r);p<c;)p.add(n);for(;p>c;)p.subtract(n);for(var f=o()(r);f>s;)f.subtract(n);for(;f<s;)f.add(n);var b=null!=t?[p,o()(p).add(n)]:[p,f],y=e.every(function(e){return null===e});return{start:parseInt(p.format("x"),10),end:parseInt(f.format("x"),10),getStep:u.bind(this,n),values:b.map(function(e){return parseInt(e.format("x"),10)}),disabled:y}}},2568:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(0),i=n.n(a),u=n(2557),c=n(1032),s=n.n(c),l=n(28),p=n(1936);n(2569);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v={start:i.a.number.isRequired,step:i.a.number.isRequired,end:i.a.number.isRequired,values:i.a.array.isRequired,onChange:i.a.func,loopDuration:i.a.number,maxFrames:i.a.number,orientation:i.a.oneOf(["horizontal","vertical"]),reversed:i.a.bool,disabled:i.a.bool,range:i.a.bool},m=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=y(t).call(this,e))||"object"!==f(o)&&"function"!=typeof o?h(r):o).state={intervalId:null};var a=e.end-e.start,i=Math.min(e.maxFrames,a/e.step),u=a/i;return n.intervalMilliseconds=e.loopDuration/i,n.increment=u<e.step?e.step:u-u%e.step,n.onChange=n.onChange.bind(h(h(n))),n.play=n.play.bind(h(h(n))),n.pause=n.pause.bind(h(h(n))),n.stepBackward=n.stepBackward.bind(h(h(n))),n.stepForward=n.stepForward.bind(h(h(n))),n.getPlayClass=n.getPlayClass.bind(h(h(n))),n.formatter=n.formatter.bind(h(h(n))),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"componentDidMount",value:function(){s.a.bind(["space"],this.play)}},{key:"componentWillUnmount",value:function(){s.a.unbind(["space"])}},{key:"onChange",value:function(e){this.props.onChange(e.target.value),null!=this.state.intervalId&&this.pause()}},{key:"getPlayClass",value:function(){return null==this.state.intervalId?"fa fa-play fa-lg slider-button":"fa fa-pause fa-lg slider-button"}},{key:"play",value:function(){if(!this.props.disabled)if(null!=this.state.intervalId)this.pause();else{var e=setInterval(this.stepForward,this.intervalMilliseconds);this.setState({intervalId:e})}}},{key:"pause",value:function(){clearInterval(this.state.intervalId),this.setState({intervalId:null})}},{key:"stepForward",value:function(){var e=this,t=this.props,n=t.start,r=t.end,o=t.step,a=t.values;if(!t.disabled){var i=(Array.isArray(a)?a:[a,a+o]).map(function(t){return t+e.increment}),u=i[1]>r?i[0]-n:0;this.props.onChange(i.map(function(e){return e-u}))}}},{key:"stepBackward",value:function(){var e=this,t=this.props,n=t.start,r=t.end,o=t.step,a=t.values;if(!t.disabled){var i=(Array.isArray(a)?a:[a,a+o]).map(function(t){return t-e.increment}),u=i[0]<n?r-i[1]:0;this.props.onChange(i.map(function(e){return e+u}))}}},{key:"formatter",value:function(e){if(this.props.disabled)return Object(l.b)("Data has no time steps");var t=e;return Array.isArray(e)?e[0]===e[1]&&(t=[e[0]]):t=[e],t.map(function(e){return new Date(e).toUTCString()}).join(" : ")}},{key:"render",value:function(){var e=this.props,t=e.start,n=e.end,r=e.step,a=e.orientation,i=e.reversed,u=e.disabled,c=e.range,s=e.values;return o.a.createElement("div",{className:"play-slider"},o.a.createElement("div",{className:"play-slider-controls padded"},o.a.createElement("i",{className:"fa fa-step-backward fa-lg slider-button ",onClick:this.stepBackward}),o.a.createElement("i",{className:this.getPlayClass(),onClick:this.play}),o.a.createElement("i",{className:"fa fa-step-forward fa-lg slider-button ",onClick:this.stepForward})),o.a.createElement("div",{className:"play-slider-scrobbler padded"},o.a.createElement(p.a,{value:c?s:s[0],range:c,formatter:this.formatter,change:this.onChange,min:t,max:n,step:r,orientation:a,reversed:i,disabled:u?"disabled":"enabled"})))}}])&&b(n.prototype,r),a&&b(n,a),t}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){O(e,t,n[t])})}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}m.propTypes=v,m.defaultProps={onChange:function(){},loopDuration:15e3,maxFrames:100,orientation:"horizontal",reversed:!1,disabled:!1,range:!0},n.d(t,"a",function(){return P});var k={getLayers:i.a.func.isRequired,start:i.a.number.isRequired,end:i.a.number.isRequired,getStep:i.a.func,values:i.a.array.isRequired,aggregation:i.a.bool,disabled:i.a.bool,viewport:i.a.object.isRequired,children:i.a.node,mapStyle:i.a.string,mapboxApiAccessToken:i.a.string.isRequired,setControlValue:i.a.func,onViewportChange:i.a.func,onValuesChange:i.a.func},P=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=_(t).call(this,e))||"object"!==g(o)&&"function"!=typeof o?S(r):o).onViewportChange=n.onViewportChange.bind(S(S(n))),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,o.a.Component),n=t,(r=[{key:"onViewportChange",value:function(e){var t=this.props.disabled?w({},e):w({},e,{height:e.height+20});this.props.onViewportChange(t)}},{key:"render",value:function(){var e=this.props,t=e.start,n=e.end,r=e.getStep,a=e.disabled,i=e.aggregation,c=e.children,s=e.getLayers,l=e.values,p=e.onValuesChange,f=e.viewport,b=e.setControlValue,y=e.mapStyle,d=e.mapboxApiAccessToken,h=s(l),v=w({},f,{height:a?f.height:f.height-20});return o.a.createElement("div",null,o.a.createElement(u.a,{viewport:v,layers:h,setControlValue:b,mapStyle:y,mapboxApiAccessToken:d,onViewportChange:this.onViewportChange}),!a&&o.a.createElement(m,{start:t,end:n,step:r(t),values:l,range:!i,onChange:p}),c)}}])&&j(n.prototype,r),a&&j(n,a),t}();P.propTypes=k,P.defaultProps={aggregation:!1,disabled:!1,mapStyle:"light",setControlValue:function(){},onViewportChange:function(){},onValuesChange:function(){}}},2569:function(e,t,n){},2578:function(e,t){},2579:function(e,t){},2580:function(e,t){},2655:function(e,t,n){"use strict";n.r(t),n.d(t,"getLayer",function(){return j});var r=n(1),o=n.n(r),a=n(0),i=n.n(a),u=n(2558),c=n(28),s=n(2568),l=n(2567),p=n(2550),f=n(2549),b=n(2560);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return o.a.createElement("div",{className:"deckgl-tooltip"},o.a.createElement(b.a,{label:"".concat(Object(c.b)("Longitude and Latitude"),": "),value:"".concat(e.object.position[0],", ").concat(e.object.position[1])}),o.a.createElement(b.a,{label:"".concat(Object(c.b)("Weight"),": "),value:"".concat(e.object.weight)}))}function j(e,t,n,r,o,a,i){var c=e,s=c.color_picker,l=t.data.features.map(function(e){return g({},e,{color:[s.r,s.g,s.b,255*s.a]})});if(c.js_data_mutator){var b=Object(p.a)(c.js_data_mutator);l=b(l)}return null!=i&&i.forEach(function(e){l=l.filter(e)}),new u.h(g({id:"screengrid-layer-".concat(c.slice_id),data:l,pickable:!0,cellSizePixels:c.grid_size,minColor:[s.r,s.g,s.b,0],maxColor:[s.r,s.g,s.b,255*s.a],outline:!1,getWeight:function(e){return e.weight||0}},Object(f.a)(c,r,O)))}var _={formData:i.a.object.isRequired,payload:i.a.object.isRequired,setControlValue:i.a.func.isRequired,viewport:i.a.object.isRequired,onAddFilter:i.a.func,setTooltip:i.a.func},C=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=h(t).call(this,e))||"object"!==y(o)&&"function"!=typeof o?m(r):o).state=t.getDerivedStateFromProps(e),n.getLayers=n.getLayers.bind(m(m(n))),n.onValuesChange=n.onValuesChange.bind(m(m(n))),n.onViewportChange=n.onViewportChange.bind(m(m(n))),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.PureComponent),n=t,a=[{key:"getDerivedStateFromProps",value:function(e,t){if(t&&e.payload.form_data===t.formData)return null;var n=e.payload.data.features||[],r=n.map(function(e){return e.__timestamp}),o=e.payload.form_data.time_grain_sqla||e.payload.form_data.granularity||"P1D",a=Object(l.a)(r,o);return{start:a.start,end:a.end,getStep:a.getStep,values:a.values,disabled:a.disabled,viewport:e.formData.autozoom?Object(f.b)(e.viewport,n.map(function(e){return e.position})):e.viewport,selected:[],lastClick:0,formData:e.payload.form_data}}}],(r=[{key:"onValuesChange",value:function(e){this.setState({values:Array.isArray(e)?e:[e,e+this.state.getStep(e)]})}},{key:"onViewportChange",value:function(e){this.setState({viewport:e})}},{key:"getLayers",value:function(e){var t=[];return e[0]===e[1]||e[1]===this.end?t.push(function(t){return t.__timestamp>=e[0]&&t.__timestamp<=e[1]}):t.push(function(t){return t.__timestamp>=e[0]&&t.__timestamp<e[1]}),[j(this.props.formData,this.props.payload,this.props.onAddFilter,this.props.setTooltip)]}},{key:"render",value:function(){var e=this.props,t=e.formData,n=e.payload,r=e.setControlValue;return o.a.createElement("div",null,o.a.createElement(s.a,{getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,onValuesChange:this.onValuesChange,disabled:this.state.disabled,viewport:this.state.viewport,onViewportChange:this.onViewportChange,mapboxApiAccessToken:n.data.mapboxApiKey,mapStyle:t.mapbox_style,setControlValue:r,aggregation:!0}))}}])&&d(n.prototype,r),a&&d(n,a),t}();C.propTypes=_,C.defaultProps={onAddFilter:function(){},setTooltip:function(){}},t.default=C}}]);