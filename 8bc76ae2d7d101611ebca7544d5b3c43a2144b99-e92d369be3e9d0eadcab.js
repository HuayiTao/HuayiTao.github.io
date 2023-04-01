"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[183],{5375:function(e,t,n){n.d(t,{Z:function(){return Ae}});var r=n(4184),o=n.n(r),s=!("undefined"==typeof window||!window.document||!window.document.createElement),i=!1,a=!1;try{var l={get passive(){return i=!0},get once(){return a=i=!0}};s&&(window.addEventListener("test",l,l),window.removeEventListener("test",l,!0))}catch(Ie){}var c=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!a){var o=r.once,s=r.capture,l=n;!a&&o&&(l=n.__once||function e(r){this.removeEventListener(t,e,s),n.call(this,r)},n.__once=l),e.addEventListener(t,l,i?r:s)}e.addEventListener(t,n,r)};function u(e){return e&&e.ownerDocument||document}var d,f=function(e,t,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};function p(e){if((!d&&0!==d||e)&&s){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),d=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return d}var h=n(7294);var m=function(e){var t=(0,h.useRef)(e);return(0,h.useEffect)((function(){t.current=e}),[e]),t};function v(e){var t=m(e);return(0,h.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var E=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var g=function(e,t){return(0,h.useMemo)((function(){return function(e,t){var n=E(e),r=E(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};function x(e){var t,n,r=(t=e,(n=(0,h.useRef)(t)).current=t,n);(0,h.useEffect)((function(){return function(){return r.current()}}),[])}function b(e,t){return function(e){var t=u(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var y=/([A-Z])/g;var w=/^ms-/;function k(e){return function(e){return e.replace(y,"-$1").toLowerCase()}(e).replace(w,"-ms-")}var C=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var N=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(k(t))||b(e).getPropertyValue(k(t));Object.keys(t).forEach((function(o){var s=t[o];s||0===s?!function(e){return!(!e||!C.test(e))}(o)?n+=k(o)+": "+s+";":r+=o+"("+s+") ":e.style.removeProperty(k(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};var R=function(e,t,n,r){return c(e,t,n,r),function(){f(e,t,n,r)}};function S(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),s=R(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),s()}}function O(e,t,n,r){var o,s;null==n&&(o=N(e,"transitionDuration")||"",s=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*s||0);var i=S(e,n,r),a=R(e,"transitionend",t);return function(){i(),a()}}function T(e){void 0===e&&(e=u());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(Ie){return e.body}}function L(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var j=n(3935);const D=`data-rr-ui-${"modal-open"}`;var $=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(N(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(D,""),N(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(D),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};const F=(0,h.createContext)(s?window:void 0);F.Provider;function M(){return(0,h.useContext)(F)}const B=(e,t)=>s?null==e?(t||u()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;var P=n(5893);function A({children:e,in:t,appear:n,onExited:r,onEntered:o,transition:s}){const i=function({in:e,onTransition:t,initial:n=!0}){const r=(0,h.useRef)(null),o=(0,h.useRef)(!0),s=v(t);return(0,h.useEffect)((()=>{o.current&&!n||s({in:e,element:r.current,initial:o.current})}),[e,n,s]),(0,h.useEffect)((()=>(o.current=!1,()=>{o.current=!0})),[]),r}({in:!!t,initial:n,onTransition:e=>{Promise.resolve(s(e)).then((()=>{e.in?null==o||o(e.element,e.initial):null==r||r(e.element)}))}}),a=g(i,e.ref);return(0,h.cloneElement)(e,{ref:a})}function I(e,t,n){return e?(0,P.jsx)(e,Object.assign({},n)):t?(0,P.jsx)(A,Object.assign({},n,{transition:t})):n.children}const H=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let W;function _(e){const t=M(),n=e||function(e){return W||(W=new $({ownerDocument:null==e?void 0:e.document})),W}(t),r=(0,h.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,h.useCallback)((e=>{r.current.dialog=e}),[]),setBackdropRef:(0,h.useCallback)((e=>{r.current.backdrop=e}),[])})}const Z=(0,h.forwardRef)(((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:i,children:a,backdrop:l=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:f,runTransition:p,backdropTransition:m,runBackdropTransition:E,autoFocus:g=!0,enforceFocus:b=!0,restoreFocus:y=!0,restoreFocusOptions:w,renderDialog:k,renderBackdrop:C=(e=>(0,P.jsx)("div",Object.assign({},e))),manager:N,container:S,onShow:O,onHide:D=(()=>{}),onExit:$,onExited:F,onExiting:A,onEnter:W,onEntering:Z,onEntered:z}=e,V=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,H);const U=function(e,t){const n=M(),[r,o]=(0,h.useState)((()=>B(e,null==n?void 0:n.document)));if(!r){const t=B(e);t&&o(t)}return(0,h.useEffect)((()=>{t&&r&&t(r)}),[t,r]),(0,h.useEffect)((()=>{const t=B(e);t!==r&&o(t)}),[e,r]),r}(S),J=_(N),K=function(){var e=(0,h.useRef)(!0),t=(0,h.useRef)((function(){return e.current}));return(0,h.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}(),X=function(e){var t=(0,h.useRef)(null);return(0,h.useEffect)((function(){t.current=e})),t.current}(n),[G,Y]=(0,h.useState)(!n),q=(0,h.useRef)(null),Q=!(!f&&!p);(0,h.useImperativeHandle)(t,(()=>J),[J]),s&&!X&&n&&(q.current=T()),Q||n||G?n&&G&&Y(!1):Y(!0);const ee=v((()=>{if(J.add(),ie.current=R(document,"keydown",oe),se.current=R(document,"focus",(()=>setTimeout(ne)),!0),O&&O(),g){const e=T(document);J.dialog&&e&&!L(J.dialog,e)&&(q.current=e,J.dialog.focus())}})),te=v((()=>{var e;(J.remove(),null==ie.current||ie.current(),null==se.current||se.current(),y)&&(null==(e=q.current)||null==e.focus||e.focus(w),q.current=null)}));(0,h.useEffect)((()=>{n&&U&&ee()}),[n,U,ee]),(0,h.useEffect)((()=>{G&&te()}),[G,te]),x((()=>{te()}));const ne=v((()=>{if(!b||!K()||!J.isTopModal())return;const e=T();J.dialog&&e&&!L(J.dialog,e)&&J.dialog.focus()})),re=v((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===l&&D())})),oe=v((e=>{c&&27===e.keyCode&&J.isTopModal()&&(null==d||d(e),e.defaultPrevented||D())})),se=(0,h.useRef)(),ie=(0,h.useRef)();if(!U||!(n||Q&&!G))return null;const ae=Object.assign({role:r,ref:J.setDialogRef,"aria-modal":"dialog"===r||void 0},V,{style:i,className:o,tabIndex:-1});let le=k?k(ae):(0,P.jsx)("div",Object.assign({},ae,{children:h.cloneElement(a,{role:"document"})}));le=I(f,p,{unmountOnExit:!0,appear:!0,in:!!n,onExit:$,onExiting:A,onExited:(...e)=>{Y(!0),null==F||F(...e)},onEnter:W,onEntering:Z,onEntered:z,children:le});let ce=null;return l&&(ce=C({ref:J.setBackdropRef,onClick:re}),ce=I(m,E,{in:!!n,appear:!0,unmountOnExit:!0,children:ce})),(0,P.jsx)(P.Fragment,{children:j.createPortal((0,P.jsxs)(P.Fragment,{children:[ce,le]}),U)})}));Z.displayName="Modal";var z=Object.assign(Z,{Manager:$});var V=Function.prototype.bind.call(Function.prototype.call,[].slice);function U(e,t){return V(e.querySelectorAll(t))}function J(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const K=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",X=".sticky-top",G=".navbar-toggler";class Y extends ${adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,N(t,{[e]:`${parseFloat(N(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],N(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();var n,r;if(r="modal-open",(n=t).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)),!e.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";U(t,K).forEach((t=>this.adjustAndStore(o,t,e.scrollBarWidth))),U(t,X).forEach((t=>this.adjustAndStore(s,t,-e.scrollBarWidth))),U(t,G).forEach((t=>this.adjustAndStore(s,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();var n,r;r="modal-open",(n=t).classList?n.classList.remove(r):"string"==typeof n.className?n.className=J(n.className,r):n.setAttribute("class",J(n.className&&n.className.baseVal||"",r));const o=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";U(t,K).forEach((e=>this.restore(o,e))),U(t,X).forEach((e=>this.restore(s,e))),U(t,G).forEach((e=>this.restore(s,e)))}}let q;var Q=n(4578),ee=!1,te=h.createContext(null),ne="unmounted",re="exited",oe="entering",se="entered",ie="exiting",ae=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,s=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?s?(o=re,r.appearStatus=oe):o=se:o=t.unmountOnExit||t.mountOnEnter?ne:re,r.state={status:o},r.nextCallback=null,r}(0,Q.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===ne?{status:re}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==oe&&n!==se&&(t=oe):n!==oe&&n!==se||(t=ie)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===oe){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:j.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===re&&this.setState({status:ne})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[j.findDOMNode(this),r],s=o[0],i=o[1],a=this.getTimeouts(),l=r?a.appear:a.enter;!e&&!n||ee?this.safeSetState({status:se},(function(){t.props.onEntered(s)})):(this.props.onEnter(s,i),this.safeSetState({status:oe},(function(){t.props.onEntering(s,i),t.onTransitionEnd(l,(function(){t.safeSetState({status:se},(function(){t.props.onEntered(s,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:j.findDOMNode(this);t&&!ee?(this.props.onExit(r),this.safeSetState({status:ie},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:re},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:re},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:j.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],s=o[0],i=o[1];this.props.addEndListener(s,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===ne)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return h.createElement(te.Provider,{value:null},"function"==typeof n?n(e,r):h.cloneElement(h.Children.only(n),r))},t}(h.Component);function le(){}ae.contextType=te,ae.propTypes={},ae.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:le,onEntering:le,onEntered:le,onExit:le,onExiting:le,onExited:le},ae.UNMOUNTED=ne,ae.EXITED=re,ae.ENTERING=oe,ae.ENTERED=se,ae.EXITING=ie;var ce=ae;function ue(e,t){const n=N(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function de(e,t){const n=ue(e,"transitionDuration"),r=ue(e,"transitionDelay"),o=O(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}var fe=h.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:s,addEndListener:i,children:a,childRef:l,...c},u)=>{const d=(0,h.useRef)(null),f=g(d,l),p=e=>{var t;f((t=e)&&"setState"in t?j.findDOMNode(t):null!=t?t:null)},m=e=>t=>{e&&d.current&&e(d.current,t)},v=(0,h.useCallback)(m(e),[e]),E=(0,h.useCallback)(m(t),[t]),x=(0,h.useCallback)(m(n),[n]),b=(0,h.useCallback)(m(r),[r]),y=(0,h.useCallback)(m(o),[o]),w=(0,h.useCallback)(m(s),[s]),k=(0,h.useCallback)(m(i),[i]);return(0,P.jsx)(ce,{ref:u,...c,onEnter:v,onEntered:x,onEntering:E,onExit:b,onExited:w,onExiting:y,addEndListener:k,nodeRef:d,children:"function"==typeof a?(e,t)=>a(e,{...t,ref:p}):h.cloneElement(a,{ref:p})})}));const pe={[oe]:"show",[se]:"show"},he=h.forwardRef((({className:e,children:t,transitionClasses:n={},...r},s)=>{const i=(0,h.useCallback)(((e,t)=>{!function(e){e.offsetHeight}(e),null==r.onEnter||r.onEnter(e,t)}),[r]);return(0,P.jsx)(fe,{ref:s,addEndListener:de,...r,onEnter:i,childRef:t.ref,children:(r,s)=>h.cloneElement(t,{...s,className:o()("fade",e,t.props.className,pe[r],n[r])})})}));he.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},he.displayName="Fade";var me=he,ve=n(4680),Ee=(0,ve.Z)("modal-body");var ge=h.createContext({onHide(){}}),xe=n(6792);const be=h.forwardRef((({bsPrefix:e,className:t,contentClassName:n,centered:r,size:s,fullscreen:i,children:a,scrollable:l,...c},u)=>{const d=`${e=(0,xe.vE)(e,"modal")}-dialog`,f="string"==typeof i?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return(0,P.jsx)("div",{...c,ref:u,className:o()(d,t,s&&`${e}-${s}`,r&&`${d}-centered`,l&&`${d}-scrollable`,i&&f),children:(0,P.jsx)("div",{className:o()(`${e}-content`,n),children:a})})}));be.displayName="ModalDialog";var ye=be,we=(0,ve.Z)("modal-footer"),ke=n(5697),Ce=n.n(ke);const Ne={"aria-label":Ce().string,onClick:Ce().func,variant:Ce().oneOf(["white"])},Re=h.forwardRef((({className:e,variant:t,...n},r)=>(0,P.jsx)("button",{ref:r,type:"button",className:o()("btn-close",t&&`btn-close-${t}`,e),...n})));Re.displayName="CloseButton",Re.propTypes=Ne,Re.defaultProps={"aria-label":"Close"};var Se=Re;const Oe=h.forwardRef((({closeLabel:e,closeVariant:t,closeButton:n,onHide:r,children:o,...s},i)=>{const a=(0,h.useContext)(ge),l=v((()=>{null==a||a.onHide(),null==r||r()}));return(0,P.jsxs)("div",{ref:i,...s,children:[o,n&&(0,P.jsx)(Se,{"aria-label":e,variant:t,onClick:l})]})}));Oe.defaultProps={closeLabel:"Close",closeButton:!1};var Te=Oe;const Le=h.forwardRef((({bsPrefix:e,className:t,...n},r)=>(e=(0,xe.vE)(e,"modal-header"),(0,P.jsx)(Te,{ref:r,...n,className:o()(t,e)}))));Le.displayName="ModalHeader",Le.defaultProps={closeLabel:"Close",closeButton:!1};var je=Le;const De=(0,n(9602).Z)("h4");var $e=(0,ve.Z)("modal-title",{Component:De});const Fe={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ye};function Me(e){return(0,P.jsx)(me,{...e,timeout:null})}function Be(e){return(0,P.jsx)(me,{...e,timeout:null})}const Pe=h.forwardRef((({bsPrefix:e,className:t,style:n,dialogClassName:r,contentClassName:i,children:a,dialogAs:l,"aria-labelledby":d,"aria-describedby":m,"aria-label":E,show:b,animation:y,backdrop:w,keyboard:k,onEscapeKeyDown:C,onShow:N,onHide:R,container:S,autoFocus:T,enforceFocus:L,restoreFocus:j,restoreFocusOptions:D,onEntered:$,onExit:F,onExiting:M,onEnter:B,onEntering:A,onExited:I,backdropClassName:H,manager:W,..._},Z)=>{const[V,U]=(0,h.useState)({}),[J,K]=(0,h.useState)(!1),X=(0,h.useRef)(!1),G=(0,h.useRef)(!1),Q=(0,h.useRef)(null),[ee,te]=(0,h.useState)(null),ne=g(Z,te),re=v(R),oe=(0,xe.SC)();e=(0,xe.vE)(e,"modal");const se=(0,h.useMemo)((()=>({onHide:re})),[re]);function ie(){return W||function(e){return q||(q=new Y(e)),q}({isRTL:oe})}function ae(e){if(!s)return;const t=ie().getScrollbarWidth()>0,n=e.scrollHeight>u(e).documentElement.clientHeight;U({paddingRight:t&&!n?p():void 0,paddingLeft:!t&&n?p():void 0})}const le=v((()=>{ee&&ae(ee.dialog)}));x((()=>{f(window,"resize",le),null==Q.current||Q.current()}));const ce=()=>{X.current=!0},ue=e=>{X.current&&ee&&e.target===ee.dialog&&(G.current=!0),X.current=!1},de=()=>{K(!0),Q.current=O(ee.dialog,(()=>{K(!1)}))},fe=e=>{"static"!==w?G.current||e.target!==e.currentTarget?G.current=!1:null==R||R():(e=>{e.target===e.currentTarget&&de()})(e)},pe=(0,h.useCallback)((t=>(0,P.jsx)("div",{...t,className:o()(`${e}-backdrop`,H,!y&&"show")})),[y,H,e]),he={...n,...V};he.display="block";return(0,P.jsx)(ge.Provider,{value:se,children:(0,P.jsx)(z,{show:b,ref:ne,backdrop:w,container:S,keyboard:!0,autoFocus:T,enforceFocus:L,restoreFocus:j,restoreFocusOptions:D,onEscapeKeyDown:e=>{k?null==C||C(e):(e.preventDefault(),"static"===w&&de())},onShow:N,onHide:R,onEnter:(e,t)=>{e&&ae(e),null==B||B(e,t)},onEntering:(e,t)=>{null==A||A(e,t),c(window,"resize",le)},onEntered:$,onExit:e=>{null==Q.current||Q.current(),null==F||F(e)},onExiting:M,onExited:e=>{e&&(e.style.display=""),null==I||I(e),f(window,"resize",le)},manager:ie(),transition:y?Me:void 0,backdropTransition:y?Be:void 0,renderBackdrop:pe,renderDialog:n=>(0,P.jsx)("div",{role:"dialog",...n,style:he,className:o()(t,e,J&&`${e}-static`,!y&&"show"),onClick:w?fe:void 0,onMouseUp:ue,"aria-label":E,"aria-labelledby":d,"aria-describedby":m,children:(0,P.jsx)(l,{..._,onMouseDown:ce,className:r,contentClassName:i,children:a})})})})}));Pe.displayName="Modal",Pe.defaultProps=Fe;var Ae=Object.assign(Pe,{Body:Ee,Header:je,Title:$e,Footer:we,Dialog:ye,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},5147:function(e,t,n){var r=n(4184),o=n.n(r),s=n(7294),i=n(6792),a=n(5893);const l=s.forwardRef((({bsPrefix:e,className:t,striped:n,bordered:r,borderless:s,hover:l,size:c,variant:u,responsive:d,...f},p)=>{const h=(0,i.vE)(e,"table"),m=o()(t,h,u&&`${h}-${u}`,c&&`${h}-${c}`,n&&`${h}-${"string"==typeof n?`striped-${n}`:"striped"}`,r&&`${h}-bordered`,s&&`${h}-borderless`,l&&`${h}-hover`),v=(0,a.jsx)("table",{...f,className:m,ref:p});if(d){let e=`${h}-responsive`;return"string"==typeof d&&(e=`${e}-${d}`),(0,a.jsx)("div",{className:e,children:v})}return v}));t.Z=l},9602:function(e,t,n){var r=n(7294),o=n(4184),s=n.n(o),i=n(5893);t.Z=e=>r.forwardRef(((t,n)=>(0,i.jsx)("div",{...t,ref:n,className:s()(t.className,e)})))},30:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),o=function(){};var s="undefined"!=typeof window,i=function(e,t,n){if(!s)return[t,o,o];if(!e)throw new Error("useLocalStorage key may not be falsy");var i=n?n.raw?function(e){return e}:n.deserializer:JSON.parse,a=(0,r.useRef)((function(e){try{var r=n?n.raw?String:n.serializer:JSON.stringify,o=localStorage.getItem(e);return null!==o?i(o):(t&&localStorage.setItem(e,r(t)),t)}catch(l){return t}})),l=(0,r.useState)((function(){return a.current(e)})),c=l[0],u=l[1];(0,r.useLayoutEffect)((function(){return u(a.current(e))}),[e]);var d=(0,r.useCallback)((function(t){try{var r="function"==typeof t?t(c):t;if(void 0===r)return;var o=void 0;o=n?n.raw?"string"==typeof r?r:JSON.stringify(r):n.serializer?n.serializer(r):JSON.stringify(r):JSON.stringify(r),localStorage.setItem(e,o),u(i(o))}catch(l){}}),[e,u]),f=(0,r.useCallback)((function(){try{localStorage.removeItem(e),u(void 0)}catch(l){}}),[e,u]);return[c,d,f]}}}]);
//# sourceMappingURL=8bc76ae2d7d101611ebca7544d5b3c43a2144b99-e92d369be3e9d0eadcab.js.map