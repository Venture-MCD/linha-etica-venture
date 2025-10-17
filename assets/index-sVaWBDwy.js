(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Py={exports:{}},Nu={},Ny={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),II=Symbol.for("react.portal"),SI=Symbol.for("react.fragment"),AI=Symbol.for("react.strict_mode"),RI=Symbol.for("react.profiler"),xI=Symbol.for("react.provider"),CI=Symbol.for("react.context"),kI=Symbol.for("react.forward_ref"),PI=Symbol.for("react.suspense"),NI=Symbol.for("react.memo"),bI=Symbol.for("react.lazy"),Vm=Symbol.iterator;function DI(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var by={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dy=Object.assign,Oy={};function Oi(t,e,n){this.props=t,this.context=e,this.refs=Oy,this.updater=n||by}Oi.prototype.isReactComponent={};Oi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vy(){}Vy.prototype=Oi.prototype;function $d(t,e,n){this.props=t,this.context=e,this.refs=Oy,this.updater=n||by}var qd=$d.prototype=new Vy;qd.constructor=$d;Dy(qd,Oi.prototype);qd.isPureReactComponent=!0;var Lm=Array.isArray,Ly=Object.prototype.hasOwnProperty,Hd={current:null},My={key:!0,ref:!0,__self:!0,__source:!0};function jy(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Ly.call(e,r)&&!My.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:pa,type:t,key:i,ref:o,props:s,_owner:Hd.current}}function OI(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function VI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mm=/\/+/g;function Dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VI(""+t.key):e.toString(36)}function El(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pa:case II:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Dc(o,0):r,Lm(s)?(n="",t!=null&&(n=t.replace(Mm,"$&/")+"/"),El(s,e,n,"",function(h){return h})):s!=null&&(Wd(s)&&(s=OI(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Mm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Lm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Dc(i,l);o+=El(i,e,n,u,s)}else if(u=DI(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Dc(i,l++),o+=El(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qa(t,e,n){if(t==null)return t;var r=[],s=0;return El(t,r,"","",function(i){return e.call(n,i,s++)}),r}function LI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},Tl={transition:null},MI={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Hd};function Uy(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Qa,forEach:function(t,e,n){Qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qa(t,function(){e++}),e},toArray:function(t){return Qa(t,function(e){return e})||[]},only:function(t){if(!Wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=Oi;oe.Fragment=SI;oe.Profiler=RI;oe.PureComponent=$d;oe.StrictMode=AI;oe.Suspense=PI;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MI;oe.act=Uy;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Dy({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Hd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ly.call(e,u)&&!My.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:pa,type:t.type,key:s,ref:i,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:CI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xI,_context:t},t.Consumer=t};oe.createElement=jy;oe.createFactory=function(t){var e=jy.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:kI,render:t}};oe.isValidElement=Wd;oe.lazy=function(t){return{$$typeof:bI,_payload:{_status:-1,_result:t},_init:LI}};oe.memo=function(t,e){return{$$typeof:NI,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};oe.unstable_act=Uy;oe.useCallback=function(t,e){return It.current.useCallback(t,e)};oe.useContext=function(t){return It.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return It.current.useDeferredValue(t)};oe.useEffect=function(t,e){return It.current.useEffect(t,e)};oe.useId=function(){return It.current.useId()};oe.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return It.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};oe.useRef=function(t){return It.current.useRef(t)};oe.useState=function(t){return It.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return It.current.useTransition()};oe.version="18.3.1";Ny.exports=oe;var re=Ny.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jI=re,UI=Symbol.for("react.element"),FI=Symbol.for("react.fragment"),zI=Object.prototype.hasOwnProperty,BI=jI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$I={key:!0,ref:!0,__self:!0,__source:!0};function Fy(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zI.call(e,r)&&!$I.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:UI,type:t,key:i,ref:o,props:s,_owner:BI.current}}Nu.Fragment=FI;Nu.jsx=Fy;Nu.jsxs=Fy;Py.exports=Nu;var p=Py.exports,zy={exports:{}},zt={},By={exports:{}},$y={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var Z=$.length;$.push(Q);e:for(;0<Z;){var ge=Z-1>>>1,de=$[ge];if(0<s(de,Q))$[ge]=Q,$[Z]=de,Z=ge;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],Z=$.pop();if(Z!==Q){$[0]=Z;e:for(var ge=0,de=$.length,B=de>>>1;ge<B;){var _e=2*(ge+1)-1,pe=$[_e],ye=_e+1,at=$[ye];if(0>s(pe,Z))ye<de&&0>s(at,pe)?($[ge]=at,$[ye]=Z,ge=ye):($[ge]=pe,$[_e]=Z,ge=_e);else if(ye<de&&0>s(at,Z))$[ge]=at,$[ye]=Z,ge=ye;else break e}}return Q}function s($,Q){var Z=$.sortIndex-Q.sortIndex;return Z!==0?Z:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,g=3,R=!1,C=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S($){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=$)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function b($){if(N=!1,S($),!C)if(n(u)!==null)C=!0,qt(F);else{var Q=n(h);Q!==null&&yt(b,Q.startTime-$)}}function F($,Q){C=!1,N&&(N=!1,A(y),y=-1),R=!0;var Z=g;try{for(S(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||$&&!x());){var ge=m.callback;if(typeof ge=="function"){m.callback=null,g=m.priorityLevel;var de=ge(m.expirationTime<=Q);Q=t.unstable_now(),typeof de=="function"?m.callback=de:m===n(u)&&r(u),S(Q)}else r(u);m=n(u)}if(m!==null)var B=!0;else{var _e=n(h);_e!==null&&yt(b,_e.startTime-Q),B=!1}return B}finally{m=null,g=Z,R=!1}}var j=!1,E=null,y=-1,w=5,I=-1;function x(){return!(t.unstable_now()-I<w)}function k(){if(E!==null){var $=t.unstable_now();I=$;var Q=!0;try{Q=E(!0,$)}finally{Q?T():(j=!1,E=null)}}else j=!1}var T;if(typeof v=="function")T=function(){v(k)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,$t=Ye.port2;Ye.port1.onmessage=k,T=function(){$t.postMessage(null)}}else T=function(){D(k,0)};function qt($){E=$,j||(j=!0,T())}function yt($,Q){y=D(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){C||R||(C=!0,qt(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var Z=g;g=Q;try{return $()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=g;g=$;try{return Q()}finally{g=Z}},t.unstable_scheduleCallback=function($,Q,Z){var ge=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ge+Z:ge):Z=ge,$){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Z+de,$={id:f++,callback:Q,priorityLevel:$,startTime:Z,expirationTime:de,sortIndex:-1},Z>ge?($.sortIndex=Z,e(h,$),n(u)===null&&$===n(h)&&(N?(A(y),y=-1):N=!0,yt(b,Z-ge))):($.sortIndex=de,e(u,$),C||R||(C=!0,qt(F))),$},t.unstable_shouldYield=x,t.unstable_wrapCallback=function($){var Q=g;return function(){var Z=g;g=Q;try{return $.apply(this,arguments)}finally{g=Z}}}})($y);By.exports=$y;var qI=By.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HI=re,Ft=qI;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qy=new Set,zo={};function bs(t,e){Ei(t,e),Ei(t+"Capture",e)}function Ei(t,e){for(zo[t]=e,t=0;t<e.length;t++)qy.add(e[t])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eh=Object.prototype.hasOwnProperty,WI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jm={},Um={};function GI(t){return Eh.call(Um,t)?!0:Eh.call(jm,t)?!1:WI.test(t)?Um[t]=!0:(jm[t]=!0,!1)}function KI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QI(t,e,n,r){if(e===null||typeof e>"u"||KI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gd,Kd);it[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gd,Kd);it[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gd,Kd);it[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,r){var s=it.hasOwnProperty(e)?it[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QI(e,n,s,r)&&(n=null),r||s===null?GI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rr=HI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),Js=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),Hy=Symbol.for("react.provider"),Wy=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),Ih=Symbol.for("react.suspense"),Sh=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),Gy=Symbol.for("react.offscreen"),Fm=Symbol.iterator;function io(t){return t===null||typeof t!="object"?null:(t=Fm&&t[Fm]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,Oc;function go(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var Vc=!1;function Lc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?go(t):""}function XI(t){switch(t.tag){case 5:return go(t.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return t=Lc(t.type,!1),t;case 11:return t=Lc(t.type.render,!1),t;case 1:return t=Lc(t.type,!0),t;default:return""}}function Ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Js:return"Fragment";case Ys:return"Portal";case Th:return"Profiler";case Xd:return"StrictMode";case Ih:return"Suspense";case Sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wy:return(t.displayName||"Context")+".Consumer";case Hy:return(t._context.displayName||"Context")+".Provider";case Yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:Ah(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return Ah(t(e))}catch{}}return null}function YI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(e);case 8:return e===Xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ky(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JI(t){var e=Ky(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=JI(t))}function Qy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ky(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rh(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xy(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function xh(t,e){Xy(t,e);var n=Ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ch(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ch(t,e,n){(e!=="number"||$l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function ci(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function kh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(_o(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function Yy(t,e){var n=Ur(e.value),r=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ph(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,Zy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZI=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){ZI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function ev(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function tv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=ev(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var e1=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nh(t,e){if(e){if(e1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function bh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=null;function Zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oh=null,hi=null,di=null;function Hm(t){if(t=_a(t)){if(typeof Oh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Lu(e),Oh(t.stateNode,t.type,e))}}function nv(t){hi?di?di.push(t):di=[t]:hi=t}function rv(){if(hi){var t=hi,e=di;if(di=hi=null,Hm(t),e)for(t=0;t<e.length;t++)Hm(e[t])}}function sv(t,e){return t(e)}function iv(){}var Mc=!1;function ov(t,e,n){if(Mc)return t(e,n);Mc=!0;try{return sv(t,e,n)}finally{Mc=!1,(hi!==null||di!==null)&&(iv(),rv())}}function $o(t,e){var n=t.stateNode;if(n===null)return null;var r=Lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Vh=!1;if(Kn)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Vh=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Vh=!1}function t1(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ao=!1,ql=null,Hl=!1,Lh=null,n1={onError:function(t){Ao=!0,ql=t}};function r1(t,e,n,r,s,i,o,l,u){Ao=!1,ql=null,t1.apply(n1,arguments)}function s1(t,e,n,r,s,i,o,l,u){if(r1.apply(this,arguments),Ao){if(Ao){var h=ql;Ao=!1,ql=null}else throw Error(U(198));Hl||(Hl=!0,Lh=h)}}function Ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function av(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wm(t){if(Ds(t)!==t)throw Error(U(188))}function i1(t){var e=t.alternate;if(!e){if(e=Ds(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Wm(s),t;if(i===r)return Wm(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function lv(t){return t=i1(t),t!==null?uv(t):null}function uv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uv(t);if(e!==null)return e;t=t.sibling}return null}var cv=Ft.unstable_scheduleCallback,Gm=Ft.unstable_cancelCallback,o1=Ft.unstable_shouldYield,a1=Ft.unstable_requestPaint,Me=Ft.unstable_now,l1=Ft.unstable_getCurrentPriorityLevel,ef=Ft.unstable_ImmediatePriority,hv=Ft.unstable_UserBlockingPriority,Wl=Ft.unstable_NormalPriority,u1=Ft.unstable_LowPriority,dv=Ft.unstable_IdlePriority,bu=null,En=null;function c1(t){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(bu,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:f1,h1=Math.log,d1=Math.LN2;function f1(t){return t>>>=0,t===0?32:31-(h1(t)/d1|0)|0}var Za=64,el=4194304;function yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=yo(l):(i&=o,i!==0&&(r=yo(i)))}else o=n&~s,o!==0?r=yo(o):i!==0&&(r=yo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),s=1<<n,r|=t[n],e&=~s;return r}function p1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-an(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=p1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fv(){var t=Za;return Za<<=1,!(Za&4194240)&&(Za=64),t}function jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function g1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-an(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var me=0;function pv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mv,nf,gv,_v,yv,jh=!1,tl=[],Ar=null,Rr=null,xr=null,qo=new Map,Ho=new Map,pr=[],_1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Km(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function ao(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=_a(e),e!==null&&nf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function y1(t,e,n,r,s){switch(e){case"focusin":return Ar=ao(Ar,t,e,n,r,s),!0;case"dragenter":return Rr=ao(Rr,t,e,n,r,s),!0;case"mouseover":return xr=ao(xr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return qo.set(i,ao(qo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Ho.set(i,ao(Ho.get(i)||null,t,e,n,r,s)),!0}return!1}function vv(t){var e=fs(t.target);if(e!==null){var n=Ds(e);if(n!==null){if(e=n.tag,e===13){if(e=av(n),e!==null){t.blockedOn=e,yv(t.priority,function(){gv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dh=r,n.target.dispatchEvent(r),Dh=null}else return e=_a(n),e!==null&&nf(e),t.blockedOn=n,!1;e.shift()}return!0}function Qm(t,e,n){Il(t)&&n.delete(e)}function v1(){jh=!1,Ar!==null&&Il(Ar)&&(Ar=null),Rr!==null&&Il(Rr)&&(Rr=null),xr!==null&&Il(xr)&&(xr=null),qo.forEach(Qm),Ho.forEach(Qm)}function lo(t,e){t.blockedOn===e&&(t.blockedOn=null,jh||(jh=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,v1)))}function Wo(t){function e(s){return lo(s,t)}if(0<tl.length){lo(tl[0],t);for(var n=1;n<tl.length;n++){var r=tl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&lo(Ar,t),Rr!==null&&lo(Rr,t),xr!==null&&lo(xr,t),qo.forEach(e),Ho.forEach(e),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)vv(n),n.blockedOn===null&&pr.shift()}var fi=rr.ReactCurrentBatchConfig,Kl=!0;function w1(t,e,n,r){var s=me,i=fi.transition;fi.transition=null;try{me=1,rf(t,e,n,r)}finally{me=s,fi.transition=i}}function E1(t,e,n,r){var s=me,i=fi.transition;fi.transition=null;try{me=4,rf(t,e,n,r)}finally{me=s,fi.transition=i}}function rf(t,e,n,r){if(Kl){var s=Uh(t,e,n,r);if(s===null)Kc(t,e,r,Ql,n),Km(t,r);else if(y1(s,t,e,n,r))r.stopPropagation();else if(Km(t,r),e&4&&-1<_1.indexOf(t)){for(;s!==null;){var i=_a(s);if(i!==null&&mv(i),i=Uh(t,e,n,r),i===null&&Kc(t,e,r,Ql,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Kc(t,e,r,null,n)}}var Ql=null;function Uh(t,e,n,r){if(Ql=null,t=Zd(r),t=fs(t),t!==null)if(e=Ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=av(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function wv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l1()){case ef:return 1;case hv:return 4;case Wl:case u1:return 16;case dv:return 536870912;default:return 16}default:return 16}}var Tr=null,sf=null,Sl=null;function Ev(){if(Sl)return Sl;var t,e=sf,n=e.length,r,s="value"in Tr?Tr.value:Tr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Sl=s.slice(t,1<r?1-r:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function Xm(){return!1}function Bt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?nl:Xm,this.isPropagationStopped=Xm,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},of=Bt(Vi),ga=Pe({},Vi,{view:0,detail:0}),T1=Bt(ga),Uc,Fc,uo,Du=Pe({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Uc=t.screenX-uo.screenX,Fc=t.screenY-uo.screenY):Fc=Uc=0,uo=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),Ym=Bt(Du),I1=Pe({},Du,{dataTransfer:0}),S1=Bt(I1),A1=Pe({},ga,{relatedTarget:0}),zc=Bt(A1),R1=Pe({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),x1=Bt(R1),C1=Pe({},Vi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),k1=Bt(C1),P1=Pe({},Vi,{data:0}),Jm=Bt(P1),N1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=D1[t])?!!e[t]:!1}function af(){return O1}var V1=Pe({},ga,{key:function(t){if(t.key){var e=N1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),L1=Bt(V1),M1=Pe({},Du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=Bt(M1),j1=Pe({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),U1=Bt(j1),F1=Pe({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=Bt(F1),B1=Pe({},Du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$1=Bt(B1),q1=[9,13,27,32],lf=Kn&&"CompositionEvent"in window,Ro=null;Kn&&"documentMode"in document&&(Ro=document.documentMode);var H1=Kn&&"TextEvent"in window&&!Ro,Tv=Kn&&(!lf||Ro&&8<Ro&&11>=Ro),eg=" ",tg=!1;function Iv(t,e){switch(t){case"keyup":return q1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zs=!1;function W1(t,e){switch(t){case"compositionend":return Sv(e);case"keypress":return e.which!==32?null:(tg=!0,eg);case"textInput":return t=e.data,t===eg&&tg?null:t;default:return null}}function G1(t,e){if(Zs)return t==="compositionend"||!lf&&Iv(t,e)?(t=Ev(),Sl=sf=Tr=null,Zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tv&&e.locale!=="ko"?null:e.data;default:return null}}var K1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!K1[t.type]:e==="textarea"}function Av(t,e,n,r){nv(r),e=Xl(e,"onChange"),0<e.length&&(n=new of("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xo=null,Go=null;function Q1(t){Lv(t,0)}function Ou(t){var e=ni(t);if(Qy(e))return t}function X1(t,e){if(t==="change")return e}var Rv=!1;if(Kn){var Bc;if(Kn){var $c="oninput"in document;if(!$c){var rg=document.createElement("div");rg.setAttribute("oninput","return;"),$c=typeof rg.oninput=="function"}Bc=$c}else Bc=!1;Rv=Bc&&(!document.documentMode||9<document.documentMode)}function sg(){xo&&(xo.detachEvent("onpropertychange",xv),Go=xo=null)}function xv(t){if(t.propertyName==="value"&&Ou(Go)){var e=[];Av(e,Go,t,Zd(t)),ov(Q1,e)}}function Y1(t,e,n){t==="focusin"?(sg(),xo=e,Go=n,xo.attachEvent("onpropertychange",xv)):t==="focusout"&&sg()}function J1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ou(Go)}function Z1(t,e){if(t==="click")return Ou(e)}function eS(t,e){if(t==="input"||t==="change")return Ou(e)}function tS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:tS;function Ko(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Eh.call(e,s)||!hn(t[s],e[s]))return!1}return!0}function ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function og(t,e){var n=ig(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ig(n)}}function Cv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kv(){for(var t=window,e=$l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$l(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nS(t){var e=kv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cv(n.ownerDocument.documentElement,n)){if(r!==null&&uf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=og(n,i);var o=og(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rS=Kn&&"documentMode"in document&&11>=document.documentMode,ei=null,Fh=null,Co=null,zh=!1;function ag(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zh||ei==null||ei!==$l(r)||(r=ei,"selectionStart"in r&&uf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Co&&Ko(Co,r)||(Co=r,r=Xl(Fh,"onSelect"),0<r.length&&(e=new of("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ei)))}function rl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ti={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},qc={},Pv={};Kn&&(Pv=document.createElement("div").style,"AnimationEvent"in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),"TransitionEvent"in window||delete ti.transitionend.transition);function Vu(t){if(qc[t])return qc[t];if(!ti[t])return t;var e=ti[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pv)return qc[t]=e[n];return t}var Nv=Vu("animationend"),bv=Vu("animationiteration"),Dv=Vu("animationstart"),Ov=Vu("transitionend"),Vv=new Map,lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(t,e){Vv.set(t,e),bs(e,[t])}for(var Hc=0;Hc<lg.length;Hc++){var Wc=lg[Hc],sS=Wc.toLowerCase(),iS=Wc[0].toUpperCase()+Wc.slice(1);Yr(sS,"on"+iS)}Yr(Nv,"onAnimationEnd");Yr(bv,"onAnimationIteration");Yr(Dv,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(Ov,"onTransitionEnd");Ei("onMouseEnter",["mouseout","mouseover"]);Ei("onMouseLeave",["mouseout","mouseover"]);Ei("onPointerEnter",["pointerout","pointerover"]);Ei("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function ug(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,s1(r,e,void 0,t),t.currentTarget=null}function Lv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;ug(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;ug(s,l,h),i=u}}}if(Hl)throw t=Lh,Hl=!1,Lh=null,t}function Ie(t,e){var n=e[Wh];n===void 0&&(n=e[Wh]=new Set);var r=t+"__bubble";n.has(r)||(Mv(e,t,2,!1),n.add(r))}function Gc(t,e,n){var r=0;e&&(r|=4),Mv(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[sl]){t[sl]=!0,qy.forEach(function(n){n!=="selectionchange"&&(oS.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,Gc("selectionchange",!1,e))}}function Mv(t,e,n,r){switch(wv(e)){case 1:var s=w1;break;case 4:s=E1;break;default:s=rf}n=s.bind(null,e,n,t),s=void 0,!Vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Kc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=fs(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}ov(function(){var h=i,f=Zd(n),m=[];e:{var g=Vv.get(t);if(g!==void 0){var R=of,C=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":R=L1;break;case"focusin":C="focus",R=zc;break;case"focusout":C="blur",R=zc;break;case"beforeblur":case"afterblur":R=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=S1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=U1;break;case Nv:case bv:case Dv:R=x1;break;case Ov:R=z1;break;case"scroll":R=T1;break;case"wheel":R=$1;break;case"copy":case"cut":case"paste":R=k1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Zm}var N=(e&4)!==0,D=!N&&t==="scroll",A=N?g!==null?g+"Capture":null:g;N=[];for(var v=h,S;v!==null;){S=v;var b=S.stateNode;if(S.tag===5&&b!==null&&(S=b,A!==null&&(b=$o(v,A),b!=null&&N.push(Xo(v,b,S)))),D)break;v=v.return}0<N.length&&(g=new R(g,C,null,n,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",g&&n!==Dh&&(C=n.relatedTarget||n.fromElement)&&(fs(C)||C[Qn]))break e;if((R||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,R?(C=n.relatedTarget||n.toElement,R=h,C=C?fs(C):null,C!==null&&(D=Ds(C),C!==D||C.tag!==5&&C.tag!==6)&&(C=null)):(R=null,C=h),R!==C)){if(N=Ym,b="onMouseLeave",A="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=Zm,b="onPointerLeave",A="onPointerEnter",v="pointer"),D=R==null?g:ni(R),S=C==null?g:ni(C),g=new N(b,v+"leave",R,n,f),g.target=D,g.relatedTarget=S,b=null,fs(f)===h&&(N=new N(A,v+"enter",C,n,f),N.target=S,N.relatedTarget=D,b=N),D=b,R&&C)t:{for(N=R,A=C,v=0,S=N;S;S=qs(S))v++;for(S=0,b=A;b;b=qs(b))S++;for(;0<v-S;)N=qs(N),v--;for(;0<S-v;)A=qs(A),S--;for(;v--;){if(N===A||A!==null&&N===A.alternate)break t;N=qs(N),A=qs(A)}N=null}else N=null;R!==null&&cg(m,g,R,N,!1),C!==null&&D!==null&&cg(m,D,C,N,!0)}}e:{if(g=h?ni(h):window,R=g.nodeName&&g.nodeName.toLowerCase(),R==="select"||R==="input"&&g.type==="file")var F=X1;else if(ng(g))if(Rv)F=eS;else{F=J1;var j=Y1}else(R=g.nodeName)&&R.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=Z1);if(F&&(F=F(t,h))){Av(m,F,n,f);break e}j&&j(t,g,h),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Ch(g,"number",g.value)}switch(j=h?ni(h):window,t){case"focusin":(ng(j)||j.contentEditable==="true")&&(ei=j,Fh=h,Co=null);break;case"focusout":Co=Fh=ei=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,ag(m,n,f);break;case"selectionchange":if(rS)break;case"keydown":case"keyup":ag(m,n,f)}var E;if(lf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Zs?Iv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Tv&&n.locale!=="ko"&&(Zs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Zs&&(E=Ev()):(Tr=f,sf="value"in Tr?Tr.value:Tr.textContent,Zs=!0)),j=Xl(h,y),0<j.length&&(y=new Jm(y,t,null,n,f),m.push({event:y,listeners:j}),E?y.data=E:(E=Sv(n),E!==null&&(y.data=E)))),(E=H1?W1(t,n):G1(t,n))&&(h=Xl(h,"onBeforeInput"),0<h.length&&(f=new Jm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=E))}Lv(m,e)})}function Xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=$o(t,n),i!=null&&r.unshift(Xo(t,i,s)),i=$o(t,e),i!=null&&r.push(Xo(t,i,s))),t=t.return}return r}function qs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=$o(n,i),u!=null&&o.unshift(Xo(n,u,l))):s||(u=$o(n,i),u!=null&&o.push(Xo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function hg(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(lS,"")}function il(t,e,n){if(e=hg(e),hg(t)!==e&&n)throw Error(U(425))}function Yl(){}var Bh=null,$h=null;function qh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hh=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(t){return dg.resolve(null).then(t).catch(hS)}:Hh;function hS(t){setTimeout(function(){throw t})}function Qc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Wo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Wo(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Li=Math.random().toString(36).slice(2),yn="__reactFiber$"+Li,Yo="__reactProps$"+Li,Qn="__reactContainer$"+Li,Wh="__reactEvents$"+Li,dS="__reactListeners$"+Li,fS="__reactHandles$"+Li;function fs(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qn]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fg(t);t!==null;){if(n=t[yn])return n;t=fg(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[yn]||t[Qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Lu(t){return t[Yo]||null}var Gh=[],ri=-1;function Jr(t){return{current:t}}function Ae(t){0>ri||(t.current=Gh[ri],Gh[ri]=null,ri--)}function Ee(t,e){ri++,Gh[ri]=t.current,t.current=e}var Fr={},gt=Jr(Fr),Pt=Jr(!1),Es=Fr;function Ti(t,e){var n=t.type.contextTypes;if(!n)return Fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Nt(t){return t=t.childContextTypes,t!=null}function Jl(){Ae(Pt),Ae(gt)}function pg(t,e,n){if(gt.current!==Fr)throw Error(U(168));Ee(gt,e),Ee(Pt,n)}function jv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,YI(t)||"Unknown",s));return Pe({},n,r)}function Zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fr,Es=gt.current,Ee(gt,t),Ee(Pt,Pt.current),!0}function mg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=jv(t,e,Es),r.__reactInternalMemoizedMergedChildContext=t,Ae(Pt),Ae(gt),Ee(gt,t)):Ae(Pt),Ee(Pt,n)}var Fn=null,Mu=!1,Xc=!1;function Uv(t){Fn===null?Fn=[t]:Fn.push(t)}function pS(t){Mu=!0,Uv(t)}function Zr(){if(!Xc&&Fn!==null){Xc=!0;var t=0,e=me;try{var n=Fn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Fn=null,Mu=!1}catch(s){throw Fn!==null&&(Fn=Fn.slice(t+1)),cv(ef,Zr),s}finally{me=e,Xc=!1}}return null}var si=[],ii=0,eu=null,tu=0,Ht=[],Wt=0,Ts=null,Bn=1,$n="";function cs(t,e){si[ii++]=tu,si[ii++]=eu,eu=t,tu=e}function Fv(t,e,n){Ht[Wt++]=Bn,Ht[Wt++]=$n,Ht[Wt++]=Ts,Ts=t;var r=Bn;t=$n;var s=32-an(r)-1;r&=~(1<<s),n+=1;var i=32-an(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Bn=1<<32-an(e)+s|n<<s|r,$n=i+t}else Bn=1<<i|n<<s|r,$n=t}function cf(t){t.return!==null&&(cs(t,1),Fv(t,1,0))}function hf(t){for(;t===eu;)eu=si[--ii],si[ii]=null,tu=si[--ii],si[ii]=null;for(;t===Ts;)Ts=Ht[--Wt],Ht[Wt]=null,$n=Ht[--Wt],Ht[Wt]=null,Bn=Ht[--Wt],Ht[Wt]=null}var Ut=null,Lt=null,xe=!1,sn=null;function zv(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Lt=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ts!==null?{id:Bn,overflow:$n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Lt=null,!0):!1;default:return!1}}function Kh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qh(t){if(xe){var e=Lt;if(e){var n=e;if(!gg(t,e)){if(Kh(t))throw Error(U(418));e=Cr(n.nextSibling);var r=Ut;e&&gg(t,e)?zv(r,n):(t.flags=t.flags&-4097|2,xe=!1,Ut=t)}}else{if(Kh(t))throw Error(U(418));t.flags=t.flags&-4097|2,xe=!1,Ut=t}}}function _g(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function ol(t){if(t!==Ut)return!1;if(!xe)return _g(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qh(t.type,t.memoizedProps)),e&&(e=Lt)){if(Kh(t))throw Bv(),Error(U(418));for(;e;)zv(t,e),e=Cr(e.nextSibling)}if(_g(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Ut?Cr(t.stateNode.nextSibling):null;return!0}function Bv(){for(var t=Lt;t;)t=Cr(t.nextSibling)}function Ii(){Lt=Ut=null,xe=!1}function df(t){sn===null?sn=[t]:sn.push(t)}var mS=rr.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function al(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yg(t){var e=t._init;return e(t._payload)}function $v(t){function e(A,v){if(t){var S=A.deletions;S===null?(A.deletions=[v],A.flags|=16):S.push(v)}}function n(A,v){if(!t)return null;for(;v!==null;)e(A,v),v=v.sibling;return null}function r(A,v){for(A=new Map;v!==null;)v.key!==null?A.set(v.key,v):A.set(v.index,v),v=v.sibling;return A}function s(A,v){return A=br(A,v),A.index=0,A.sibling=null,A}function i(A,v,S){return A.index=S,t?(S=A.alternate,S!==null?(S=S.index,S<v?(A.flags|=2,v):S):(A.flags|=2,v)):(A.flags|=1048576,v)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,v,S,b){return v===null||v.tag!==6?(v=rh(S,A.mode,b),v.return=A,v):(v=s(v,S),v.return=A,v)}function u(A,v,S,b){var F=S.type;return F===Js?f(A,v,S.props.children,b,S.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===dr&&yg(F)===v.type)?(b=s(v,S.props),b.ref=co(A,v,S),b.return=A,b):(b=bl(S.type,S.key,S.props,null,A.mode,b),b.ref=co(A,v,S),b.return=A,b)}function h(A,v,S,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=sh(S,A.mode,b),v.return=A,v):(v=s(v,S.children||[]),v.return=A,v)}function f(A,v,S,b,F){return v===null||v.tag!==7?(v=ys(S,A.mode,b,F),v.return=A,v):(v=s(v,S),v.return=A,v)}function m(A,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=rh(""+v,A.mode,S),v.return=A,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xa:return S=bl(v.type,v.key,v.props,null,A.mode,S),S.ref=co(A,null,v),S.return=A,S;case Ys:return v=sh(v,A.mode,S),v.return=A,v;case dr:var b=v._init;return m(A,b(v._payload),S)}if(_o(v)||io(v))return v=ys(v,A.mode,S,null),v.return=A,v;al(A,v)}return null}function g(A,v,S,b){var F=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:l(A,v,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Xa:return S.key===F?u(A,v,S,b):null;case Ys:return S.key===F?h(A,v,S,b):null;case dr:return F=S._init,g(A,v,F(S._payload),b)}if(_o(S)||io(S))return F!==null?null:f(A,v,S,b,null);al(A,S)}return null}function R(A,v,S,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return A=A.get(S)||null,l(v,A,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Xa:return A=A.get(b.key===null?S:b.key)||null,u(v,A,b,F);case Ys:return A=A.get(b.key===null?S:b.key)||null,h(v,A,b,F);case dr:var j=b._init;return R(A,v,S,j(b._payload),F)}if(_o(b)||io(b))return A=A.get(S)||null,f(v,A,b,F,null);al(v,b)}return null}function C(A,v,S,b){for(var F=null,j=null,E=v,y=v=0,w=null;E!==null&&y<S.length;y++){E.index>y?(w=E,E=null):w=E.sibling;var I=g(A,E,S[y],b);if(I===null){E===null&&(E=w);break}t&&E&&I.alternate===null&&e(A,E),v=i(I,v,y),j===null?F=I:j.sibling=I,j=I,E=w}if(y===S.length)return n(A,E),xe&&cs(A,y),F;if(E===null){for(;y<S.length;y++)E=m(A,S[y],b),E!==null&&(v=i(E,v,y),j===null?F=E:j.sibling=E,j=E);return xe&&cs(A,y),F}for(E=r(A,E);y<S.length;y++)w=R(E,A,y,S[y],b),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?y:w.key),v=i(w,v,y),j===null?F=w:j.sibling=w,j=w);return t&&E.forEach(function(x){return e(A,x)}),xe&&cs(A,y),F}function N(A,v,S,b){var F=io(S);if(typeof F!="function")throw Error(U(150));if(S=F.call(S),S==null)throw Error(U(151));for(var j=F=null,E=v,y=v=0,w=null,I=S.next();E!==null&&!I.done;y++,I=S.next()){E.index>y?(w=E,E=null):w=E.sibling;var x=g(A,E,I.value,b);if(x===null){E===null&&(E=w);break}t&&E&&x.alternate===null&&e(A,E),v=i(x,v,y),j===null?F=x:j.sibling=x,j=x,E=w}if(I.done)return n(A,E),xe&&cs(A,y),F;if(E===null){for(;!I.done;y++,I=S.next())I=m(A,I.value,b),I!==null&&(v=i(I,v,y),j===null?F=I:j.sibling=I,j=I);return xe&&cs(A,y),F}for(E=r(A,E);!I.done;y++,I=S.next())I=R(E,A,y,I.value,b),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?y:I.key),v=i(I,v,y),j===null?F=I:j.sibling=I,j=I);return t&&E.forEach(function(k){return e(A,k)}),xe&&cs(A,y),F}function D(A,v,S,b){if(typeof S=="object"&&S!==null&&S.type===Js&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Xa:e:{for(var F=S.key,j=v;j!==null;){if(j.key===F){if(F=S.type,F===Js){if(j.tag===7){n(A,j.sibling),v=s(j,S.props.children),v.return=A,A=v;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===dr&&yg(F)===j.type){n(A,j.sibling),v=s(j,S.props),v.ref=co(A,j,S),v.return=A,A=v;break e}n(A,j);break}else e(A,j);j=j.sibling}S.type===Js?(v=ys(S.props.children,A.mode,b,S.key),v.return=A,A=v):(b=bl(S.type,S.key,S.props,null,A.mode,b),b.ref=co(A,v,S),b.return=A,A=b)}return o(A);case Ys:e:{for(j=S.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(A,v.sibling),v=s(v,S.children||[]),v.return=A,A=v;break e}else{n(A,v);break}else e(A,v);v=v.sibling}v=sh(S,A.mode,b),v.return=A,A=v}return o(A);case dr:return j=S._init,D(A,v,j(S._payload),b)}if(_o(S))return C(A,v,S,b);if(io(S))return N(A,v,S,b);al(A,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(A,v.sibling),v=s(v,S),v.return=A,A=v):(n(A,v),v=rh(S,A.mode,b),v.return=A,A=v),o(A)):n(A,v)}return D}var Si=$v(!0),qv=$v(!1),nu=Jr(null),ru=null,oi=null,ff=null;function pf(){ff=oi=ru=null}function mf(t){var e=nu.current;Ae(nu),t._currentValue=e}function Xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function pi(t,e){ru=t,ff=oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},oi===null){if(ru===null)throw Error(U(308));oi=t,ru.dependencies={lanes:0,firstContext:t}}else oi=oi.next=t;return e}var ps=null;function gf(t){ps===null?ps=[t]:ps.push(t)}function Hv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,gf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Xn(t,r)}function Xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Xn(t,n)}return s=r.interleaved,s===null?(e.next=e,gf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Xn(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}function vg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function su(t,e,n,r){var s=t.updateQueue;fr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=h=u=null,l=i;do{var g=l.lane,R=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(g=e,R=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){m=C.call(R,m,g);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,g=typeof C=="function"?C.call(R,m,g):C,g==null)break e;m=Pe({},m,g);break e;case 2:fr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else R={eventTime:R,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=R,u=m):f=f.next=R,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ss|=o,t.lanes=o,t.memoizedState=m}}function wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var ya={},Tn=Jr(ya),Jo=Jr(ya),Zo=Jr(ya);function ms(t){if(t===ya)throw Error(U(174));return t}function yf(t,e){switch(Ee(Zo,e),Ee(Jo,t),Ee(Tn,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ph(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ph(e,t)}Ae(Tn),Ee(Tn,e)}function Ai(){Ae(Tn),Ae(Jo),Ae(Zo)}function Gv(t){ms(Zo.current);var e=ms(Tn.current),n=Ph(e,t.type);e!==n&&(Ee(Jo,t),Ee(Tn,n))}function vf(t){Jo.current===t&&(Ae(Tn),Ae(Jo))}var Ce=Jr(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yc=[];function wf(){for(var t=0;t<Yc.length;t++)Yc[t]._workInProgressVersionPrimary=null;Yc.length=0}var xl=rr.ReactCurrentDispatcher,Jc=rr.ReactCurrentBatchConfig,Is=0,ke=null,qe=null,Qe=null,ou=!1,ko=!1,ea=0,gS=0;function ct(){throw Error(U(321))}function Ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function Tf(t,e,n,r,s,i){if(Is=i,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?wS:ES,t=n(r,s),ko){i=0;do{if(ko=!1,ea=0,25<=i)throw Error(U(301));i+=1,Qe=qe=null,e.updateQueue=null,xl.current=TS,t=n(r,s)}while(ko)}if(xl.current=au,e=qe!==null&&qe.next!==null,Is=0,Qe=qe=ke=null,ou=!1,e)throw Error(U(300));return t}function If(){var t=ea!==0;return ea=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ke.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function Jt(){if(qe===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Qe===null?ke.memoizedState:Qe.next;if(e!==null)Qe=e,qe=t;else{if(t===null)throw Error(U(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Qe===null?ke.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function ta(t,e){return typeof e=="function"?e(t):e}function Zc(t){var e=Jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=qe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((Is&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ke.lanes|=f,Ss|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,hn(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ke.lanes|=i,Ss|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eh(t){var e=Jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);hn(i,e.memoizedState)||(kt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Kv(){}function Qv(t,e){var n=ke,r=Jt(),s=e(),i=!hn(r.memoizedState,s);if(i&&(r.memoizedState=s,kt=!0),r=r.queue,Sf(Jv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,na(9,Yv.bind(null,n,r,s,e),void 0,null),Xe===null)throw Error(U(349));Is&30||Xv(n,e,s)}return s}function Xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yv(t,e,n,r){e.value=n,e.getSnapshot=r,Zv(e)&&ew(t)}function Jv(t,e,n){return n(function(){Zv(e)&&ew(t)})}function Zv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function ew(t){var e=Xn(t,1);e!==null&&ln(e,t,1,-1)}function Eg(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=vS.bind(null,ke,t),[e.memoizedState,t]}function na(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tw(){return Jt().memoizedState}function Cl(t,e,n,r){var s=gn();ke.flags|=t,s.memoizedState=na(1|e,n,void 0,r===void 0?null:r)}function ju(t,e,n,r){var s=Jt();r=r===void 0?null:r;var i=void 0;if(qe!==null){var o=qe.memoizedState;if(i=o.destroy,r!==null&&Ef(r,o.deps)){s.memoizedState=na(e,n,i,r);return}}ke.flags|=t,s.memoizedState=na(1|e,n,i,r)}function Tg(t,e){return Cl(8390656,8,t,e)}function Sf(t,e){return ju(2048,8,t,e)}function nw(t,e){return ju(4,2,t,e)}function rw(t,e){return ju(4,4,t,e)}function sw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iw(t,e,n){return n=n!=null?n.concat([t]):null,ju(4,4,sw.bind(null,e,t),n)}function Af(){}function ow(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function aw(t,e){var n=Jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lw(t,e,n){return Is&21?(hn(n,e)||(n=fv(),ke.lanes|=n,Ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function _S(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Jc.transition;Jc.transition={};try{t(!1),e()}finally{me=n,Jc.transition=r}}function uw(){return Jt().memoizedState}function yS(t,e,n){var r=Nr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cw(t))hw(e,n);else if(n=Hv(t,e,n,r),n!==null){var s=Tt();ln(n,t,r,s),dw(n,e,r)}}function vS(t,e,n){var r=Nr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cw(t))hw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,hn(l,o)){var u=e.interleaved;u===null?(s.next=s,gf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Hv(t,e,s,r),n!==null&&(s=Tt(),ln(n,t,r,s),dw(n,e,r))}}function cw(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function hw(t,e){ko=ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}var au={readContext:Yt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},wS={readContext:Yt,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:Tg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,sw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yS.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:Eg,useDebugValue:Af,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=Eg(!1),e=t[0];return t=_S.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,s=gn();if(xe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Xe===null)throw Error(U(349));Is&30||Xv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Tg(Jv.bind(null,r,i,t),[t]),r.flags|=2048,na(9,Yv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=gn(),e=Xe.identifierPrefix;if(xe){var n=$n,r=Bn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ES={readContext:Yt,useCallback:ow,useContext:Yt,useEffect:Sf,useImperativeHandle:iw,useInsertionEffect:nw,useLayoutEffect:rw,useMemo:aw,useReducer:Zc,useRef:tw,useState:function(){return Zc(ta)},useDebugValue:Af,useDeferredValue:function(t){var e=Jt();return lw(e,qe.memoizedState,t)},useTransition:function(){var t=Zc(ta)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:Qv,useId:uw,unstable_isNewReconciler:!1},TS={readContext:Yt,useCallback:ow,useContext:Yt,useEffect:Sf,useImperativeHandle:iw,useInsertionEffect:nw,useLayoutEffect:rw,useMemo:aw,useReducer:eh,useRef:tw,useState:function(){return eh(ta)},useDebugValue:Af,useDeferredValue:function(t){var e=Jt();return qe===null?e.memoizedState=t:lw(e,qe.memoizedState,t)},useTransition:function(){var t=eh(ta)[0],e=Jt().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:Qv,useId:uw,unstable_isNewReconciler:!1};function nn(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Uu={isMounted:function(t){return(t=t._reactInternals)?Ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Tt(),s=Nr(t),i=Wn(r,s);i.payload=e,n!=null&&(i.callback=n),e=kr(t,i,s),e!==null&&(ln(e,t,s,r),Rl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Tt(),s=Nr(t),i=Wn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=kr(t,i,s),e!==null&&(ln(e,t,s,r),Rl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),r=Nr(t),s=Wn(n,r);s.tag=2,e!=null&&(s.callback=e),e=kr(t,s,r),e!==null&&(ln(e,t,r,n),Rl(e,t,r))}};function Ig(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ko(n,r)||!Ko(s,i):!0}function fw(t,e,n){var r=!1,s=Fr,i=e.contextType;return typeof i=="object"&&i!==null?i=Yt(i):(s=Nt(e)?Es:gt.current,r=e.contextTypes,i=(r=r!=null)?Ti(t,s):Fr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Sg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Uu.enqueueReplaceState(e,e.state,null)}function Jh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},_f(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Yt(i):(i=Nt(e)?Es:gt.current,s.context=Ti(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Yh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Uu.enqueueReplaceState(s,s.state,null),su(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ri(t,e){try{var n="",r=e;do n+=XI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function th(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var IS=typeof WeakMap=="function"?WeakMap:Map;function pw(t,e,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uu||(uu=!0,ud=r),Zh(t,e)},n}function mw(t,e,n){n=Wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Zh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zh(t,e),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ag(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new IS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=MS.bind(null,t,e,n),e.then(t,t))}function Rg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wn(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var SS=rr.ReactCurrentOwner,kt=!1;function Et(t,e,n,r){e.child=t===null?qv(e,null,n,r):Si(e,t.child,n,r)}function Cg(t,e,n,r,s){n=n.render;var i=e.ref;return pi(e,s),r=Tf(t,e,n,r,i,s),n=If(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Yn(t,e,s)):(xe&&n&&cf(e),e.flags|=1,Et(t,e,r,s),e.child)}function kg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Df(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,gw(t,e,i,r,s)):(t=bl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(o,r)&&t.ref===e.ref)return Yn(t,e,s)}return e.flags|=1,t=br(i,r),t.ref=e.ref,t.return=e,e.child=t}function gw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Ko(i,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Yn(t,e,s)}return ed(t,e,n,r,s)}function _w(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(li,Vt),Vt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(li,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ee(li,Vt),Vt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ee(li,Vt),Vt|=r;return Et(t,e,s,n),e.child}function yw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ed(t,e,n,r,s){var i=Nt(n)?Es:gt.current;return i=Ti(e,i),pi(e,s),n=Tf(t,e,n,r,i,s),r=If(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Yn(t,e,s)):(xe&&r&&cf(e),e.flags|=1,Et(t,e,n,s),e.child)}function Pg(t,e,n,r,s){if(Nt(n)){var i=!0;Zl(e)}else i=!1;if(pi(e,s),e.stateNode===null)kl(t,e),fw(e,n,r),Jh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Yt(h):(h=Nt(n)?Es:gt.current,h=Ti(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Sg(e,o,r,h),fr=!1;var g=e.memoizedState;o.state=g,su(e,r,o,s),u=e.memoizedState,l!==r||g!==u||Pt.current||fr?(typeof f=="function"&&(Yh(e,n,f,r),u=e.memoizedState),(l=fr||Ig(e,n,l,r,g,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Wv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:nn(e.type,l),o.props=h,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Yt(u):(u=Nt(n)?Es:gt.current,u=Ti(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Sg(e,o,r,u),fr=!1,g=e.memoizedState,o.state=g,su(e,r,o,s);var C=e.memoizedState;l!==m||g!==C||Pt.current||fr?(typeof R=="function"&&(Yh(e,n,R,r),C=e.memoizedState),(h=fr||Ig(e,n,h,r,g,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return td(t,e,n,r,i,s)}function td(t,e,n,r,s,i){yw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&mg(e,n,!1),Yn(t,e,i);r=e.stateNode,SS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Si(e,t.child,null,i),e.child=Si(e,null,l,i)):Et(t,e,l,i),e.memoizedState=r.state,s&&mg(e,n,!0),e.child}function vw(t){var e=t.stateNode;e.pendingContext?pg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pg(t,e.context,!1),yf(t,e.containerInfo)}function Ng(t,e,n,r,s){return Ii(),df(s),e.flags|=256,Et(t,e,n,r),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function ww(t,e,n){var r=e.pendingProps,s=Ce.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ee(Ce,s&1),t===null)return Qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Bu(o,r,0,null),t=ys(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=rd(n),e.memoizedState=nd,t):Rf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return AS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=br(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=br(l,i):(i=ys(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=nd,r}return i=t.child,t=i.sibling,r=br(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rf(t,e){return e=Bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ll(t,e,n,r){return r!==null&&df(r),Si(e,t.child,null,n),t=Rf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=th(Error(U(422))),ll(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Bu({mode:"visible",children:r.children},s,0,null),i=ys(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Si(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=nd,i);if(!(e.mode&1))return ll(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(U(419)),r=th(i,r,void 0),ll(t,e,o,r)}if(l=(o&t.childLanes)!==0,kt||l){if(r=Xe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Xn(t,s),ln(r,t,s,-1))}return bf(),r=th(Error(U(421))),ll(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=jS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Lt=Cr(s.nextSibling),Ut=e,xe=!0,sn=null,t!==null&&(Ht[Wt++]=Bn,Ht[Wt++]=$n,Ht[Wt++]=Ts,Bn=t.id,$n=t.overflow,Ts=e),e=Rf(e,r.children),e.flags|=4096,e)}function bg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xh(t.return,e,n)}function nh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Ew(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Et(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bg(t,n,e);else if(t.tag===19)bg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),nh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&iu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}nh(e,!0,n,null,i);break;case"together":nh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RS(t,e,n){switch(e.tag){case 3:vw(e),Ii();break;case 5:Gv(e);break;case 1:Nt(e.type)&&Zl(e);break;case 4:yf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ee(nu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?ww(t,e,n):(Ee(Ce,Ce.current&1),t=Yn(t,e,n),t!==null?t.sibling:null);Ee(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ew(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ee(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,_w(t,e,n)}return Yn(t,e,n)}var Tw,sd,Iw,Sw;Tw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};Iw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ms(Tn.current);var i=null;switch(n){case"input":s=Rh(t,s),r=Rh(t,r),i=[];break;case"select":s=Pe({},s,{value:void 0}),r=Pe({},r,{value:void 0}),i=[];break;case"textarea":s=kh(t,s),r=kh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yl)}Nh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(zo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(zo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ie("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Sw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ho(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xS(t,e,n){var r=e.pendingProps;switch(hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Nt(e.type)&&Jl(),ht(e),null;case 3:return r=e.stateNode,Ai(),Ae(Pt),Ae(gt),wf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ol(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(dd(sn),sn=null))),sd(t,e),ht(e),null;case 5:vf(e);var s=ms(Zo.current);if(n=e.type,t!==null&&e.stateNode!=null)Iw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return ht(e),null}if(t=ms(Tn.current),ol(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[yn]=e,r[Yo]=i,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(s=0;s<vo.length;s++)Ie(vo[s],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":zm(r,i),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ie("invalid",r);break;case"textarea":$m(r,i),Ie("invalid",r)}Nh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&il(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&il(r.textContent,l,t),s=["children",""+l]):zo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":Ya(r),Bm(r,i,!0);break;case"textarea":Ya(r),qm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Yl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[Yo]=r,Tw(t,e,!1,!1),e.stateNode=t;e:{switch(o=bh(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),s=r;break;case"iframe":case"object":case"embed":Ie("load",t),s=r;break;case"video":case"audio":for(s=0;s<vo.length;s++)Ie(vo[s],t);s=r;break;case"source":Ie("error",t),s=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),s=r;break;case"details":Ie("toggle",t),s=r;break;case"input":zm(t,r),s=Rh(t,r),Ie("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Pe({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":$m(t,r),s=kh(t,r),Ie("invalid",t);break;default:s=r}Nh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?tv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Zy(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Bo(t,u):typeof u=="number"&&Bo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ie("scroll",t):u!=null&&Qd(t,i,u,o))}switch(n){case"input":Ya(t),Bm(t,r,!1);break;case"textarea":Ya(t),qm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ur(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ci(t,!!r.multiple,i,!1):r.defaultValue!=null&&ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)Sw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ms(Zo.current),ms(Tn.current),ol(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(i=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:il(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return ht(e),null;case 13:if(Ae(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Lt!==null&&e.mode&1&&!(e.flags&128))Bv(),Ii(),e.flags|=98560,i=!1;else if(i=ol(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[yn]=e}else Ii(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ht(e),i=!1}else sn!==null&&(dd(sn),sn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?He===0&&(He=3):bf())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return Ai(),sd(t,e),t===null&&Qo(e.stateNode.containerInfo),ht(e),null;case 10:return mf(e.type._context),ht(e),null;case 17:return Nt(e.type)&&Jl(),ht(e),null;case 19:if(Ae(Ce),i=e.memoizedState,i===null)return ht(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ho(i,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,ho(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Ce,Ce.current&1|2),e.child}t=t.sibling}i.tail!==null&&Me()>xi&&(e.flags|=128,r=!0,ho(i,!1),e.lanes=4194304)}else{if(!r)if(t=iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ho(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!xe)return ht(e),null}else 2*Me()-i.renderingStartTime>xi&&n!==1073741824&&(e.flags|=128,r=!0,ho(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Me(),e.sibling=null,n=Ce.current,Ee(Ce,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return Nf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function CS(t,e){switch(hf(e),e.tag){case 1:return Nt(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ai(),Ae(Pt),Ae(gt),wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vf(e),null;case 13:if(Ae(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ii()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Ce),null;case 4:return Ai(),null;case 10:return mf(e.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var ul=!1,pt=!1,kS=typeof WeakSet=="function"?WeakSet:Set,W=null;function ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function id(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var Dg=!1;function PS(t,e){if(Bh=Kl,t=kv(),uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,g=null;t:for(;;){for(var R;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(R=m.firstChild)!==null;)g=m,m=R;for(;;){if(m===t)break t;if(g===n&&++h===s&&(l=o),g===i&&++f===r&&(u=o),(R=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($h={focusedElem:t,selectionRange:n},Kl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,D=C.memoizedState,A=e.stateNode,v=A.getSnapshotBeforeUpdate(e.elementType===e.type?N:nn(e.type,N),D);A.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(b){Oe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return C=Dg,Dg=!1,C}function Po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&id(e,n,i)}s=s.next}while(s!==r)}}function Fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Aw(t){var e=t.alternate;e!==null&&(t.alternate=null,Aw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[Yo],delete e[Wh],delete e[dS],delete e[fS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rw(t){return t.tag===5||t.tag===3||t.tag===4}function Og(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}var tt=null,rn=!1;function cr(t,e,n){for(n=n.child;n!==null;)xw(t,e,n),n=n.sibling}function xw(t,e,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(bu,n)}catch{}switch(n.tag){case 5:pt||ai(n,e);case 6:var r=tt,s=rn;tt=null,cr(t,e,n),tt=r,rn=s,tt!==null&&(rn?(t=tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(rn?(t=tt,n=n.stateNode,t.nodeType===8?Qc(t.parentNode,n):t.nodeType===1&&Qc(t,n),Wo(t)):Qc(tt,n.stateNode));break;case 4:r=tt,s=rn,tt=n.stateNode.containerInfo,rn=!0,cr(t,e,n),tt=r,rn=s;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&id(n,e,o),s=s.next}while(s!==r)}cr(t,e,n);break;case 1:if(!pt&&(ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,e,l)}cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,cr(t,e,n),pt=r):cr(t,e,n);break;default:cr(t,e,n)}}function Vg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kS),e.forEach(function(r){var s=US.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:tt=l.stateNode,rn=!1;break e;case 3:tt=l.stateNode.containerInfo,rn=!0;break e;case 4:tt=l.stateNode.containerInfo,rn=!0;break e}l=l.return}if(tt===null)throw Error(U(160));xw(i,o,s),tt=null,rn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Oe(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cw(e,t),e=e.sibling}function Cw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),mn(t),r&4){try{Po(3,t,t.return),Fu(3,t)}catch(N){Oe(t,t.return,N)}try{Po(5,t,t.return)}catch(N){Oe(t,t.return,N)}}break;case 1:tn(e,t),mn(t),r&512&&n!==null&&ai(n,n.return);break;case 5:if(tn(e,t),mn(t),r&512&&n!==null&&ai(n,n.return),t.flags&32){var s=t.stateNode;try{Bo(s,"")}catch(N){Oe(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Xy(s,i),bh(l,o);var h=bh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?tv(s,m):f==="dangerouslySetInnerHTML"?Zy(s,m):f==="children"?Bo(s,m):Qd(s,f,m,h)}switch(l){case"input":xh(s,i);break;case"textarea":Yy(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var R=i.value;R!=null?ci(s,!!i.multiple,R,!1):g!==!!i.multiple&&(i.defaultValue!=null?ci(s,!!i.multiple,i.defaultValue,!0):ci(s,!!i.multiple,i.multiple?[]:"",!1))}s[Yo]=i}catch(N){Oe(t,t.return,N)}}break;case 6:if(tn(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){Oe(t,t.return,N)}}break;case 3:if(tn(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(e.containerInfo)}catch(N){Oe(t,t.return,N)}break;case 4:tn(e,t),mn(t);break;case 13:tn(e,t),mn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(kf=Me())),r&4&&Vg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(h=pt)||f,tn(e,t),pt=h):tn(e,t),mn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(m=W=f;W!==null;){switch(g=W,R=g.child,g.tag){case 0:case 11:case 14:case 15:Po(4,g,g.return);break;case 1:ai(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){Oe(r,n,N)}}break;case 5:ai(g,g.return);break;case 22:if(g.memoizedState!==null){Mg(m);continue}}R!==null?(R.return=g,W=R):Mg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ev("display",o))}catch(N){Oe(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(N){Oe(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:tn(e,t),mn(t),r&4&&Vg(t);break;case 21:break;default:tn(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rw(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Bo(s,""),r.flags&=-33);var i=Og(t);ld(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Og(t);ad(t,l,o);break;default:throw Error(U(161))}}catch(u){Oe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NS(t,e,n){W=t,kw(t)}function kw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ul;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||pt;l=ul;var h=pt;if(ul=o,(pt=u)&&!h)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?jg(s):u!==null?(u.return=o,W=u):jg(s);for(;i!==null;)W=i,kw(i),i=i.sibling;W=s,ul=l,pt=h}Lg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):Lg(t)}}function Lg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pt||Fu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&wg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Wo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}pt||e.flags&512&&od(e)}catch(g){Oe(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Mg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function jg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fu(4,e)}catch(u){Oe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Oe(e,s,u)}}var i=e.return;try{od(e)}catch(u){Oe(e,i,u)}break;case 5:var o=e.return;try{od(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var bS=Math.ceil,lu=rr.ReactCurrentDispatcher,xf=rr.ReactCurrentOwner,Xt=rr.ReactCurrentBatchConfig,ce=0,Xe=null,Fe=null,st=0,Vt=0,li=Jr(0),He=0,ra=null,Ss=0,zu=0,Cf=0,No=null,xt=null,kf=0,xi=1/0,jn=null,uu=!1,ud=null,Pr=null,cl=!1,Ir=null,cu=0,bo=0,cd=null,Pl=-1,Nl=0;function Tt(){return ce&6?Me():Pl!==-1?Pl:Pl=Me()}function Nr(t){return t.mode&1?ce&2&&st!==0?st&-st:mS.transition!==null?(Nl===0&&(Nl=fv()),Nl):(t=me,t!==0||(t=window.event,t=t===void 0?16:wv(t.type)),t):1}function ln(t,e,n,r){if(50<bo)throw bo=0,cd=null,Error(U(185));ma(t,n,r),(!(ce&2)||t!==Xe)&&(t===Xe&&(!(ce&2)&&(zu|=n),He===4&&mr(t,st)),bt(t,r),n===1&&ce===0&&!(e.mode&1)&&(xi=Me()+500,Mu&&Zr()))}function bt(t,e){var n=t.callbackNode;m1(t,e);var r=Gl(t,t===Xe?st:0);if(r===0)n!==null&&Gm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gm(n),e===1)t.tag===0?pS(Ug.bind(null,t)):Uv(Ug.bind(null,t)),cS(function(){!(ce&6)&&Zr()}),n=null;else{switch(pv(r)){case 1:n=ef;break;case 4:n=hv;break;case 16:n=Wl;break;case 536870912:n=dv;break;default:n=Wl}n=Mw(n,Pw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pw(t,e){if(Pl=-1,Nl=0,ce&6)throw Error(U(327));var n=t.callbackNode;if(mi()&&t.callbackNode!==n)return null;var r=Gl(t,t===Xe?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=hu(t,r);else{e=r;var s=ce;ce|=2;var i=bw();(Xe!==t||st!==e)&&(jn=null,xi=Me()+500,_s(t,e));do try{VS();break}catch(l){Nw(t,l)}while(!0);pf(),lu.current=i,ce=s,Fe!==null?e=0:(Xe=null,st=0,e=He)}if(e!==0){if(e===2&&(s=Mh(t),s!==0&&(r=s,e=hd(t,s))),e===1)throw n=ra,_s(t,0),mr(t,r),bt(t,Me()),n;if(e===6)mr(t,r);else{if(s=t.current.alternate,!(r&30)&&!DS(s)&&(e=hu(t,r),e===2&&(i=Mh(t),i!==0&&(r=i,e=hd(t,i))),e===1))throw n=ra,_s(t,0),mr(t,r),bt(t,Me()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:hs(t,xt,jn);break;case 3:if(mr(t,r),(r&130023424)===r&&(e=kf+500-Me(),10<e)){if(Gl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Tt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Hh(hs.bind(null,t,xt,jn),e);break}hs(t,xt,jn);break;case 4:if(mr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-an(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bS(r/1960))-r,10<r){t.timeoutHandle=Hh(hs.bind(null,t,xt,jn),r);break}hs(t,xt,jn);break;case 5:hs(t,xt,jn);break;default:throw Error(U(329))}}}return bt(t,Me()),t.callbackNode===n?Pw.bind(null,t):null}function hd(t,e){var n=No;return t.current.memoizedState.isDehydrated&&(_s(t,e).flags|=256),t=hu(t,e),t!==2&&(e=xt,xt=n,e!==null&&dd(e)),t}function dd(t){xt===null?xt=t:xt.push.apply(xt,t)}function DS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!hn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~Cf,e&=~zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function Ug(t){if(ce&6)throw Error(U(327));mi();var e=Gl(t,0);if(!(e&1))return bt(t,Me()),null;var n=hu(t,e);if(t.tag!==0&&n===2){var r=Mh(t);r!==0&&(e=r,n=hd(t,r))}if(n===1)throw n=ra,_s(t,0),mr(t,e),bt(t,Me()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hs(t,xt,jn),bt(t,Me()),null}function Pf(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(xi=Me()+500,Mu&&Zr())}}function As(t){Ir!==null&&Ir.tag===0&&!(ce&6)&&mi();var e=ce;ce|=1;var n=Xt.transition,r=me;try{if(Xt.transition=null,me=1,t)return t()}finally{me=r,Xt.transition=n,ce=e,!(ce&6)&&Zr()}}function Nf(){Vt=li.current,Ae(li)}function _s(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uS(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(hf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jl();break;case 3:Ai(),Ae(Pt),Ae(gt),wf();break;case 5:vf(r);break;case 4:Ai();break;case 13:Ae(Ce);break;case 19:Ae(Ce);break;case 10:mf(r.type._context);break;case 22:case 23:Nf()}n=n.return}if(Xe=t,Fe=t=br(t.current,null),st=Vt=e,He=0,ra=null,Cf=zu=Ss=0,xt=No=null,ps!==null){for(e=0;e<ps.length;e++)if(n=ps[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ps=null}return t}function Nw(t,e){do{var n=Fe;try{if(pf(),xl.current=au,ou){for(var r=ke.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ou=!1}if(Is=0,Qe=qe=ke=null,ko=!1,ea=0,xf.current=null,n===null||n.return===null){He=1,ra=e,Fe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=st,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=Rg(o);if(R!==null){R.flags&=-257,xg(R,o,l,i,e),R.mode&1&&Ag(i,h,e),e=R,u=h;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){Ag(i,h,e),bf();break e}u=Error(U(426))}}else if(xe&&l.mode&1){var D=Rg(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),xg(D,o,l,i,e),df(Ri(u,l));break e}}i=u=Ri(u,l),He!==4&&(He=2),No===null?No=[i]:No.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var A=pw(i,u,e);vg(i,A);break e;case 1:l=u;var v=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Pr===null||!Pr.has(S)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=mw(i,l,e);vg(i,b);break e}}i=i.return}while(i!==null)}Ow(n)}catch(F){e=F,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function bw(){var t=lu.current;return lu.current=au,t===null?au:t}function bf(){(He===0||He===3||He===2)&&(He=4),Xe===null||!(Ss&268435455)&&!(zu&268435455)||mr(Xe,st)}function hu(t,e){var n=ce;ce|=2;var r=bw();(Xe!==t||st!==e)&&(jn=null,_s(t,e));do try{OS();break}catch(s){Nw(t,s)}while(!0);if(pf(),ce=n,lu.current=r,Fe!==null)throw Error(U(261));return Xe=null,st=0,He}function OS(){for(;Fe!==null;)Dw(Fe)}function VS(){for(;Fe!==null&&!o1();)Dw(Fe)}function Dw(t){var e=Lw(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?Ow(t):Fe=e,xf.current=null}function Ow(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CS(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,Fe=null;return}}else if(n=xS(n,e,Vt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);He===0&&(He=5)}function hs(t,e,n){var r=me,s=Xt.transition;try{Xt.transition=null,me=1,LS(t,e,n,r)}finally{Xt.transition=s,me=r}return null}function LS(t,e,n,r){do mi();while(Ir!==null);if(ce&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(g1(t,i),t===Xe&&(Fe=Xe=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,Mw(Wl,function(){return mi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Xt.transition,Xt.transition=null;var o=me;me=1;var l=ce;ce|=4,xf.current=null,PS(t,n),Cw(n,t),nS($h),Kl=!!Bh,$h=Bh=null,t.current=n,NS(n),a1(),ce=l,me=o,Xt.transition=i}else t.current=n;if(cl&&(cl=!1,Ir=t,cu=s),i=t.pendingLanes,i===0&&(Pr=null),c1(n.stateNode),bt(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(uu)throw uu=!1,t=ud,ud=null,t;return cu&1&&t.tag!==0&&mi(),i=t.pendingLanes,i&1?t===cd?bo++:(bo=0,cd=t):bo=0,Zr(),null}function mi(){if(Ir!==null){var t=pv(cu),e=Xt.transition,n=me;try{if(Xt.transition=null,me=16>t?16:t,Ir===null)var r=!1;else{if(t=Ir,Ir=null,cu=0,ce&6)throw Error(U(331));var s=ce;for(ce|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Po(8,f,i)}var m=f.child;if(m!==null)m.return=f,W=m;else for(;W!==null;){f=W;var g=f.sibling,R=f.return;if(Aw(f),f===h){W=null;break}if(g!==null){g.return=R,W=g;break}W=R}}}var C=i.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Po(9,i,i.return)}var A=i.sibling;if(A!==null){A.return=i.return,W=A;break e}W=i.return}}var v=t.current;for(W=v;W!==null;){o=W;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,W=S;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Fu(9,l)}}catch(F){Oe(l,l.return,F)}if(l===o){W=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,W=b;break e}W=l.return}}if(ce=s,Zr(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(bu,t)}catch{}r=!0}return r}finally{me=n,Xt.transition=e}}return!1}function Fg(t,e,n){e=Ri(n,e),e=pw(t,e,1),t=kr(t,e,1),e=Tt(),t!==null&&(ma(t,1,e),bt(t,e))}function Oe(t,e,n){if(t.tag===3)Fg(t,t,n);else for(;e!==null;){if(e.tag===3){Fg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){t=Ri(n,t),t=mw(e,t,1),e=kr(e,t,1),t=Tt(),e!==null&&(ma(e,1,t),bt(e,t));break}}e=e.return}}function MS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(st&n)===n&&(He===4||He===3&&(st&130023424)===st&&500>Me()-kf?_s(t,0):Cf|=n),bt(t,e)}function Vw(t,e){e===0&&(t.mode&1?(e=el,el<<=1,!(el&130023424)&&(el=4194304)):e=1);var n=Tt();t=Xn(t,e),t!==null&&(ma(t,e,n),bt(t,n))}function jS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vw(t,n)}function US(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),Vw(t,n)}var Lw;Lw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,RS(t,e,n);kt=!!(t.flags&131072)}else kt=!1,xe&&e.flags&1048576&&Fv(e,tu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;kl(t,e),t=e.pendingProps;var s=Ti(e,gt.current);pi(e,n),s=Tf(null,e,r,t,s,n);var i=If();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Nt(r)?(i=!0,Zl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,_f(e),s.updater=Uu,e.stateNode=s,s._reactInternals=e,Jh(e,r,t,n),e=td(null,e,r,!0,i,n)):(e.tag=0,xe&&i&&cf(e),Et(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(kl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=zS(r),t=nn(r,t),s){case 0:e=ed(null,e,r,t,n);break e;case 1:e=Pg(null,e,r,t,n);break e;case 11:e=Cg(null,e,r,t,n);break e;case 14:e=kg(null,e,r,nn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:nn(r,s),ed(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:nn(r,s),Pg(t,e,r,s,n);case 3:e:{if(vw(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Wv(t,e),su(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ri(Error(U(423)),e),e=Ng(t,e,r,n,s);break e}else if(r!==s){s=Ri(Error(U(424)),e),e=Ng(t,e,r,n,s);break e}else for(Lt=Cr(e.stateNode.containerInfo.firstChild),Ut=e,xe=!0,sn=null,n=qv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ii(),r===s){e=Yn(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return Gv(e),t===null&&Qh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,qh(r,s)?o=null:i!==null&&qh(r,i)&&(e.flags|=32),yw(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&Qh(e),null;case 13:return ww(t,e,n);case 4:return yf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Si(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:nn(r,s),Cg(t,e,r,s,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ee(nu,r._currentValue),r._currentValue=o,i!==null)if(hn(i.value,o)){if(i.children===s.children&&!Pt.current){e=Yn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Wn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Xh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Et(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,pi(e,n),s=Yt(s),r=r(s),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,s=nn(r,e.pendingProps),s=nn(r.type,s),kg(t,e,r,s,n);case 15:return gw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:nn(r,s),kl(t,e),e.tag=1,Nt(r)?(t=!0,Zl(e)):t=!1,pi(e,n),fw(e,r,s),Jh(e,r,s,n),td(null,e,r,!0,t,n);case 19:return Ew(t,e,n);case 22:return _w(t,e,n)}throw Error(U(156,e.tag))};function Mw(t,e){return cv(t,e)}function FS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new FS(t,e,n,r)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zS(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yd)return 11;if(t===Jd)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Js:return ys(n.children,s,i,e);case Xd:o=8,s|=8;break;case Th:return t=Qt(12,n,e,s|2),t.elementType=Th,t.lanes=i,t;case Ih:return t=Qt(13,n,e,s),t.elementType=Ih,t.lanes=i,t;case Sh:return t=Qt(19,n,e,s),t.elementType=Sh,t.lanes=i,t;case Gy:return Bu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hy:o=10;break e;case Wy:o=9;break e;case Yd:o=11;break e;case Jd:o=14;break e;case dr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ys(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function Bu(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=Gy,t.lanes=n,t.stateNode={isHidden:!1},t}function rh(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function sh(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jc(0),this.expirationTimes=jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Of(t,e,n,r,s,i,o,l,u){return t=new BS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Qt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(i),t}function $S(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jw(t){if(!t)return Fr;t=t._reactInternals;e:{if(Ds(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Nt(n))return jv(t,n,e)}return e}function Uw(t,e,n,r,s,i,o,l,u){return t=Of(n,r,!0,t,s,i,o,l,u),t.context=jw(null),n=t.current,r=Tt(),s=Nr(n),i=Wn(r,s),i.callback=e??null,kr(n,i,s),t.current.lanes=s,ma(t,s,r),bt(t,r),t}function $u(t,e,n,r){var s=e.current,i=Tt(),o=Nr(s);return n=jw(n),e.context===null?e.context=n:e.pendingContext=n,e=Wn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(s,e,o),t!==null&&(ln(t,s,o,i),Rl(t,s,o)),o}function du(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vf(t,e){zg(t,e),(t=t.alternate)&&zg(t,e)}function qS(){return null}var Fw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lf(t){this._internalRoot=t}qu.prototype.render=Lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));$u(t,e,null,null)};qu.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;As(function(){$u(null,t,null,null)}),e[Qn]=null}};function qu(t){this._internalRoot=t}qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=_v();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&vv(t)}};function Mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bg(){}function HS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=du(o);i.call(h)}}var o=Uw(e,r,t,0,null,!1,!1,"",Bg);return t._reactRootContainer=o,t[Qn]=o.current,Qo(t.nodeType===8?t.parentNode:t),As(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=du(u);l.call(h)}}var u=Of(t,0,!1,null,null,!1,!1,"",Bg);return t._reactRootContainer=u,t[Qn]=u.current,Qo(t.nodeType===8?t.parentNode:t),As(function(){$u(e,u,n,r)}),u}function Wu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=du(o);l.call(u)}}$u(e,o,t,s)}else o=HS(n,e,t,s,r);return du(o)}mv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yo(e.pendingLanes);n!==0&&(tf(e,n|1),bt(e,Me()),!(ce&6)&&(xi=Me()+500,Zr()))}break;case 13:As(function(){var r=Xn(t,1);if(r!==null){var s=Tt();ln(r,t,1,s)}}),Vf(t,1)}};nf=function(t){if(t.tag===13){var e=Xn(t,134217728);if(e!==null){var n=Tt();ln(e,t,134217728,n)}Vf(t,134217728)}};gv=function(t){if(t.tag===13){var e=Nr(t),n=Xn(t,e);if(n!==null){var r=Tt();ln(n,t,e,r)}Vf(t,e)}};_v=function(){return me};yv=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Oh=function(t,e,n){switch(e){case"input":if(xh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Lu(r);if(!s)throw Error(U(90));Qy(r),xh(r,s)}}}break;case"textarea":Yy(t,n);break;case"select":e=n.value,e!=null&&ci(t,!!n.multiple,e,!1)}};sv=Pf;iv=As;var WS={usingClientEntryPoint:!1,Events:[_a,ni,Lu,nv,rv,Pf]},fo={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GS={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lv(t),t===null?null:t.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||qS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{bu=hl.inject(GS),En=hl}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WS;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(e))throw Error(U(200));return $S(t,e,null,n)};zt.createRoot=function(t,e){if(!Mf(t))throw Error(U(299));var n=!1,r="",s=Fw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Of(t,1,!1,null,null,n,!1,r,s),t[Qn]=e.current,Qo(t.nodeType===8?t.parentNode:t),new Lf(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=lv(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return As(t)};zt.hydrate=function(t,e,n){if(!Hu(e))throw Error(U(200));return Wu(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!Mf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Fw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Uw(e,null,t,1,n??null,s,!1,i,o),t[Qn]=e.current,Qo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new qu(e)};zt.render=function(t,e,n){if(!Hu(e))throw Error(U(200));return Wu(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!Hu(t))throw Error(U(40));return t._reactRootContainer?(As(function(){Wu(null,null,t,!1,function(){t._reactRootContainer=null,t[Qn]=null})}),!0):!1};zt.unstable_batchedUpdates=Pf;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Wu(t,e,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function zw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zw)}catch(t){console.error(t)}}zw(),zy.exports=zt;var KS=zy.exports,Bw,$g=KS;Bw=$g.createRoot,$g.hydrateRoot;const QS="modulepreload",XS=function(t){return"/linha-etica-venture/"+t},qg={},ih=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=XS(u),u in qg)return;qg[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":QS,h||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((g,R)=>{m.addEventListener("load",g),m.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$w=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=re.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>re.createElement("svg",{ref:u,...JS,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:$w("lucide",s),...l},[...o.map(([h,f])=>re.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=(t,e)=>{const n=re.forwardRef(({className:r,...s},i)=>re.createElement(ZS,{ref:i,iconNode:e,className:$w(`lucide-${YS(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=Nn("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=Nn("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=Nn("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=Nn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=Nn("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=Nn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=Nn("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=Nn("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=Nn("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=Nn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),oA=()=>{};var Wg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},aA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(g=64)),r.push(n[f],n[m],n[g],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ww(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new lA;const g=i<<2|l>>4;if(r.push(g),h!==64){const R=l<<4&240|h>>2;if(r.push(R),m!==64){const C=h<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uA=function(t){const e=Ww(t);return Gw.encodeByteArray(e,!0)},fu=function(t){return uA(t).replace(/\./g,"")},Kw=function(t){try{return Gw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=()=>cA().__FIREBASE_DEFAULTS__,dA=()=>{if(typeof process>"u"||typeof Wg>"u")return;const t=Wg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Kw(t[1]);return e&&JSON.parse(e)},Gu=()=>{try{return oA()||hA()||dA()||fA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qw=t=>{var e,n;return(n=(e=Gu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xw=t=>{const e=Qw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yw=()=>{var t;return(t=Gu())===null||t===void 0?void 0:t.config},Jw=t=>{var e;return(e=Gu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jf(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fu(JSON.stringify(n)),fu(JSON.stringify(o)),""].join(".")}const Do={};function mA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Do))Do[e]?t.emulator.push(e):t.prod.push(e);return t}function gA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Gg=!1;function Uf(t,e){if(typeof window>"u"||typeof document>"u"||!es(window.location.host)||Do[t]===e||Do[t]||Gg)return;Do[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=mA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,R){g.setAttribute("width","24"),g.setAttribute("id",R),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Gg=!0,o()},g}function f(g,R){g.setAttribute("id",R),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=gA(r),R=n("text"),C=document.getElementById(R)||document.createElement("span"),N=n("learnmore"),D=document.getElementById(N)||document.createElement("a"),A=n("preprendIcon"),v=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const S=g.element;l(S),f(D,N);const b=h();u(v,A),S.append(v,C,D,b),document.body.appendChild(S)}i?(C.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _A(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function yA(){var t;const e=(t=Gu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function EA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TA(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function IA(){return!yA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function SA(){try{return typeof indexedDB=="object"}catch{return!1}}function AA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RA,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,va.prototype.create)}}class va{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new bn(s,l,r)}}function xA(t,e){return t.replace(CA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const CA=/\{\$([^}]+)}/g;function kA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Kg(i)&&Kg(o)){if(!zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Kg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function PA(t,e){const n=new NA(t,e);return n.subscribe.bind(n)}class NA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=oh),s.error===void 0&&(s.error=oh),s.complete===void 0&&(s.complete=oh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t&&t._delegate?t._delegate:t}class Br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VA(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OA(t){return t===ds?void 0:t}function VA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const MA={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},jA=ae.INFO,UA={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},FA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=UA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ff{constructor(e){this.name=e,this._logLevel=jA,this._logHandler=FA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const zA=(t,e)=>e.some(n=>t instanceof n);let Qg,Xg;function BA(){return Qg||(Qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $A(){return Xg||(Xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e0=new WeakMap,pd=new WeakMap,t0=new WeakMap,ah=new WeakMap,zf=new WeakMap;function qA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&e0.set(n,t)}).catch(()=>{}),zf.set(e,t),e}function HA(t){if(pd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pd.set(t,e)}let md={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||t0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WA(t){md=t(md)}function GA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lh(this),e,...n);return t0.set(r,e.sort?e.sort():[e]),Dr(r)}:$A().includes(t)?function(...e){return t.apply(lh(this),e),Dr(e0.get(this))}:function(...e){return Dr(t.apply(lh(this),e))}}function KA(t){return typeof t=="function"?GA(t):(t instanceof IDBTransaction&&HA(t),zA(t,BA())?new Proxy(t,md):t)}function Dr(t){if(t instanceof IDBRequest)return qA(t);if(ah.has(t))return ah.get(t);const e=KA(t);return e!==t&&(ah.set(t,e),zf.set(e,t)),e}const lh=t=>zf.get(t);function QA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Dr(o.result),u.oldVersion,u.newVersion,Dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const XA=["get","getKey","getAll","getAllKeys","count"],YA=["put","add","delete","clear"],uh=new Map;function Yg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uh.get(e))return uh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=YA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||XA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return uh.set(e,i),i}WA(t=>({...t,get:(e,n,r)=>Yg(e,n)||t.get(e,n,r),has:(e,n)=>!!Yg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gd="@firebase/app",Jg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Ff("@firebase/app"),eR="@firebase/app-compat",tR="@firebase/analytics-compat",nR="@firebase/analytics",rR="@firebase/app-check-compat",sR="@firebase/app-check",iR="@firebase/auth",oR="@firebase/auth-compat",aR="@firebase/database",lR="@firebase/data-connect",uR="@firebase/database-compat",cR="@firebase/functions",hR="@firebase/functions-compat",dR="@firebase/installations",fR="@firebase/installations-compat",pR="@firebase/messaging",mR="@firebase/messaging-compat",gR="@firebase/performance",_R="@firebase/performance-compat",yR="@firebase/remote-config",vR="@firebase/remote-config-compat",wR="@firebase/storage",ER="@firebase/storage-compat",TR="@firebase/firestore",IR="@firebase/ai",SR="@firebase/firestore-compat",AR="firebase",RR="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="[DEFAULT]",xR={[gd]:"fire-core",[eR]:"fire-core-compat",[nR]:"fire-analytics",[tR]:"fire-analytics-compat",[sR]:"fire-app-check",[rR]:"fire-app-check-compat",[iR]:"fire-auth",[oR]:"fire-auth-compat",[aR]:"fire-rtdb",[lR]:"fire-data-connect",[uR]:"fire-rtdb-compat",[cR]:"fire-fn",[hR]:"fire-fn-compat",[dR]:"fire-iid",[fR]:"fire-iid-compat",[pR]:"fire-fcm",[mR]:"fire-fcm-compat",[gR]:"fire-perf",[_R]:"fire-perf-compat",[yR]:"fire-rc",[vR]:"fire-rc-compat",[wR]:"fire-gcs",[ER]:"fire-gcs-compat",[TR]:"fire-fst",[SR]:"fire-fst-compat",[IR]:"fire-vertex","fire-js":"fire-js",[AR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Map,CR=new Map,yd=new Map;function Zg(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rs(t){const e=t.name;if(yd.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;yd.set(e,t);for(const n of sa.values())Zg(n,t);for(const n of CR.values())Zg(n,t);return!0}function Ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Or=new va("app","Firebase",kR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=RR;function n0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_d,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Or.create("bad-app-name",{appName:String(s)});if(n||(n=Yw()),!n)throw Or.create("no-options");const i=sa.get(s);if(i){if(zr(n,i.options)&&zr(r,i.config))return i;throw Or.create("duplicate-app",{appName:s})}const o=new LA(s);for(const u of yd.values())o.addComponent(u);const l=new PR(n,r,o);return sa.set(s,l),l}function Bf(t=_d){const e=sa.get(t);if(!e&&t===_d&&Yw())return n0();if(!e)throw Or.create("no-app",{appName:t});return e}function e_(){return Array.from(sa.values())}function In(t,e,n){var r;let s=(r=xR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(l.join(" "));return}Rs(new Br(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="firebase-heartbeat-database",bR=1,ia="firebase-heartbeat-store";let ch=null;function r0(){return ch||(ch=QA(NR,bR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ia)}catch(n){console.warn(n)}}}}).catch(t=>{throw Or.create("idb-open",{originalErrorMessage:t.message})})),ch}async function DR(t){try{const n=(await r0()).transaction(ia),r=await n.objectStore(ia).get(s0(t));return await n.done,r}catch(e){if(e instanceof bn)Jn.warn(e.message);else{const n=Or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function t_(t,e){try{const r=(await r0()).transaction(ia,"readwrite");await r.objectStore(ia).put(e,s0(t)),await r.done}catch(n){if(n instanceof bn)Jn.warn(n.message);else{const r=Or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(r.message)}}}function s0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=1024,VR=30;class LR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=n_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>VR){const o=UR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=n_(),{heartbeatsToSend:r,unsentEntries:s}=MR(this._heartbeatsCache.heartbeats),i=fu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Jn.warn(n),""}}}function n_(){return new Date().toISOString().substring(0,10)}function MR(t,e=OR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),r_(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),r_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SA()?AA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await DR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return t_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return t_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function r_(t){return fu(JSON.stringify({version:2,heartbeats:t})).length}function UR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t){Rs(new Br("platform-logger",e=>new JA(e),"PRIVATE")),Rs(new Br("heartbeat",e=>new LR(e),"PRIVATE")),In(gd,Jg,t),In(gd,Jg,"esm2017"),In("fire-js","")}FR("");var zR="firebase",BR="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(zR,BR,"app");function $f(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function i0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $R=i0,o0=new va("auth","Firebase",i0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=new Ff("@firebase/auth");function qR(t,...e){pu.logLevel<=ae.WARN&&pu.warn(`Auth (${Os}): ${t}`,...e)}function Dl(t,...e){pu.logLevel<=ae.ERROR&&pu.error(`Auth (${Os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,...e){throw qf(t,...e)}function Sn(t,...e){return qf(t,...e)}function a0(t,e,n){const r=Object.assign(Object.assign({},$R()),{[e]:n});return new va("auth","Firebase",r).create(e,{appName:t.name})}function Vr(t){return a0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return o0.create(t,...e)}function J(t,e,...n){if(!t)throw qf(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dl(e),new Error(e)}function er(t,e){t||qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HR(){return s_()==="http:"||s_()==="https:"}function s_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HR()||wA()||"connection"in navigator)?navigator.onLine:!0}function GR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=_A()||EA()}get(){return WR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t,e){er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],XR=new Ea(3e4,6e4);function Qu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mi(t,e,n,r,s={}){return u0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=wa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return vA()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&es(t.emulatorConfig.host)&&(h.credentials="include"),l0.fetch()(await h0(t,t.config.apiHost,n,l),h)})}async function u0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},KR),e);try{const s=new YR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw dl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw dl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw dl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw dl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw a0(t,f,h);Zn(t,f)}}catch(s){if(s instanceof bn)throw s;Zn(t,"network-request-failed",{message:String(s)})}}async function c0(t,e,n,r,s={}){const i=await Mi(t,e,n,r,s);return"mfaPendingCredential"in i&&Zn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function h0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Hf(t.config,s):`${t.config.apiScheme}://${s}`;return QR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class YR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),XR.get())})}}function dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Sn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(t,e){return Mi(t,"POST","/v1/accounts:delete",e)}async function mu(t,e){return Mi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZR(t,e=!1){const n=je(t),r=await n.getIdToken(e),s=Wf(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Oo(hh(s.auth_time)),issuedAtTime:Oo(hh(s.iat)),expirationTime:Oo(hh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hh(t){return Number(t)*1e3}function Wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Kw(n);return s?JSON.parse(s):(Dl("Failed to decode base64 JWT payload"),null)}catch(s){return Dl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function i_(t){const e=Wf(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&ex(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ex({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gu(t){var e;const n=t.auth,r=await t.getIdToken(),s=await oa(t,mu(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?d0(i.providerUserInfo):[],l=rx(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new wd(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function nx(t){const e=je(t);await gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rx(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function d0(t){return t.map(e=>{var{providerId:n}=e,r=$f(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t,e){const n=await u0(t,{},async()=>{const r=wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await h0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&es(t.emulatorConfig.host)&&(u.credentials="include"),l0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ix(t,e){return Mi(t,"POST","/v2/accounts:revokeToken",Qu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):i_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=i_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await sx(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gi;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await oa(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZR(this,e)}reload(){return nx(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(Vr(this.auth));const e=await this.getIdToken();return await oa(this,JR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,R=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,A=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:b,isAnonymous:F,providerData:j,stsTokenManager:E}=n;J(S&&E,e,"internal-error");const y=gi.fromJSON(this.name,E);J(typeof S=="string",e,"internal-error"),hr(m,e.name),hr(g,e.name),J(typeof b=="boolean",e,"internal-error"),J(typeof F=="boolean",e,"internal-error"),hr(R,e.name),hr(C,e.name),hr(N,e.name),hr(D,e.name),hr(A,e.name),hr(v,e.name);const w=new on({uid:S,auth:e,email:g,emailVerified:b,displayName:m,isAnonymous:F,photoURL:C,phoneNumber:R,tenantId:N,stsTokenManager:y,createdAt:A,lastLoginAt:v});return j&&Array.isArray(j)&&(w.providerData=j.map(I=>Object.assign({},I))),D&&(w._redirectEventId=D),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new gi;s.updateFromServerResponse(n);const i=new on({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?d0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new gi;l.updateFromIdToken(r);const u=new on({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new wd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=new Map;function Hn(t){er(t instanceof Function,"Expected a class definition");let e=o_.get(t);return e?(er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,o_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}f0.type="NONE";const a_=f0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t,e,n){return`firebase:${t}:${e}:${n}`}class _i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ol(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ol("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await mu(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _i(Hn(a_),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Hn(a_);const o=Ol(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const g=await mu(e,{idToken:f}).catch(()=>{});if(!g)break;m=await on._fromGetAccountInfoResponse(e,g,f)}else m=on._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new _i(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new _i(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v0(e))return"Blackberry";if(w0(e))return"Webos";if(m0(e))return"Safari";if((e.includes("chrome/")||g0(e))&&!e.includes("edge/"))return"Chrome";if(y0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function p0(t=_t()){return/firefox\//i.test(t)}function m0(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g0(t=_t()){return/crios\//i.test(t)}function _0(t=_t()){return/iemobile/i.test(t)}function y0(t=_t()){return/android/i.test(t)}function v0(t=_t()){return/blackberry/i.test(t)}function w0(t=_t()){return/webos/i.test(t)}function Gf(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ox(t=_t()){var e;return Gf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ax(){return TA()&&document.documentMode===10}function E0(t=_t()){return Gf(t)||y0(t)||w0(t)||v0(t)||/windows phone/i.test(t)||_0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t,e=[]){let n;switch(t){case"Browser":n=l_(_t());break;case"Worker":n=`${l_(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ux(t,e={}){return Mi(t,"GET","/v2/passwordPolicy",Qu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=6;class hx{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:cx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new u_(this),this.idTokenSubscription=new u_(this),this.beforeStateQueue=new lx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mu(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(Vr(this));const n=e?je(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(Vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(Vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ux(this),n=new hx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new va("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ix(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xu(t){return je(t)}class u_{constructor(e){this.auth=e,this.observer=null,this.addObserver=PA(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fx(t){Kf=t}function px(t){return Kf.loadJS(t)}function mx(){return Kf.gapiScript}function gx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t,e){const n=Ku(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zr(i,e??{}))return s;Zn(s,"already-initialized")}return n.initialize({options:e})}function yx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vx(t,e,n){const r=Xu(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=I0(e),{host:o,port:l}=wx(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(zr(h,r.config.emulator)&&zr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,es(o)?(jf(`${i}//${o}${u}`),Uf("Auth",!0)):Ex()}function I0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wx(t){const e=I0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:c_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:c_(o)}}}function c_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ex(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(t,e){return c0(t,"POST","/v1/accounts:signInWithIdp",Qu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="http://localhost";class xs extends S0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$f(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yi(e,n)}buildRequest(){const e={requestUri:Tx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends A0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Ta{constructor(){super("facebook.com")}static credential(e){return xs._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xs._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ta{constructor(){super("github.com")}static credential(e){return xs._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.GITHUB_SIGN_IN_METHOD="github.com";yr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ta{constructor(){super("twitter.com")}static credential(e,n){return xs._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.TWITTER_SIGN_IN_METHOD="twitter.com";vr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ix(t,e){return c0(t,"POST","/v1/accounts:signUp",Qu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await on._fromIdTokenResponse(e,r,s),o=h_(r);return new $r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=h_(r);return new $r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function h_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(t){var e;if(Gt(t.app))return Promise.reject(Vr(t));const n=Xu(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new $r({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ix(n,{returnSecureToken:!0}),s=await $r._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_u.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _u(e,n,r,s)}}function R0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_u._fromErrorAndOperation(t,i,e,r):i})}async function Ax(t,e,n=!1){const r=await oa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $r._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rx(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(Vr(r));const s="reauthenticate";try{const i=await oa(t,R0(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=Wf(i.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),$r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Zn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(t,e,n=!1){if(Gt(t.app))return Promise.reject(Vr(t));const r="signIn",s=await R0(t,r,e),i=await $r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(t,e){return je(t).setPersistence(e)}function kx(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function Px(t,e,n){return je(t).beforeAuthStateChanged(e,n)}const yu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yu,"1"),this.storage.removeItem(yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=1e3,bx=10;class C0 extends x0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=E0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ax()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Nx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}C0.type="LOCAL";const k0=C0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0 extends x0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}P0.type="SESSION";const N0=P0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Yu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await Dx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Qf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function Vx(t){An().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function Lx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jx(){return b0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="firebaseLocalStorageDb",Ux=1,vu="firebaseLocalStorage",O0="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ju(t,e){return t.transaction([vu],e?"readwrite":"readonly").objectStore(vu)}function Fx(){const t=indexedDB.deleteDatabase(D0);return new Ia(t).toPromise()}function Ed(){const t=indexedDB.open(D0,Ux);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vu,{keyPath:O0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vu)?e(r):(r.close(),await Fx(),e(await Ed()))})})}async function d_(t,e,n){const r=Ju(t,!0).put({[O0]:e,value:n});return new Ia(r).toPromise()}async function zx(t,e){const n=Ju(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function f_(t,e){const n=Ju(t,!0).delete(e);return new Ia(n).toPromise()}const Bx=800,$x=3;class V0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ed(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$x)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return b0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yu._getInstance(jx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Lx(),!this.activeServiceWorker)return;this.sender=new Ox(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ed();return await d_(e,yu,"1"),await f_(e,yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>d_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>f_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ju(s,!1).getAll();return new Ia(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}V0.type="LOCAL";const qx=V0;new Ea(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(t,e){return e?Hn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends S0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Wx(t){return xx(t.auth,new Xf(t),t.bypassAuthState)}function Gx(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),Rx(n,new Xf(t),t.bypassAuthState)}async function Kx(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),Ax(n,new Xf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wx;case"linkViaPopup":case"linkViaRedirect":return Kx;case"reauthViaPopup":case"reauthViaRedirect":return Gx;default:Zn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=new Ea(2e3,1e4);class ui extends L0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ui.currentPopupAction&&ui.currentPopupAction.cancel(),ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=Qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qx.get())};e()}}ui.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx="pendingRedirect",Vl=new Map;class Yx extends L0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vl.get(this.auth._key());if(!e){try{const r=await Jx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vl.set(this.auth._key(),e)}return this.bypassAuthState||Vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jx(t,e){const n=tC(e),r=eC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Zx(t,e){Vl.set(t._key(),e)}function eC(t){return Hn(t._redirectPersistence)}function tC(t){return Ol(Xx,t.config.apiKey,t.name)}async function nC(t,e,n=!1){if(Gt(t.app))return Promise.reject(Vr(t));const r=Xu(t),s=Hx(r,e),o=await new Yx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=10*60*1e3;class sC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!M0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rC&&this.cachedEventUids.clear(),this.cachedEventUids.has(p_(e))}saveEventToCache(e){this.cachedEventUids.add(p_(e)),this.lastProcessedEventTime=Date.now()}}function p_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function M0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return M0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(t,e={}){return Mi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lC=/^https?/;async function uC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oC(t);for(const n of e)try{if(cC(n))return}catch{}Zn(t,"unauthorized-domain")}function cC(t){const e=vd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lC.test(n))return!1;if(aC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=new Ea(3e4,6e4);function m_(){const t=An().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dC(t){return new Promise((e,n)=>{var r,s,i;function o(){m_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{m_(),n(Sn(t,"network-request-failed"))},timeout:hC.get()})}if(!((s=(r=An().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=An().gapi)===null||i===void 0)&&i.load)o();else{const l=gx("iframefcb");return An()[l]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},px(`${mx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ll=null,e})}let Ll=null;function fC(t){return Ll=Ll||dC(t),Ll}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new Ea(5e3,15e3),mC="__/auth/iframe",gC="emulator/auth/iframe",_C={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vC(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hf(e,gC):`https://${t.config.authDomain}/${mC}`,r={apiKey:e.apiKey,appName:t.name,v:Os},s=yC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wa(r).slice(1)}`}async function wC(t){const e=await fC(t),n=An().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:vC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_C,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),l=An().setTimeout(()=>{i(o)},pC.get());function u(){An().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TC=500,IC=600,SC="_blank",AC="http://localhost";class g_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RC(t,e,n,r=TC,s=IC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},EC),{width:r.toString(),height:s.toString(),top:i,left:o}),h=_t().toLowerCase();n&&(l=g0(h)?SC:n),p0(h)&&(e=e||AC,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[R,C])=>`${g}${R}=${C},`,"");if(ox(h)&&l!=="_self")return xC(e||"",l),new g_(null);const m=window.open(e||"",l,f);J(m,t,"popup-blocked");try{m.focus()}catch{}return new g_(m)}function xC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="__/auth/handler",kC="emulator/auth/handler",PC=encodeURIComponent("fac");async function __(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:s};if(e instanceof A0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Ta){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${PC}=${encodeURIComponent(u)}`:"";return`${NC(t)}?${wa(l).slice(1)}${h}`}function NC({config:t}){return t.emulator?Hf(t,kC):`https://${t.authDomain}/${CC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="webStorageSupport";class bC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N0,this._completeRedirectFn=nC,this._overrideRedirectResult=Zx}async _openPopup(e,n,r,s){var i;er((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await __(e,n,r,vd(),s);return RC(e,o,Qf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await __(e,n,r,vd(),s);return Vx(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(er(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wC(e),r=new sC(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dh,{type:dh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[dh];o!==void 0&&n(!!o),Zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return E0()||m0()||Gf()}}const DC=bC;var y_="@firebase/auth",v_="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LC(t){Rs(new Br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T0(t)},h=new dx(r,s,i,u);return yx(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rs(new Br("auth-internal",e=>{const n=Xu(e.getProvider("auth").getImmediate());return(r=>new OC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(y_,v_,VC(t)),In(y_,v_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=5*60,jC=Jw("authIdTokenMaxAge")||MC;let w_=null;const UC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jC)return;const s=n==null?void 0:n.token;w_!==s&&(w_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function FC(t=Bf()){const e=Ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_x(t,{popupRedirectResolver:DC,persistence:[qx,k0,N0]}),r=Jw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=UC(i.toString());Px(n,o,()=>o(n.currentUser)),kx(n,l=>o(l))}}const s=Qw("auth");return s&&vx(n,`http://${s}`),n}function zC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}fx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",zC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LC("Browser");var E_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,j0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.D=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(I,x,k){for(var T=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)T[Ye-2]=arguments[Ye];return y.prototype[x].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,w){w||(w=0);var I=Array(16);if(typeof y=="string")for(var x=0;16>x;++x)I[x]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(x=0;16>x;++x)I[x]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],x=E.g[2];var k=E.g[3],T=y+(k^w&(x^k))+I[0]+3614090360&4294967295;y=w+(T<<7&4294967295|T>>>25),T=k+(x^y&(w^x))+I[1]+3905402710&4294967295,k=y+(T<<12&4294967295|T>>>20),T=x+(w^k&(y^w))+I[2]+606105819&4294967295,x=k+(T<<17&4294967295|T>>>15),T=w+(y^x&(k^y))+I[3]+3250441966&4294967295,w=x+(T<<22&4294967295|T>>>10),T=y+(k^w&(x^k))+I[4]+4118548399&4294967295,y=w+(T<<7&4294967295|T>>>25),T=k+(x^y&(w^x))+I[5]+1200080426&4294967295,k=y+(T<<12&4294967295|T>>>20),T=x+(w^k&(y^w))+I[6]+2821735955&4294967295,x=k+(T<<17&4294967295|T>>>15),T=w+(y^x&(k^y))+I[7]+4249261313&4294967295,w=x+(T<<22&4294967295|T>>>10),T=y+(k^w&(x^k))+I[8]+1770035416&4294967295,y=w+(T<<7&4294967295|T>>>25),T=k+(x^y&(w^x))+I[9]+2336552879&4294967295,k=y+(T<<12&4294967295|T>>>20),T=x+(w^k&(y^w))+I[10]+4294925233&4294967295,x=k+(T<<17&4294967295|T>>>15),T=w+(y^x&(k^y))+I[11]+2304563134&4294967295,w=x+(T<<22&4294967295|T>>>10),T=y+(k^w&(x^k))+I[12]+1804603682&4294967295,y=w+(T<<7&4294967295|T>>>25),T=k+(x^y&(w^x))+I[13]+4254626195&4294967295,k=y+(T<<12&4294967295|T>>>20),T=x+(w^k&(y^w))+I[14]+2792965006&4294967295,x=k+(T<<17&4294967295|T>>>15),T=w+(y^x&(k^y))+I[15]+1236535329&4294967295,w=x+(T<<22&4294967295|T>>>10),T=y+(x^k&(w^x))+I[1]+4129170786&4294967295,y=w+(T<<5&4294967295|T>>>27),T=k+(w^x&(y^w))+I[6]+3225465664&4294967295,k=y+(T<<9&4294967295|T>>>23),T=x+(y^w&(k^y))+I[11]+643717713&4294967295,x=k+(T<<14&4294967295|T>>>18),T=w+(k^y&(x^k))+I[0]+3921069994&4294967295,w=x+(T<<20&4294967295|T>>>12),T=y+(x^k&(w^x))+I[5]+3593408605&4294967295,y=w+(T<<5&4294967295|T>>>27),T=k+(w^x&(y^w))+I[10]+38016083&4294967295,k=y+(T<<9&4294967295|T>>>23),T=x+(y^w&(k^y))+I[15]+3634488961&4294967295,x=k+(T<<14&4294967295|T>>>18),T=w+(k^y&(x^k))+I[4]+3889429448&4294967295,w=x+(T<<20&4294967295|T>>>12),T=y+(x^k&(w^x))+I[9]+568446438&4294967295,y=w+(T<<5&4294967295|T>>>27),T=k+(w^x&(y^w))+I[14]+3275163606&4294967295,k=y+(T<<9&4294967295|T>>>23),T=x+(y^w&(k^y))+I[3]+4107603335&4294967295,x=k+(T<<14&4294967295|T>>>18),T=w+(k^y&(x^k))+I[8]+1163531501&4294967295,w=x+(T<<20&4294967295|T>>>12),T=y+(x^k&(w^x))+I[13]+2850285829&4294967295,y=w+(T<<5&4294967295|T>>>27),T=k+(w^x&(y^w))+I[2]+4243563512&4294967295,k=y+(T<<9&4294967295|T>>>23),T=x+(y^w&(k^y))+I[7]+1735328473&4294967295,x=k+(T<<14&4294967295|T>>>18),T=w+(k^y&(x^k))+I[12]+2368359562&4294967295,w=x+(T<<20&4294967295|T>>>12),T=y+(w^x^k)+I[5]+4294588738&4294967295,y=w+(T<<4&4294967295|T>>>28),T=k+(y^w^x)+I[8]+2272392833&4294967295,k=y+(T<<11&4294967295|T>>>21),T=x+(k^y^w)+I[11]+1839030562&4294967295,x=k+(T<<16&4294967295|T>>>16),T=w+(x^k^y)+I[14]+4259657740&4294967295,w=x+(T<<23&4294967295|T>>>9),T=y+(w^x^k)+I[1]+2763975236&4294967295,y=w+(T<<4&4294967295|T>>>28),T=k+(y^w^x)+I[4]+1272893353&4294967295,k=y+(T<<11&4294967295|T>>>21),T=x+(k^y^w)+I[7]+4139469664&4294967295,x=k+(T<<16&4294967295|T>>>16),T=w+(x^k^y)+I[10]+3200236656&4294967295,w=x+(T<<23&4294967295|T>>>9),T=y+(w^x^k)+I[13]+681279174&4294967295,y=w+(T<<4&4294967295|T>>>28),T=k+(y^w^x)+I[0]+3936430074&4294967295,k=y+(T<<11&4294967295|T>>>21),T=x+(k^y^w)+I[3]+3572445317&4294967295,x=k+(T<<16&4294967295|T>>>16),T=w+(x^k^y)+I[6]+76029189&4294967295,w=x+(T<<23&4294967295|T>>>9),T=y+(w^x^k)+I[9]+3654602809&4294967295,y=w+(T<<4&4294967295|T>>>28),T=k+(y^w^x)+I[12]+3873151461&4294967295,k=y+(T<<11&4294967295|T>>>21),T=x+(k^y^w)+I[15]+530742520&4294967295,x=k+(T<<16&4294967295|T>>>16),T=w+(x^k^y)+I[2]+3299628645&4294967295,w=x+(T<<23&4294967295|T>>>9),T=y+(x^(w|~k))+I[0]+4096336452&4294967295,y=w+(T<<6&4294967295|T>>>26),T=k+(w^(y|~x))+I[7]+1126891415&4294967295,k=y+(T<<10&4294967295|T>>>22),T=x+(y^(k|~w))+I[14]+2878612391&4294967295,x=k+(T<<15&4294967295|T>>>17),T=w+(k^(x|~y))+I[5]+4237533241&4294967295,w=x+(T<<21&4294967295|T>>>11),T=y+(x^(w|~k))+I[12]+1700485571&4294967295,y=w+(T<<6&4294967295|T>>>26),T=k+(w^(y|~x))+I[3]+2399980690&4294967295,k=y+(T<<10&4294967295|T>>>22),T=x+(y^(k|~w))+I[10]+4293915773&4294967295,x=k+(T<<15&4294967295|T>>>17),T=w+(k^(x|~y))+I[1]+2240044497&4294967295,w=x+(T<<21&4294967295|T>>>11),T=y+(x^(w|~k))+I[8]+1873313359&4294967295,y=w+(T<<6&4294967295|T>>>26),T=k+(w^(y|~x))+I[15]+4264355552&4294967295,k=y+(T<<10&4294967295|T>>>22),T=x+(y^(k|~w))+I[6]+2734768916&4294967295,x=k+(T<<15&4294967295|T>>>17),T=w+(k^(x|~y))+I[13]+1309151649&4294967295,w=x+(T<<21&4294967295|T>>>11),T=y+(x^(w|~k))+I[4]+4149444226&4294967295,y=w+(T<<6&4294967295|T>>>26),T=k+(w^(y|~x))+I[11]+3174756917&4294967295,k=y+(T<<10&4294967295|T>>>22),T=x+(y^(k|~w))+I[2]+718787259&4294967295,x=k+(T<<15&4294967295|T>>>17),T=w+(k^(x|~y))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(x+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+x&4294967295,E.g[3]=E.g[3]+k&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var w=y-this.blockSize,I=this.B,x=this.h,k=0;k<y;){if(x==0)for(;k<=w;)s(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<y;)if(I[x++]=E.charCodeAt(k++),x==this.blockSize){s(this,I),x=0;break}}else for(;k<y;)if(I[x++]=E[k++],x==this.blockSize){s(this,I),x=0;break}}this.h=x,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var w=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=w&255,w/=256;for(this.u(E),E=Array(16),y=w=0;4>y;++y)for(var I=0;32>I;I+=8)E[w++]=this.g[y]>>>I&255;return E};function i(E,y){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function o(E,y){this.h=y;for(var w=[],I=!0,x=E.length-1;0<=x;x--){var k=E[x]|0;I&&k==y||(w[x]=k,I=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?i(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return D(h(-E));for(var y=[],w=1,I=0;E>=w;I++)y[I]=E/w|0,w*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return D(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(y,8)),I=m,x=0;x<E.length;x+=8){var k=Math.min(8,E.length-x),T=parseInt(E.substring(x,x+k),y);8>k?(k=h(Math.pow(y,k)),I=I.j(k).add(h(T))):(I=I.j(w),I=I.add(h(T)))}return I}var m=u(0),g=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();for(var E=0,y=1,w=0;w<this.g.length;w++){var I=this.i(w);E+=(0<=I?I:4294967296+I)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(N(this))return"-"+D(this).toString(E);for(var y=h(Math.pow(E,6)),w=this,I="";;){var x=b(w,y).g;w=A(w,x.j(y));var k=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=x,C(w))return k+I;for(;6>k.length;)k="0"+k;I=k+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=A(this,E),N(E)?-1:C(E)?0:1};function D(E){for(var y=E.g.length,w=[],I=0;I<y;I++)w[I]=~E.g[I];return new o(w,~E.h).add(g)}t.abs=function(){return N(this)?D(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],I=0,x=0;x<=y;x++){var k=I+(this.i(x)&65535)+(E.i(x)&65535),T=(k>>>16)+(this.i(x)>>>16)+(E.i(x)>>>16);I=T>>>16,k&=65535,T&=65535,w[x]=T<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function A(E,y){return E.add(D(y))}t.j=function(E){if(C(this)||C(E))return m;if(N(this))return N(E)?D(this).j(D(E)):D(D(this).j(E));if(N(E))return D(this.j(D(E)));if(0>this.l(R)&&0>E.l(R))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,w=[],I=0;I<2*y;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var x=0;x<E.g.length;x++){var k=this.i(I)>>>16,T=this.i(I)&65535,Ye=E.i(x)>>>16,$t=E.i(x)&65535;w[2*I+2*x]+=T*$t,v(w,2*I+2*x),w[2*I+2*x+1]+=k*$t,v(w,2*I+2*x+1),w[2*I+2*x+1]+=T*Ye,v(w,2*I+2*x+1),w[2*I+2*x+2]+=k*Ye,v(w,2*I+2*x+2)}for(I=0;I<y;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=y;I<2*y;I++)w[I]=0;return new o(w,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function S(E,y){this.g=E,this.h=y}function b(E,y){if(C(y))throw Error("division by zero");if(C(E))return new S(m,m);if(N(E))return y=b(D(E),y),new S(D(y.g),D(y.h));if(N(y))return y=b(E,D(y)),new S(D(y.g),y.h);if(30<E.g.length){if(N(E)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,I=y;0>=I.l(E);)w=F(w),I=F(I);var x=j(w,1),k=j(I,1);for(I=j(I,2),w=j(w,2);!C(I);){var T=k.add(I);0>=T.l(E)&&(x=x.add(w),k=T),I=j(I,1),w=j(w,1)}return y=A(E,x.j(y)),new S(x,y)}for(x=m;0<=E.l(y);){for(w=Math.max(1,Math.floor(E.m()/y.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),k=h(w),T=k.j(y);N(T)||0<T.l(E);)w-=I,k=h(w),T=k.j(y);C(k)&&(k=g),x=x.add(k),E=A(E,T)}return new S(x,E)}t.A=function(E){return b(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],I=0;I<y;I++)w[I]=this.i(I)&E.i(I);return new o(w,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],I=0;I<y;I++)w[I]=this.i(I)|E.i(I);return new o(w,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],I=0;I<y;I++)w[I]=this.i(I)^E.i(I);return new o(w,this.h^E.h)};function F(E){for(var y=E.g.length+1,w=[],I=0;I<y;I++)w[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(w,E.h)}function j(E,y){var w=y>>5;y%=32;for(var I=E.g.length-w,x=[],k=0;k<I;k++)x[k]=0<y?E.i(k+w)>>>y|E.i(k+w+1)<<32-y:E.i(k+w);return new o(x,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,j0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Lr=o}).apply(typeof E_<"u"?E_:typeof self<"u"?self:typeof window<"u"?window:{});var fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var U0,wo,F0,Ml,Td,z0,B0,$0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fl=="object"&&fl];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var P=a[_];if(!(P in d))break e;d=d[P]}a=a[a.length-1],_=d[a],c=c(_),c!=_&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var d=0,_=!1,P={next:function(){if(!_&&d<a.length){var O=d++;return{value:c(O,a[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,_),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function R(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(_,P,O){for(var z=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)z[ve-2]=arguments[ve];return c.prototype[P].apply(_,z)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let _=0;_<c;_++)d[_]=a[_];return d}return[]}function D(a,c){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(u(_)){const P=a.length||0,O=_.length||0;a.length=P+O;for(let z=0;z<O;z++)a[P+z]=_[z]}else a.push(_)}}class A{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function j(a,c,d){for(const _ in a)c.call(d,a[_],_,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let d,_;for(let P=1;P<arguments.length;P++){_=arguments[P];for(d in _)a[d]=_[d];for(let O=0;O<w.length;O++)d=w[O],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function x(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Ye{constructor(){this.h=this.g=null}add(c,d){const _=$t.get();_.set(c,d),this.h?this.h.next=_:this.g=_,this.h=_}}var $t=new A(()=>new qt,a=>a.reset());class qt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let yt,$=!1,Q=new Ye,Z=()=>{const a=l.Promise.resolve(void 0);yt=()=>{a.then(ge)}};var ge=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){k(d)}var c=$t;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var _e=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function pe(a,c){if(B.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{b(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ye[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&pe.aa.h.call(this)}}C(pe,B);var ye={2:"touch",3:"pen",4:"mouse"};pe.prototype.h=function(){pe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var at="closure_listenable_"+(1e6*Math.random()|0),Dt=0;function Us(a,c,d,_,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!_,this.ha=P,this.key=++Dt,this.da=this.fa=!1}function rs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ss(a){this.src=a,this.g={},this.h=0}ss.prototype.add=function(a,c,d,_,P){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var z=G(a,c,_,P);return-1<z?(c=a[z],d||(c.fa=!1)):(c=new Us(c,this.src,O,!!_,P),c.fa=d,a.push(c)),c};function V(a,c){var d=c.type;if(d in a.g){var _=a.g[d],P=Array.prototype.indexOf.call(_,c,void 0),O;(O=0<=P)&&Array.prototype.splice.call(_,P,1),O&&(rs(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function G(a,c,d,_){for(var P=0;P<a.length;++P){var O=a[P];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==_)return P}return-1}var X="closure_lm_"+(1e6*Math.random()|0),se={};function ee(a,c,d,_,P){if(Array.isArray(c)){for(var O=0;O<c.length;O++)ee(a,c[O],d,_,P);return null}return d=or(d),a&&a[at]?a.K(c,d,h(_)?!!_.capture:!1,P):Je(a,c,d,!1,_,P)}function Je(a,c,d,_,P,O){if(!c)throw Error("Invalid event type");var z=h(P)?!!P.capture:!!P,ve=Vn(a);if(ve||(a[X]=ve=new ss(a)),d=ve.add(c,d,_,z,O),d.proxy)return d;if(_=sr(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)_e||(P=z),P===void 0&&(P=!1),a.addEventListener(c.toString(),_,P);else if(a.attachEvent)a.attachEvent(ir(c.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function sr(){function a(d){return c.call(a.src,a.listener,d)}const c=On;return a}function pn(a,c,d,_,P){if(Array.isArray(c))for(var O=0;O<c.length;O++)pn(a,c[O],d,_,P);else _=h(_)?!!_.capture:!!_,d=or(d),a&&a[at]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],d=G(O,d,_,P),-1<d&&(rs(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=Vn(a))&&(c=a.g[c.toString()],a=-1,c&&(a=G(c,d,_,P)),(d=-1<a?c[a]:null)&&Dn(d))}function Dn(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[at])V(c.i,a);else{var d=a.type,_=a.proxy;c.removeEventListener?c.removeEventListener(d,_,a.capture):c.detachEvent?c.detachEvent(ir(d),_):c.addListener&&c.removeListener&&c.removeListener(_),(d=Vn(c))?(V(d,a),d.h==0&&(d.src=null,c[X]=null)):rs(a)}}}function ir(a){return a in se?se[a]:se[a]="on"+a}function On(a,c){if(a.da)a=!0;else{c=new pe(c,this);var d=a.listener,_=a.ha||a.src;a.fa&&Dn(a),a=d.call(_,c)}return a}function Vn(a){return a=a[X],a instanceof ss?a:null}var Zt="__closure_events_fn_"+(1e9*Math.random()>>>0);function or(a){return typeof a=="function"?a:(a[Zt]||(a[Zt]=function(c){return a.handleEvent(c)}),a[Zt])}function $e(){de.call(this),this.i=new ss(this),this.M=this,this.F=null}C($e,de),$e.prototype[at]=!0,$e.prototype.removeEventListener=function(a,c,d,_){pn(this,a,c,d,_)};function Ge(a,c){var d,_=a.F;if(_)for(d=[];_;_=_.F)d.push(_);if(a=a.M,_=c.type||c,typeof c=="string")c=new B(c,a);else if(c instanceof B)c.target=c.target||a;else{var P=c;c=new B(_,a),I(c,P)}if(P=!0,d)for(var O=d.length-1;0<=O;O--){var z=c.g=d[O];P=is(z,_,!0,c)&&P}if(z=c.g=a,P=is(z,_,!0,c)&&P,P=is(z,_,!1,c)&&P,d)for(O=0;O<d.length;O++)z=c.g=d[O],P=is(z,_,!1,c)&&P}$e.prototype.N=function(){if($e.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],_=0;_<d.length;_++)rs(d[_]);delete a.g[c],a.h--}}this.F=null},$e.prototype.K=function(a,c,d,_){return this.i.add(String(a),c,!1,d,_)},$e.prototype.L=function(a,c,d,_){return this.i.add(String(a),c,!0,d,_)};function is(a,c,d,_){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,O=0;O<c.length;++O){var z=c[O];if(z&&!z.da&&z.capture==d){var ve=z.listener,Ze=z.ha||z.src;z.fa&&V(a.i,z),P=ve.call(Ze,_)!==!1&&P}}return P&&!_.defaultPrevented}function Fp(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function zp(a){a.g=Fp(()=>{a.g=null,a.i&&(a.i=!1,zp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class YT extends de{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:zp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(a){de.call(this),this.h=a,this.g={}}C(Wi,de);var Bp=[];function $p(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&Dn(c)},a),a.g={}}Wi.prototype.N=function(){Wi.aa.N.call(this),$p(this)},Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _c=l.JSON.stringify,JT=l.JSON.parse,ZT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function yc(){}yc.prototype.h=null;function qp(a){return a.h||(a.h=a.i())}function Hp(){}var Gi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vc(){B.call(this,"d")}C(vc,B);function wc(){B.call(this,"c")}C(wc,B);var os={},Wp=null;function Oa(){return Wp=Wp||new $e}os.La="serverreachability";function Gp(a){B.call(this,os.La,a)}C(Gp,B);function Ki(a){const c=Oa();Ge(c,new Gp(c))}os.STAT_EVENT="statevent";function Kp(a,c){B.call(this,os.STAT_EVENT,a),this.stat=c}C(Kp,B);function vt(a){const c=Oa();Ge(c,new Kp(c,a))}os.Ma="timingevent";function Qp(a,c){B.call(this,os.Ma,a),this.size=c}C(Qp,B);function Qi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Xi(){this.g=!0}Xi.prototype.xa=function(){this.g=!1};function eI(a,c,d,_,P,O){a.info(function(){if(a.g)if(O)for(var z="",ve=O.split("&"),Ze=0;Ze<ve.length;Ze++){var he=ve[Ze].split("=");if(1<he.length){var lt=he[0];he=he[1];var ut=lt.split("_");z=2<=ut.length&&ut[1]=="type"?z+(lt+"="+he+"&"):z+(lt+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+_+") [attempt "+P+"]: "+c+`
`+d+`
`+z})}function tI(a,c,d,_,P,O,z){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+P+"]: "+c+`
`+d+`
`+O+" "+z})}function Fs(a,c,d,_){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+rI(a,d)+(_?" "+_:"")})}function nI(a,c){a.info(function(){return"TIMEOUT: "+c})}Xi.prototype.info=function(){};function rI(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var _=d[a];if(!(2>_.length)){var P=_[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return _c(d)}catch{return c}}var Va={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ec;function La(){}C(La,yc),La.prototype.g=function(){return new XMLHttpRequest},La.prototype.i=function(){return{}},Ec=new La;function ar(a,c,d,_){this.j=a,this.i=c,this.l=d,this.R=_||1,this.U=new Wi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yp}function Yp(){this.i=null,this.g="",this.h=!1}var Jp={},Tc={};function Ic(a,c,d){a.L=1,a.v=Fa(Ln(c)),a.m=d,a.P=!0,Zp(a,null)}function Zp(a,c){a.F=Date.now(),Ma(a),a.A=Ln(a.v);var d=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),fm(d.i,"t",_),a.C=0,d=a.j.J,a.h=new Yp,a.g=Nm(a.j,d?c:null,!a.m),0<a.O&&(a.M=new YT(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,_=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Bp[0]=P.toString()),P=Bp);for(var O=0;O<P.length;O++){var z=ee(d,P[O],_||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Ki(),eI(a.i,a.u,a.A,a.l,a.R,a.m)}ar.prototype.ca=function(a){a=a.target;const c=this.M;c&&Mn(a)==3?c.j():this.Y(a)},ar.prototype.Y=function(a){try{if(a==this.g)e:{const ut=Mn(this.g);var c=this.g.Ba();const $s=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||wm(this.g)))){this.J||ut!=4||c==7||(c==8||0>=$s?Ki(3):Ki(2)),Sc(this);var d=this.g.Z();this.X=d;t:if(em(this)){var _=wm(this.g);a="";var P=_.length,O=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){as(this),Yi(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(_[c],{stream:!(O&&c==P-1)});_.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,tI(this.i,this.u,this.A,this.l,this.R,ut,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,Ze=this.g;if((ve=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ve)){var he=ve;break t}}he=null}if(d=he)Fs(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ac(this,d);else{this.o=!1,this.s=3,vt(12),as(this),Yi(this);break e}}if(this.P){d=!0;let en;for(;!this.J&&this.C<z.length;)if(en=sI(this,z),en==Tc){ut==4&&(this.s=4,vt(14),d=!1),Fs(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Jp){this.s=4,vt(15),Fs(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Fs(this.i,this.l,en,null),Ac(this,en);if(em(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||z.length!=0||this.h.h||(this.s=1,vt(16),d=!1),this.o=this.o&&d,!d)Fs(this.i,this.l,z,"[Invalid Chunked Response]"),as(this),Yi(this);else if(0<z.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Nc(lt),lt.M=!0,vt(11))}}else Fs(this.i,this.l,z,null),Ac(this,z);ut==4&&as(this),this.o&&!this.J&&(ut==4?xm(this.j,this):(this.o=!1,Ma(this)))}else EI(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),as(this),Yi(this)}}}catch{}finally{}};function em(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function sI(a,c){var d=a.C,_=c.indexOf(`
`,d);return _==-1?Tc:(d=Number(c.substring(d,_)),isNaN(d)?Jp:(_+=1,_+d>c.length?Tc:(c=c.slice(_,_+d),a.C=_+d,c)))}ar.prototype.cancel=function(){this.J=!0,as(this)};function Ma(a){a.S=Date.now()+a.I,tm(a,a.I)}function tm(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Qi(g(a.ba,a),c)}function Sc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ar.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(nI(this.i,this.A),this.L!=2&&(Ki(),vt(17)),as(this),this.s=2,Yi(this)):tm(this,this.S-a)};function Yi(a){a.j.G==0||a.J||xm(a.j,a)}function as(a){Sc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,$p(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Ac(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Rc(d.h,a))){if(!a.K&&Rc(d.h,a)&&d.G==3){try{var _=d.Da.g.parse(c)}catch{_=null}if(Array.isArray(_)&&_.length==3){var P=_;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Wa(d),qa(d);else break e;Pc(d),vt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Qi(g(d.Za,d),6e3));if(1>=sm(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else us(d,11)}else if((a.K||d.g==a)&&Wa(d),!v(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let he=P[c];if(d.T=he[0],he=he[1],d.G==2)if(he[0]=="c"){d.K=he[1],d.ia=he[2];const lt=he[3];lt!=null&&(d.la=lt,d.j.info("VER="+d.la));const ut=he[4];ut!=null&&(d.Aa=ut,d.j.info("SVER="+d.Aa));const $s=he[5];$s!=null&&typeof $s=="number"&&0<$s&&(_=1.5*$s,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const en=a.g;if(en){const Ka=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ka){var O=_.h;O.g||Ka.indexOf("spdy")==-1&&Ka.indexOf("quic")==-1&&Ka.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(xc(O,O.h),O.h=null))}if(_.D){const bc=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;bc&&(_.ya=bc,Te(_.I,_.D,bc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var z=a;if(_.qa=Pm(_,_.J?_.ia:null,_.W),z.K){im(_.h,z);var ve=z,Ze=_.L;Ze&&(ve.I=Ze),ve.B&&(Sc(ve),Ma(ve)),_.g=z}else Am(_);0<d.i.length&&Ha(d)}else he[0]!="stop"&&he[0]!="close"||us(d,7);else d.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?us(d,7):kc(d):he[0]!="noop"&&d.l&&d.l.ta(he),d.v=0)}}Ki(4)}catch{}}var iI=class{constructor(a,c){this.g=a,this.map=c}};function nm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function sm(a){return a.h?1:a.g?a.g.size:0}function Rc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function xc(a,c){a.g?a.g.add(c):a.h=c}function im(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}nm.prototype.cancel=function(){if(this.i=om(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function om(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function oI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,_=0;_<d;_++)c.push(a[_]);return c}c=[],d=0;for(_ in a)c[d++]=a[_];return c}function aI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const _ in a)c[d++]=_;return c}}}function am(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=aI(a),_=oI(a),P=_.length,O=0;O<P;O++)c.call(void 0,_[O],d&&d[O],a)}var lm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lI(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var _=a[d].indexOf("="),P=null;if(0<=_){var O=a[d].substring(0,_);P=a[d].substring(_+1)}else O=a[d];c(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function ls(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ls){this.h=a.h,ja(this,a.j),this.o=a.o,this.g=a.g,Ua(this,a.s),this.l=a.l;var c=a.i,d=new eo;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),um(this,d),this.m=a.m}else a&&(c=String(a).match(lm))?(this.h=!1,ja(this,c[1]||"",!0),this.o=Ji(c[2]||""),this.g=Ji(c[3]||"",!0),Ua(this,c[4]),this.l=Ji(c[5]||"",!0),um(this,c[6]||"",!0),this.m=Ji(c[7]||"")):(this.h=!1,this.i=new eo(null,this.h))}ls.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Zi(c,cm,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Zi(c,cm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Zi(d,d.charAt(0)=="/"?hI:cI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Zi(d,fI)),a.join("")};function Ln(a){return new ls(a)}function ja(a,c,d){a.j=d?Ji(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ua(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function um(a,c,d){c instanceof eo?(a.i=c,pI(a.i,a.h)):(d||(c=Zi(c,dI)),a.i=new eo(c,a.h))}function Te(a,c,d){a.i.set(c,d)}function Fa(a){return Te(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ji(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,uI),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function uI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cm=/[#\/\?@]/g,cI=/[#\?:]/g,hI=/[#\?]/g,dI=/[#\?@]/g,fI=/#/g;function eo(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function lr(a){a.g||(a.g=new Map,a.h=0,a.i&&lI(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=eo.prototype,t.add=function(a,c){lr(this),this.i=null,a=zs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function hm(a,c){lr(a),c=zs(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function dm(a,c){return lr(a),c=zs(a,c),a.g.has(c)}t.forEach=function(a,c){lr(this),this.g.forEach(function(d,_){d.forEach(function(P){a.call(c,P,_,this)},this)},this)},t.na=function(){lr(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let _=0;_<c.length;_++){const P=a[_];for(let O=0;O<P.length;O++)d.push(c[_])}return d},t.V=function(a){lr(this);let c=[];if(typeof a=="string")dm(this,a)&&(c=c.concat(this.g.get(zs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return lr(this),this.i=null,a=zs(this,a),dm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function fm(a,c,d){hm(a,c),0<d.length&&(a.i=null,a.g.set(zs(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var _=c[d];const O=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var P=O;z[_]!==""&&(P+="="+encodeURIComponent(String(z[_]))),a.push(P)}}return this.i=a.join("&")};function zs(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function pI(a,c){c&&!a.j&&(lr(a),a.i=null,a.g.forEach(function(d,_){var P=_.toLowerCase();_!=P&&(hm(this,_),fm(this,P,d))},a)),a.j=c}function mI(a,c){const d=new Xi;if(l.Image){const _=new Image;_.onload=R(ur,d,"TestLoadImage: loaded",!0,c,_),_.onerror=R(ur,d,"TestLoadImage: error",!1,c,_),_.onabort=R(ur,d,"TestLoadImage: abort",!1,c,_),_.ontimeout=R(ur,d,"TestLoadImage: timeout",!1,c,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else c(!1)}function gI(a,c){const d=new Xi,_=new AbortController,P=setTimeout(()=>{_.abort(),ur(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:_.signal}).then(O=>{clearTimeout(P),O.ok?ur(d,"TestPingServer: ok",!0,c):ur(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),ur(d,"TestPingServer: error",!1,c)})}function ur(a,c,d,_,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),_(d)}catch{}}function _I(){this.g=new ZT}function yI(a,c,d){const _=d||"";try{am(a,function(P,O){let z=P;h(P)&&(z=_c(P)),c.push(_+O+"="+encodeURIComponent(z))})}catch(P){throw c.push(_+"type="+encodeURIComponent("_badmap")),P}}function za(a){this.l=a.Ub||null,this.j=a.eb||!1}C(za,yc),za.prototype.g=function(){return new Ba(this.l,this.j)},za.prototype.i=function(a){return function(){return a}}({});function Ba(a,c){$e.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ba,$e),t=Ba.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,no(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,to(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,no(this)),this.g&&(this.readyState=3,no(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function pm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?to(this):no(this),this.readyState==3&&pm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,to(this))},t.Qa=function(a){this.g&&(this.response=a,to(this))},t.ga=function(){this.g&&to(this)};function to(a){a.readyState=4,a.l=null,a.j=null,a.v=null,no(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function no(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mm(a){let c="";return j(a,function(d,_){c+=_,c+=":",c+=d,c+=`\r
`}),c}function Cc(a,c,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=mm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Te(a,c,d))}function De(a){$e.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(De,$e);var vI=/^https?$/i,wI=["POST","PUT"];t=De.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ec.g(),this.v=this.o?qp(this.o):qp(Ec),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){gm(this,O);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var P in _)d.set(P,_[P]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())d.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(wI,c,void 0))||_||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of d)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vm(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){gm(this,O)}};function gm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,_m(a),$a(a)}function _m(a){a.A||(a.A=!0,Ge(a,"complete"),Ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ge(this,"complete"),Ge(this,"abort"),$a(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$a(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ym(this):this.bb())},t.bb=function(){ym(this)};function ym(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Mn(a)!=4||a.Z()!=2)){if(a.u&&Mn(a)==4)Fp(a.Ea,0,a);else if(Ge(a,"readystatechange"),Mn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var _;if(_=z===0){var P=String(a.D).match(lm)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),_=!vI.test(P?P.toLowerCase():"")}d=_}if(d)Ge(a,"complete"),Ge(a,"success");else{a.m=6;try{var O=2<Mn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",_m(a)}}finally{$a(a)}}}}function $a(a,c){if(a.g){vm(a);const d=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||Ge(a,"ready");try{d.onreadystatechange=_}catch{}}}function vm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),JT(c)}};function wm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function EI(a){const c={};a=(a.g&&2<=Mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(v(a[_]))continue;var d=x(a[_]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[P]||[];c[P]=O,O.push(d)}E(c,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ro(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Em(a){this.Aa=0,this.i=[],this.j=new Xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ro("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ro("baseRetryDelayMs",5e3,a),this.cb=ro("retryDelaySeedMs",1e4,a),this.Wa=ro("forwardChannelMaxRetries",2,a),this.wa=ro("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new nm(a&&a.concurrentRequestLimit),this.Da=new _I,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Em.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,_){vt(0),this.W=a,this.H=c||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=Pm(this,null,this.W),Ha(this)};function kc(a){if(Tm(a),a.G==3){var c=a.U++,d=Ln(a.I);if(Te(d,"SID",a.K),Te(d,"RID",c),Te(d,"TYPE","terminate"),so(a,d),c=new ar(a,a.j,c),c.L=2,c.v=Fa(Ln(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Nm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ma(c)}km(a)}function qa(a){a.g&&(Nc(a),a.g.cancel(),a.g=null)}function Tm(a){qa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ha(a){if(!rm(a.h)&&!a.s){a.s=!0;var c=a.Ga;yt||Z(),$||(yt(),$=!0),Q.add(c,a),a.B=0}}function TI(a,c){return sm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Qi(g(a.Ga,a,c),Cm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new ar(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(c+=_,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Sm(this,P,c),d=Ln(this.I),Te(d,"RID",a),Te(d,"CVER",22),this.D&&Te(d,"X-HTTP-Session-Id",this.D),so(this,d),O&&(this.O?c="headers="+encodeURIComponent(String(mm(O)))+"&"+c:this.m&&Cc(d,this.m,O)),xc(this.h,P),this.Ua&&Te(d,"TYPE","init"),this.P?(Te(d,"$req",c),Te(d,"SID","null"),P.T=!0,Ic(P,d,null)):Ic(P,d,c),this.G=2}}else this.G==3&&(a?Im(this,a):this.i.length==0||rm(this.h)||Im(this))};function Im(a,c){var d;c?d=c.l:d=a.U++;const _=Ln(a.I);Te(_,"SID",a.K),Te(_,"RID",d),Te(_,"AID",a.T),so(a,_),a.m&&a.o&&Cc(_,a.m,a.o),d=new ar(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Sm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),xc(a.h,d),Ic(d,_,c)}function so(a,c){a.H&&j(a.H,function(d,_){Te(c,_,d)}),a.l&&am({},function(d,_){Te(c,_,d)})}function Sm(a,c,d){d=Math.min(a.i.length,d);var _=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let O=-1;for(;;){const z=["count="+d];O==-1?0<d?(O=P[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let ve=!0;for(let Ze=0;Ze<d;Ze++){let he=P[Ze].g;const lt=P[Ze].map;if(he-=O,0>he)O=Math.max(0,P[Ze].g-100),ve=!1;else try{yI(lt,z,"req"+he+"_")}catch{_&&_(lt)}}if(ve){_=z.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,_}function Am(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;yt||Z(),$||(yt(),$=!0),Q.add(c,a),a.v=0}}function Pc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Qi(g(a.Fa,a),Cm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Rm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Qi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),qa(this),Rm(this))};function Nc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Rm(a){a.g=new ar(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Ln(a.qa);Te(c,"RID","rpc"),Te(c,"SID",a.K),Te(c,"AID",a.T),Te(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Te(c,"TO",a.ja),Te(c,"TYPE","xmlhttp"),so(a,c),a.m&&a.o&&Cc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Fa(Ln(c)),d.m=null,d.P=!0,Zp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,qa(this),Pc(this),vt(19))};function Wa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function xm(a,c){var d=null;if(a.g==c){Wa(a),Nc(a),a.g=null;var _=2}else if(Rc(a.h,c))d=c.D,im(a.h,c),_=1;else return;if(a.G!=0){if(c.o)if(_==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;_=Oa(),Ge(_,new Qp(_,d)),Ha(a)}else Am(a);else if(P=c.s,P==3||P==0&&0<c.X||!(_==1&&TI(a,c)||_==2&&Pc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),P){case 1:us(a,5);break;case 4:us(a,10);break;case 3:us(a,6);break;default:us(a,2)}}}function Cm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function us(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),_=a.Xa;const P=!_;_=new ls(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ja(_,"https"),Fa(_),P?mI(_.toString(),d):gI(_.toString(),d)}else vt(2);a.G=0,a.l&&a.l.sa(c),km(a),Tm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function km(a){if(a.G=0,a.ka=[],a.l){const c=om(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ka,c),D(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Pm(a,c,d){var _=d instanceof ls?Ln(d):new ls(d);if(_.g!="")c&&(_.g=c+"."+_.g),Ua(_,_.s);else{var P=l.location;_=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var O=new ls(null);_&&ja(O,_),c&&(O.g=c),P&&Ua(O,P),d&&(O.l=d),_=O}return d=a.D,c=a.ya,d&&c&&Te(_,d,c),Te(_,"VER",a.la),so(a,_),_}function Nm(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new De(new za({eb:d})):new De(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function bm(){}t=bm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ga(){}Ga.prototype.g=function(a,c){return new Ot(a,c)};function Ot(a,c){$e.call(this),this.g=new Em(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Bs(this)}C(Ot,$e),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){kc(this.g)},Ot.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=_c(a),a=d);c.i.push(new iI(c.Ya++,a)),c.G==3&&Ha(c)},Ot.prototype.N=function(){this.g.l=null,delete this.j,kc(this.g),delete this.g,Ot.aa.N.call(this)};function Dm(a){vc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(Dm,vc);function Om(){wc.call(this),this.status=1}C(Om,wc);function Bs(a){this.g=a}C(Bs,bm),Bs.prototype.ua=function(){Ge(this.g,"a")},Bs.prototype.ta=function(a){Ge(this.g,new Dm(a))},Bs.prototype.sa=function(a){Ge(this.g,new Om)},Bs.prototype.ra=function(){Ge(this.g,"b")},Ga.prototype.createWebChannel=Ga.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,$0=function(){return new Ga},B0=function(){return Oa()},z0=os,Td={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Va.NO_ERROR=0,Va.TIMEOUT=8,Va.HTTP_ERROR=6,Ml=Va,Xp.COMPLETE="complete",F0=Xp,Hp.EventType=Gi,Gi.OPEN="a",Gi.CLOSE="b",Gi.ERROR="c",Gi.MESSAGE="d",$e.prototype.listen=$e.prototype.K,wo=Hp,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,U0=De}).apply(typeof fl<"u"?fl:typeof self<"u"?self:typeof window<"u"?window:{});const T_="@firebase/firestore",I_="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Ff("@firebase/firestore");function Ws(){return Cs.logLevel}function H(t,...e){if(Cs.logLevel<=ae.DEBUG){const n=e.map(Yf);Cs.debug(`Firestore (${ji}): ${t}`,...n)}}function tr(t,...e){if(Cs.logLevel<=ae.ERROR){const n=e.map(Yf);Cs.error(`Firestore (${ji}): ${t}`,...n)}}function qr(t,...e){if(Cs.logLevel<=ae.WARN){const n=e.map(Yf);Cs.warn(`Firestore (${ji}): ${t}`,...n)}}function Yf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,q0(t,r,n)}function q0(t,e,n){let r=`FIRESTORE (${ji}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw tr(r),new Error(r)}function fe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||q0(e,s,r)}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class $C{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qC{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string",31837,{l:r}),new H0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class HC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class WC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new HC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class S_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){fe(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new S_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new S_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=KC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function Id(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ie(r,s);{const i=W0(),o=QC(i.encode(A_(t,n)),i.encode(A_(e,n)));return o!==0?o:ie(r,s)}}n+=r>65535?2:1}return ie(t.length,e.length)}function A_(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function QC(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ie(t[n],e[n]);return ie(t.length,e.length)}function Ci(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="__name__";class _n{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _n?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=_n.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ie(e.length,n.length)}static compareSegments(e,n){const r=_n.isNumericId(e),s=_n.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?_n.extractNumericId(e).compare(_n.extractNumericId(n)):Id(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Lr.fromString(e.substring(4,e.length-2))}}class we extends _n{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new we(n)}static emptyPath(){return new we([])}}const XC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends _n{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return XC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===R_}static keyField(){return new rt([R_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(we.fromString(e))}static fromName(e){return new K(we.fromString(e).popFirst(5))}static empty(){return new K(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new we(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t,e,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YC(t,e,n,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function x_(t){if(!K.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function C_(t){if(K.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function K0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Zu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zu(t);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function Sa(t,e){if(!K0(t))throw new q(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new q(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=-62135596800,P_=1e6;class Se{static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*P_);return new Se(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<k_)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/P_}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sa(e,Se._jsonSchema))return new Se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-k_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Se._jsonSchemaVersion="firestore/timestamp/1.0",Se._jsonSchema={type:Be("string",Se._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Se(0,0))}static max(){return new te(new Se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=-1;function JC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new Hr(s,K.empty(),e)}function ZC(t){return new Hr(t.readTime,t.key,aa)}class Hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hr(te.min(),K.empty(),aa)}static max(){return new Hr(te.max(),K.empty(),aa)}}function ek(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==tk)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function rk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ec.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=-1;function tc(t){return t==null}function wu(t){return t===0&&1/t==-1/0}function sk(t){return typeof t=="number"&&Number.isInteger(t)&&!wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="";function ik(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=N_(e)),e=ok(t.get(n),e);return N_(e)}function ok(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Q0:n+="";break;default:n+=i}}return n}function N_(t){return t+Q0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function X0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pl(this.root,e,this.comparator,!0)}}class pl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new D_(this.data.getIterator())}getIteratorFrom(e){return new D_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class D_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new We(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ci(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Y0("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const ak=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wr(t){if(fe(!!t,39018),typeof t=="string"){let e=0;const n=ak.exec(t);if(fe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0="server_timestamp",Z0="__type__",eE="__previous_value__",tE="__local_write_time__";function ep(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Z0])===null||n===void 0?void 0:n.stringValue)===J0}function nc(t){const e=t.mapValue.fields[eE];return ep(e)?nc(e):e}function la(t){const e=Wr(t.mapValue.fields[tE].timestampValue);return new Se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,n,r,s,i,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Eu="(default)";class ua{constructor(e,n){this.projectId=e,this.database=n||Eu}static empty(){return new ua("","")}get isDefaultDatabase(){return this.database===Eu}isEqual(e){return e instanceof ua&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="__type__",uk="__max__",ml={mapValue:{}},rE="__vector__",Tu="value";function Kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ep(t)?4:hk(t)?9007199254740991:ck(t)?10:11:Y(28295,{value:t})}function Pn(t,e){if(t===e)return!0;const n=Kr(t);if(n!==Kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return la(t).isEqual(la(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Wr(s.timestampValue),l=Wr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Gr(s.bytesValue).isEqual(Gr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),l=Le(i.doubleValue);return o===l?wu(o)===wu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ci(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(b_(o)!==b_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Pn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function ca(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=Kr(t),r=Kr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Le(i.integerValue||i.doubleValue),u=Le(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return O_(t.timestampValue,e.timestampValue);case 4:return O_(la(t),la(e));case 5:return Id(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Gr(i),u=Gr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ie(l[h],u[h]);if(f!==0)return f}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ie(Le(i.latitude),Le(o.latitude));return l!==0?l:ie(Le(i.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return V_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,f;const m=i.fields||{},g=o.fields||{},R=(l=m[Tu])===null||l===void 0?void 0:l.arrayValue,C=(u=g[Tu])===null||u===void 0?void 0:u.arrayValue,N=ie(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:V_(R,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ml.mapValue&&o===ml.mapValue)return 0;if(i===ml.mapValue)return 1;if(o===ml.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=Id(u[m],f[m]);if(g!==0)return g;const R=ki(l[u[m]],h[f[m]]);if(R!==0)return R}return ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{le:n})}}function O_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Wr(t),r=Wr(e),s=ie(n.seconds,r.seconds);return s!==0?s:ie(n.nanos,r.nanos)}function V_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ki(n[s],r[s]);if(i)return i}return ie(n.length,r.length)}function Pi(t){return Sd(t)}function Sd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Sd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Sd(n.fields[o])}`;return s+"}"}(t.mapValue):Y(61005,{value:t})}function jl(t){switch(Kr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=nc(t);return e?16+jl(e):16;case 5:return 2*t.stringValue.length;case 6:return Gr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+jl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ts(r.fields,(i,o)=>{s+=i.length+jl(o)}),s}(t.mapValue);default:throw Y(13486,{value:t})}}function L_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ad(t){return!!t&&"integerValue"in t}function tp(t){return!!t&&"arrayValue"in t}function M_(t){return!!t&&"nullValue"in t}function j_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ul(t){return!!t&&"mapValue"in t}function ck(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[nE])===null||n===void 0?void 0:n.stringValue)===rE}function Vo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Vo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===uk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vo(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Vo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ul(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ts(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(Vo(this.value))}}function sE(t){const e=[];return ts(t.fields,(n,r)=>{const s=new rt([n]);if(Ul(r)){const i=sE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new mt(e,0,te.min(),te.min(),te.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,te.min(),te.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,te.min(),te.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.position=e,this.inclusive=n}}function U_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ki(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function F_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n="asc"){this.field=e,this.dir=n}}function dk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{}class ze extends iE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pk(e,n,r):n==="array-contains"?new _k(e,r):n==="in"?new yk(e,r):n==="not-in"?new vk(e,r):n==="array-contains-any"?new wk(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mk(e,r):new gk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ki(n,this.value)):n!==null&&Kr(this.value)===Kr(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends iE{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new dn(e,n)}matches(e){return oE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function oE(t){return t.op==="and"}function aE(t){return fk(t)&&oE(t)}function fk(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function Rd(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Pi(t.value);if(aE(t))return t.filters.map(e=>Rd(e)).join(",");{const e=t.filters.map(n=>Rd(n)).join(",");return`${t.op}(${e})`}}function lE(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&Pn(r.value,s.value)}(t,e):t instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&lE(o,s.filters[l]),!0):!1}(t,e):void Y(19439)}function uE(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Pi(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(uE).join(" ,")+"}"}(t):"Filter"}class pk extends ze{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class mk extends ze{constructor(e,n){super(e,"in",n),this.keys=cE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gk extends ze{constructor(e,n){super(e,"not-in",n),this.keys=cE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class _k extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tp(n)&&ca(n.arrayValue,this.value)}}class yk extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ca(this.value.arrayValue,n)}}class vk extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ca(this.value.arrayValue,n)}}class wk extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ca(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function z_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Ek(t,e,n,r,s,i,o)}function np(t){const e=ne(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Pi(r)).join(",")),e.Pe=n}return e.Pe}function rp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!F_(t.startAt,e.startAt)&&F_(t.endAt,e.endAt)}function xd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Tk(t,e,n,r,s,i,o,l){return new zi(t,e,n,r,s,i,o,l)}function rc(t){return new zi(t)}function B_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hE(t){return t.collectionGroup!==null}function Lo(t){const e=ne(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new We(rt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new ha(i,r))}),n.has(rt.keyField().canonicalString())||e.Te.push(new ha(rt.keyField(),r))}return e.Te}function Rn(t){const e=ne(t);return e.Ie||(e.Ie=Ik(e,Lo(t))),e.Ie}function Ik(t,e){if(t.limitType==="F")return z_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ha(s.field,i)});const n=t.endAt?new Iu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Iu(t.startAt.position,t.startAt.inclusive):null;return z_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cd(t,e){const n=t.filters.concat([e]);return new zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kd(t,e,n){return new zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return rp(Rn(t),Rn(e))&&t.limitType===e.limitType}function dE(t){return`${np(Rn(t))}|lt:${t.limitType}`}function Gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>uE(s)).join(", ")}]`),tc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Pi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Pi(s)).join(",")),`Target(${r})`}(Rn(t))}; limitType=${t.limitType})`}function ic(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Lo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=U_(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Lo(r),s)||r.endAt&&!function(o,l,u){const h=U_(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Lo(r),s))}(t,e)}function Sk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fE(t){return(e,n)=>{let r=!1;for(const s of Lo(t)){const i=Ak(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ak(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?ki(u,h):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return X0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new Ne(K.comparator);function nr(){return Rk}const pE=new Ne(K.comparator);function Eo(...t){let e=pE;for(const n of t)e=e.insert(n.key,n);return e}function mE(t){let e=pE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gs(){return Mo()}function gE(){return Mo()}function Mo(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const xk=new Ne(K.comparator),Ck=new We(K.comparator);function le(...t){let e=Ck;for(const n of t)e=e.add(n);return e}const kk=new We(ie);function Pk(){return kk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wu(e)?"-0":e}}function _E(t){return{integerValue:""+t}}function Nk(t,e){return sk(e)?_E(e):sp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this._=void 0}}function bk(t,e,n){return t instanceof da?function(s,i){const o={fields:{[Z0]:{stringValue:J0},[tE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ep(i)&&(i=nc(i)),i&&(o.fields[eE]=i),{mapValue:o}}(n,e):t instanceof Ni?vE(t,e):t instanceof fa?wE(t,e):function(s,i){const o=yE(s,i),l=$_(o)+$_(s.Ee);return Ad(o)&&Ad(s.Ee)?_E(l):sp(s.serializer,l)}(t,e)}function Dk(t,e,n){return t instanceof Ni?vE(t,e):t instanceof fa?wE(t,e):n}function yE(t,e){return t instanceof Su?function(r){return Ad(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class da extends oc{}class Ni extends oc{constructor(e){super(),this.elements=e}}function vE(t,e){const n=EE(e);for(const r of t.elements)n.some(s=>Pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class fa extends oc{constructor(e){super(),this.elements=e}}function wE(t,e){let n=EE(e);for(const r of t.elements)n=n.filter(s=>!Pn(s,r));return{arrayValue:{values:n}}}class Su extends oc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function $_(t){return Le(t.integerValue||t.doubleValue)}function EE(t){return tp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n){this.field=e,this.transform=n}}function Ok(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ni&&s instanceof Ni||r instanceof fa&&s instanceof fa?Ci(r.elements,s.elements,Pn):r instanceof Su&&s instanceof Su?Pn(r.Ee,s.Ee):r instanceof da&&s instanceof da}(t.transform,e.transform)}class Vk{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ac{}function IE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ip(t.key,cn.none()):new Aa(t.key,t.data,cn.none());{const n=t.data,r=Ct.empty();let s=new We(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ns(t.key,r,new Mt(s.toArray()),cn.none())}}function Lk(t,e,n){t instanceof Aa?function(s,i,o){const l=s.value.clone(),u=H_(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ns?function(s,i,o){if(!Fl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=H_(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(SE(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function jo(t,e,n,r){return t instanceof Aa?function(i,o,l,u){if(!Fl(i.precondition,o))return l;const h=i.value.clone(),f=W_(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ns?function(i,o,l,u){if(!Fl(i.precondition,o))return l;const h=W_(i.fieldTransforms,u,o),f=o.data;return f.setAll(SE(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Fl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Mk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=yE(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function q_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ci(r,s,(i,o)=>Ok(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends ac{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ns extends ac{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function SE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function H_(t,e,n){const r=new Map;fe(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Dk(o,l,n[s]))}return r}function W_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,bk(i,o,e))}return r}class ip extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jk extends ac{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Lk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=IE(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Ci(this.mutations,e.mutations,(n,r)=>q_(n,r))&&Ci(this.baseMutations,e.baseMutations,(n,r)=>q_(n,r))}}class op{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){fe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return xk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new op(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ue;function Bk(t){switch(t){case L.OK:return Y(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function AE(t){if(t===void 0)return tr("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ue.OK:return L.OK;case Ue.CANCELLED:return L.CANCELLED;case Ue.UNKNOWN:return L.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return L.INTERNAL;case Ue.UNAVAILABLE:return L.UNAVAILABLE;case Ue.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ue.NOT_FOUND:return L.NOT_FOUND;case Ue.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ue.ABORTED:return L.ABORTED;case Ue.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ue.DATA_LOSS:return L.DATA_LOSS;default:return Y(39323,{code:t})}}(ue=Ue||(Ue={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=new Lr([4294967295,4294967295],0);function G_(t){const e=W0().encode(t),n=new j0;return n.update(e),new Uint8Array(n.digest())}function K_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Lr([n,r],0),new Lr([s,i],0)]}class ap{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new To(`Invalid padding: ${n}`);if(r<0)throw new To(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new To(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new To(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Lr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Lr.fromNumber(r)));return s.compare($k)===1&&(s=new Lr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=G_(e),[r,s]=K_(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ap(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=G_(e),[r,s]=K_(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class To extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new lc(te.min(),s,new Ne(ie),nr(),le())}}class Ra{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ra(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class RE{constructor(e,n){this.targetId=e,this.De=n}}class xE{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Q_{constructor(){this.ve=0,this.Ce=X_(),this.Fe=ot.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=le(),n=le(),r=le();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y(38017,{changeType:i})}}),new Ra(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=X_()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class qk{constructor(e){this.We=e,this.Ge=new Map,this.ze=nr(),this.je=gl(),this.Je=gl(),this.He=new Ne(ie)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(xd(i))if(r===0){const o=new K(i.path);this.Xe(n,o,mt.newNoDocument(o,te.min()))}else fe(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Gr(r).toUint8Array()}catch(u){if(u instanceof Y0)return qr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ap(o,s,i)}catch(u){return qr(u instanceof To?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,o)=>{const l=this.st(o);if(l){if(i.current&&xd(l.target)){const u=new K(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,mt.newNoDocument(u,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}});let r=le();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new lc(e,n,this.He,this.ze,r);return this.ze=nr(),this.je=gl(),this.Je=gl(),this.He=new Ne(ie),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Q_,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new We(ie),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new We(ie),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Q_),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function gl(){return new Ne(K.comparator)}function X_(){return new Ne(K.comparator)}const Hk={asc:"ASCENDING",desc:"DESCENDING"},Wk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gk={and:"AND",or:"OR"};class Kk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pd(t,e){return t.useProto3Json||tc(e)?e:{value:e}}function Au(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function CE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Qk(t,e){return Au(t,e.toTimestamp())}function xn(t){return fe(!!t,49232),te.fromTimestamp(function(n){const r=Wr(n);return new Se(r.seconds,r.nanos)}(t))}function lp(t,e){return Nd(t,e).canonicalString()}function Nd(t,e){const n=function(s){return new we(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function kE(t){const e=we.fromString(t);return fe(OE(e),10190,{key:e.toString()}),e}function bd(t,e){return lp(t.databaseId,e.path)}function fh(t,e){const n=kE(e);if(n.get(1)!==t.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(NE(n))}function PE(t,e){return lp(t.databaseId,e)}function Xk(t){const e=kE(t);return e.length===4?we.emptyPath():NE(e)}function Dd(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function NE(t){return fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Y_(t,e,n){return{name:bd(t,e),fields:n.value.mapValue.fields}}function Yk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(fe(f===void 0||typeof f=="string",58123),ot.fromBase64String(f||"")):(fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ot.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:AE(h.code);return new q(f,h.message||"")}(o);n=new xE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fh(t,r.document.name),i=xn(r.document.updateTime),o=r.document.createTime?xn(r.document.createTime):te.min(),l=new Ct({mapValue:{fields:r.document.fields}}),u=mt.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new zl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fh(t,r.document),i=r.readTime?xn(r.readTime):te.min(),o=mt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new zl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fh(t,r.document),i=r.removedTargetIds||[];n=new zl([],i,s,null)}else{if(!("filter"in e))return Y(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new zk(s,i),l=r.targetId;n=new RE(l,o)}}return n}function Jk(t,e){let n;if(e instanceof Aa)n={update:Y_(t,e.key,e.value)};else if(e instanceof ip)n={delete:bd(t,e.key)};else if(e instanceof ns)n={update:Y_(t,e.key,e.data),updateMask:aP(e.fieldMask)};else{if(!(e instanceof jk))return Y(16599,{Rt:e.type});n={verify:bd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof da)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ni)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Su)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Qk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)}(t,e.precondition)),n}function Zk(t,e){return t&&t.length>0?(fe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?xn(s.updateTime):xn(i);return o.isEqual(te.min())&&(o=xn(i)),new Vk(o,s.transformResults||[])}(n,e))):[]}function eP(t,e){return{documents:[PE(t,e.path)]}}function tP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=PE(t,s);const i=function(h){if(h.length!==0)return DE(dn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Ks(g.field),direction:sP(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Pd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:n,parent:s}}function nP(t){let e=Xk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){fe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=bE(m);return g instanceof dn&&aE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(C){return new ha(Qs(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,tc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,R=m.values||[];return new Iu(R,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,R=m.values||[];return new Iu(R,g)}(n.endAt)),Tk(e,s,o,i,l,"F",u,h)}function rP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qs(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qs(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qs(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qs(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Qs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>bE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function sP(t){return Hk[t]}function iP(t){return Wk[t]}function oP(t){return Gk[t]}function Ks(t){return{fieldPath:t.canonicalString()}}function Qs(t){return rt.fromServerFormat(t.fieldPath)}function DE(t){return t instanceof ze?function(n){if(n.op==="=="){if(j_(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NAN"}};if(M_(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(j_(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NAN"}};if(M_(n.value))return{unaryFilter:{field:Ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(n.field),op:iP(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(s=>DE(s));return r.length===1?r[0]:{compositeFilter:{op:oP(n.op),filters:r}}}(t):Y(54877,{filter:t})}function aP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function OE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,r,s,i=te.min(),o=te.min(),l=ot.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.gt=e}}function uP(t){const e=nP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.Dn=new hP}addToCollectionParentIndex(e,n){return this.Dn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Hr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Hr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class hP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new We(we.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},VE=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(VE,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new bi(0)}static ur(){return new bi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="LruGarbageCollector",dP=1048576;function ey([t,e],[n,r]){const s=ie(t,n);return s===0?ie(e,r):s}class fP{constructor(e){this.Tr=e,this.buffer=new We(ey),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ey(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class pP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){H(Z_,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Fi(n)?H(Z_,"Ignoring IndexedDB error during garbage collection: ",n):await Ui(n)}await this.Rr(3e5)})}}class mP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(ec.ue);const r=new fP(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(J_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),J_):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Ws()<=ae.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function gP(t,e){return new mP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&jo(r.mutation,s,Mt.empty(),Se.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=gs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Eo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=nr();const o=Mo(),l=function(){return Mo()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ns)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),jo(f.mutation,h,f.mutation.getFieldMask(),Se.now())):o.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new yP(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Mo();let s=new Ne((o,l)=>o-l),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Mt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(s.get(l.batchId)||le()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=gE();f.forEach(g=>{if(!i.has(g)){const R=IE(n.get(g),r.get(g));R!==null&&m.set(g,R),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(gs());let l=aa,u=i;return o.next(h=>M.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,le())).next(f=>({batchId:l,changes:mE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Eo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Eo();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const h=function(m,g){return new zi(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,mt.newInvalidDocument(f)))});let l=Eo();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&jo(f.mutation,h,Mt.empty(),Se.now()),ic(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return M.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:xn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:uP(s.bundledQuery),readTime:xn(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this.overlays=new Ne(K.comparator),this.kr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gs();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=gs(),i=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ne((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=gs(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=gs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return M.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Fk(n,r));let i=this.kr.get(n);i===void 0&&(i=le(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.qr=new We(Ke.Qr),this.$r=new We(Ke.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ke(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new K(new we([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new K(new we([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=le();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return K.comparator(e.key,n.key)||ie(e.Hr,n.Hr)}static Ur(e,n){return ie(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new We(Ke.Qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Uk(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Yr=this.Yr.add(new Ke(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Zf:this.er-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(ie);return n.forEach(s=>{const i=new Ke(s,0),o=new Ke(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new K(i),0);let l=new We(ie);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){fe(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return M.forEach(n.mutations,s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Ke(n,0),s=this.Yr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e){this.ni=e,this.docs=function(){return new Ne(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=nr();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ek(ZC(f),r)<=0||(s.has(f.key)||ic(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y(9500)}ri(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new AP(this)}getSize(e){return M.resolve(this.size)}}class AP extends _P{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.persistence=e,this.ii=new Vs(n=>np(n),rp),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.si=0,this.oi=new up,this.targetCount=0,this._i=bi.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),M.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new bi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.hr(n),M.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n){this.ai={},this.overlays={},this.ui=new ec(0),this.ci=!1,this.ci=!0,this.li=new TP,this.referenceDelegate=e(this),this.hi=new RP(this),this.indexManager=new cP,this.remoteDocumentCache=function(s){return new SP(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new lP(n),this.Ti=new wP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new EP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new IP(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new xP(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return M.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class xP extends nk{constructor(e){super(),this.currentSequenceNumber=e}}class cp{constructor(e){this.persistence=e,this.Ai=new up,this.Ri=null}static Vi(e){return new cp(e)}get mi(){if(this.Ri)return this.Ri;throw Y(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.mi,r=>{const s=K.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return M.or([()=>M.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ru{constructor(e,n){this.persistence=e,this.gi=new Vs(r=>ik(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=gP(this,n)}static Vi(e,n){return new Ru(e,n)}Ii(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return M.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,te.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),M.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=jl(e.data.value)),n}Sr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new hp(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return IA()?8:rk(_t())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new CP;return this.ws(e,n,o).next(l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ws()<=ae.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Ws()<=ae.DEBUG&&H("QueryEngine","Query:",Gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ws()<=ae.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rn(n))):M.resolve())}ps(e,n){if(B_(n))return M.resolve(null);let r=Rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=kd(n,null,"F"),r=Rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ds(n,h,o,u.readTime)?this.ps(e,kd(n,null,"F")):this.vs(e,h,n,u)}))})))}ys(e,n,r,s){return B_(n)||s.isEqual(te.min())?M.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?M.resolve(null):(Ws()<=ae.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Gs(n)),this.vs(e,o,n,JC(s,aa)).next(l=>l))})}bs(e,n){let r=new We(fE(e));return n.forEach((s,i)=>{ic(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ws()<=ae.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Gs(n)),this.gs.getDocumentsMatchingQuery(e,n,Hr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="LocalStore",PP=3e8;class NP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new Ne(ie),this.Ms=new Vs(i=>np(i),rp),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vP(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function bP(t,e,n,r){return new NP(t,e,n,r)}async function ME(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=le();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:l}))})})}function DP(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,g=m.keys();let R=M.resolve();return g.forEach(C=>{R=R.next(()=>f.getEntry(u,C)).next(N=>{const D=h.docVersions.get(C);fe(D!==null,48541),N.version.compareTo(D)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=le();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function jE(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function OP(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.hi.addMatchingKeys(i,f.addedDocuments,m)));let R=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(ot.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),s=s.insert(m,R),function(N,D,A){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=PP?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(g,R,f)&&l.push(n.hi.updateTargetData(i,R))});let u=nr(),h=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(VP(i,o,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!r.isEqual(te.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next(m=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.Fs=s,i))}function VP(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=nr();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(dp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ls:o,ks:s}})}function LP(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Zf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function MP(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.hi.allocateTargetId(r).next(o=>(s=new Sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Od(t,e,n){const r=ne(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fi(o))throw o;H(dp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function ty(t,e,n){const r=ne(t);let s=te.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=ne(u),g=m.Ms.get(f);return g!==void 0?M.resolve(m.Fs.get(g)):m.hi.getTargetData(h,f)}(r,o,Rn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:le())).next(l=>(jP(r,Sk(e),l),{documents:l,qs:i})))}function jP(t,e,n){let r=t.xs.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class ny{constructor(){this.activeTargetIds=Pk()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UP{constructor(){this.Fo=new ny,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ny,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="ConnectivityMonitor";class sy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){H(ry,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){H(ry,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l=null;function Vd(){return _l===null?_l=function(){return 268435456+Math.round(2147483648*Math.random())}():_l++,"0x"+_l.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="RestConnection",zP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class BP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Eu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Vd(),l=this.Go(e,n.toUriEncodedString());H(ph,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:h}=new URL(l),f=es(h);return this.jo(e,l,u,r,f).then(m=>(H(ph,`Received RPC '${e}' ${o}: `,m),m),m=>{throw qr(ph,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ji}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=zP[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class qP extends BP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=Vd();return new Promise((l,u)=>{const h=new U0;h.setWithCredentials(!0),h.listenOnce(F0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ml.NO_ERROR:const m=h.getResponseJson();H(dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Ml.TIMEOUT:H(dt,`RPC '${e}' ${o} timed out`),u(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ml.HTTP_ERROR:const g=h.getStatus();if(H(dt,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R==null?void 0:R.error;if(C&&C.status&&C.message){const N=function(A){const v=A.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(C.status);u(new q(N,C.message))}else u(new q(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(L.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{H(dt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);H(dt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}P_(e,n,r){const s=Vd(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$0(),l=B0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");H(dt,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=o.createWebChannel(f,u);this.T_(m);let g=!1,R=!1;const C=new $P({Ho:D=>{R?H(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(H(dt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),H(dt,`RPC '${e}' stream ${s} sending:`,D),m.send(D))},Yo:()=>m.close()}),N=(D,A,v)=>{D.listen(A,S=>{try{v(S)}catch(b){setTimeout(()=>{throw b},0)}})};return N(m,wo.EventType.OPEN,()=>{R||(H(dt,`RPC '${e}' stream ${s} transport opened.`),C.s_())}),N(m,wo.EventType.CLOSE,()=>{R||(R=!0,H(dt,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(m))}),N(m,wo.EventType.ERROR,D=>{R||(R=!0,qr(dt,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),C.__(new q(L.UNAVAILABLE,"The operation could not be completed")))}),N(m,wo.EventType.MESSAGE,D=>{var A;if(!R){const v=D.data[0];fe(!!v,16349);const S=v,b=(S==null?void 0:S.error)||((A=S[0])===null||A===void 0?void 0:A.error);if(b){H(dt,`RPC '${e}' stream ${s} received error:`,b);const F=b.status;let j=function(w){const I=Ue[w];if(I!==void 0)return AE(I)}(F),E=b.message;j===void 0&&(j=L.INTERNAL,E="Unknown error status: "+F+" with message "+b.message),R=!0,C.__(new q(j,E)),m.close()}else H(dt,`RPC '${e}' stream ${s} received:`,v),C.a_(v)}}),N(l,z0.STAT_EVENT,D=>{D.stat===Td.PROXY?H(dt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Td.NOPROXY&&H(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function mh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t){return new Kk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="PersistentStream";class FE{constructor(e,n,r,s,i,o,l,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new UE(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return H(iy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(H(iy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HP extends FE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=Yk(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?xn(o.readTime):te.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Dd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=xd(u)?{documents:eP(i,u)}:{query:tP(i,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=CE(i,o.resumeToken);const h=Pd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Au(i,o.snapshotVersion.toTimestamp());const h=Pd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=rP(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Dd(this.serializer),n.removeTarget=e,this.k_(n)}}class WP extends FE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=Zk(e.writeResults,e.commitTime),r=xn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Dd(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Jk(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{}class KP extends GP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Nd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(L.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,Nd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(L.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class QP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(tr(n),this._a=!1):H("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="RemoteStore";class XP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{Ls(this)&&(H(ks,"Restarting streams for network reachability change."),await async function(u){const h=ne(u);h.Ia.add(4),await xa(h),h.Aa.set("Unknown"),h.Ia.delete(4),await cc(h)}(this))})}),this.Aa=new QP(r,s)}}async function cc(t){if(Ls(t))for(const e of t.da)await e(!0)}async function xa(t){for(const e of t.da)await e(!1)}function zE(t,e){const n=ne(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),gp(n)?mp(n):Bi(n).x_()&&pp(n,e))}function fp(t,e){const n=ne(t),r=Bi(n);n.Ta.delete(e),r.x_()&&BE(n,e),n.Ta.size===0&&(r.x_()?r.B_():Ls(n)&&n.Aa.set("Unknown"))}function pp(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Bi(t).H_(e)}function BE(t,e){t.Ra.$e(e),Bi(t).Y_(e)}function mp(t){t.Ra=new qk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Bi(t).start(),t.Aa.aa()}function gp(t){return Ls(t)&&!Bi(t).M_()&&t.Ta.size>0}function Ls(t){return ne(t).Ia.size===0}function $E(t){t.Ra=void 0}async function YP(t){t.Aa.set("Online")}async function JP(t){t.Ta.forEach((e,n)=>{pp(t,e)})}async function ZP(t,e){$E(t),gp(t)?(t.Aa.la(e),mp(t)):t.Aa.set("Unknown")}async function eN(t,e,n){if(t.Aa.set("Online"),e instanceof xE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ta.delete(l),s.Ra.removeTarget(l))}(t,e)}catch(r){H(ks,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xu(t,r)}else if(e instanceof zl?t.Ra.Ye(e):e instanceof RE?t.Ra.it(e):t.Ra.et(e),!n.isEqual(te.min()))try{const r=await jE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ta.get(h);f&&i.Ta.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.Ta.get(u);if(!f)return;i.Ta.set(u,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),BE(i,u);const m=new Sr(f.target,u,h,f.sequenceNumber);pp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(ks,"Failed to raise snapshot:",r),await xu(t,r)}}async function xu(t,e,n){if(!Fi(e))throw e;t.Ia.add(1),await xa(t),t.Aa.set("Offline"),n||(n=()=>jE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(ks,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await cc(t)})}function qE(t,e){return e().catch(n=>xu(t,n,e))}async function hc(t){const e=ne(t),n=Qr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Zf;for(;tN(e);)try{const s=await LP(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,nN(e,s)}catch(s){await xu(e,s)}HE(e)&&WE(e)}function tN(t){return Ls(t)&&t.Pa.length<10}function nN(t,e){t.Pa.push(e);const n=Qr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function HE(t){return Ls(t)&&!Qr(t).M_()&&t.Pa.length>0}function WE(t){Qr(t).start()}async function rN(t){Qr(t).na()}async function sN(t){const e=Qr(t);for(const n of t.Pa)e.X_(n.mutations)}async function iN(t,e,n){const r=t.Pa.shift(),s=op.from(r,e,n);await qE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await hc(t)}async function oN(t,e){e&&Qr(t).Z_&&await async function(r,s){if(function(o){return Bk(o)&&o!==L.ABORTED}(s.code)){const i=r.Pa.shift();Qr(r).N_(),await qE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hc(r)}}(t,e),HE(t)&&WE(t)}async function oy(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),H(ks,"RemoteStore received new credentials");const r=Ls(n);n.Ia.add(3),await xa(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await cc(n)}async function aN(t,e){const n=ne(t);e?(n.Ia.delete(2),await cc(n)):e||(n.Ia.add(2),await xa(n),n.Aa.set("Unknown"))}function Bi(t){return t.Va||(t.Va=function(n,r,s){const i=ne(n);return i.ia(),new HP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:YP.bind(null,t),e_:JP.bind(null,t),n_:ZP.bind(null,t),J_:eN.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),gp(t)?mp(t):t.Aa.set("Unknown")):(await t.Va.stop(),$E(t))})),t.Va}function Qr(t){return t.ma||(t.ma=function(n,r,s){const i=ne(n);return i.ia(),new WP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:rN.bind(null,t),n_:oN.bind(null,t),ea:sN.bind(null,t),ta:iN.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await hc(t)):(await t.ma.stop(),t.Pa.length>0&&(H(ks,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new _p(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yp(t,e){if(tr("AsyncQueue",`${e}: ${t}`),Fi(t))return new q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{static emptySet(e){return new vi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Eo(),this.sortedSet=new Ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.fa=new Ne(K.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):Y(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Di{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Di(e,n,vi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class uN{constructor(){this.queries=ly(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=ly(),i.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function ly(){return new Vs(t=>dE(t),sc)}async function GE(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new lN,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=yp(o,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&vp(n)}async function KE(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function cN(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(s)&&(r=!0);o.ya=s}}r&&vp(n)}function hN(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function vp(t){t.Da.forEach(e=>{e.next()})}var Ld,uy;(uy=Ld||(Ld={})).Fa="default",uy.Cache="cache";class QE{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Di(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ld.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.key=e}}class YE{constructor(e){this.key=e}}class dN{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=le(),this.mutatedKeys=le(),this.Xa=fE(e),this.eu=new vi(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new ay,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),R=ic(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;g&&R?g.data.isEqual(R.data)?C!==N&&(r.track({type:3,doc:R}),D=!0):this.iu(g,R)||(r.track({type:2,doc:R}),D=!0,(u&&this.Xa(R,u)>0||h&&this.Xa(R,h)<0)&&(l=!0)):!g&&R?(r.track({type:0,doc:R}),D=!0):g&&!R&&(r.track({type:1,doc:g}),D=!0,(u||h)&&(l=!0)),D&&(R?(o=o.add(R),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,m)=>function(R,C){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{At:D})}};return N(R)-N(C)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new Di(this.query,e.eu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ay,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=le(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new YE(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new XE(r))}),n}uu(e){this.Ha=e.qs,this.Za=le();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Di.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const wp="SyncEngine";class fN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pN{constructor(e){this.key=e,this.lu=!1}}class mN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Vs(l=>dE(l),sc),this.Tu=new Map,this.Iu=new Set,this.du=new Ne(K.comparator),this.Eu=new Map,this.Au=new up,this.Ru={},this.Vu=new Map,this.mu=bi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function gN(t,e,n=!0){const r=rT(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await JE(r,e,n,!0),s}async function _N(t,e){const n=rT(t);await JE(n,e,!0,!1)}async function JE(t,e,n,r){const s=await MP(t.localStore,Rn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await yN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&zE(t.remoteStore,s),l}async function yN(t,e,n,r,s){t.gu=(m,g,R)=>async function(N,D,A,v){let S=D.view.nu(A);S.Ds&&(S=await ty(N.localStore,D.query,!1).then(({documents:E})=>D.view.nu(E,S)));const b=v&&v.targetChanges.get(D.targetId),F=v&&v.targetMismatches.get(D.targetId)!=null,j=D.view.applyChanges(S,N.isPrimaryClient,b,F);return hy(N,D.targetId,j._u),j.snapshot}(t,m,g,R);const i=await ty(t.localStore,e,!0),o=new dN(e,i.qs),l=o.nu(i.documents),u=Ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);hy(t,n,h._u);const f=new fN(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function vN(t,e,n){const r=ne(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!sc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Od(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&fp(r.remoteStore,s.targetId),Md(r,s.targetId)}).catch(Ui)):(Md(r,s.targetId),await Od(r.localStore,s.targetId,!0))}async function wN(t,e){const n=ne(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fp(n.remoteStore,r.targetId))}async function EN(t,e,n){const r=CN(t);try{const s=await function(o,l){const u=ne(o),h=Se.now(),f=l.reduce((R,C)=>R.add(C.key),le());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=nr(),N=le();return u.Os.getEntries(R,f).next(D=>{C=D,C.forEach((A,v)=>{v.isValidDocument()||(N=N.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,C)).next(D=>{m=D;const A=[];for(const v of l){const S=Mk(v,m.get(v.key).overlayedDocument);S!=null&&A.push(new ns(v.key,S,sE(S.value.mapValue),cn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,A,l)}).next(D=>{g=D;const A=D.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(R,D.batchId,A)})}).then(()=>({batchId:g.batchId,changes:mE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new Ne(ie)),h=h.insert(l,u),o.Ru[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ca(r,s.changes),await hc(r.remoteStore)}catch(s){const i=yp(s,"Failed to persist write");n.reject(i)}}async function ZE(t,e){const n=ne(t);try{const r=await OP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?fe(o.lu,14607):s.removedDocuments.size>0&&(fe(o.lu,42227),o.lu=!1))}),await Ca(n,r,e)}catch(r){await Ui(r)}}function cy(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.wa)g.va(l)&&(h=!0)}),h&&vp(u)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TN(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Ne(K.comparator);o=o.insert(i,mt.newNoDocument(i,te.min()));const l=le().add(i),u=new lc(te.min(),new Map,new Ne(ie),o,l);await ZE(r,u),r.du=r.du.remove(i),r.Eu.delete(e),Ep(r)}else await Od(r.localStore,e,!1).then(()=>Md(r,e,n)).catch(Ui)}async function IN(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await DP(n.localStore,e);tT(n,r,null),eT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ca(n,s)}catch(s){await Ui(s)}}async function SN(t,e,n){const r=ne(t);try{const s=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(fe(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);tT(r,e,n),eT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ca(r,s)}catch(s){await Ui(s)}}function eT(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function tT(t,e,n){const r=ne(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Md(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||nT(t,r)})}function nT(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(fp(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Ep(t))}function hy(t,e,n){for(const r of n)r instanceof XE?(t.Au.addReference(r.key,e),AN(t,r)):r instanceof YE?(H(wp,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||nT(t,r.key)):Y(19791,{yu:r})}function AN(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(H(wp,"New document in limbo: "+n),t.Iu.add(r),Ep(t))}function Ep(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new K(we.fromString(e)),r=t.mu.next();t.Eu.set(r,new pN(n)),t.du=t.du.insert(n,r),zE(t.remoteStore,new Sr(Rn(rc(n.path)),r,"TargetPurposeLimboResolution",ec.ue))}}async function Ca(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=hp.Es(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.hu.J_(s),await async function(u,h){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(h,g=>M.forEach(g.Is,R=>f.persistence.referenceDelegate.addReference(m,g.targetId,R)).next(()=>M.forEach(g.ds,R=>f.persistence.referenceDelegate.removeReference(m,g.targetId,R)))))}catch(m){if(!Fi(m))throw m;H(dp,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const R=f.Fs.get(g),C=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(g,N)}}}(r.localStore,i))}async function RN(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){H(wp,"User change. New user:",e.toKey());const r=await ME(n.localStore,e);n.currentUser=e,function(i,o){i.Vu.forEach(l=>{l.forEach(u=>{u.reject(new q(L.CANCELLED,o))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ca(n,r.Bs)}}function xN(t,e){const n=ne(t),r=n.Eu.get(e);if(r&&r.lu)return le().add(r.key);{let s=le();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const l=n.Pu.get(o);s=s.unionWith(l.view.tu)}return s}}function rT(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TN.bind(null,e),e.hu.J_=cN.bind(null,e.eventManager),e.hu.pu=hN.bind(null,e.eventManager),e}function CN(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SN.bind(null,e),e}class Cu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return bP(this.persistence,new kP,e.initialUser,this.serializer)}Du(e){return new LE(cp.Vi,this.serializer)}bu(e){return new UP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cu.provider={build:()=>new Cu};class kN extends Cu{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){fe(this.persistence.referenceDelegate instanceof Ru,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new pP(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new LE(r=>Ru.Vi(r,n),this.serializer)}}class jd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RN.bind(null,this.syncEngine),await aN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uN}()}createDatastore(e){const n=uc(e.databaseInfo.databaseId),r=function(i){return new qP(i)}(e.databaseInfo);return function(i,o,l,u){return new KP(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new XP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>cy(this.syncEngine,n,0),function(){return sy.C()?new sy:new FP}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const m=new mN(s,i,o,l,u,h);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);H(ks,"RemoteStore shutting down."),i.Ia.add(5),await xa(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}jd.provider={build:()=>new jd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="FirestoreClient";class PN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=Jf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(Xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gh(t,e){t.asyncQueue.verifyOperationInProgress(),H(Xr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ME(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{qr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{H("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{qr("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function dy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NN(t);H(Xr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>oy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>oy(e.remoteStore,s)),t._onlineComponents=e}async function NN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Xr,"Using user provided OfflineComponentProvider");try{await gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;qr("Error using user provided cache. Falling back to memory cache: "+n),await gh(t,new Cu)}}else H(Xr,"Using default OfflineComponentProvider"),await gh(t,new kN(void 0));return t._offlineComponents}async function iT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Xr,"Using user provided OnlineComponentProvider"),await dy(t,t._uninitializedComponentsProvider._online)):(H(Xr,"Using default OnlineComponentProvider"),await dy(t,new jd))),t._onlineComponents}function bN(t){return iT(t).then(e=>e.syncEngine)}async function Ud(t){const e=await iT(t),n=e.eventManager;return n.onListen=gN.bind(null,e.syncEngine),n.onUnlisten=vN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_N.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=wN.bind(null,e.syncEngine),n}function DN(t,e,n={}){const r=new Mr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new sT({next:g=>{f.Ou(),o.enqueueAndForget(()=>KE(i,m));const R=g.docs.has(l);!R&&g.fromCache?h.reject(new q(L.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&g.fromCache&&u&&u.source==="server"?h.reject(new q(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new QE(rc(l.path),f,{includeMetadataChanges:!0,ka:!0});return GE(i,m)}(await Ud(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="firestore.googleapis.com",py=!0;class my{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=aT,this.ssl=py}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:py;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=VE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dP)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new my({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new my(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new BC;switch(r.type){case"firstParty":return new WC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=fy.get(n);r&&(H("ComponentProvider","Removing Datastore"),fy.delete(n),r.terminate())}(this),Promise.resolve()}}function ON(t,e,n,r={}){var s;t=un(t,dc);const i=es(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;i&&(jf(`https://${u}`),Uf("Firestore",!0)),o.host!==aT&&o.host!==u&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:i,emulatorOptions:r});if(!zr(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=ft.MOCK_USER;else{f=Zw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ft(g)}t._authCredentials=new $C(new H0(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ms(this.firestore,e,this._query)}}class Ve{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}toJSON(){return{type:Ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Sa(n,Ve._jsonSchema))return new Ve(e,r||null,new K(we.fromString(n.referencePath)))}}Ve._jsonSchemaVersion="firestore/documentReference/1.0",Ve._jsonSchema={type:Be("string",Ve._jsonSchemaVersion),referencePath:Be("string")};class jr extends Ms{constructor(e,n,r){super(e,n,rc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new K(e))}withConverter(e){return new jr(this.firestore,e,this._path)}}function VN(t,e,...n){if(t=je(t),G0("collection","path",e),t instanceof dc){const r=we.fromString(e,...n);return C_(r),new jr(t,null,r)}{if(!(t instanceof Ve||t instanceof jr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return C_(r),new jr(t.firestore,null,r)}}function $i(t,e,...n){if(t=je(t),arguments.length===1&&(e=Jf.newId()),G0("doc","path",e),t instanceof dc){const r=we.fromString(e,...n);return x_(r),new Ve(t,null,new K(r))}{if(!(t instanceof Ve||t instanceof jr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return x_(r),new Ve(t.firestore,t instanceof jr?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="AsyncQueue";class _y{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new UE(this,"async_queue_retry"),this.oc=()=>{const r=mh();r&&H(gy,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=mh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Mr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Fi(e))throw e;H(gy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,tr("INTERNAL UNHANDLED ERROR: ",yy(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=_p.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&Y(47125,{hc:yy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function yy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ps extends dc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new _y,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _y(e),this._firestoreClient=void 0,await e}}}function js(t,e){const n=typeof t=="object"?t:Bf(),r=typeof t=="string"?t:Eu,s=Ku(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Xw("firestore");i&&ON(s,...i)}return s}function Tp(t){if(t._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||LN(t),t._firestoreClient}function LN(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,f){return new lk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,oT(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new PN(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(ot.fromBase64String(e))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sa(e,Kt._jsonSchema))return Kt.fromBase64String(e.bytes)}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:Be("string",Kt._jsonSchemaVersion),bytes:Be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Cn._jsonSchemaVersion}}static fromJSON(e){if(Sa(e,Cn._jsonSchema))return new Cn(e.latitude,e.longitude)}}Cn._jsonSchemaVersion="firestore/geoPoint/1.0",Cn._jsonSchema={type:Be("string",Cn._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:kn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sa(e,kn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new kn(e.vectorValues);throw new q(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kn._jsonSchemaVersion="firestore/vectorValue/1.0",kn._jsonSchema={type:Be("string",kn._jsonSchemaVersion),vectorValues:Be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=/^__.*__$/;class jN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}class lT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ns(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ec:t})}}class pc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new pc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ku(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(uT(this.Ec)&&MN.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class UN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||uc(e)}Dc(e,n,r,s=!1){return new pc({Ec:e,methodName:n,bc:r,path:rt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ip(t){const e=t._freezeSettings(),n=uc(t._databaseId);return new UN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FN(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Rp("Data must be an object, but it was:",o,r);const l=cT(r,o);let u,h;if(i.merge)u=new Mt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=Fd(e,m,n);if(!o.contains(g))throw new q(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);dT(f,g)||f.push(g)}u=new Mt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new jN(new Ct(l),u,h)}class mc extends ka{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mc}}function zN(t,e,n){return new pc({Ec:3,bc:e.settings.bc,methodName:t._methodName,mc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Sp extends ka{_toFieldTransform(e){return new TE(e.path,new da)}isEqual(e){return e instanceof Sp}}class Ap extends ka{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=zN(this,e,!0),r=this.vc.map(i=>qi(i,n)),s=new Ni(r);return new TE(e.path,s)}isEqual(e){return e instanceof Ap&&zr(this.vc,e.vc)}}function BN(t,e,n,r){const s=t.Dc(1,e,n);Rp("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();ts(r,(u,h)=>{const f=xp(e,u,n);h=je(h);const m=s.gc(f);if(h instanceof mc)i.push(f);else{const g=qi(h,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new Mt(i);return new lT(o,l,s.fieldTransforms)}function $N(t,e,n,r,s,i){const o=t.Dc(1,e,n),l=[Fd(e,r,n)],u=[s];if(i.length%2!=0)throw new q(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Fd(e,i[g])),u.push(i[g+1]);const h=[],f=Ct.empty();for(let g=l.length-1;g>=0;--g)if(!dT(h,l[g])){const R=l[g];let C=u[g];C=je(C);const N=o.gc(R);if(C instanceof mc)h.push(R);else{const D=qi(C,N);D!=null&&(h.push(R),f.set(R,D))}}const m=new Mt(h);return new lT(f,m,o.fieldTransforms)}function qN(t,e,n,r=!1){return qi(n,t.Dc(r?4:3,e))}function qi(t,e){if(hT(t=je(t)))return Rp("Unsupported field value:",e,t),cT(t,e);if(t instanceof ka)return function(r,s){if(!uT(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=qi(l,s.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Nk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Se.fromDate(r);return{timestampValue:Au(s.serializer,i)}}if(r instanceof Se){const i=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Au(s.serializer,i)}}if(r instanceof Cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kt)return{bytesValue:CE(s.serializer,r._byteString)};if(r instanceof Ve){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:lp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof kn)return function(o,l){return{mapValue:{fields:{[nE]:{stringValue:rE},[Tu]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return sp(l.serializer,h)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${Zu(r)}`)}(t,e)}function cT(t,e){const n={};return X0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(r,s)=>{const i=qi(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function hT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof Cn||t instanceof Kt||t instanceof Ve||t instanceof ka||t instanceof kn)}function Rp(t,e,n){if(!hT(n)||!K0(n)){const r=Zu(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Fd(t,e,n){if((e=je(e))instanceof fc)return e._internalPath;if(typeof e=="string")return xp(t,e);throw ku("Field path arguments must be of type string or ",t,!1,void 0,n)}const HN=new RegExp("[~\\*/\\[\\]]");function xp(t,e,n){if(e.search(HN)>=0)throw ku(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fc(...e.split("."))._internalPath}catch{throw ku(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ku(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new q(L.INVALID_ARGUMENT,l+t+u)}function dT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Cp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class WN extends fT{data(){return super.data()}}function Cp(t,e){return typeof e=="string"?xp(t,e):e instanceof fc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kp{}class pT extends kp{}function KN(t,e,...n){let r=[];e instanceof kp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Np).length,l=i.filter(u=>u instanceof Pp).length;if(o>1||o>0&&l>0)throw new q(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Pp extends pT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Pp(e,n,r)}_apply(e){const n=this._parse(e);return mT(e._query,n),new Ms(e.firestore,e.converter,Cd(e._query,n))}_parse(e){const n=Ip(e.firestore);return function(i,o,l,u,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new q(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ey(m,f);const C=[];for(const N of m)C.push(wy(u,i,N));g={arrayValue:{values:C}}}else g=wy(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ey(m,f),g=qN(l,o,m,f==="in"||f==="not-in");return ze.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Np extends kp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Np(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)mT(o,u),o=Cd(o,u)}(e._query,n),new Ms(e.firestore,e.converter,Cd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bp extends pT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new bp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new q(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ha(i,o)}(e._query,this._field,this._direction);return new Ms(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new zi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function QN(t,e="asc"){const n=e,r=Cp("orderBy",t);return bp._create(r,n)}function wy(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new q(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hE(e)&&n.indexOf("/")!==-1)throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!K.isDocumentKey(r))throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return L_(t,new K(r))}if(n instanceof Ve)return L_(t,n._key);throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zu(n)}.`)}function Ey(t,e){if(!Array.isArray(t)||t.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mT(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class XN{convertValue(e,n="none"){switch(Kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ts(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Tu].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Le(o.doubleValue));return new kn(i)}convertGeoPoint(e){return new Cn(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(la(e));default:return null}}convertTimestamp(e){const n=Wr(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);fe(OE(r),9688,{name:e});const s=new ua(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||tr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vs extends fT{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Cp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=vs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",vs._jsonSchema={type:Be("string",vs._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class Bl extends vs{data(e={}){return super.data(e)}}class wi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Io(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bl(this._firestore,this._userDataWriter,r.key,r,new Io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Bl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Io(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Bl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Io(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:JN(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=wi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function JN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){t=un(t,Ve);const e=un(t.firestore,Ps);return DN(Tp(e),t._key).then(n=>wT(e,t,n))}wi._jsonSchemaVersion="firestore/querySnapshot/1.0",wi._jsonSchema={type:Be("string",wi._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};class _T extends XN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}function ZN(t,e,n){t=un(t,Ve);const r=un(t.firestore,Ps),s=YN(t.converter,e,n);return Dp(r,[FN(Ip(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,cn.none())])}function yT(t,e,n,...r){t=un(t,Ve);const s=un(t.firestore,Ps),i=Ip(s);let o;return o=typeof(e=je(e))=="string"||e instanceof fc?$N(i,"updateDoc",t._key,e,n,r):BN(i,"updateDoc",t._key,e),Dp(s,[o.toMutation(t._key,cn.exists(!0))])}function vT(t){return Dp(un(t.firestore,Ps),[new ip(t._key,cn.none())])}function e2(t,...e){var n,r,s;t=je(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||vy(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(vy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,h,f;if(t instanceof Ve)h=un(t.firestore,Ps),f=rc(t._key.path),u={next:m=>{e[o]&&e[o](wT(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=un(t,Ms);h=un(m.firestore,Ps),f=m._query;const g=new _T(h);u={next:R=>{e[o]&&e[o](new wi(h,g,m,R))},error:e[o+1],complete:e[o+2]},GN(t._query)}return function(g,R,C,N){const D=new sT(N),A=new QE(R,D,C);return g.asyncQueue.enqueueAndForget(async()=>GE(await Ud(g),A)),()=>{D.Ou(),g.asyncQueue.enqueueAndForget(async()=>KE(await Ud(g),A))}}(Tp(h),f,l,u)}function Dp(t,e){return function(r,s){const i=new Mr;return r.asyncQueue.enqueueAndForget(async()=>EN(await bN(r),s,i)),i.promise}(Tp(t),e)}function wT(t,e,n){const r=n.docs.get(e._key),s=new _T(t);return new vs(t,s,e._key,r,new Io(n.hasPendingWrites,n.fromCache),e.converter)}function Uo(){return new Sp("serverTimestamp")}function t2(...t){return new Ap("arrayUnion",t)}(function(e,n=!0){(function(s){ji=s})(Os),Rs(new Br("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ps(new qC(r.getProvider("auth-internal")),new GC(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ua(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),In(T_,I_,e),In(T_,I_,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="firebasestorage.googleapis.com",TT="storageBucket",n2=2*60*1e3,r2=10*60*1e3,s2=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends bn{constructor(e,n,r=0){super(_h(e),`Firebase Storage: ${n} (${_h(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Re;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Re||(Re={}));function _h(t){return"storage/"+t}function Op(){const t="An unknown error occurred, please check the error payload for server response.";return new be(Re.UNKNOWN,t)}function i2(t){return new be(Re.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function o2(t){return new be(Re.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function a2(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(Re.UNAUTHENTICATED,t)}function l2(){return new be(Re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function u2(t){return new be(Re.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function IT(){return new be(Re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ST(){return new be(Re.CANCELED,"User canceled the upload/download.")}function c2(t){return new be(Re.INVALID_URL,"Invalid URL '"+t+"'.")}function h2(t){return new be(Re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function d2(){return new be(Re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+TT+"' property when initializing the app?")}function AT(){return new be(Re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function f2(){return new be(Re.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function p2(){return new be(Re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function m2(t){return new be(Re.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zd(t){return new be(Re.INVALID_ARGUMENT,t)}function RT(){return new be(Re.APP_DELETED,"The Firebase app was deleted.")}function g2(t){return new be(Re.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Fo(t,e){return new be(Re.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function po(t){throw new be(Re.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(r.path==="")return r;throw h2(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(b){b.path_=decodeURIComponent(b.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",R=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),C={bucket:1,path:3},N=n===ET?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",A=new RegExp(`^https?://${N}/${s}/${D}`,"i"),S=[{regex:l,indices:u,postModify:i},{regex:R,indices:C,postModify:h},{regex:A,indices:{bucket:1,path:2},postModify:h}];for(let b=0;b<S.length;b++){const F=S[b],j=F.regex.exec(e);if(j){const E=j[F.indices.bucket];let y=j[F.indices.path];y||(y=""),r=new jt(E,y),F.postModify(r);break}}if(r==null)throw c2(e);return r}}class _2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...D){h||(h=!0,e.apply(null,D))}function m(D){s=setTimeout(()=>{s=null,t(R,u())},D)}function g(){i&&clearTimeout(i)}function R(D,...A){if(h){g();return}if(D){g(),f.call(null,D,...A);return}if(u()||o){g(),f.call(null,D,...A);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,m(S)}let C=!1;function N(D){C||(C=!0,g(),!h&&(s!==null?(D||(l=2),clearTimeout(s),m(0)):D||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function v2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(t){return t!==void 0}function E2(t){return typeof t=="function"}function T2(t){return typeof t=="object"&&!Array.isArray(t)}function gc(t){return typeof t=="string"||t instanceof String}function Ty(t){return Vp()&&t instanceof Blob}function Vp(){return typeof Blob<"u"}function Iy(t,e,n,r){if(r<e)throw zd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function xT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ws;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ws||(ws={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n,r,s,i,o,l,u,h,f,m,g=!0,R=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,N)=>{this.resolve_=C,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new yl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===ws.NO_ERROR,u=i.getStatus();if(!l||CT(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===ws.ABORT;r(!1,new yl(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new yl(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());w2(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Op();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?RT():ST();o(u)}else{const u=IT();o(u)}};this.canceled_?n(!1,new yl(!1,null,!0)):this.backoffId_=y2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&v2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function S2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function A2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function R2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function x2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function C2(t,e,n,r,s,i,o=!0,l=!1){const u=xT(t.urlParams),h=t.url+u,f=Object.assign({},t.headers);return R2(f,e),S2(f,n),A2(f,i),x2(f,r),new I2(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function P2(...t){const e=k2();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Vp())return new Blob(t);throw new be(Re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function N2(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b2(t){if(typeof atob>"u")throw m2("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class yh{constructor(e,n){this.data=e,this.contentType=n||null}}function D2(t,e){switch(t){case vn.RAW:return new yh(kT(e));case vn.BASE64:case vn.BASE64URL:return new yh(PT(t,e));case vn.DATA_URL:return new yh(V2(e),L2(e))}throw Op()}function kT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function O2(t){let e;try{e=decodeURIComponent(t)}catch{throw Fo(vn.DATA_URL,"Malformed data URL.")}return kT(e)}function PT(t,e){switch(t){case vn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Fo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case vn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Fo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=b2(e)}catch(s){throw s.message.includes("polyfill")?s:Fo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class NT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Fo(vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=M2(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function V2(t){const e=new NT(t);return e.base64?PT(vn.BASE64,e.rest):O2(e.rest)}function L2(t){return new NT(t).contentType}function M2(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n){let r=0,s="";Ty(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ty(this.data_)){const r=this.data_,s=N2(r,e,n);return s===null?null:new wr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new wr(r,!0)}}static getBlob(...e){if(Vp()){const n=e.map(r=>r instanceof wr?r.data_:r);return new wr(P2.apply(null,n))}else{const n=e.map(o=>gc(o)?D2(vn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new wr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(t){let e;try{e=JSON.parse(t)}catch{return null}return T2(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function U2(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function DT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(t,e){return e}class wt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||F2}}let vl=null;function z2(t){return!gc(t)||t.length<2?t:DT(t)}function OT(){if(vl)return vl;const t=[];t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));function e(i,o){return z2(o)}const n=new wt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new wt("size");return s.xform=r,t.push(s),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),vl=t,vl}function B2(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new jt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function $2(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return B2(r,t),r}function VT(t,e,n){const r=bT(e);return r===null?null:$2(t,r,n)}function q2(t,e,n,r){const s=bT(e);if(s===null||!gc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),R=Pa(g,n,r),C=xT({alt:"media",token:h});return R+C})[0]}function LT(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Hi{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){if(!t)throw Op()}function Lp(t,e){function n(r,s){const i=VT(t,s,e);return Gn(i!==null),i}return n}function H2(t,e){function n(r,s){const i=VT(t,s,e);return Gn(i!==null),q2(i,s,t.host,t._protocol)}return n}function Na(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=l2():s=a2():n.getStatus()===402?s=o2(t.bucket):n.getStatus()===403?s=u2(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function MT(t){const e=Na(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=i2(t.path)),i.serverResponse=s.serverResponse,i}return n}function W2(t,e,n){const r=e.fullServerUrl(),s=Pa(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Hi(s,i,Lp(t,n),o);return l.errorHandler=MT(e),l}function G2(t,e,n){const r=e.fullServerUrl(),s=Pa(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Hi(s,i,H2(t,n),o);return l.errorHandler=MT(e),l}function K2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jT(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=K2(null,e)),r}function Q2(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let b=0;b<2;b++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=jT(e,r,s),f=LT(h,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+u+"--",R=wr.getBlob(m,r,g);if(R===null)throw AT();const C={name:h.fullPath},N=Pa(i,t.host,t._protocol),D="POST",A=t.maxUploadRetryTime,v=new Hi(N,D,Lp(t,n),A);return v.urlParams=C,v.headers=o,v.body=R.uploadData(),v.errorHandler=Na(e),v}class Pu{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Mp(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Gn(!1)}return Gn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function X2(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=jT(e,r,s),l={name:o.fullPath},u=Pa(i,t.host,t._protocol),h="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},m=LT(o,n),g=t.maxUploadRetryTime;function R(N){Mp(N);let D;try{D=N.getResponseHeader("X-Goog-Upload-URL")}catch{Gn(!1)}return Gn(gc(D)),D}const C=new Hi(u,h,R,g);return C.urlParams=l,C.headers=f,C.body=m,C.errorHandler=Na(e),C}function Y2(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(h){const f=Mp(h,["active","final"]);let m=null;try{m=h.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Gn(!1)}m||Gn(!1);const g=Number(m);return Gn(!isNaN(g)),new Pu(g,r.size(),f==="final")}const o="POST",l=t.maxUploadRetryTime,u=new Hi(n,o,i,l);return u.headers=s,u.errorHandler=Na(e),u}const Sy=256*1024;function J2(t,e,n,r,s,i,o,l){const u=new Pu(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw f2();const h=u.total-u.current;let f=h;s>0&&(f=Math.min(f,s));const m=u.current,g=m+f;let R="";f===0?R="finalize":h===f?R="upload, finalize":R="upload";const C={"X-Goog-Upload-Command":R,"X-Goog-Upload-Offset":`${u.current}`},N=r.slice(m,g);if(N===null)throw AT();function D(b,F){const j=Mp(b,["active","final"]),E=u.current+f,y=r.size();let w;return j==="final"?w=Lp(e,i)(b,F):w=null,new Pu(E,y,j==="final",w)}const A="POST",v=e.maxUploadRetryTime,S=new Hi(n,A,D,v);return S.headers=C,S.body=N.uploadData(),S.progressCallback=l||null,S.errorHandler=Na(t),S}const Rt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function vh(t){switch(t){case"running":case"pausing":case"canceling":return Rt.RUNNING;case"paused":return Rt.PAUSED;case"success":return Rt.SUCCESS;case"canceled":return Rt.CANCELED;case"error":return Rt.ERROR;default:return Rt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e,n,r){if(E2(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class eb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ws.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ws.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ws.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw po("cannot .send() more than once");if(es(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw po("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw po("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw po("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw po("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class tb extends eb{initXhr(){this.xhr_.responseType="text"}}function Xs(){return new tb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=OT(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Re.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(CT(s.status,[]))if(i)s=IT();else{this.sleepTime=Math.max(this.sleepTime*2,s2),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Re.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=X2(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Xs,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=Y2(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Xs,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Sy*this._chunkMultiplier,n=new Pu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=J2(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Xs,s,i,!1);this._request=l,l.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Sy*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=W2(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Xs,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Q2(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Xs,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ST(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=vh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new Z2(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(vh(this._state)){case Rt.SUCCESS:Hs(this._resolve.bind(null,this.snapshot))();break;case Rt.CANCELED:case Rt.ERROR:const n=this._reject;Hs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(vh(this._state)){case Rt.RUNNING:case Rt.PAUSED:e.next&&Hs(e.next.bind(e,this.snapshot))();break;case Rt.SUCCESS:e.complete&&Hs(e.complete.bind(e))();break;case Rt.CANCELED:case Rt.ERROR:e.error&&Hs(e.error.bind(e,this._error))();break;default:e.error&&Hs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ns(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return DT(this._location.path)}get storage(){return this._service}get parent(){const e=j2(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new Ns(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw g2(e)}}function rb(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new nb(t,new wr(e),n)}function sb(t){t._throwIfRoot("getDownloadURL");const e=G2(t.storage,t._location,OT());return t.storage.makeRequestWithTokens(e,Xs).then(n=>{if(n===null)throw p2();return n})}function ib(t,e){const n=U2(t._location.path,e),r=new jt(t._location.bucket,n);return new Ns(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){return/^[A-Za-z]+:\/\//.test(t)}function ab(t,e){return new Ns(t,e)}function UT(t,e){if(t instanceof jp){const n=t;if(n._bucket==null)throw d2();const r=new Ns(n,n._bucket);return e!=null?UT(r,e):r}else return e!==void 0?ib(t,e):t}function lb(t,e){if(e&&ob(e)){if(t instanceof jp)return ab(t,e);throw zd("To use ref(service, url), the first argument must be a Storage instance.")}else return UT(t,e)}function Ay(t,e){const n=e==null?void 0:e[TT];return n==null?null:jt.makeFromBucketSpec(n,t)}function ub(t,e,n,r={}){t.host=`${e}:${n}`;const s=es(e);s&&(jf(`https://${t.host}/b`),Uf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Zw(i,t.app.options.projectId))}class jp{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=ET,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=n2,this._maxUploadRetryTime=r2,this._requests=new Set,s!=null?this._bucket=jt.makeFromBucketSpec(s,this._host):this._bucket=Ay(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=Ay(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Iy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Iy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ns(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new _2(RT());{const o=C2(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ry="@firebase/storage",xy="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="storage";function cb(t,e,n){return t=je(t),rb(t,e,n)}function zT(t){return t=je(t),sb(t)}function BT(t,e){return t=je(t),lb(t,e)}function $T(t=Bf(),e){t=je(t);const r=Ku(t,FT).getImmediate({identifier:e}),s=Xw("storage");return s&&hb(r,...s),r}function hb(t,e,n,r={}){ub(t,e,n,r)}function db(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new jp(n,r,s,e,Os)}function fb(){Rs(new Br(FT,db,"PUBLIC").setMultipleInstances(!0)),In(Ry,xy,""),In(Ry,xy,"esm2017")}fb();const pb={apiKey:"AIzaSyBWDz3tO9Q4AS8CxdQCjZ74eAT6ljFuj3A",authDomain:"linha-etica-venture.firebaseapp.com",projectId:"linha-etica-venture",storageBucket:"linha-etica-venture.firebasestorage.app",appId:"1:790882253555:web:33f0bb792922d7a313d586"},fn=e_().length?e_()[0]:n0(pb);async function qT(){const t=FC(fn);return await Cx(t,k0),t.currentUser?t.currentUser:(await Sx(t)).user}async function HT(t,e){const n=$T(fn),r=BT(n,t),s=cb(r,e);return await new Promise((o,l)=>{s.on("state_changed",()=>{},u=>l(u),()=>o())}),await zT(s.snapshot.ref)}async function mb(t){const e=$T(fn),n=BT(e,t);return await zT(n)}async function WT(t,e){const n=js(fn),r=$i(n,"reports",t),i=(await gT(r)).exists()?{updatedAt:Uo()}:{createdAt:Uo(),updatedAt:Uo()};return await ZN(r,{...e,...i},{merge:!0}),t}async function GT(t){const e=js(fn),n=$i(e,"reports",t),r=await gT(n);return r.exists()?{id:r.id,...r.data()}:null}function KT(t){const e=js(fn),n=KN(VN(e,"reports"),QN("createdAt","desc"));return e2(n,r=>{const s=r.docs.map(i=>({id:i.id,...i.data()}));t(s)})}async function QT(t,e){const n=js(fn);await yT($i(n,"reports",t),{...e,updatedAt:Uo()})}async function XT(t,e){const n=js(fn);await yT($i(n,"reports",t),{notes:t2(e),updatedAt:Uo()})}async function gb(t){const e=js(fn);await vT($i(e,"reports",t))}async function _b(t=[]){const e=js(fn);await Promise.all(t.map(n=>vT($i(e,"reports",n))))}const wh=Object.freeze(Object.defineProperty({__proto__:null,addAdminNote:XT,app:fn,createOrReplaceReport:WT,deleteReport:gb,deleteReports:_b,ensureAnonAuth:qT,getDownloadUrlByPath:mb,getReportByProtocol:GT,subscribeReports:KT,updateReport:QT,uploadFile:HT},Symbol.toStringTag,{value:"Module"})),yb="/linha-etica-venture/logo-venture.png",vb="1.0",wb="09/10/2025",Up="consent_ok",Eb="Venture@4266";function Bd(t,e,n="operação"){return Promise.race([t,new Promise((r,s)=>setTimeout(()=>s(new Error(`Timeout ao tentar ${n} (${e}ms)`)),e))])}async function Tb(t,e,n,r=25e3){const s=[];for(const i of e){const o=`${Date.now()}-${i.name.replace(/[^a-zA-Z0-9._-]/g,"_")}`,l=`reports/${t}/${o}`,u=await Bd(n(l,i),r,`enviar ${i.name}`);s.push({name:i.name,size:i.size,type:i.type,url:u,path:l})}return s}const et=({label:t,required:e,hint:n,children:r})=>p.jsxs("label",{className:"grid gap-1",style:{gridTemplateRows:"minmax(20px,auto) minmax(16px,auto) auto"},children:[p.jsxs("span",{className:"text-sm font-medium leading-5",children:[t," ",e&&p.jsx("span",{className:"text-rose-600",children:"*"})]}),p.jsx("div",{className:`text-xs leading-4 ${n?"text-slate-500":"opacity-0"}`,children:n||" "}),r]}),mo=({className:t="",children:e,...n})=>p.jsxs("div",{className:"relative",children:[p.jsx("select",{...n,className:"w-full h-12 rounded-lg border pl-3 pr-10 py-0 text-[15px] leading-[48px] appearance-none align-middle focus:outline-none focus:ring-2 focus:ring-emerald-600 "+t,children:e}),p.jsx("svg",{"aria-hidden":"true",className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70",viewBox:"0 0 20 20",fill:"currentColor",children:p.jsx("path",{d:"M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18z"})})]}),Un="w-full h-12 rounded-lg border px-3 py-0 text-[15px] leading-[48px] focus:outline-none focus:ring-2 focus:ring-emerald-600",zn="w-full md:w-auto px-4 py-3 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 disabled:cursor-not-allowed",Er="w-full md:w-auto px-4 py-3 rounded-lg border hover:bg-slate-50",wn=({className:t,children:e})=>p.jsx("div",{className:`rounded-xl border p-5 md:p-6 bg-white shadow ${t||""}`,children:e}),ba=({icon:t,title:e,subtitle:n})=>p.jsxs("div",{className:"space-y-1",children:[p.jsxs("h2",{className:"flex items-center gap-2 text-lg md:text-xl font-bold",children:[p.jsx(t,{className:"h-5 w-5 text-emerald-600"}),e]}),p.jsx("p",{className:"text-sm text-slate-500",children:n})]}),wl=({label:t,value:e})=>p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"text-lg font-bold",children:e}),p.jsx("div",{className:"text-xs text-slate-500",children:t})]}),Ib=()=>{const[t,e]=re.useState(!1);return re.useEffect(()=>{const n=()=>e(!1);return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]),p.jsxs("nav",{className:"mb-4 md:mb-6",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("a",{href:"#/",className:"flex items-center gap-2",children:[p.jsx("img",{src:yb,alt:"Venture",className:"h-7 w-auto object-contain"}),p.jsx("span",{className:"text-base font-semibold tracking-tight",children:"Venture"})]}),p.jsxs("div",{className:"hidden md:flex gap-4",children:[p.jsx("a",{href:"#/",className:"text-sm text-emerald-700 hover:underline",children:"Home"}),p.jsx("a",{href:"#/status",className:"text-sm text-emerald-700 hover:underline",children:"Acompanhar"}),p.jsx("a",{href:"#/faq",className:"text-sm text-emerald-700 hover:underline",children:"FAQ"}),p.jsx("a",{href:"#/termos",className:"text-sm text-emerald-700 hover:underline",children:"Política de Uso"}),p.jsx("a",{href:"#/admin",className:"text-sm text-emerald-700 hover:underline",children:"Admin"})]}),p.jsx("button",{className:"md:hidden p-2 rounded-lg border",onClick:()=>e(n=>!n),"aria-label":"Abrir menu",children:t?p.jsx(iA,{size:18}):p.jsx(nA,{size:18})})]}),t&&p.jsxs("div",{className:"mt-3 grid gap-2 md:hidden",children:[p.jsx("a",{href:"#/",className:"px-3 py-2 rounded-lg border",children:"Home"}),p.jsx("a",{href:"#/status",className:"px-3 py-2 rounded-lg border",children:"Acompanhar"}),p.jsx("a",{href:"#/faq",className:"px-3 py-2 rounded-lg border",children:"FAQ"}),p.jsx("a",{href:"#/termos",className:"px-3 py-2 rounded-lg border",children:"Política de Uso"}),p.jsx("a",{href:"#/admin",className:"px-3 py-2 rounded-lg border",children:"Admin"})]})]})},Cy=["AGG","SEC","ECL","CLP","TAP","CGG","EXJ","KIZ","SEB","DAP"],ky=["Assédio","Fraude","Conflito de Interesses","Outro"],Sb=()=>Math.random().toString(36).substring(2,10).toUpperCase(),Da=()=>p.jsx("div",{className:"text-xs text-slate-500",children:"⚠️ Protótipo: dados operacionais na nuvem (Firestore/Storage). Ajuste regras antes de produção."});function Ab(){const t=sessionStorage.getItem(Up)==="1"?"#/report":"#/termos";return p.jsxs("section",{id:"home",className:"space-y-4 md:space-y-6",children:[p.jsx(ba,{icon:sA,title:"Bem-vindo à Linha Ética",subtitle:"Canal independente para denúncias de má conduta, riscos e violações."}),p.jsxs("div",{className:"grid md:grid-cols-3 gap-3 md:gap-4",children:[p.jsx(wn,{children:p.jsxs("div",{className:"flex items-start gap-3",children:[p.jsx("div",{className:"p-2 rounded-xl bg-emerald-50 text-emerald-700",children:p.jsx(qw,{})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-semibold",children:"Registrar denúncia"}),p.jsx("p",{className:"text-sm text-slate-600",children:"Envie uma denúncia anônima ou identificada. Gere um protocolo para acompanhar."}),p.jsxs("a",{href:t,className:"inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline",children:["Iniciar ",p.jsx(rA,{size:14})]})]})]})}),p.jsx(wn,{children:p.jsxs("div",{className:"flex items-start gap-3",children:[p.jsx("div",{className:"p-2 rounded-xl bg-emerald-50 text-emerald-700",children:p.jsx(Hg,{})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-semibold",children:"Acompanhar status"}),p.jsx("p",{className:"text-sm text-slate-600",children:"Use seu protocolo para ver andamento e interagir com o time responsável."}),p.jsxs("a",{href:"#/status",className:"inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline",children:["Acompanhar ",p.jsx(Hg,{size:14})]})]})]})}),p.jsx(wn,{children:p.jsxs("div",{className:"flex items-start gap-3",children:[p.jsx("div",{className:"p-2 rounded-xl bg-emerald-50 text-emerald-700",children:p.jsx(fd,{})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-semibold",children:"FAQ / Política"}),p.jsx("p",{className:"text-sm text-slate-600",children:"Entenda como protegemos sua identidade e tratamos seus dados (LGPD)."}),p.jsxs("a",{href:"#/faq",className:"inline-flex items-center gap-2 mt-3 text-emerald-700 hover:underline",children:["Ver perguntas ",p.jsx(fd,{size:14})]})]})]})})]}),p.jsx(wn,{children:p.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[p.jsx(wl,{label:"Unidades",value:"10"}),p.jsx(wl,{label:"Tempo médio de abertura",value:"2 min"}),p.jsx(wl,{label:"Protocolo gerado",value:"Automático"}),p.jsx(wl,{label:"Custo",value:"Hospedagem estática"})]})}),p.jsxs("div",{className:"text-xs text-slate-500",children:["Área restrita: ",p.jsxs("a",{href:"#/admin",className:"underline inline-flex items-center gap-1",children:["Painel ",p.jsx(Hw,{size:12})]})]})]})}function Rb(){const[t,e]=re.useState(!1),n=()=>{t&&(sessionStorage.setItem(Up,"1"),window.location.hash="#/report")};return p.jsxs("section",{className:"space-y-4 md:space-y-6",children:[p.jsx(ba,{icon:tA,title:"Política de Uso da Linha Ética",subtitle:`Versão ${vb} • Atualizado em ${wb}`}),p.jsxs(wn,{className:"space-y-4",children:[p.jsxs("div",{className:"text-sm text-slate-700 space-y-3 max-h-[55vh] overflow-auto pr-1",children:[p.jsxs("p",{children:[p.jsx("strong",{children:"Objetivo."})," Canal para que colaboradores e terceiros relatem, de boa-fé, suspeitas de irregularidades ou violações."]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Anonimato."})," Você pode denunciar de forma anônima ou identificada."]}),p.jsxs("p",{children:[p.jsx("strong",{children:"LGPD."})," Tratamento apenas do necessário, com base legal adequada e acesso restrito aos autorizados."]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Escopo do protótipo."})," Denúncias salvas no Firestore; anexos no Storage."]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Concordância."})," Ao prosseguir, você declara que leu e concorda com esta Política."]})]}),p.jsxs("label",{className:"flex items-start gap-2",children:[p.jsx("input",{type:"checkbox",className:"mt-1",checked:t,onChange:r=>e(r.target.checked)}),p.jsx("span",{className:"text-sm",children:"Li e concordo com os termos e a Política de Uso."})]}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[p.jsx("button",{className:t?zn:`${zn} cursor-not-allowed`,disabled:!t,onClick:n,children:p.jsxs("span",{className:"inline-flex items-center gap-2",children:["Concordo e continuar ",p.jsx(eA,{size:16})]})}),p.jsx("a",{href:"#/",className:Er,children:"Cancelar e voltar"})]})]}),p.jsx(Da,{})]})}function xb(){const[t,e]=re.useState(1),[n,r]=re.useState(Cy[0]),[s,i]=re.useState(ky[0]),[o,l]=re.useState(""),[u,h]=re.useState("único"),[f,m]=re.useState(""),[g,R]=re.useState(""),[C,N]=re.useState(""),[D,A]=re.useState("nao"),[v,S]=re.useState(""),[b,F]=re.useState([]),[j,E]=re.useState(!0),[y,w]=re.useState({nome:"",email:"",telefone:""}),[I,x]=re.useState("email"),[k,T]=re.useState(!1);re.useEffect(()=>{sessionStorage.getItem(Up)!=="1"&&(window.location.hash="#/termos")},[]);const Ye=B=>/^\d{4}-\d{2}-\d{2}$/.test(B)&&!Number.isNaN(new Date(B).getTime()),$t=B=>{if(!Ye(B))return!1;const _e=new Date(B),pe=new Date;return _e.setHours(0,0,0,0),pe.setHours(0,0,0,0),_e>pe},qt=o?Ye(o)?$t(o)?"A data não pode estar no futuro.":"":"Data inválida.":"Informe a data do ocorrido.",yt=!!n&&!!s,$=g.trim().length>=100&&!!f&&!qt,Q=yt&&$,Z=()=>{const B={unidade:n,categoria:s,dataUnica:o,periodicidade:u,onde:f,descricao:g.trim(),valorFinanceiro:C,foiReportado:D,paraQuem:v,anonimo:j,contato:y,prefer:I,files:b.map(ye=>({name:ye.name,size:ye.size,type:ye.type}))},_e=JSON.stringify(B);let pe=5381;for(let ye=0;ye<_e.length;ye++)pe=(pe<<5)+pe^_e.charCodeAt(ye);return(pe>>>0).toString(36)},ge=async()=>{if(!Q){alert("Preencha os campos obrigatórios (data válida, onde e descrição ≥ 100).");return}if(k)return;const B=Z(),_e=sessionStorage.getItem("last_submit_hash");if(_e&&_e===B){alert("Esta denúncia já foi enviada. Evite cliques repetidos.");return}T(!0);try{sessionStorage.setItem("last_submit_hash",B);try{await Bd(qT(),8e3,"iniciar sessão anônima")}catch(Dt){console.error("[ensureAnonAuth] erro:",Dt),alert("Falha ao iniciar sessão anônima. Verifique sua conexão e tente novamente."),sessionStorage.removeItem("last_submit_hash");return}const pe=Sb();let ye=[];if(b.length)try{const Dt=b.filter(Us=>Us.size<=8388608);Dt.length!==b.length&&alert("Alguns arquivos foram ignorados: tamanho acima de 8MB."),ye=await Tb(pe,Dt,HT,25e3)}catch(Dt){console.error("[upload] erro:",Dt),alert("Não foi possível enviar os anexos. Você pode tentar novamente ou enviar sem anexos."),ye=[]}const at={protocolo:pe,unidade:n,categoria:s,perguntas:{periodo:{tipo:"unico",data:o},periodicidade:u,onde:f,valorFinanceiro:C,foiReportado:D,paraQuem:v},descricao:g.trim(),anonimo:j,contato:j?null:{...y,prefer:I},anexos:ye,status:"Recebido",_idempotency:B,createdAt:new Date().toISOString()};try{await Bd(WT(pe,at),8e3,"salvar denúncia no Firestore")}catch(Dt){console.error("[firestore] erro:",Dt),alert("Não foi possível salvar sua denúncia agora. Tente novamente em instantes."),sessionStorage.removeItem("last_submit_hash");return}window.location.hash=`#/status?proto=${pe}`,alert(`Denúncia registrada com sucesso.
Protocolo: ${pe}`)}finally{T(!1)}},de=({n:B})=>{const _e=t===B;return p.jsx("div",{className:_e?"px-2 py-1 rounded-full border bg-emerald-600 text-white border-emerald-700":"px-2 py-1 rounded-full border bg-white",children:B})};return p.jsxs("section",{className:"space-y-4 md:space-y-6",children:[p.jsx(ba,{icon:qw,title:"Registrar denúncia",subtitle:"Responda às perguntas abaixo. Campos essenciais marcados com *."}),p.jsxs(wn,{className:`space-y-4 ${k?"pointer-events-none opacity-70 relative":""}`,children:[k&&p.jsx("div",{className:"absolute inset-0 z-10 flex items-center justify-center",children:p.jsx("div",{className:"bg-black/40 rounded-md px-4 py-2 text-white",children:"Enviando…"})}),p.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[p.jsx("span",{className:"hidden md:inline text-slate-500",children:"Etapas:"}),[1,2,3,4,5].map(B=>p.jsx(de,{n:B},B))]}),t===1&&p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-start",children:[p.jsx(et,{label:"Unidade *",children:p.jsx(mo,{value:n,onChange:B=>r(B.target.value),children:Cy.map(B=>p.jsx("option",{children:B},B))})}),p.jsx(et,{label:"Categoria *",children:p.jsx(mo,{value:s,onChange:B=>i(B.target.value),children:ky.map(B=>p.jsx("option",{children:B},B))})})]}),p.jsxs("div",{className:"flex flex-col md:flex-row gap-2 md:gap-3 justify-between",children:[p.jsx("a",{href:"#/",className:Er,children:"Home"}),p.jsx("button",{disabled:!yt||k,onClick:()=>e(2),className:zn,children:"Próxima"})]})]}),t===2&&p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"grid md:grid-cols-12 gap-4 items-start",children:[p.jsx("div",{className:"md:col-span-4",children:p.jsxs(et,{label:"Quando aconteceu? *",hint:"Selecione a data do ocorrido",children:[p.jsx("input",{type:"date",className:Un,value:o,onChange:B=>l(B.target.value)}),qt&&p.jsx("div",{className:"text-xs text-rose-600 mt-1",children:qt})]})}),p.jsx("div",{className:"md:col-span-4",children:p.jsx(et,{label:"Recorrência",hint:" ",children:p.jsxs(mo,{value:u,onChange:B=>h(B.target.value),children:[p.jsx("option",{value:"único",children:"Evento único"}),p.jsx("option",{value:"recorrente",children:"Recorrente"}),p.jsx("option",{value:"contínuo",children:"Contínuo"})]})})}),p.jsx("div",{className:"md:col-span-4",children:p.jsx(et,{label:"Onde ocorreu? *",hint:"Local/área/setor/cidade",children:p.jsx("input",{className:Un,placeholder:"Ex.: Loja KIZ - estoque",value:f,onChange:B=>m(B.target.value)})})})]}),p.jsxs(et,{label:"Descreva detalhadamente a denúncia *",hint:"O que aconteceu? Quem estava envolvido? Há evidências?",children:[p.jsx("textarea",{className:"w-full rounded-lg border p-3 min-h-[160px]",value:g,onChange:B=>R(B.target.value),placeholder:"Conte os fatos com o máximo de detalhes possíveis…"}),p.jsxs("div",{className:g.trim().length<100?"text-xs mt-1 text-rose-600":"text-xs mt-1 text-slate-500",children:[g.trim().length," / 100"]})]}),p.jsxs("div",{className:"flex flex-col md:flex-row gap-2 md:gap-3 justify-between",children:[p.jsx("button",{onClick:()=>e(1),className:Er,children:"Voltar"}),p.jsx("button",{disabled:!$||k,onClick:()=>e(3),className:zn,children:"Próxima"})]})]}),t===3&&p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"grid md:grid-cols-12 gap-4 items-start",children:[p.jsx("div",{className:"md:col-span-6",children:p.jsx(et,{label:"Houve impacto financeiro?",hint:"Se sim, estimativa do valor",children:p.jsx("input",{className:Un,placeholder:"Ex.: ~R$ 5.000",value:C,onChange:B=>N(B.target.value)})})}),p.jsx("div",{className:"md:col-span-6",children:p.jsx(et,{label:"Você já reportou isso internamente?",hint:" ",children:p.jsxs(mo,{value:D,onChange:B=>A(B.target.value),children:[p.jsx("option",{value:"nao",children:"Não"}),p.jsx("option",{value:"sim",children:"Sim"})]})})}),D==="sim"&&p.jsx("div",{className:"md:col-span-12",children:p.jsx(et,{label:"Para quem? (opcional)",hint:"Departamento, nome ou canal",children:p.jsx("input",{className:Un,value:v,onChange:B=>S(B.target.value)})})})]}),p.jsxs("div",{className:"flex flex-col md:flex-row gap-2 md:gap-3 justify-between",children:[p.jsx("button",{onClick:()=>e(2),className:Er,children:"Voltar"}),p.jsx("button",{onClick:()=>e(4),className:zn,children:"Próxima"})]})]}),t===4&&p.jsxs("div",{className:"space-y-4",children:[p.jsxs(et,{label:"Anexos (opcional)",hint:"Imagens/PDF até 8MB cada. Remova metadados sensíveis antes de enviar.",children:[p.jsx("input",{type:"file",multiple:!0,onChange:B=>{const _e=Array.from(B.target.files||[]),pe=_e.filter(at=>at.size<=8*1024*1024),ye=_e.length-pe.length;ye>0&&alert(`Alguns arquivos foram ignorados por exceder 8MB (${ye}).`),F(pe)}}),!!b.length&&p.jsx("ul",{className:"text-sm text-slate-600 list-disc pl-5 mt-2",children:b.map((B,_e)=>p.jsxs("li",{children:[B.name," (",Math.round(B.size/1024)," KB)"]},_e))})]}),p.jsxs("div",{className:"flex flex-col md:flex-row gap-2 md:gap-3 justify-between",children:[p.jsx("button",{onClick:()=>e(3),className:Er,children:"Voltar"}),p.jsx("button",{onClick:()=>e(5),className:zn,children:"Próxima"})]})]}),t===5&&p.jsxs("div",{className:"space-y-4",children:[p.jsx(et,{label:"Anonimato",hint:" ",children:p.jsxs("label",{className:"flex items-center gap-2",children:[p.jsx("input",{type:"checkbox",checked:j,onChange:B=>E(B.target.checked)}),p.jsx("span",{className:"text-sm",children:"Quero permanecer anônimo"})]})}),!j&&p.jsxs("div",{className:"grid md:grid-cols-12 gap-4 items-start",children:[p.jsx("div",{className:"md:col-span-4",children:p.jsx(et,{label:"Nome",hint:" ",children:p.jsx("input",{className:Un,value:y.nome,onChange:B=>w({...y,nome:B.target.value})})})}),p.jsx("div",{className:"md:col-span-4",children:p.jsx(et,{label:"Email",hint:" ",children:p.jsx("input",{type:"email",className:Un,value:y.email,onChange:B=>w({...y,email:B.target.value})})})}),p.jsx("div",{className:"md:col-span-4",children:p.jsx(et,{label:"Telefone",hint:" ",children:p.jsx("input",{className:Un,value:y.telefone,onChange:B=>w({...y,telefone:B.target.value})})})}),p.jsx("div",{className:"md:col-span-4",children:p.jsx(et,{label:"Preferência de contato",hint:" ",children:p.jsxs(mo,{value:I,onChange:B=>x(B.target.value),children:[p.jsx("option",{value:"email",children:"Email"}),p.jsx("option",{value:"telefone",children:"Telefone"})]})})})]}),p.jsxs("div",{className:"flex flex-col md:flex-row gap-2 md:gap-3 justify-between",children:[p.jsx("button",{onClick:()=>e(4),className:Er,disabled:k,children:"Voltar"}),p.jsx("button",{onClick:ge,disabled:!Q||k,className:zn,children:k?"Enviando…":"Enviar denúncia"})]})]})]}),p.jsx(Da,{})]})}function Cb(){const[t,e]=re.useState(""),n=async()=>{if(!t.trim())return;const r=await GT(t.trim());if(!r){alert("Protocolo não encontrado.");return}const s=r.status||"-",i=(r.notes||[]).slice(-1)[0];alert(`Status: ${s}`+(i?`
Última atualização: ${i.text||""}`:""))};return p.jsxs("section",{className:"space-y-4 md:space-y-6",children:[p.jsxs(wn,{className:"space-y-3 md:space-y-4",children:[p.jsx("h3",{className:"text-lg font-semibold",children:"Acompanhar denúncia"}),p.jsx(et,{label:"Protocolo",hint:"Digite o código recebido ao enviar a denúncia",children:p.jsx("input",{className:Un,value:t,onChange:r=>e(r.target.value)})}),p.jsxs("div",{className:"flex flex-col md:flex-row gap-2 md:gap-3",children:[p.jsx("button",{onClick:n,className:zn,children:"Consultar"}),p.jsx("a",{href:"#/",className:Er,children:"Voltar para Home"})]})]}),p.jsx(Da,{})]})}function kb(){return p.jsxs("section",{className:"space-y-4 md:space-y-6",children:[p.jsx(ba,{icon:fd,title:"FAQ / Política",subtitle:"Como lidamos com seus dados e sua identidade."}),p.jsxs(wn,{className:"space-y-3 md:space-y-4",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Posso denunciar de forma anônima?"}),p.jsx("div",{className:"text-sm text-slate-600",children:"Sim. Você pode optar pelo anonimato. Seus dados não serão coletados, e o protocolo permite acompanhar sem se identificar."})]}),p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Quem terá acesso às informações?"}),p.jsx("div",{className:"text-sm text-slate-600",children:"Apenas o time responsável pela apuração. Informações são tratadas com confidencialidade e de acordo com a LGPD."})]}),p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Que tipos de casos posso reportar?"}),p.jsx("div",{className:"text-sm text-slate-600",children:"Assédio, fraude, conflito de interesses, e quaisquer violações de políticas internas ou leis."})]}),p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold",children:"Como acompanho o status?"}),p.jsx("div",{className:"text-sm text-slate-600",children:"Use o protocolo gerado ao final do envio, na página “Acompanhar”."})]})]}),p.jsx(Da,{})]})}function Pb(){var pe,ye,at,Dt,Us,rs,ss;const[t,e]=re.useState(""),[n,r]=re.useState("todos"),[s,i]=re.useState([]),[o,l]=re.useState(null),[u,h]=re.useState(new Set),f=u.size>0&&u.size===s.length,m=u.size>0,g=re.useRef(null),R=V=>{var G;if(!V)return 0;try{return V!=null&&V.toDate&&(V=V.toDate()),(typeof V=="string"||typeof V=="number")&&(V=new Date(V)),((G=V.getTime)==null?void 0:G.call(V))||0}catch{return 0}};re.useEffect(()=>{const V=KT(G=>{const X=[...G].sort((se,ee)=>{const Je=R(se.createdAt)||R(se.updatedAt);return(R(ee.createdAt)||R(ee.updatedAt))-Je});i(X),h(se=>new Set([...se].filter(ee=>X.find(Je=>Je.id===ee))))});return()=>V&&V()},[]),re.useEffect(()=>{o&&g.current&&g.current.scrollIntoView({behavior:"smooth",block:"start"})},[o]);const C=V=>{var X,se,ee,Je,sr,pn,Dn,ir,On,Vn,Zt,or;if(!t.trim())return!0;const G=t.toLowerCase();return((X=V.id)==null?void 0:X.toLowerCase().includes(G))||((ee=(se=V.protocolo)==null?void 0:se.toLowerCase)==null?void 0:ee.call(se).includes(G))||((sr=(Je=V.unidade)==null?void 0:Je.toLowerCase)==null?void 0:sr.call(Je).includes(G))||((Dn=(pn=V.categoria)==null?void 0:pn.toLowerCase)==null?void 0:Dn.call(pn).includes(G))||((Vn=(On=(ir=V.perguntas)==null?void 0:ir.onde)==null?void 0:On.toLowerCase)==null?void 0:Vn.call(On).includes(G))||((or=(Zt=V.descricao)==null?void 0:Zt.toLowerCase)==null?void 0:or.call(Zt).includes(G))},N=V=>n==="todos"?!0:(V.status||"").toLowerCase()===n.toLowerCase(),D=s.filter(V=>C(V)&&N(V)),[A,v]=re.useState("Recebido"),[S,b]=re.useState("");re.useEffect(()=>{o&&(v(o.status||"Recebido"),b(""))},[o]);const F=async()=>{o&&(await QT(o.id,{status:A,updatedAt:new Date().toISOString()}),alert("Status atualizado."))},j=async()=>{!o||!S.trim()||(await XT(o.id,{at:new Date().toISOString(),text:S.trim(),by:"Admin"}),b(""),alert("Resposta adicionada ao histórico."))};async function E(V){try{let G=(V&&typeof V.url=="string"?V.url:"")||"";if(!/^https?:\/\//i.test(G))if(V!=null&&V.path){const{getDownloadUrlByPath:se}=await ih(async()=>{const{getDownloadUrlByPath:ee}=await Promise.resolve().then(()=>wh);return{getDownloadUrlByPath:ee}},void 0);G=await se(V.path)}else{alert("Não foi possível localizar o arquivo (sem URL ou path).");return}window.open(G,"_blank","noopener,noreferrer")}catch(G){console.error("Erro ao abrir anexo:",G),alert("Não foi possível abrir o anexo. Verifique as regras do Storage e tente novamente.")}}const y=V=>{h(G=>{const X=new Set(G);return X.has(V)?X.delete(V):X.add(V),X})},w=()=>{h(f?new Set:new Set(s.map(V=>V.id)))},I=async()=>{if(!m||!confirm(`Tem certeza que deseja excluir ${u.size} denúncia(s)? Essa ação não pode ser desfeita.`))return;const V=[...u],{deleteReports:G}=await ih(async()=>{const{deleteReports:X}=await Promise.resolve().then(()=>wh);return{deleteReports:X}},void 0);await G(V),h(new Set),l(null),alert("Denúncia(s) excluída(s).")},x=async V=>{if(!confirm("Excluir esta denúncia? Essa ação não pode ser desfeita."))return;const{deleteReport:G}=await ih(async()=>{const{deleteReport:X}=await Promise.resolve().then(()=>wh);return{deleteReport:X}},void 0);await G(V),l(null),h(X=>{const se=new Set(X);return se.delete(V),se}),alert("Denúncia excluída.")},k=V=>{if(!V)return"-";try{V!=null&&V.toDate&&(V=V.toDate()),typeof V=="string"&&(V=new Date(V));const G=V,X=se=>String(se).padStart(2,"0");return`${X(G.getDate())}/${X(G.getMonth()+1)}/${G.getFullYear()} ${X(G.getHours())}:${X(G.getMinutes())}`}catch{return"-"}},T=(V,G)=>V.reduce((X,se)=>{const ee=G(se)||"-";return X[ee]=(X[ee]||0)+1,X},{}),Ye=D.length,$t=T(D,V=>V.status||"Sem status"),qt=T(D,V=>V.categoria),yt=T(D,V=>V.unidade),$=Math.max(1,...Object.values($t),...Object.values(qt),...Object.values(yt)),Q=({title:V,data:G})=>p.jsxs("div",{className:"rounded-xl border p-4 bg-white shadow space-y-2",children:[p.jsx("div",{className:"font-medium",children:V}),p.jsxs("div",{className:"space-y-2",children:[Object.entries(G).sort((X,se)=>se[1]-X[1]).map(([X,se])=>p.jsxs("div",{children:[p.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[p.jsx("span",{className:"text-slate-600",children:X}),p.jsx("span",{className:"text-slate-500",children:se})]}),p.jsx("div",{className:"h-2 bg-slate-100 rounded",children:p.jsx("div",{className:"h-2 bg-emerald-600 rounded",style:{width:`${se/$*100}%`}})})]},X)),Object.keys(G).length===0&&p.jsx("div",{className:"text-xs text-slate-500",children:"Sem dados no filtro atual."})]})]});function Z(V){const G=["protocolo","createdAt","updatedAt","unidade","categoria","onde","quando","periodicidade","impactoFinanceiro","reportado","paraQuem","anonimo","contato.nome","contato.email","contato.telefone","contato.prefer","status","descricao","anexos(qtd)"],X=ee=>ee==null?"":`"${String(ee).replace(/"/g,'""')}"`,se=[G.join(",")];return V.forEach(ee=>{var sr,pn,Dn,ir,On,Vn,Zt,or,$e,Ge,is;const Je=[ee.id||"",k(ee.createdAt),k(ee.updatedAt),ee.unidade||"",ee.categoria||"",((sr=ee.perguntas)==null?void 0:sr.onde)||"",((Dn=(pn=ee.perguntas)==null?void 0:pn.periodo)==null?void 0:Dn.data)||"",((ir=ee.perguntas)==null?void 0:ir.periodicidade)||"",((On=ee.perguntas)==null?void 0:On.valorFinanceiro)||"",((Vn=ee.perguntas)==null?void 0:Vn.foiReportado)||"",((Zt=ee.perguntas)==null?void 0:Zt.paraQuem)||"",ee.anonimo?"Sim":"Não",((or=ee.contato)==null?void 0:or.nome)||"",(($e=ee.contato)==null?void 0:$e.email)||"",((Ge=ee.contato)==null?void 0:Ge.telefone)||"",((is=ee.contato)==null?void 0:is.prefer)||"",ee.status||"",ee.descricao||"",Array.isArray(ee.anexos)?ee.anexos.length:0].map(X);se.push(Je.join(","))}),se.join(`\r
`)}function ge(V,G,X){const se=new Blob([X],{type:G}),ee=URL.createObjectURL(se),Je=document.createElement("a");Je.href=ee,Je.download=V,Je.click(),URL.revokeObjectURL(ee)}const de=()=>{const V=Z(D);ge(`denuncias_filtrado_${Date.now()}.csv`,"text/csv;charset=utf-8;",V)},B=()=>{if(!m){alert("Selecione pelo menos uma denúncia para exportar.");return}const V=D.filter(X=>u.has(X.id)),G=Z(V);ge(`denuncias_selecionadas_${Date.now()}.csv`,"text/csv;charset=utf-8;",G)},_e=()=>{const V=D,G=V.map(se=>{var ee;return`
        <tr>
          <td>${se.id||""}</td>
          <td>${k(se.createdAt)}</td>
          <td>${se.unidade||""}</td>
          <td>${se.categoria||""}</td>
          <td>${(((ee=se.perguntas)==null?void 0:ee.onde)||"").replace(/</g,"&lt;")}</td>
          <td>${se.status||""}</td>
        </tr>`}).join(""),X=window.open("","_blank");X.document.write(`
      <html>
      <head>
        <meta charset="utf-8" />
        <title>Denúncias (filtrado)</title>
        <style>
          body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding:16px; }
          h1 { font-size: 18px; margin: 0 0 12px; }
          table { width:100%; border-collapse: collapse; font-size:12px; }
          th, td { border:1px solid #ddd; padding:6px 8px; text-align:left; }
          th { background:#f5f7fa; }
        </style>
      </head>
      <body>
        <h1>Denúncias — filtrado (${V.length})</h1>
        <table>
          <thead>
            <tr>
              <th>Protocolo</th>
              <th>Data</th>
              <th>Unidade</th>
              <th>Categoria</th>
              <th>Onde</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>${G}</tbody>
        </table>
        <script>window.print();<\/script>
      </body>
      </html>
    `),X.document.close()};return p.jsxs("section",{className:"space-y-4 md:space-y-6",children:[p.jsxs(wn,{className:"space-y-3",children:[p.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-3",children:[p.jsx("h3",{className:"text-lg font-semibold",children:"Painel (Firestore)"}),p.jsx("div",{className:"text-xs text-slate-500",children:"Registros em tempo real • Ordenado por data (recente → antigo)"})]}),p.jsxs("div",{className:"grid md:grid-cols-12 gap-2",children:[p.jsx("div",{className:"md:col-span-5",children:p.jsx("input",{className:"w-full h-12 rounded-lg border px-3 py-0 text-[15px] leading-[48px] focus:outline-none focus:ring-2 focus:ring-emerald-600",placeholder:"Buscar por protocolo, unidade, categoria, descrição…",value:t,onChange:V=>e(V.target.value)})}),p.jsx("div",{className:"md:col-span-3",children:p.jsxs("div",{className:"relative",children:[p.jsxs("select",{className:"w-full h-12 rounded-lg border pl-3 pr-10 py-0 text-[15px] leading-[48px] appearance-none align-middle focus:outline-none focus:ring-2 focus:ring-emerald-600",value:n,onChange:V=>r(V.target.value),title:"Filtrar por status",children:[p.jsx("option",{value:"todos",children:"Todos os status"}),p.jsx("option",{value:"Recebido",children:"Recebido"}),p.jsx("option",{value:"Em análise",children:"Em análise"}),p.jsx("option",{value:"Em contato",children:"Em contato"}),p.jsx("option",{value:"Concluído",children:"Concluído"})]}),p.jsx("svg",{"aria-hidden":"true",className:"pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70",viewBox:"0 0 20 20",fill:"currentColor",children:p.jsx("path",{d:"M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18z"})})]})}),p.jsxs("div",{className:"md:col-span-4 flex flex-wrap gap-2",children:[p.jsx("a",{href:"#/",className:"px-4 py-3 rounded-lg border hover:bg-slate-50",children:"Home"}),p.jsx("button",{className:`px-4 py-3 rounded-lg border hover:bg-slate-50 ${m?"":"opacity-50 cursor-not-allowed"}`,disabled:!m,onClick:I,title:"Excluir selecionados",children:"Excluir selecionados"}),p.jsx("button",{className:"px-4 py-3 rounded-lg border hover:bg-slate-50",onClick:de,children:"Exportar CSV (filtro)"}),p.jsx("button",{className:`px-4 py-3 rounded-lg border hover:bg-slate-50 ${m?"":"opacity-50 cursor-not-allowed"}`,disabled:!m,onClick:B,children:"CSV (selecionados)"}),p.jsx("button",{className:"px-4 py-3 rounded-lg border hover:bg-slate-50",onClick:_e,children:"PDF (imprimir)"})]})]}),p.jsxs("div",{className:"grid md:grid-cols-3 gap-3",children:[p.jsxs("div",{className:"rounded-xl border p-4 bg-white shadow",children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Total (filtro atual)"}),p.jsx("div",{className:"text-2xl font-bold",children:Ye})]}),p.jsxs("div",{className:"rounded-xl border p-4 bg-white shadow",children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Com anexos"}),p.jsx("div",{className:"text-2xl font-bold",children:D.filter(V=>Array.isArray(V.anexos)?V.anexos.length>0:!1).length})]}),p.jsxs("div",{className:"rounded-xl border p-4 bg-white shadow",children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Identificadas"}),p.jsx("div",{className:"text-2xl font-bold",children:D.filter(V=>!V.anonimo).length})]})]}),p.jsxs("div",{className:"grid md:grid-cols-3 gap-3",children:[p.jsx(Q,{title:"Por status",data:$t}),p.jsx(Q,{title:"Por categoria",data:qt}),p.jsx(Q,{title:"Por unidade",data:yt})]}),o&&p.jsxs("div",{ref:g,className:"rounded-lg border p-3 bg-slate-50 overflow-hidden",children:[p.jsxs("div",{className:"flex items-start justify-between gap-3",children:[p.jsxs("div",{children:[p.jsx("div",{className:"text-sm text-slate-500",children:"Protocolo"}),p.jsx("div",{className:"font-mono font-semibold",children:o.id}),p.jsxs("div",{className:"text-xs text-slate-500 mt-1",children:["Criado em: ",k(o.createdAt)," ",o.updatedAt?`• Atualizado: ${k(o.updatedAt)}`:""]})]}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{className:"px-4 py-3 rounded-lg border hover:bg-slate-50",onClick:()=>l(null),children:"fechar"}),p.jsx("button",{className:"px-4 py-3 rounded-lg border hover:bg-slate-50",onClick:()=>x(o.id),children:"excluir"})]})]}),p.jsxs("div",{className:"grid md:grid-cols-2 gap-3 mt-2",children:[p.jsxs("div",{children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Unidade"}),p.jsx("div",{children:o.unidade})]}),p.jsxs("div",{children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Categoria"}),p.jsx("div",{children:o.categoria})]}),p.jsxs("div",{children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Onde"}),p.jsx("div",{children:((pe=o.perguntas)==null?void 0:pe.onde)||"-"})]}),p.jsxs("div",{children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Quando"}),p.jsx("div",{children:((at=(ye=o.perguntas)==null?void 0:ye.periodo)==null?void 0:at.data)||"-"})]}),p.jsxs("div",{children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Recorrência"}),p.jsx("div",{children:((Dt=o.perguntas)==null?void 0:Dt.periodicidade)||"-"})]}),p.jsxs("div",{children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Impacto financeiro"}),p.jsx("div",{children:((Us=o.perguntas)==null?void 0:Us.valorFinanceiro)||"-"})]}),p.jsxs("div",{children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Reportado internamente"}),p.jsx("div",{children:((rs=o.perguntas)==null?void 0:rs.foiReportado)==="sim"?`Sim (${((ss=o.perguntas)==null?void 0:ss.paraQuem)||"—"})`:"Não"})]}),p.jsxs("div",{children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Anonimato"}),p.jsx("div",{children:o.anonimo?"Sim":"Não"})]}),!o.anonimo&&o.contato&&p.jsxs("div",{className:"md:col-span-2",children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Contato do denunciante"}),p.jsxs("div",{className:"text-sm",children:[o.contato.nome?p.jsxs("div",{children:[p.jsx("strong",{children:"Nome:"})," ",o.contato.nome]}):null,o.contato.email?p.jsxs("div",{children:[p.jsx("strong",{children:"Email:"})," ",o.contato.email]}):null,o.contato.telefone?p.jsxs("div",{children:[p.jsx("strong",{children:"Telefone:"})," ",o.contato.telefone]}):null,o.contato.prefer?p.jsxs("div",{children:[p.jsx("strong",{children:"Preferência:"})," ",o.contato.prefer]}):null]})]})]}),p.jsxs("div",{className:"mt-3",children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Descrição"}),p.jsx("div",{className:"whitespace-pre-wrap max-w-full",style:{wordBreak:"break-word",overflowWrap:"anywhere"},children:o.descricao})]}),Array.isArray(o.anexos)&&p.jsxs("div",{className:"mt-3",children:[p.jsx("div",{className:"text-xs text-slate-500",children:"Anexos"}),o.anexos.length===0?p.jsx("div",{children:"-"}):p.jsx("ul",{className:"list-disc pl-5",children:o.anexos.map((V,G)=>p.jsxs("li",{className:"flex items-center gap-2",children:[p.jsx("button",{type:"button",onClick:()=>E(V),className:"text-emerald-700 underline hover:no-underline",title:"Abrir anexo",children:V.name||"Arquivo"}),p.jsxs("span",{className:"text-xs text-slate-500",children:[typeof V.size=="number"?`(${Math.round(V.size/1024)} KB)`:"",V.type?` — ${V.type}`:""]})]},G))})]}),p.jsxs("div",{className:"mt-4 grid md:grid-cols-2 gap-3",children:[p.jsxs("div",{className:"rounded-xl border p-5 md:p-6 bg-white shadow space-y-2",children:[p.jsx("div",{className:"font-medium",children:"Alterar status"}),p.jsx("div",{className:"relative",children:p.jsxs("select",{className:"w-full h-12 rounded-lg border pl-3 pr-10 py-0 text-[15px] leading-[48px] appearance-none align-middle focus:outline-none focus:ring-2 focus:ring-emerald-600",value:A,onChange:V=>v(V.target.value),children:[p.jsx("option",{children:"Recebido"}),p.jsx("option",{children:"Em análise"}),p.jsx("option",{children:"Em contato"}),p.jsx("option",{children:"Concluído"})]})}),p.jsx("button",{onClick:F,className:"w-full md:w-auto px-4 py-3 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700",children:"Salvar status"})]}),p.jsxs("div",{className:"rounded-xl border p-5 md:p-6 bg-white shadow space-y-2",children:[p.jsx("div",{className:"font-medium",children:"Adicionar resposta / comentário"}),p.jsx("textarea",{className:"w-full rounded-lg border p-3 min-h-[100px]",value:S,onChange:V=>b(V.target.value),placeholder:"Mensagem para histórico (visível no acompanhamento)"}),p.jsx("button",{onClick:j,className:"w-full md:w-auto px-4 py-3 rounded-lg text-white bg-emerald-600 hover:bg-emerald-700",children:"Salvar resposta"})]})]})]}),p.jsxs("div",{className:"grid md:hidden gap-3",children:[D.length===0&&p.jsx("div",{className:"text-center text-slate-500 text-sm py-4 border rounded-lg",children:"Sem registros."}),D.map(V=>{var G,X;return p.jsxs("div",{className:"rounded-lg border p-3 bg-white space-y-1",children:[p.jsxs("div",{className:"flex items-start justify-between gap-2",children:[p.jsxs("label",{className:"flex items-center gap-2",children:[p.jsx("input",{type:"checkbox",checked:u.has(V.id),onChange:()=>y(V.id)}),p.jsx("span",{className:"font-mono text-sm",children:V.id})]}),p.jsxs("div",{className:"text-xs text-slate-500 text-right",children:[k(V.createdAt),p.jsx("div",{children:V.status||"-"})]})]}),p.jsxs("div",{className:"text-sm",children:[p.jsx("span",{className:"font-medium",children:V.unidade})," • ",V.categoria]}),p.jsxs("div",{className:"text-xs text-slate-600",children:[((G=V.perguntas)==null?void 0:G.onde)||"-"," • Anexos: ",((X=V.anexos)==null?void 0:X.length)||0," • ",V.anonimo?"Anônimo":"Identificado"]}),p.jsxs("div",{className:"flex gap-2 pt-1",children:[p.jsx("button",{className:"px-4 py-3 rounded-lg border hover:bg-slate-50",onClick:()=>l(V),children:"Detalhes"}),p.jsx("button",{className:"px-4 py-3 rounded-lg border hover:bg-slate-50",onClick:()=>x(V.id),children:"Excluir"})]})]},V.id)})]}),p.jsx("div",{className:"overflow-auto rounded-lg border hidden md:block",children:p.jsxs("table",{className:"min-w-full text-sm",children:[p.jsx("thead",{className:"bg-slate-50 text-left",children:p.jsxs("tr",{children:[p.jsx("th",{className:"p-2 border-b w-10",children:p.jsx("input",{type:"checkbox",checked:f,onChange:w,"aria-label":"Selecionar todos"})}),p.jsx("th",{className:"p-2 border-b",children:"Protocolo"}),p.jsx("th",{className:"p-2 border-b",children:"Data/Hora"}),p.jsx("th",{className:"p-2 border-b",children:"Unidade"}),p.jsx("th",{className:"p-2 border-b",children:"Categoria"}),p.jsx("th",{className:"p-2 border-b",children:"Onde"}),p.jsx("th",{className:"p-2 border-b",children:"Anon."}),p.jsx("th",{className:"p-2 border-b",children:"Status"}),p.jsx("th",{className:"p-2 border-b",children:"Anexos"}),p.jsx("th",{className:"p-2 border-b w-28",children:"Ações"})]})}),p.jsxs("tbody",{children:[D.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:10,className:"p-3 text-center text-slate-500",children:"Sem registros."})}),D.map(V=>{var G,X;return p.jsxs("tr",{className:"hover:bg-slate-50",children:[p.jsx("td",{className:"p-2 border-b",children:p.jsx("input",{type:"checkbox",checked:u.has(V.id),onChange:()=>y(V.id),"aria-label":`Selecionar ${V.id}`})}),p.jsx("td",{className:"p-2 border-b font-mono",children:V.id}),p.jsx("td",{className:"p-2 border-b whitespace-nowrap",children:k(V.createdAt)}),p.jsx("td",{className:"p-2 border-b",children:V.unidade}),p.jsx("td",{className:"p-2 border-b",children:V.categoria}),p.jsx("td",{className:"p-2 border-b",children:((G=V.perguntas)==null?void 0:G.onde)||"-"}),p.jsx("td",{className:"p-2 border-b",children:V.anonimo?"Sim":"Não"}),p.jsx("td",{className:"p-2 border-b",children:V.status||"-"}),p.jsx("td",{className:"p-2 border-b",children:((X=V.anexos)==null?void 0:X.length)||0}),p.jsx("td",{className:"p-2 border-b",children:p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{className:"px-4 py-3 rounded-lg border hover:bg-slate-50",onClick:()=>l(V),children:"Detalhes"}),p.jsx("button",{className:"px-4 py-3 rounded-lg border hover:bg-slate-50",onClick:()=>x(V.id),children:"Excluir"})]})})]},V.id)})]})]})})]}),p.jsx(Da,{})]})}function Nb(){const[t,e]=re.useState(sessionStorage.getItem("admin_ok")==="1"),[n,r]=re.useState(""),[s,i]=re.useState(""),o=l=>{l.preventDefault(),n===Eb?(sessionStorage.setItem("admin_ok","1"),e(!0),i("")):i("Senha incorreta.")};return t?p.jsx(Pb,{}):p.jsxs("section",{className:"space-y-4 md:space-y-6",children:[p.jsx(ba,{icon:Hw,title:"Acesso restrito",subtitle:"Informe a senha para acessar o painel."}),p.jsx(wn,{className:"space-y-3 max-w-md",children:p.jsxs("form",{onSubmit:o,className:"space-y-3",children:[p.jsx(et,{label:"Senha",hint:"Contato: compliance/ética",children:p.jsx("input",{type:"password",className:Un,value:n,onChange:l=>r(l.target.value)})}),s&&p.jsx("div",{className:"text-xs text-rose-600",children:s}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[p.jsx("button",{className:zn,children:"Entrar"}),p.jsx("a",{href:"#/",className:Er,children:"Cancelar"})]})]})})]})}function bb(){const[t,e]=re.useState(window.location.hash||"#/");return re.useEffect(()=>{const n=()=>e(window.location.hash||"#/");return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]),p.jsxs("main",{className:"max-w-5xl mx-auto px-3 py-4 md:p-6",children:[p.jsx(Ib,{}),t.startsWith("#/report")?p.jsx(xb,{}):t.startsWith("#/status")?p.jsx(Cb,{}):t.startsWith("#/faq")?p.jsx(kb,{}):t.startsWith("#/admin")?p.jsx(Nb,{}):t.startsWith("#/termos")?p.jsx(Rb,{}):p.jsx(Ab,{})]})}const Db=Bw(document.getElementById("root"));Db.render(p.jsx(bb,{}));
