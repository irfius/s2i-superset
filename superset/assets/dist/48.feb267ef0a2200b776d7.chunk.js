(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{2868:function(t,n,r){var e=r(2874).dispatch,a=Math.PI/180,o=64,i=2048;function u(t){return t.text}function l(){return"serif"}function f(){return"normal"}function c(t){return Math.sqrt(t.value)}function s(){return 30*(~~(6*Math.random())-3)}function h(){return 1}function y(t,n,r,e){if(!n.sprite){var u=t.context,l=t.ratio;u.clearRect(0,0,(o<<5)/l,i/l);var f=0,c=0,s=0,h=r.length;for(--e;++e<h;){n=r[e],u.save(),u.font=n.style+" "+n.weight+" "+~~((n.size+1)/l)+"px "+n.font;var y=u.measureText(n.text+"m").width*l,x=n.size<<1;if(n.rotate){var d=Math.sin(n.rotate*a),p=Math.cos(n.rotate*a),v=y*p,g=y*d,w=x*p,m=x*d;y=Math.max(Math.abs(v+m),Math.abs(v-m))+31>>5<<5,x=~~Math.max(Math.abs(g+w),Math.abs(g-w))}else y=y+31>>5<<5;if(x>s&&(s=x),f+y>=o<<5&&(f=0,c+=s,s=0),c+x>=i)break;u.translate((f+(y>>1))/l,(c+(x>>1))/l),n.rotate&&u.rotate(n.rotate*a),u.fillText(n.text,0,0),n.padding&&(u.lineWidth=2*n.padding,u.strokeText(n.text,0,0)),u.restore(),n.width=y,n.height=x,n.xoff=f,n.yoff=c,n.x1=y>>1,n.y1=x>>1,n.x0=-n.x1,n.y0=-n.y1,n.hasText=!0,f+=y}for(var M=u.getImageData(0,0,(o<<5)/l,i/l).data,b=[];--e>=0;)if((n=r[e]).hasText){for(var z=(y=n.width)>>5,k=(x=n.y1-n.y0,0);k<x*z;k++)b[k]=0;if(null==(f=n.xoff))return;c=n.yoff;for(var S=0,I=-1,O=0;O<x;O++){for(k=0;k<y;k++){var T=z*O+(k>>5),_=M[(c+O)*(o<<5)+(f+k)<<2]?1<<31-k%32:0;b[T]|=_,S|=_}S?I=O:(n.y0++,x--,O--,c++)}n.y1=n.y0+I,n.sprite=b.slice(0,(n.y1-n.y0)*z)}}}function x(t,n,r){r>>=5;for(var e,a=t.sprite,o=t.width>>5,i=t.x-(o<<4),u=127&i,l=32-u,f=t.y1-t.y0,c=(t.y+t.y0)*r+(i>>5),s=0;s<f;s++){e=0;for(var h=0;h<=o;h++)if((e<<l|(h<o?(e=a[s*o+h])>>>u:0))&n[c+h])return!0;c+=r}return!1}function d(t,n){var r=t[0],e=t[1];n.x+n.x0<r.x&&(r.x=n.x+n.x0),n.y+n.y0<r.y&&(r.y=n.y+n.y0),n.x+n.x1>e.x&&(e.x=n.x+n.x1),n.y+n.y1>e.y&&(e.y=n.y+n.y1)}function p(t){var n=t[0]/t[1];return function(t){return[n*(t*=.1)*Math.cos(t),t*Math.sin(t)]}}function v(){return document.createElement("canvas")}function g(t){return"function"==typeof t?t:function(){return t}}t.exports=function(){var t=[256,256],n=u,r=l,a=c,m=f,M=f,b=s,z=h,k=p,S=[],I=1/0,O=e("word","end"),T=null,_=Math.random,E={},q=v;function C(n,r,e){t[0],t[1];for(var a,o,i,u,l,f=r.x,c=r.y,s=Math.sqrt(t[0]*t[0]+t[1]*t[1]),h=k(t),y=_()<.5?1:-1,d=-y;(a=h(d+=y))&&(o=~~a[0],i=~~a[1],!(Math.min(Math.abs(o),Math.abs(i))>=s));)if(r.x=f+o,r.y=c+i,!(r.x+r.x0<0||r.y+r.y0<0||r.x+r.x1>t[0]||r.y+r.y1>t[1]||e&&x(r,n,t[0])||e&&(l=e,!((u=r).x+u.x1>l[0].x&&u.x+u.x0<l[1].x&&u.y+u.y1>l[0].y&&u.y+u.y0<l[1].y)))){for(var p,v=r.sprite,g=r.width>>5,w=t[0]>>5,m=r.x-(g<<4),M=127&m,b=32-M,z=r.y1-r.y0,S=(r.y+r.y0)*w+(m>>5),I=0;I<z;I++){p=0;for(var O=0;O<=g;O++)n[S+O]|=p<<b|(O<g?(p=v[I*g+O])>>>M:0);S+=w}return delete r.sprite,!0}return!1}return E.canvas=function(t){return arguments.length?(q=g(t),E):q},E.start=function(){var e=function(t){t.width=t.height=1;var n=Math.sqrt(t.getContext("2d").getImageData(0,0,1,1).data.length>>2);t.width=(o<<5)/n,t.height=i/n;var r=t.getContext("2d");return r.fillStyle=r.strokeStyle="red",r.textAlign="center",{context:r,ratio:n}}(q()),u=function(t){var n=[],r=-1;for(;++r<t;)n[r]=0;return n}((t[0]>>5)*t[1]),l=null,f=S.length,c=-1,s=[],h=S.map(function(t,e){return t.text=n.call(this,t,e),t.font=r.call(this,t,e),t.style=m.call(this,t,e),t.weight=M.call(this,t,e),t.rotate=b.call(this,t,e),t.size=~~a.call(this,t,e),t.padding=z.call(this,t,e),t}).sort(function(t,n){return n.size-t.size});return T&&clearInterval(T),T=setInterval(x,0),x(),E;function x(){for(var n=Date.now();Date.now()-n<I&&++c<f&&T;){var r=h[c];r.x=t[0]*(_()+.5)>>1,r.y=t[1]*(_()+.5)>>1,y(e,r,h,c),r.hasText&&C(u,r,l)&&(s.push(r),O.call("word",E,r),l?d(l,r):l=[{x:r.x+r.x0,y:r.y+r.y0},{x:r.x+r.x1,y:r.y+r.y1}],r.x-=t[0]>>1,r.y-=t[1]>>1)}c>=f&&(E.stop(),O.call("end",E,s,l))}},E.stop=function(){return T&&(clearInterval(T),T=null),E},E.timeInterval=function(t){return arguments.length?(I=null==t?1/0:t,E):I},E.words=function(t){return arguments.length?(S=t,E):S},E.size=function(n){return arguments.length?(t=[+n[0],+n[1]],E):t},E.font=function(t){return arguments.length?(r=g(t),E):r},E.fontStyle=function(t){return arguments.length?(m=g(t),E):m},E.fontWeight=function(t){return arguments.length?(M=g(t),E):M},E.rotate=function(t){return arguments.length?(b=g(t),E):b},E.text=function(t){return arguments.length?(n=g(t),E):n},E.spiral=function(t){return arguments.length?(k=w[t]||t,E):k},E.fontSize=function(t){return arguments.length?(a=g(t),E):a},E.padding=function(t){return arguments.length?(z=g(t),E):z},E.random=function(t){return arguments.length?(_=t,E):_},E.on=function(){var t=O.on.apply(O,arguments);return t===O?E:t},E};var w={archimedean:p,rectangular:function(t){var n=4*t[0]/t[1],r=0,e=0;return function(t){var a=t<0?-1:1;switch(Math.sqrt(1+4*a*t)-a&3){case 0:r+=n;break;case 1:e+=4;break;case 2:r-=n;break;default:e-=4}return[r,e]}}}},2874:function(t,n,r){"use strict";r.r(n);var e={value:function(){}};function a(){for(var t,n=0,r=arguments.length,e={};n<r;++n){if(!(t=arguments[n]+"")||t in e)throw new Error("illegal type: "+t);e[t]=[]}return new o(e)}function o(t){this._=t}function i(t,n){for(var r,e=0,a=t.length;e<a;++e)if((r=t[e]).name===n)return r.value}function u(t,n,r){for(var a=0,o=t.length;a<o;++a)if(t[a].name===n){t[a]=e,t=t.slice(0,a).concat(t.slice(a+1));break}return null!=r&&t.push({name:n,value:r}),t}o.prototype=a.prototype={constructor:o,on:function(t,n){var r,e,a=this._,o=(e=a,(t+"").trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})),l=-1,f=o.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++l<f;)if(r=(t=o[l]).type)a[r]=u(a[r],t.name,n);else if(null==n)for(r in a)a[r]=u(a[r],t.name,null);return this}for(;++l<f;)if((r=(t=o[l]).type)&&(r=i(a[r],t.name)))return r},copy:function(){var t={},n=this._;for(var r in n)t[r]=n[r].slice();return new o(t)},call:function(t,n){if((r=arguments.length-2)>0)for(var r,e,a=new Array(r),o=0;o<r;++o)a[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,r=(e=this._[t]).length;o<r;++o)e[o].value.apply(n,a)},apply:function(t,n,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var e=this._[t],a=0,o=e.length;a<o;++a)e[a].value.apply(n,r)}};var l=a;r.d(n,"dispatch",function(){return l})},2900:function(t,n,r){"use strict";r.r(n);var e=r(849),a=r(492),o=r.n(a),i=r(0),u=r.n(i),l=r(2868),f=r.n(l),c=r(158),s={square:function(){return 90*Math.floor(2*Math.random())},flat:function(){return 0},random:function(){return 30*Math.floor(6*Math.random()-3)}},h={data:u.a.arrayOf(u.a.shape({size:u.a.number,text:u.a.string})),width:u.a.number,height:u.a.number,rotation:u.a.string,sizeRange:u.a.arrayOf(u.a.number),colorScheme:u.a.string};function y(t,n){var r=n.data,e=n.width,a=n.height,i=n.rotation,u=n.sizeRange,l=n.colorScheme,h=o.a.select(t);h.classed("superset-legacy-chart-word-cloud",!0);var y=s[i]||s.flat,x=o.a.scale.linear().range(u).domain(o.a.extent(r,function(t){return t.size})),d=f()().size([e,a]).words(r).padding(5).rotate(y).font("Helvetica").fontWeight("bold").fontSize(function(t){return x(t.size)}),p=c.CategoricalColorNamespace.getScale(l);d.on("end",function(t){h.selectAll("*").remove();var n=d.size(),r=n[0],e=n[1];h.append("svg").attr("width",r).attr("height",e).append("g").attr("transform","translate("+r/2+","+e/2+")").selectAll("text").data(t).enter().append("text").style("font-size",function(t){return t.size+"px"}).style("font-weight","bold").style("font-family","Helvetica").style("fill",function(t){return p(t.text)}).attr("text-anchor","middle").attr("transform",function(t){return"translate("+t.x+", "+t.y+") rotate("+t.rotate+")"}).text(function(t){return t.text})}).start()}y.displayName="WordCloud",y.propTypes=h;var x=y;n.default=Object(e.a)(x)}}]);