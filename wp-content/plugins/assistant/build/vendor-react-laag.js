!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=219)}({0:function(e,t){e.exports=React},21:function(e,t){e.exports=ReactDOM},219:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"Arrow",(function(){return ue})),r.d(n,"ToggleLayer",(function(){return oe})),r.d(n,"Transition",(function(){return ge})),r.d(n,"anchor",(function(){return P})),r.d(n,"useBreakpoint",(function(){return he})),r.d(n,"useHover",(function(){return fe})),r.d(n,"useToggleLayer",(function(){return ae})),r.d(n,"useTooltip",(function(){return de}));var o=r(0),i=r.n(o),c=r(21);function l(e,t,r,n=!0,i=!1){return Object(o.useEffect)((()=>{if(!n||!e)return;const o=r,c=Array.isArray(e)?e:[e],l=Array.isArray(t)?t:[t];return c.forEach((e=>{l.forEach((t=>{e.addEventListener(t,o,i)}))})),()=>{c.forEach((e=>{l.forEach((t=>{e.removeEventListener(t,o,i)}))}))}}),[r,e,n,t,i])}const s=i.a.createContext({});function u(e,t){if(e===t)return!0;if(e.children&&e.children.length>0)for(let r=0;r<e.children.length;r++){const n=e.children[r];if(n&&u(n,t))return!0}return!1}function a({refs:e,children:t}){return"function"==typeof i.a.useContext(s)?t:i.a.createElement(s.Provider,{value:i.a.useCallback((t=>{e.current.add(t)}),[])},t)}function f(e,t){const[r]=i.a.useState(["click"]);!function(e){const t=i.a.useContext(s);i.a.useEffect((()=>{const[r]=e.current.values();"function"==typeof t&&r&&t(r)}),[t,e])}(e),l("undefined"!=typeof document?document:null,r,i.a.useCallback((r=>{for(const t of e.current)if(t.current&&u(t.current,r.target))return;t()}),[t]),!0,!0)}function h(e,t,r,n=!0){l(Object(o.useMemo)((()=>void 0!==r?[r,...e]:[]),[e]),"scroll",t,n)}function g(e,t,r=!0){l(void 0!==t?t:null,"resize",e,r)}const d="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;function p(e,t,r,n,i,c){const l=Object(o.useRef)(i);l.current=i;const s=e||(void 0===c?class{}:c.ResizeObserver);if(!s)throw new Error("This browser does not support `ResizeObserver` out of the box. Please provide a polyfill as a prop.");const u=Object(o.useRef)(new s((()=>{t.current&&l.current()})));return d((()=>{n?r&&u.current.observe(r):(r&&u.current.unobserve(r),t.current&&u.current.unobserve(t.current))}),[n,r]),Object(o.useEffect)((()=>()=>{u.current.disconnect()}),[]),u.current}const O={};function T(e){return null!=e}function m(e,t){const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let o=0;o<Math.max(r.length,n.length);o++){const i=r[o]||n[o];if(e[i]!==t[i])return!1}return!0}function y(e,t){return!m(e.layer,t.layer)||!m(e.arrow,t.arrow)}function b(e){return{top:0,left:0,right:e?e.innerWidth:0,bottom:e?e.innerHeight:0,height:e?e.innerHeight:0,width:e?e.innerWidth:0}}const w=e=>parseFloat(e.replace("px",""));function E(e,t){if(!t)return{width:0,height:0};const{width:r,height:n,boxSizing:o,borderLeft:i,borderRight:c,borderTop:l,borderBottom:s,paddingLeft:u,paddingRight:a,paddingTop:f,paddingBottom:h}=t.getComputedStyle(e);return{width:"border-box"===o?w(r):[r,i,c,u,a].reduce(((e,t)=>e+(t?w(t):0)),0),height:"border-box"===o?w(n):[n,l,s,f,h].reduce(((e,t)=>e+(t?w(t):0)),0)}}function R(e){return{top:e.top,left:e.left,right:e.right,bottom:e.bottom,width:e.width,height:e.height}}function v(e,{min:t,max:r}){return e<t?t:e>r?r:e}function C(e){const[t]=Object(o.useState)({layer:O,arrow:O,layerSide:e.split("_")[0].toLowerCase()}),[r,n]=Object(o.useState)(t),i=Object(o.useRef)(r);return{styles:r,lastStyles:i,setStyles:n,resetLastStyles:()=>{i.current=t}}}const P={BOTTOM_LEFT:"BOTTOM_LEFT",BOTTOM_RIGHT:"BOTTOM_RIGHT",BOTTOM_CENTER:"BOTTOM_CENTER",TOP_LEFT:"TOP_LEFT",TOP_CENTER:"TOP_CENTER",TOP_RIGHT:"TOP_RIGHT",LEFT_BOTTOM:"LEFT_BOTTOM",LEFT_CENTER:"LEFT_CENTER",LEFT_TOP:"LEFT_TOP",RIGHT_BOTTOM:"RIGHT_BOTTOM",RIGHT_CENTER:"RIGHT_CENTER",RIGHT_TOP:"RIGHT_TOP"},S=Object.keys(P);function L(e){return e.startsWith("TOP_")||e.startsWith("BOTTOM_")?"Y":"X"}function j(e){return"TOP"===e||"BOTTOM"===e}function B(e){const[t,r]=e.split("_");return{primary:t,secondary:r}}function M(e){return"CENTER"===e?"center":B(e).primary.toLowerCase()}function _(e,t,r,n,o){const{primary:i,secondary:c}="CENTER"!==e?B(e):{primary:n,secondary:"CENTER"};let l=S.map(((e,t)=>function(e,t,r,n){const o=j(t);return e<3?t:e<6?o?r:n:e<9?o?["LEFT","RIGHT"].filter((e=>e!==r))[0]:["TOP","BOTTOM"].filter((e=>e!==n))[0]:o?["TOP","BOTTOM"].filter((e=>e!==t))[0]:["LEFT","RIGHT"].filter((e=>e!==t))[0]}(t,i,r,n)+"_"+function(e,t,r,n){const o=j(t),i=n.trigger.height>n.layer.height,c=n.trigger.width>n.layer.width;switch(e){case 9:case 0:return r;case 1:case 10:return"CENTER"===r?o?"RIGHT":"BOTTOM":"CENTER";case 4:case 7:return"CENTER";case 2:case 11:return o?["LEFT","RIGHT"].filter((e=>e!==r))[0]:["TOP","BOTTOM"].filter((e=>e!==r))[0];case 3:case 6:return o?"BOTTOM"===t?i?"BOTTOM":"TOP":i?"TOP":"BOTTOM":"LEFT"===t?c?"LEFT":"RIGHT":c?"RIGHT":"LEFT";case 5:case 8:return o?"BOTTOM"===t?i?"TOP":"BOTTOM":i?"BOTTOM":"TOP":"LEFT"===t?c?"RIGHT":"LEFT":c?"LEFT":"RIGHT"}return"LEFT"}(t,i,c,o))).filter((e=>t.indexOf(e)>-1));return-1===l.indexOf(e)&&(l=[e,...l]),l}function x(e,t,r,n){const o="TOP"===e||"BOTTOM"===e?"top":"left",i="TOP"===e||"BOTTOM"===e?"height":"width";return"TOP"===e||"LEFT"===e?{[o]:t.trigger[o]-t.layer[i]-(t.relativeParent[o]-r[o])-n}:{[o]:t.trigger[o]+t.trigger[i]-(t.relativeParent[o]-r[o])+n}}function F(e,t,r,n,o){return v(e.trigger[n]-e.relativeParent[n]+t[n]+e.trigger[o]/2-e.layer[o]/2-r,H(e,t)[n])}function H(e,t){const r=e.trigger.top-e.relativeParent.top+t.top,n=e.trigger.left-e.relativeParent.left+t.left;return{top:{min:r-(e.layer.height-e.arrow.height),max:r+(e.trigger.height-e.arrow.height)},left:{min:n-(e.layer.width-e.arrow.width),max:n+(e.trigger.width-e.arrow.width)}}}function A(e,t,r,n,o){if("CENTER"===e){const e="X"===o?"top":"left";return{[e]:F(t,r,n,e,"X"===o?"height":"width")}}const i="TOP"===e||"BOTTOM"===e?"top":"left",c="TOP"===e||"BOTTOM"===e?"height":"width";return"TOP"===e||"LEFT"===e?{[i]:v(t.trigger[i]-t.relativeParent[i]+r[i]+n,H(t,r)[i])}:{[i]:v(t.trigger[i]+t.trigger[c]-t.layer[c]-(t.relativeParent[i]-r[i])-n,H(t,r)[i])}}const I={TOP:{side1:"bottom",side2:"top",size:"height",factor:-1},BOTTOM:{side1:"top",side2:"bottom",size:"height",factor:1},LEFT:{side1:"right",side2:"left",size:"width",factor:-1},RIGHT:{side1:"left",side2:"right",size:"width",factor:1}};function N(e,t,r,n,o){const i=e[n]+e[o]/2-t[o]/2-r;return{[n]:i,["left"===n?"right":"bottom"]:i+t[o]}}function z({trigger:e,layer:t,anchor:r,triggerOffset:n,scrollOffset:o=0,offsetSecondary:i=0,layerDimensions:c}){let l,s;const u=c?function(e,t,r){const n="function"==typeof r?r(M(t)):r;return{...R(e),...n}}(t,r,c):t;if("CENTER"===r)l=N(e,u,0,"top","height"),s=N(e,u,0,"left","width");else{const{primary:t,secondary:o}=B(r),c=L(r);l=function(e,t,r,n){const{side1:o,side2:i,size:c,factor:l}=I[e],s=t[i]+n*l;return{[o]:s,[i]:s+r[c]*l}}(t,e,u,n),s=function(e,t,r,n,o){if("CENTER"===e)return N(t,r,n,"X"===o?"top":"left","X"===o?"height":"width");const{side1:i,side2:c,size:l,factor:s}=I[e],u=t[c]-n*s;return{[c]:u,[i]:u-r[l]*s}}(o,e,u,i,c)}const a={...u,...l,...s};return a.top=a.top-o,a.right=a.right+o,a.left=a.left-o,a.bottom=a.bottom+o,a}const k=["bottom","top","left","right"];function G(e,t){return{top:e.top-t.top,bottom:t.bottom-e.bottom,left:e.left-t.left,right:t.right-e.right}}function X(e,t){return t.map((t=>G(e,t)))}function D(e,t){return t.some((t=>e.bottom<=t.top||e.right<=t.left||e.top>=t.bottom||e.left>=t.right))}function Y(e,t){return X(e,t).every((e=>k.every((t=>e[t]>=0))))}function W(e){const t=e.reduce(((e,t)=>(k.forEach((r=>{e[r]=[...e[r],t[r]]})),e)),{top:[],bottom:[],left:[],right:[]});return k.reduce(((e,r)=>(e[r]=t[r].sort(((e,t)=>e-t))[0],e)),{})}function q(e,t){return t.map((t=>function(e,t){const r=G(e,t),{width:n,height:o}=k.filter((e=>r[e]<0)).reduce(((e,t)=>{const n="top"===t||"bottom"===t?"height":"width";return{...e,[n]:e[n]+r[t]}}),e),i=n*o;return n<0&&o<0?-i:i}(e,t))).sort(((e,t)=>e-t))[0]}function V(e,t,r,n,o){return Y(z({anchor:e,trigger:t.trigger,layer:t.layer,triggerOffset:r,scrollOffset:n,layerDimensions:o}),t.scrollParents)}function Z(e,t,r,n){return X(z({anchor:e,trigger:t.trigger,layer:t.layer,triggerOffset:r,scrollOffset:n,layerDimensions:null}),t.scrollParents)}function J(e,t,r){return("top"===e||"bottom"===e)&&r.width>t.width||("left"===e||"right"===e)&&r.height>t.height}function K(e,t,r,n,o){return t.map((t=>{const i=z({anchor:t,layer:e.layer,trigger:e.trigger,scrollOffset:n,triggerOffset:r,layerDimensions:o});return{anchor:t,square:q(i,e.scrollParents)-function(e,t,r,n){const o=L(e);return(t["X"===o?"width":"height"]-r-2*n)*(t["X"===o?"height":"width"]-r-2*n)}(t,i,r,n)}})).sort(((e,t)=>t.square-e.square))[0].anchor}function Q(e,t,r,n,o){const i=L(e);return function(e){const t=W(e);return k.filter((e=>t[e]<0))}(Z(t,r,n,o)).find((e=>"X"===i?"top"===e||"bottom"===e:"left"===e||"right"===e))}function U({rects:e,scrollTop:t,scrollLeft:r,triggerOffset:n,scrollOffset:o,possibleAnchors:i,preferedAnchor:c,preferedX:l,preferedY:s,autoAdjust:u,snapToAnchor:a,layerDimensions:f}){const h=_(c,i,l,s,e),g=u?function(e,t,r,n,o){return t.find((t=>V(t,e,r,n,o)))||K(e,t,r,n,o)}(e,h,n,o,f):c,d=u&&!a&&"CENTER"!==g?function(e,t,r,n,o){const{primary:i}=B(e),c=function(e,t){return t.filter((t=>t.startsWith(e)))}(i,t),l=0===c.indexOf(e),s=V(e,r,n,o,null);if(l&&s)return 0;const u=Q(e,c.find((e=>!V(e,r,n,o,null))),r,n,o);if(!u)return 0;let a=-W(Z(e,r,n,o))[u];const f=J(M(e),r.layer,r.trigger),h=e.includes("_CENTER"),g=e.includes("_LEFT"),d=e.includes("_TOP");return f&&(g&&"right"===u||"left"===u||d&&"bottom"===u||"top"===u)?a=-a:f||!h||"top"!==u&&"left"!==u||(a=-a),a}(g,h,e,n,o):0,p=function({anchor:e,rects:t,triggerOffset:r,offsetSecondary:n,scrollLeft:o,scrollTop:i}){const c={left:o,top:i};if("CENTER"===e)return{top:F(t,c,0,"top","height"),left:F(t,c,0,"left","width")};const{primary:l,secondary:s}=B(e),u=L(e);return{...x(l,t,c,r),...A(s,t,c,n,u)}}({anchor:g,rects:e,triggerOffset:n,offsetSecondary:d,scrollLeft:r,scrollTop:t}),O=z({anchor:g,trigger:e.trigger,layer:e.layer,triggerOffset:n,offsetSecondary:d,layerDimensions:f});return f&&(p.width=O.width,p.height=O.height),{layerStyle:p,layerRect:O,anchor:g}}function $(e,t){const r=e.querySelector("[data-arrow]");if(!r)return{top:0,bottom:0,left:0,right:0,width:0,height:0};const n=r.getBoundingClientRect();return{...R(n),width:n.width+2*t,height:n.height+2*t}}const ee={autoAdjust:!1,snapToAnchor:!1,anchor:"TOP_CENTER",layerDimensions:null,possibleAnchors:S,preferX:"RIGHT",preferY:"BOTTOM",scrollOffset:10,triggerOffset:0,arrowOffset:0};function te({triggerRect:e,layerElement:t,relativeParentElement:r,scrollParents:n,placement:o={},environment:i,fixed:c}){if(0===e.height)return;if(!t)return;const l=c?[b(i)]:[...n.map((e=>function(e,t,r){const n=e.width-t,o=e.height-r;return{left:e.left,top:e.top,width:e.width-n,right:e.right-n,height:e.height-o,bottom:e.bottom-o}}(e.getBoundingClientRect(),e.clientWidth,e.clientHeight))),b(i)],s={autoAdjust:o.autoAdjust||ee.autoAdjust,snapToAnchor:o.snapToAnchor||ee.snapToAnchor,triggerOffset:T(o.triggerOffset)?o.triggerOffset:ee.triggerOffset,scrollOffset:T(o.scrollOffset)?o.scrollOffset:ee.scrollOffset,possibleAnchors:o.possibleAnchors||ee.possibleAnchors,preferedAnchor:o.anchor||ee.anchor,preferedX:o.preferX||ee.preferX,preferedY:o.preferY||ee.preferY,scrollLeft:r===document.body?0:r.scrollLeft,scrollTop:r===document.body?0:r.scrollTop,relativeParentElement:r,layerDimensions:o.layerDimensions||ee.layerDimensions},u=t.getBoundingClientRect(),a={layer:{top:u.top,left:u.left,right:u.right,bottom:u.bottom,...E(t,i)},relativeParent:r.getBoundingClientRect(),scrollParents:l,trigger:e,arrow:$(t,o.arrowOffset||ee.arrowOffset)},{layerRect:f,layerStyle:h,anchor:g}=U({rects:a,...s});c&&(h.top=f.top,h.left=f.left);const d=M(g);return{styles:{layer:h,arrow:"CENTER"===g?O:function(e,t,r,n){const o=J(r,e,t),i={left:{min:n.width/2,max:e.width-n.width/2},top:{min:n.height/2,max:e.height-n.height/2}},c=function(e,t,r){const n=e.left+e.width/2-t.left-r.width/2,o=e.right-e.width/2-t.right+r.width/2,i=e.top+e.height/2-t.top-r.height/2,c=e.bottom-e.height/2-t.bottom+r.height/2;return{left:n<0?-n:0,right:o>0?-o:0,top:i<0?-i:0,bottom:c>0?-c:0}}(e,t,n);return"bottom"===r?{bottom:"100%",top:null,left:v(o?e.width/2+(c.left+c.right):t.left+t.width/2-e.left,i.left),right:null}:"right"===r?{right:"100%",left:null,top:v(o?e.height/2+(c.top+c.bottom):t.top+t.height/2-e.top,i.top),bottom:null}:"top"===r?{top:"100%",bottom:null,left:v(o?e.width/2+(c.left+c.right):t.left+t.width/2-e.left,i.left),right:null}:{left:"100%",right:null,top:v(o?e.height/2+(c.top+c.bottom):t.top+t.height/2-e.top,i.top),bottom:null}}(f,e,d,a.arrow),layerSide:d},layerRect:f}}function re(e,t){const r=[];if(!e||!t)return r;if(e===document.body)return r;const{overflow:n,overflowX:o,overflowY:i}=t.getComputedStyle(e);return[n,o,i].some((e=>"auto"===e||"scroll"===e))&&r.push(e),[...r,...re(e.parentElement,t)]}function ne(e,t,r){return function(e,t){const[r,n]=Object(o.useState)(e||null),i=Object(o.useRef)(null);return[Object(o.useCallback)((e=>{e&&e!==i.current&&(i.current=e,n(t?t(e):e))}),[]),r,i]}({triggerElement:null,relativeParentElement:null,scrollParents:[]},Object(o.useCallback)((e=>{const t=re(e,r),n=t[0]||document.body;return n===document.body&&(document.body.style.position="relative"),{triggerElement:e,relativeParentElement:n,scrollParents:t}}),[]))}const oe=({children:e,renderLayer:t,placement:r={},onStyle:n,isOpen:i,closeOnOutsideClick:l,onOutsideClick:s,onDisappear:u,closeOnDisappear:m,fixed:w,container:E,environment:R=("undefined"!=typeof window?window:void 0),...v})=>{const[P,{relativeParentElement:S,triggerElement:L,scrollParents:j},B]=ne(0,0,R),{styles:M,setStyles:_,lastStyles:x,resetLastStyles:F}=C(r.anchor||ee.anchor),H=Object(o.useRef)(null),[A,I]=Object(o.useState)(!1),N=function(e,t){const r=Object(o.useRef)(t),n=!r.current&&(T(t)?t:e),i=Object(o.useState)(!1)[1];return Object(o.useEffect)((()=>{r.current&&(r.current=!1,i(!0))}),[]),n}(A,i),z=Object(o.useCallback)((()=>{if(!L)throw new Error("Could not find a valid reference of the trigger element. See https://www.react-laag.com/docs/togglelayer/#children for more info.");const e=L.getBoundingClientRect(),t=te({triggerRect:e,layerElement:H.current,placement:r,relativeParentElement:S,scrollParents:j,fixed:w,environment:R});if(!t)return;const{layerRect:o,styles:c}=t;y(x.current,c)&&(T(n)?(x.current=c,n(c.layer,c.arrow,c.layerSide)):_(c));const l=T(u),s=m&&!T(i);if(l||s){const t=[...j.map((e=>e.getBoundingClientRect())),b(R)],r=!Y(w?e:o,t),n=D(w?e:o,t);l?(r||n)&&u(n?"full":"partial"):("partial"===m&&r&&I(!1),"full"===m&&n&&I(!1))}}),[S,N,L,j,w,r]),k=p(v.ResizeObserver,H,L,N,z,R);d((()=>{const e=!T(n);M!==x.current&&e?x.current=M:N?z():F()})),g(z,R,N),h(j,z,R,N);const G=Object(o.useRef)(new Set([H,B]));f(G,Object(o.useCallback)((()=>{N&&(s&&s(),l&&!T(i)&&I(!1))}),[N,I,i,s]));const X="function"==typeof E?E():E;return Object(o.createElement)(o.Fragment,null,e({isOpen:N,close:()=>{if(T(i))throw new Error("You cannot call `close()` while using the `isOpen` prop");I(!1)},open:()=>{if(T(i))throw new Error("You cannot call `open()` while using the `isOpen` prop");I(!0)},toggle:()=>{if(T(i))throw new Error("You cannot call `toggle()` while using the `isOpen` prop");I(!A)},triggerRef:P,layerSide:N?M.layerSide:null}),S&&Object(o.createElement)(a,{refs:G},Object(c.createPortal)(t({layerProps:{ref:e=>{e&&k.observe(e),H.current=e},style:{...T(n)?O:M.layer,position:w?"fixed":"absolute",willChange:"top, bottom, left, right, width, height"}},arrowStyle:{...T(n)?O:M.arrow,position:"absolute",willChange:"top, bottom, left, right"},isOpen:N,layerSide:M.layerSide,triggerRect:L?L.getBoundingClientRect():null,close:()=>{if(T(i))throw new Error("You cannot call `close()` while using the `isOpen` prop");I(!1)}}),X||S)))};function ie(e,t){return Math.tan(e*(Math.PI/180))*t}function ce(e,t,r,n){switch(r){case"bottom":return"0 "+-n+" "+t+" "+e;case"top":return"0 0 "+t+" "+(e+n);case"right":return-n+" 0 "+e+" "+t;case"left":return"0 0 "+(e+n)+" "+t}return""}function le({sizeA:e,sizeB:t,layerSide:r,roundness:n,angle:o}){const i=n/10*e*2,c="bottom"===r?"0 "+e:"top"===r?"0 0":"right"===r?e+" "+t:"0 "+t,l=("bottom"===r||"top"===r?"H":"V")+" "+("bottom"===r||"top"===r?t:0),s=t/2,u=t/2+ie(o,e/8),a=e/8,f="bottom"===r?"C "+u+" "+a+" "+(s+i)+" 0 "+s+" 0":"top"===r?"C "+u+" "+(e-a)+" "+(s+i)+" "+e+" "+s+" "+e:"right"===r?"C "+a+" "+(t-u)+" 0 "+(s-i)+" 0 "+s:"C "+(e-a)+" "+(t-u)+" "+e+" "+(s-i)+" "+e+" "+s,h=t/2-ie(o,e/8),g=e/8;return"M "+c+" "+l+" "+f+" "+("bottom"===r?"C "+(s-i)+" 0 "+h+" "+g+" "+c:"top"===r?"C "+(s-i)+" "+e+" "+h+" "+(e-g)+" "+c:"right"===r?"C 0 "+(s+i)+" "+g+" "+(t-h)+" "+c:"C"+e+" "+(s+i)+" "+(e-g)+" "+(t-h)+" "+c)}function se({sizeA:e,sizeB:t,borderWidth:r,layerSide:n,angle:o}){const i=ie(o,r);return"bottom"===n||"top"===n?"M "+r+" "+("bottom"===n?e:0)+" H "+(t-r)+" L "+(t-r-i)+" "+("bottom"===n?e-r:r)+" H "+(i+r)+" Z":"M "+("right"===n?e:0)+" "+r+" V "+(t-r)+" L "+("right"===n?e-r:r)+" "+(t-r-i)+" V "+(i+r)+" Z"}const ue=({size:e=8,angle:t=45,borderWidth:r=0,borderColor:n="black",roundness:i=0,backgroundColor:c="white",layerSide:l="top",style:s={}})=>{if("center"===l)return null;const u=e,a=2*ie(t,e);return Object(o.createElement)("svg",{style:{...s,transform:"translate"+("left"===l||"right"===l?"Y":"X")+"(-50%)"},"data-arrow":"true",width:"left"===l||"right"===l?u:a,viewBox:ce(u,a,l,r)},Object(o.createElement)("path",{fill:c,strokeWidth:r,stroke:n,d:le({angle:t,layerSide:l,roundness:i,sizeA:u,sizeB:a})}),Object(o.createElement)("path",{fill:c,d:se({sizeA:u,sizeB:a,angle:t,borderWidth:r,layerSide:l})}))};function ae(e,{onStyle:t,closeOnOutsideClick:r,closeOnDisappear:n,fixed:i,container:l,placement:s={},environment:u=("undefined"!=typeof window?window:void 0),...m}={}){const[w,{relativeParentElement:E,triggerElement:R,scrollParents:v},P]=ne(0,0,u),{styles:S,setStyles:L,lastStyles:j,resetLastStyles:B}=C(s.anchor||ee.anchor),M=Object(o.useRef)(null),_=Object(o.useRef)(null);function x(){return"function"==typeof _.current?_.current():_.current}const[F,H]=Object(o.useState)(!1);function A(){_.current=null,H(!1)}const I=Object(o.useCallback)((()=>{const e=x();if(!e)return;const r=te({triggerRect:e,layerElement:M.current,placement:s,relativeParentElement:E,scrollParents:v,fixed:i,environment:u});if(!r)return;const{layerRect:o,styles:c}=r;if(y(j.current,c)&&(T(t)?(j.current=c,t(c.layer,c.arrow,c.layerSide)):L(c)),n){const t=[...v.map((e=>e.getBoundingClientRect())),b(u)],r=!Y(i?e:o,t),c=D(i?e:o,t);"partial"===n&&r&&A(),"full"===n&&c&&A()}}),[E,F,R,v,i,s]),N=p(m.ResizeObserver,M,R,F,I,u);d((()=>{const e=!T(t);S!==j.current&&e?j.current=S:F?I():B()})),g(I,u,F),h(v,I,u,F);const z=Object(o.useRef)(new Set([M,P]));f(z,Object(o.useCallback)((()=>{F&&r&&A()}),[F,H,r]));const k="function"==typeof l?l():l;function G({clientRect:e,target:t}){_.current=e,F&&t===R?I():(w(t),H(!0))}const X={isOpen:F,close:A,open:G,openFromContextMenuEvent:e=>{e.preventDefault();const t=e.target;G({clientRect:{top:e.clientY,left:e.clientX,bottom:e.clientY+1,right:e.clientX+1,width:1,height:1},target:t})},openFromMouseEvent:e=>{const t=e.currentTarget;if(!t||!t.getBoundingClientRect)return;G({clientRect:()=>t.getBoundingClientRect(),target:t})},openFromRef:e=>{e.current?G({target:e.current,clientRect:e.current.getBoundingClientRect()}):console.error("Error inside useTooltip(): Expected a valid ref to a trigger element, but got "+typeof e.current)},openFromSelection:e=>{if(!e.anchorNode||e.isCollapsed)return;const t=function(e){let t=e;for(;!t.getBoundingClientRect;){if(!t.parentElement)return null;t=t.parentElement}return t}(e.anchorNode);if(!t)return;const r=e.getRangeAt(0);G({clientRect:()=>r.getBoundingClientRect(),target:t})},layerSide:F?S.layerSide:null},W=E&&Object(c.createPortal)(e({layerProps:{ref:e=>{e&&N.observe(e),M.current=e},style:{...T(t)?O:S.layer,position:i?"fixed":"absolute",willChange:"top, bottom, left, right, width, height"}},arrowStyle:{...T(t)?O:S.arrow,position:"absolute",willChange:"top, bottom, left, right"},isOpen:F,layerSide:S.layerSide,triggerRect:x(),close:()=>{A()}}),k||E);return[Object(o.createElement)(a,{refs:z},W),X]}function fe(e){const{delayEnter:t=0,delayLeave:r=0,hideOnScroll:n=!0,onShow:i,onHide:c}=e||{},[l,s]=Object(o.useState)(!1),u=Object(o.useRef)(null),a=Object(o.useRef)(null),f=Object(o.useRef)(!1);function h(e){if(e)return i&&i(),void s(!0);c&&c(),s(!1)}Object(o.useEffect)((()=>{const e=u.current;function t(){u.current&&(clearTimeout(u.current),u.current=null)}function r(){l&&n&&(t(),h(!1))}function o(){l&&(t(),h(!1))}return window.addEventListener("scroll",r,!0),window.addEventListener("touchend",o,!0),()=>{window.removeEventListener("scroll",r,!0),window.removeEventListener("touchend",o,!0),e&&clearTimeout(e)}}),[l,n]);const g={onMouseEnter:function(){"leaving"===a.current&&u.current&&(clearTimeout(u.current),u.current=null,a.current=null),l||(a.current="entering",u.current=setTimeout((()=>{h(!0),u.current=null,a.current=null}),t))},onMouseLeave:function(){"entering"===a.current&&u.current&&(clearTimeout(u.current),u.current=null),l&&(a.current="leaving",u.current=setTimeout((()=>{h(!1),u.current=null}),r))},onTouchStart:()=>{f.current=!1},onTouchMove:()=>{f.current=!0},onTouchEnd:()=>{f.current||l||h(!0),f.current=!1}};return i?g:[l,g]}function he(e){const[t,r]=Object(o.useState)("undefined"!=typeof window&&window.matchMedia("(max-width: "+e+"px)").matches);return Object(o.useEffect)((()=>{const t=window.matchMedia("(max-width: "+e+"px)");function n(e){r(e.matches)}return t.addListener(n),()=>{t.removeListener(n)}}),[e]),t}function ge({isOpen:e,children:t}){const[r,n]=Object(o.useState)({isOpenInternal:e,isLeaving:!1}),i=Object(o.useRef)(!1);return Object(o.useEffect)((()=>{e?n({isOpenInternal:!0,isLeaving:!1}):i.current&&n({isOpenInternal:!1,isLeaving:!0})}),[e,n]),Object(o.useEffect)((()=>{i.current=!0}),[]),e||r.isOpenInternal||r.isLeaving?t(r.isOpenInternal,(()=>{r.isOpenInternal||n((e=>({...e,isLeaving:!1})))}),r.isLeaving):null}function de(e,{delayEnter:t,delayLeave:r,hideOnScroll:n,...i}={}){const c=Object(o.useRef)(),[l,{openFromRef:s,close:u}]=ae(e,i),a=fe({delayEnter:t,delayLeave:r,hideOnScroll:n,onShow:()=>s(c),onHide:u});return[l,{ref:c,...a}]}window.ReactLaag=window.ReactLaag||n}});