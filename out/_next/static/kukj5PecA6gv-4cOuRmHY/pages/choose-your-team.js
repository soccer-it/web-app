(window.webpackJsonp=window.webpackJsonp||[]).push([["7018"],{"+7Xe":function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},"/eQG":function(e,t,n){n("v5Dd");var r=n("WEpk").Object;e.exports=function(e,t){return r.getOwnPropertyDescriptor(e,t)}},"16Al":function(e,t,n){"use strict";var r=n("WbBG");function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},"17x9":function(e,t,n){e.exports=n("16Al")()},"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"4mXO":function(e,t,n){e.exports=n("7TPF")},"5HhQ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){var n=e%t;return n<0?n+t:n};t.default=r},"7HEc":function(e,t,n){"use strict";var r=n("tV5V");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.children,r=e.startIndex,o=e.startX,s=e.pageX,l=e.viewLength,u=e.resistance,c=a.default.Children.count(n)-1,d=r+(o-s)/l;u?d<0?d=Math.exp(d*i.default.RESISTANCE_COEF)-1:d>c&&(d=c+1-Math.exp((c-d)*i.default.RESISTANCE_COEF)):d<0?t=((d=0)-r)*l+s:d>c&&(t=((d=c)-r)*l+s);return{index:d,startX:t}};var a=r(n("q1tI")),i=r(n("UlPe"))},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7VIw":function(e,t,n){"use strict";var r=n("OYUV");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("xZgz")).default;t.default=a},"8SQk":function(e,t,n){"use strict";var r=n("tV5V");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),i=function(e,t){var n=!1,r=function(e){return e?e.key:"empty"};if(e.children.length&&t.children.length){var i=a.default.Children.map(e.children,r)[e.index];null!=i&&i===a.default.Children.map(t.children,r)[t.index]&&(n=!0)}return n};t.default=i},Bp9Y:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=r,e.exports=t.default},FRve:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},G2ut:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},"Jo+v":function(e,t,n){e.exports=n("/eQG")},KJF0:function(e,t,n){"use strict";var r=n("tV5V");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"checkIndexBounds",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"computeIndex",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"constant",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"getDisplaySameSlide",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"mod",{enumerable:!0,get:function(){return l.default}});var a=r(n("rRnn")),i=r(n("7HEc")),o=r(n("UlPe")),s=r(n("8SQk")),l=r(n("5HhQ"))},MOn9:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},NRM5:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},OYUV:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},PTHm:function(e,t,n){var r=n("ZZx6");e.exports=function(e,t){if(null==e)return{};var n,a,i=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},QTTs:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/choose-your-team",function(){var e=n("wib0");return{page:e.default||e}}])},Sq8v:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},UlPe:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={RESISTANCE_COEF:.6,UNCERTAINTY_THRESHOLD:3}},VJ99:function(e,t,n){var r=n("Sq8v"),a=n("FRve");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},WbBG:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},ZZx6:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},c0Fl:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a=function(){};r(n("Bp9Y")).default&&(a=document.addEventListener?function(e,t,n,r){return e.removeEventListener(t,n,r||!1)}:document.attachEvent?function(e,t,n){return e.detachEvent("on"+t,n)}:void 0);var i=a;t.default=i,e.exports=t.default},hR4y:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},jiea:function(e,t,n){var r=n("+7Xe");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},rRnn:function(e,t,n){"use strict";var r=n("tV5V");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),i=(r(n("2W6z")),function(e){e.index;var t=e.children;a.default.Children.count(t)});t.default=i},raBC:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a=function(){};r(n("Bp9Y")).default&&(a=document.addEventListener?function(e,t,n,r){return e.addEventListener(t,n,r||!1)}:document.attachEvent?function(e,t,n){return e.attachEvent("on"+t,function(t){(t=t||window.event).target=t.target||t.srcElement,t.currentTarget=e,n.call(e,t)})}:void 0);var i=a;t.default=i,e.exports=t.default},tV5V:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},v5Dd:function(e,t,n){var r=n("NsO/"),a=n("vwuL").f;n("zn7N")("getOwnPropertyDescriptor",function(){return function(e,t){return a(r(e),t)}})},wib0:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("4C/I"),o=n.n(i);function s(e){var t=e.children,n=e.pageName;return a.a.createElement("main",{className:o.a.baseLayout,"data-page":n},t)}var l=n("szY5"),u=n.n(l);function c(e){var t=e.title,n=e.children;return a.a.createElement("section",{className:u.a.contentSection},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:u.a.title},t)),a.a.createElement(r.Fragment,null,n))}var d=n("UXZV"),p=n.n(d);function f(){return(f=p.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=n("4mXO"),m=n.n(h),v=n("pLtp"),g=n.n(v);function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=g()(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(m.a){var i=m()(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x=n("hfKm"),b=n.n(x);function S(e,t,n){return t in e?b()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=n("7VIw"),E=n.n(w);function T(e){var t=e.children,n=y(e,["children"]);return a.a.createElement(E.a,n,t)}var C=n("Jo+v"),O=n.n(C);var P=n("OzLC"),L=n.n(P),M=n("TSYQ");function N(e){var t=e.name,n=e.banner,r=e.theme,i=e.customClasses,o=void 0===i?{}:i,s=M(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=g()(n);"function"==typeof m.a&&(r=r.concat(m()(n).filter(function(e){return O()(n,e).enumerable}))),r.forEach(function(t){S(e,t,n[t])})}return e}(S({},L.a.singleTeam,!0),o));return a.a.createElement("article",{className:s,"data-theme":r},a.a.createElement("div",{className:"container"},a.a.createElement("figure",{className:L.a.banner},a.a.createElement("img",{src:"/static/images".concat(n),alt:"Ícone representando a camisa do Corinthians"})),a.a.createElement("h1",{className:L.a.title},t),a.a.createElement("a",{className:L.a.link,href:"#"},"selecionar")))}var _=n("6QkB"),X=n.n(_);function R(e){var t=e.teams,n=S({},X.a.teamWrapper,!0);return a.a.createElement("div",{className:X.a.teamsList},a.a.createElement(T,{className:X.a.swipeableWrapper},t.map(function(e){var t=e.slug,r=y(e,["slug"]);return a.a.createElement(N,f({customClasses:n,key:t},r))})))}function D(e){var t=e.teams,n=void 0===t?[]:t;return a.a.createElement(c,{title:"escolha seu time"},a.a.createElement(R,{teams:n}))}var I=[{slug:"COR",name:"Sport Club Corinthians Paulista",theme:"corinthians",banner:"/teams/corinthians-shirt.png"},{slug:"PAL",name:"Sociedade Esportiva Palmeiras",theme:"palmeiras",banner:"/teams/palmeiras-shirt.png"},{slug:"COR",name:"Sport Club Corinthians Paulista",theme:"corinthians",banner:"/teams/corinthians-shirt.png"},{slug:"PAL",name:"Sociedade Esportiva Palmeiras",theme:"palmeiras",banner:"/teams/palmeiras-shirt.png"},{slug:"COR",name:"Sport Club Corinthians Paulista",theme:"corinthians",banner:"/teams/corinthians-shirt.png"},{slug:"PAL",name:"Sociedade Esportiva Palmeiras",theme:"palmeiras",banner:"/teams/palmeiras-shirt.png"},{slug:"COR",name:"Sport Club Corinthians Paulista",theme:"corinthians",banner:"/teams/corinthians-shirt.png"},{slug:"PAL",name:"Sociedade Esportiva Palmeiras",theme:"palmeiras",banner:"/teams/palmeiras-shirt.png"},{slug:"COR",name:"Sport Club Corinthians Paulista",theme:"corinthians",banner:"/teams/corinthians-shirt.png"},{slug:"PAL",name:"Sociedade Esportiva Palmeiras",theme:"palmeiras",banner:"/teams/palmeiras-shirt.png"},{slug:"COR",name:"Sport Club Corinthians Paulista",theme:"corinthians",banner:"/teams/corinthians-shirt.png"},{slug:"PAL",name:"Sociedade Esportiva Palmeiras",theme:"palmeiras",banner:"/teams/palmeiras-shirt.png"},{slug:"COR",name:"Sport Club Corinthians Paulista",theme:"corinthians",banner:"/teams/corinthians-shirt.png"},{slug:"PAL",name:"Sociedade Esportiva Palmeiras",theme:"palmeiras",banner:"/teams/palmeiras-shirt.png"},{slug:"COR",name:"Sport Club Corinthians Paulista",theme:"corinthians",banner:"/teams/corinthians-shirt.png"},{slug:"PAL",name:"Sociedade Esportiva Palmeiras",theme:"palmeiras",banner:"/teams/palmeiras-shirt.png"}];function H(){return a.a.createElement(s,{pageName:"choose-your-team"},a.a.createElement(D,{teams:I}))}n.d(t,"default",function(){return H})},xU8c:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var a,i,o,s,l,u,c,d,p,f,h,m=r(n("Bp9Y")),v="transform";if(t.transform=v,t.animationEnd=o,t.transitionEnd=i,t.transitionDelay=c,t.transitionTiming=u,t.transitionDuration=l,t.transitionProperty=s,t.animationDelay=h,t.animationTiming=f,t.animationDuration=p,t.animationName=d,m.default){var g=function(){for(var e,t,n=document.createElement("div").style,r={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},a=Object.keys(r),i="",o=0;o<a.length;o++){var s=a[o];if(s+"TransitionProperty"in n){i="-"+s.toLowerCase(),e=r[s]("TransitionEnd"),t=r[s]("AnimationEnd");break}}!e&&"transitionProperty"in n&&(e="transitionend");!t&&"animationName"in n&&(t="animationend");return n=null,{animationEnd:t,transitionEnd:e,prefix:i}}();a=g.prefix,t.transitionEnd=i=g.transitionEnd,t.animationEnd=o=g.animationEnd,t.transform=v=a+"-"+v,t.transitionProperty=s=a+"-transition-property",t.transitionDuration=l=a+"-transition-duration",t.transitionDelay=c=a+"-transition-delay",t.transitionTiming=u=a+"-transition-timing-function",t.animationName=d=a+"-animation-name",t.animationDuration=p=a+"-animation-duration",t.animationTiming=f=a+"-animation-delay",t.animationDelay=h=a+"-animation-timing-function"}var y={transform:v,end:i,property:s,timing:u,delay:c,duration:l};t.default=y},xZgz:function(e,t,n){"use strict";var r=n("OYUV");Object.defineProperty(t,"__esModule",{value:!0}),t.getDomTreeShapes=T,t.findNativeHandler=O,t.default=void 0;var a=r(n("G2ut")),i=r(n("PTHm")),o=r(n("MOn9")),s=r(n("NRM5")),l=r(n("VJ99")),u=r(n("hR4y")),c=r(n("jiea")),d=r(n("q1tI")),p=r(n("17x9")),f=(r(n("2W6z")),r(n("xU8c"))),h=r(n("raBC")),m=r(n("c0Fl")),v=n("KJF0");function g(e,t,n,r){return(0,h.default)(e,t,n,r),{remove:function(){(0,m.default)(e,t,n,r)}}}var y={direction:"ltr",display:"flex",willChange:"transform"},x={width:"100%",WebkitFlexShrink:0,flexShrink:0,overflow:"auto"},b={root:{x:{overflowX:"hidden"},"x-reverse":{overflowX:"hidden"},y:{overflowY:"hidden"},"y-reverse":{overflowY:"hidden"}},flexDirection:{x:"row","x-reverse":"row-reverse",y:"column","y-reverse":"column-reverse"},transform:{x:function(e){return"translate(".concat(-e,"%, 0)")},"x-reverse":function(e){return"translate(".concat(e,"%, 0)")},y:function(e){return"translate(0, ".concat(-e,"%)")},"y-reverse":function(e){return"translate(0, ".concat(e,"%)")}},length:{x:"width","x-reverse":"width",y:"height","y-reverse":"height"},rotationMatrix:{x:{x:[1,0],y:[0,1]},"x-reverse":{x:[-1,0],y:[0,1]},y:{x:[0,1],y:[1,0]},"y-reverse":{x:[0,-1],y:[1,0]}},scrollPosition:{x:"scrollLeft","x-reverse":"scrollLeft",y:"scrollTop","y-reverse":"scrollTop"},scrollLength:{x:"scrollWidth","x-reverse":"scrollWidth",y:"scrollHeight","y-reverse":"scrollHeight"},clientLength:{x:"clientWidth","x-reverse":"clientWidth",y:"clientHeight","y-reverse":"clientHeight"}};function S(e,t){var n=t.duration,r=t.easeFunction,a=t.delay;return"".concat(e," ").concat(n," ").concat(r," ").concat(a)}function w(e,t){var n=b.rotationMatrix[t];return{pageX:n.x[0]*e.pageX+n.x[1]*e.pageY,pageY:n.y[0]*e.pageX+n.y[1]*e.pageY}}function E(e){return e.touches=[{pageX:e.pageX,pageY:e.pageY}],e}function T(e,t){for(var n=[];e&&e!==t&&!e.hasAttribute("data-swipeable");){var r=window.getComputedStyle(e);"absolute"===r.getPropertyValue("position")||"hidden"===r.getPropertyValue("overflow-x")?n=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&n.push({element:e,scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,clientWidth:e.clientWidth,clientHeight:e.clientHeight,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}),e=e.parentNode}return n}var C=null;function O(e){var t=e.domTreeShapes,n=e.pageX,r=e.startX,a=e.axis;return t.some(function(e){var t=n>=r;"x"!==a&&"y"!==a||(t=!t);var i=e[b.scrollPosition[a]],o=i>0,s=i+e[b.clientLength[a]]<e[b.scrollLength[a]];return!!(t&&s||!t&&o)&&(C=e.element,!0)})}var P=function(e){function t(e){var n;return(0,o.default)(this,t),(n=(0,l.default)(this,(0,u.default)(t).call(this,e))).rootNode=null,n.containerNode=null,n.ignoreNextScrollEvents=!1,n.viewLength=0,n.startX=0,n.lastX=0,n.vx=0,n.startY=0,n.isSwiping=void 0,n.started=!1,n.startIndex=0,n.transitionListener=null,n.touchMoveListener=null,n.activeSlide=null,n.indexCurrent=null,n.firstRenderTimeout=null,n.setRootNode=function(e){n.rootNode=e},n.setContainerNode=function(e){n.containerNode=e},n.setActiveSlide=function(e){n.activeSlide=e,n.updateHeight()},n.handleSwipeStart=function(e){var t=n.props.axis,r=w(e.touches[0],t);n.viewLength=n.rootNode.getBoundingClientRect()[b.length[t]],n.startX=r.pageX,n.lastX=r.pageX,n.vx=0,n.startY=r.pageY,n.isSwiping=void 0,n.started=!0;var a=window.getComputedStyle(n.containerNode),i=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform");if(i&&"none"!==i){var o=i.split("(")[1].split(")")[0].split(","),s=window.getComputedStyle(n.rootNode),l=w({pageX:parseInt(o[4],10),pageY:parseInt(o[5],10)},t);n.startIndex=-l.pageX/(n.viewLength-parseInt(s.paddingLeft,10)-parseInt(s.paddingRight,10))||0}},n.handleSwipeMove=function(e){if(n.started){if(null===C||C===n.rootNode){var t=n.props,r=t.axis,a=t.children,i=t.ignoreNativeScroll,o=t.onSwitching,s=t.resistance,l=w(e.touches[0],r);if(void 0===n.isSwiping){var u=Math.abs(l.pageX-n.startX),c=Math.abs(l.pageY-n.startY),p=u>c&&u>v.constant.UNCERTAINTY_THRESHOLD;if(!s&&("y"===r||"y-reverse"===r)&&(0===n.indexCurrent&&n.startX<l.pageX||n.indexCurrent===d.default.Children.count(n.props.children)-1&&n.startX>l.pageX))return void(n.isSwiping=!1);if(u>c&&e.preventDefault(),!0===p||c>v.constant.UNCERTAINTY_THRESHOLD)return n.isSwiping=p,void(n.startX=l.pageX)}if(!0===n.isSwiping){e.preventDefault(),n.vx=.5*n.vx+.5*(l.pageX-n.lastX),n.lastX=l.pageX;var f=(0,v.computeIndex)({children:a,resistance:s,pageX:l.pageX,startIndex:n.startIndex,startX:n.startX,viewLength:n.viewLength}),h=f.index,m=f.startX;if(null===C&&!i)if(O({domTreeShapes:T(e.target,n.rootNode),startX:n.startX,pageX:l.pageX,axis:r}))return;m?n.startX=m:null===C&&(C=n.rootNode),n.setIndexCurrent(h);var g=function(){o&&o(h,"move")};!n.state.displaySameSlide&&n.state.isDragging||n.setState({displaySameSlide:!1,isDragging:!0},g),g()}}}else n.handleTouchStart(e)},n.handleSwipeEnd=function(){if(C=null,n.started&&(n.started=!1,!0===n.isSwiping)){var e,t=n.state.indexLatest,r=n.indexCurrent,a=t-r;e=Math.abs(n.vx)>n.props.threshold?n.vx>0?Math.floor(r):Math.ceil(r):Math.abs(a)>n.props.hysteresis?a>0?Math.floor(r):Math.ceil(r):t;var i=d.default.Children.count(n.props.children)-1;e<0?e=0:e>i&&(e=i),n.setIndexCurrent(e),n.setState({indexLatest:e,isDragging:!1},function(){n.props.onSwitching&&n.props.onSwitching(e,"end"),n.props.onChangeIndex&&e!==t&&n.props.onChangeIndex(e,t,{reason:"swipe"}),r===t&&n.handleTransitionEnd()})}},n.handleTouchStart=function(e){n.props.onTouchStart&&n.props.onTouchStart(e),n.handleSwipeStart(e)},n.handleTouchEnd=function(e){n.props.onTouchEnd&&n.props.onTouchEnd(e),n.handleSwipeEnd(e)},n.handleMouseDown=function(e){n.props.onMouseDown&&n.props.onMouseDown(e),e.persist(),n.handleSwipeStart(E(e))},n.handleMouseUp=function(e){n.props.onMouseUp&&n.props.onMouseUp(e),n.handleSwipeEnd(E(e))},n.handleMouseLeave=function(e){n.props.onMouseLeave&&n.props.onMouseLeave(e),n.started&&n.handleSwipeEnd(E(e))},n.handleMouseMove=function(e){n.props.onMouseMove&&n.props.onMouseMove(e),n.started&&n.handleSwipeMove(E(e))},n.handleScroll=function(e){if(n.props.onScroll&&n.props.onScroll(e),e.target===n.rootNode)if(n.ignoreNextScrollEvents)n.ignoreNextScrollEvents=!1;else{var t=n.state.indexLatest,r=Math.ceil(e.target.scrollLeft/e.target.clientWidth)+t;n.ignoreNextScrollEvents=!0,e.target.scrollLeft=0,n.props.onChangeIndex&&r!==t&&n.props.onChangeIndex(r,t,{reason:"focus"})}},n.updateHeight=function(){if(null!==n.activeSlide){var e=n.activeSlide.children[0];void 0!==e&&void 0!==e.offsetHeight&&n.state.heightLatest!==e.offsetHeight&&n.setState({heightLatest:e.offsetHeight})}},n.state={indexLatest:e.index,isDragging:!1,renderOnlyActive:!e.disableLazyLoading,heightLatest:0,displaySameSlide:!0},n.setIndexCurrent(e.index),n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"getChildContext",value:function(){var e=this;return{swipeableViews:{slideUpdateHeight:function(){e.updateHeight()}}}}},{key:"componentDidMount",value:function(){var e=this;this.transitionListener=g(this.containerNode,f.default.end,function(t){t.target===e.containerNode&&e.handleTransitionEnd()}),this.touchMoveListener=g(this.rootNode,"touchmove",function(t){e.props.disabled||e.handleSwipeMove(t)},{passive:!1}),this.props.disableLazyLoading||(this.firstRenderTimeout=setTimeout(function(){e.setState({renderOnlyActive:!1})},0)),this.props.action&&this.props.action({updateHeight:this.updateHeight})}},{key:"componentWillReceiveProps",value:function(e){var t=e.index;"number"==typeof t&&t!==this.props.index&&(this.setIndexCurrent(t),this.setState({displaySameSlide:(0,v.getDisplaySameSlide)(this.props,e),indexLatest:t}))}},{key:"componentWillUnmount",value:function(){this.transitionListener.remove(),this.touchMoveListener.remove(),clearTimeout(this.firstRenderTimeout)}},{key:"setIndexCurrent",value:function(e){if(this.props.animateTransitions||this.indexCurrent===e||this.handleTransitionEnd(),this.indexCurrent=e,this.containerNode){var t=this.props.axis,n=b.transform[t](100*e);this.containerNode.style.WebkitTransform=n,this.containerNode.style.transform=n}}},{key:"handleTransitionEnd",value:function(){this.props.onTransitionEnd&&(this.state.displaySameSlide||this.state.isDragging||this.props.onTransitionEnd())}},{key:"render",value:function(){var e,t,n=this,r=this.props,o=(r.action,r.animateHeight),s=r.animateTransitions,l=r.axis,u=r.children,c=r.containerStyle,p=r.disabled,f=(r.disableLazyLoading,r.enableMouseEvents),h=(r.hysteresis,r.ignoreNativeScroll,r.index,r.onChangeIndex,r.onSwitching,r.onTransitionEnd,r.resistance,r.slideStyle),m=r.slideClassName,v=r.springConfig,g=r.style,w=(r.threshold,(0,i.default)(r,["action","animateHeight","animateTransitions","axis","children","containerStyle","disabled","disableLazyLoading","enableMouseEvents","hysteresis","ignoreNativeScroll","index","onChangeIndex","onSwitching","onTransitionEnd","resistance","slideStyle","slideClassName","springConfig","style","threshold"])),E=this.state,T=E.displaySameSlide,C=E.heightLatest,O=E.indexLatest,P=E.isDragging,L=E.renderOnlyActive,M=p?{}:{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},N=!p&&f?{onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove}:{},_=(0,a.default)({},x,h);if(P||!s||T)e="all 0s ease 0s",t="all 0s ease 0s";else if(e=S("transform",v),t=S("-webkit-transform",v),0!==C){var X=", ".concat(S("height",v));e+=X,t+=X}var R={height:null,WebkitFlexDirection:b.flexDirection[l],flexDirection:b.flexDirection[l],WebkitTransition:t,transition:e};if(!L){var D=b.transform[l](100*this.indexCurrent);R.WebkitTransform=D,R.transform=D}return o&&(R.height=C),d.default.createElement("div",(0,a.default)({ref:this.setRootNode,style:(0,a.default)({},b.root[l],g)},w,M,N,{onScroll:this.handleScroll}),d.default.createElement("div",{ref:this.setContainerNode,style:(0,a.default)({},R,y,c),className:"react-swipeable-view-container"},d.default.Children.map(u,function(e,t){if(L&&t!==O)return null;var r,a=!0;return t===O&&(a=!1,o&&(r=n.setActiveSlide,_.overflowY="hidden")),d.default.createElement("div",{ref:r,style:_,className:m,"aria-hidden":a,"data-swipeable":"true"},e)})))}}]),t}(d.default.Component);P.displayName="ReactSwipableView",P.propTypes={},P.defaultProps={animateHeight:!1,animateTransitions:!0,axis:"x",disabled:!1,disableLazyLoading:!1,enableMouseEvents:!1,hysteresis:.6,ignoreNativeScroll:!1,index:0,threshold:5,springConfig:{duration:"0.35s",easeFunction:"cubic-bezier(0.15, 0.3, 0.25, 1)",delay:"0s"},resistance:!1},P.childContextTypes={swipeableViews:p.default.shape({slideUpdateHeight:p.default.func})};var L=P;t.default=L}},[["QTTs","5d41","9da1","ad9d"]]]);