(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1733:function(o,e,t){var n=t(27),a=t(1734);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[o.i,a,""]]);var i={insert:function(o){if(!window.isApryseWebViewerWebComponent)return void document.head.appendChild(o);let e;e=document.getElementsByTagName("apryse-webviewer"),e.length||(e=function o(e,t=document){const n=[];return t.querySelectorAll(e).forEach(o=>n.push(o)),t.querySelectorAll("*").forEach(t=>{t.shadowRoot&&n.push(...o(e,t.shadowRoot))}),n}("apryse-webviewer"));const t=[];for(let n=0;n<e.length;n++){const a=e[n];if(0===n)a.shadowRoot.appendChild(o),o.onload=function(){t.length>0&&t.forEach(e=>{e.innerHTML=o.innerHTML})};else{const e=o.cloneNode(!0);a.shadowRoot.appendChild(e),t.push(e)}}},singleton:!1};n(a,i);o.exports=a.locals||{}},1734:function(o,e,t){(e=o.exports=t(28)(!1)).push([o.i,".open.CustomModal{visibility:visible}.closed.CustomModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.CustomModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.CustomModal .modal-container .wrapper .modal-content{padding:10px}.CustomModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.CustomModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.CustomModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.CustomModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.CustomModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.CustomModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.CustomModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.CustomModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.CustomModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.CustomModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CustomModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CustomModal .footer .modal-button{padding:23px 8px}}.CustomModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CustomModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .CustomModal .swipe-indicator{display:none}}.CustomModal .CustomModal-container{box-shadow:0 0 3px 0 var(--document-box-shadow);overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .CustomModal .CustomModal-container,.CustomModal .App:not(.is-web-component) .CustomModal-container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .CustomModal .CustomModal-container,.CustomModal .App.is-web-component .CustomModal-container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .CustomModal .CustomModal-container,.CustomModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .CustomModal-container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .CustomModal .CustomModal-container,.CustomModal .App.is-web-component:not(.is-in-desktop-only-mode) .CustomModal-container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.CustomModal .CustomModal-container{display:flex;flex-direction:column;width:480px;padding:0;border-radius:4px;box-shadow:0 0 3px var(--document-box-shadow);background:var(--component-background);position:relative}.CustomModal .CustomModal-container .CustomModal-header{padding:20px 16px 16px;box-shadow:inset 0 -1px 0 var(--modal-stroke-and-border)}.CustomModal .CustomModal-container .CustomModal-header p{display:flex;align-items:center;height:24px;font-size:16px;font-weight:700;margin:0 16px 0 0}.CustomModal .CustomModal-container .CustomModal-body{padding:16px}.CustomModal .CustomModal-container .CustomModal-footer{padding:16px;box-shadow:inset 0 1px 0 var(--modal-stroke-and-border);margin:0}.CustomModal .CustomModal-container .CustomModal-footer .modal-button{margin-top:0}",""]),e.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1821:function(o,e,t){"use strict";t.r(e);t(100),t(33),t(7),t(42),t(24),t(26),t(298),t(1732),t(30),t(34),t(19),t(11),t(13),t(12),t(8),t(9),t(10),t(16),t(15),t(20),t(18);var n=t(0),a=t.n(n),i=t(4),r=t.n(i),d=t(6),l=t(2),s=t(3);t(1733);function c(o,e){return function(o){if(Array.isArray(o))return o}(o)||function(o,e){var t=null==o?null:"undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(null!=t){var n,a,i,r,d=[],l=!0,s=!1;try{if(i=(t=t.call(o)).next,0===e){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=i.call(t)).done)&&(d.push(n.value),d.length!==e);l=!0);}catch(o){s=!0,a=o}finally{try{if(!l&&null!=t.return&&(r=t.return(),Object(r)!==r))return}finally{if(s)throw a}}return d}}(o,e)||function(o,e){if(!o)return;if("string"==typeof o)return p(o,e);var t=Object.prototype.toString.call(o).slice(8,-1);"Object"===t&&o.constructor&&(t=o.constructor.name);if("Map"===t||"Set"===t)return Array.from(o);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(o,e)}(o,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(o,e){(null==e||e>o.length)&&(e=o.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=o[t];return n}function u(o){try{return o instanceof window.Node||o instanceof window.parent.Node}catch(o){return!1}}var m={dataElement:r.a.string.isRequired,isOpen:r.a.bool,render:r.a.func,element:r.a.object,close:r.a.func,disableBackdropClick:r.a.bool,disableEscapeKeyDown:r.a.bool};function f(o){var e=o.dataElement,t=o.isOpen,i=o.element,r=o.render,d=o.close,l=o.disableBackdropClick,s=o.disableEscapeKeyDown,p=c(Object(n.useState)(i),2),m=p[0],f=p[1],b=a.a.useRef();a.a.useLayoutEffect((function(){if(r&&t&&b.current){b.current.focus();var o=r();if("string"==typeof o&&(o=document.createTextNode(o)),function(o){return a.a.isValidElement(o)}(o))f(o);else if(u(o)){for(;b.current.firstChild;)b.current.removeChild(b.current.lastChild);b.current.appendChild(o)}}}),[t,r]);var h=a.a.useCallback((function(){l||d(e)}),[d,e,l]),x=a.a.useCallback((function(o){o&&27===o.which&&!s&&d(e)}),[d,e,s]);a.a.useEffect((function(){if(t)return document.addEventListener("keydown",x),function(){document.removeEventListener("keydown",x)}}),[x,t]);var w=["Modal CustomModal"];return w.push(e),t?w.push("open"):w.push("closed"),a.a.createElement("div",{role:"button",tabIndex:"-1",className:w.join(" "),"data-element":e,onClick:h},a.a.createElement("div",{ref:b,className:"CustomModal-container",onClick:function(o){return o.stopPropagation()}},m))}function b(){var o=c(Object(d.e)((function(o){return[s.a.getCustomModals(o),s.a.getOpenElements(o),s.a.getDisabledElements(o)]}),d.c),3),e=o[0],t=o[1],n=o[2],i=Object(d.d)(),r=a.a.useCallback((function(o){i(l.a.closeElement(o))}),[i]);return e.map((function(o){var e=o.dataElement,i=o.disableBackdropClick,d=void 0!==i&&i,l=o.disableEscapeKeyDown,s=void 0!==l&&l,p=o.render,m=t[e],b=n[e];if(b&&!0===b.disabled)return null;var h=o.header,x=o.body,w=o.footer,y=null,v=null,C=null,g=function(o,e,t){o?function(o,e){u(o)&&e.appendChild(o)}(o,e):t&&t.length&&t.forEach((function(o,t){var n;if(u(o))o.classList.add("customEl".concat(t)),n=o;else{var a,i=o.title,r=o.button,d=o.style,l=o.onClick,s=void 0===l?null:l,p=o.className;n=r?document.createElement("button"):document.createElement("div"),null===(a=p=r?"Button ".concat(p):p)||void 0===a||a.split(" ").forEach((function(o){return n.classList.add(o)})),n.classList.add("customEl".concat(t)),n.innerText=i,n.onclick=s,d&&(n.style=Object.entries(d).map((function(o){var e=c(o,2),t=e[0],n=e[1];return Number.isInteger(n)?"".concat(t,":").concat(n,"px"):"".concat(t,":").concat(n)})).join(";"))}var m=e.querySelector(".customEl".concat(t));m?e.replaceChild(n,m):e.appendChild(n)}))};if(h){var M=h.className,k=h.style,E=h.innerHTML,A=void 0===E?null:E,T=h.title;T=T&&!A?a.a.createElement("p",null,T):null,y=a.a.createElement("div",{ref:function(e){var t=o.header,n=t.children,a=void 0===n?[]:n,i=t.innerHTML;g(void 0===i?null:i,e,a)},className:"CustomModal-header ".concat(M),style:k},T)}if(x){var j=x.className,L=x.style,N=x.innerHTML,H=void 0===N?null:N,O=x.title;O=O&&!H?a.a.createElement("p",null,O):null,v=a.a.createElement("div",{ref:function(e){var t=o.body,n=t.children,a=void 0===n?[]:n,i=t.innerHTML;g(void 0===i?null:i,e,a)},className:"CustomModal-body ".concat(j),style:L},O)}if(w){var D=w.className,R=w.style,S=w.innerHTML,I=void 0===S?null:S,B=w.title;B=B&&!I?a.a.createElement("p",null,B):null,C=a.a.createElement("div",{ref:function(e){var t=o.footer,n=t.children,a=void 0===n?[]:n,i=t.innerHTML;g(void 0===i?null:i,e,a)},className:"CustomModal-footer ".concat(D),style:R},B)}var _=null;return(h||x||w)&&(_=a.a.createElement(a.a.Fragment,null,y,v,C),p=null),a.a.createElement(f,{key:e,dataElement:e,isOpen:m,render:p,element:_,close:r,disableBackdropClick:d,disableEscapeKeyDown:s})})).filter(Boolean)}f.propTypes=m;var h=a.a.memo(b);e.default=h}}]);
//# sourceMappingURL=33.chunk.js.map