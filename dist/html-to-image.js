!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(i,o){function c(t){try{a(r.next(t))}catch(t){o(t)}}function u(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,u)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,i,o,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(c=0)),c;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!(i=c.trys,(i=i.length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){c.label=u[1];break}if(6===u[0]&&c.label<i[1]){c.label=i[1],i=u;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(u);break}i[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}"function"==typeof SuppressedError&&SuppressedError;var r,i=(r=0,function(){return r+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)|0).toString(36)).slice(-4)).concat(r)});function o(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}function c(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function u(t,e){void 0===e&&(e={});var n,r,i,o=e.width||(r=c(n=t,"border-left-width"),i=c(n,"border-right-width"),n.clientWidth+r+i),u=e.height||function(t){var e=c(t,"border-top-width"),n=c(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:o,height:u}}var a=16384;function s(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=r.length,o=new Uint8Array(i),c=0;c<i;c+=1)o[c]=r.charCodeAt(c);n(new Blob([o],{type:e.type?e.type:"image/png"}))}))}function l(t){return new Promise((function(e,n){var r=new Image;r.decode=function(){return e(r)},r.onload=function(){return e(r)},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}function f(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function h(t,r,i){return e(this,void 0,void 0,(function(){var e,o,c;return n(this,(function(n){return e="http://www.w3.org/2000/svg",o=document.createElementNS(e,"svg"),c=document.createElementNS(e,"foreignObject"),o.setAttribute("width","".concat(r)),o.setAttribute("height","".concat(i)),o.setAttribute("viewBox","0 0 ".concat(r," ").concat(i)),c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("externalResourcesRequired","true"),o.appendChild(c),c.appendChild(t),[2,f(o)]}))}))}var d=function(t,e){if(t instanceof e)return!0;var n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||d(n,e))};function v(t,e,n){var r=".".concat(t,":").concat(e),i=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t){return o(t).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n);return document.createTextNode("".concat(r,"{").concat(i,"}"))}function p(t,e,n){var r=window.getComputedStyle(t,n),o=r.getPropertyValue("content");if(""!==o&&"none"!==o){var c=i();try{e.className="".concat(e.className," ").concat(c)}catch(t){return}var u=document.createElement("style");u.appendChild(v(c,n,r)),e.appendChild(u)}}function g(t){return-1!==t.search(/^(data:)/)}function m(t,e){return"data:".concat(e,";base64,").concat(t)}function w(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t,r)];case 1:if(404===(e=n.sent()).status)throw new Error('Resource "'.concat(e.url,'" not found'));return[4,e.blob()];case 2:return o=n.sent(),[2,new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(){try{t(i({res:e,result:r.result}))}catch(t){n(t)}},r.readAsDataURL(o)}))]}}))}))}var b={};function y(t,r,i){return e(this,void 0,void 0,(function(){var e,o,c,u,a;return n(this,(function(n){switch(n.label){case 0:if(e=function(t,e,n){var r=t.replace(/\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?"[".concat(e,"]").concat(r):r}(t,r,i.includeQueryParams),null!=b[e])return[2,b[e]];i.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime()),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,w(t,i.fetchRequestInit,(function(t){var e=t.res,n=t.result;return r||(r=e.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n)}))];case 2:return c=n.sent(),o=m(c,r),[3,4];case 3:return u=n.sent(),o=i.imagePlaceholder||"",a="Failed to fetch resource: ".concat(t),u&&(a="string"==typeof u?u:u.message),a&&console.warn(a),[3,4];case 4:return b[e]=o,[2,o]}}))}))}var S="application/font-woff",E="image/jpeg",x={woff:S,woff2:S,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:E,jpeg:E,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function C(t){var e=function(t){var e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return x[e]||""}function P(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,l(e)]}))}))}function T(t,r){return e(this,void 0,void 0,(function(){var e,i,o,c;return n(this,(function(n){switch(n.label){case 0:return t.currentSrc?(e=document.createElement("canvas"),i=e.getContext("2d"),e.width=t.clientWidth,e.height=t.clientHeight,null==i||i.drawImage(t,0,0,e.width,e.height),[2,l(e.toDataURL())]):(o=t.poster,c=C(o),[4,y(o,c,r)]);case 1:return[2,l(n.sent())]}}))}))}function R(t){var r;return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(null===(r=null==t?void 0:t.contentDocument)||void 0===r?void 0:r.body)?[4,N(t.contentDocument.body,{},!0)]:[3,2];case 1:return[2,e.sent()];case 2:return[3,4];case 3:return e.sent(),[3,4];case 4:return[2,t.cloneNode(!1)]}}))}))}var A=function(t){return null!=t.tagName&&"SLOT"===t.tagName.toUpperCase()};function L(t,e,n){return d(e,Element)&&(function(t,e,n){var r=e.style;if(r)if(t instanceof SVGElement)r.cssText=t.getAttribute("style")||"";else{var i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):o(i).forEach((function(n){var o=i.getPropertyValue(n);if("font-size"===n&&o.endsWith("px")){var c=Math.floor(parseFloat(o.substring(0,o.length-2)))-.1;o="".concat(c,"px")}d(t,HTMLIFrameElement)&&"display"===n&&"inline"===o&&(o="block"),"d"===n&&e.getAttribute("d")&&(o="path(".concat(e.getAttribute("d"),")")),r.setProperty(n,o,i.getPropertyPriority(n))}));var c=n.allStyle;c&&Object.keys(c).forEach((function(t){r[t]=c[t]}))}}(t,e,n),function(t,e){p(t,e,":before"),p(t,e,":after")}(t,e),function(t,e){d(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),d(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(d(t,HTMLSelectElement)){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e)),e}function N(t,r,i){return e(this,void 0,void 0,(function(){return n(this,(function(c){return i||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return d(t,HTMLCanvasElement)?[2,P(t)]:d(t,HTMLVideoElement)?[2,T(t,r)]:d(t,HTMLIFrameElement)?[2,R(t)]:[2,t.cloneNode(!1)]}))}))}(t,r)})).then((function(i){return function(t,r,i){var c,u;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return e=[],0===(e=A(t)&&t.assignedNodes?o(t.assignedNodes()):d(t,HTMLIFrameElement)&&(null===(c=t.contentDocument)||void 0===c?void 0:c.body)?o(t.contentDocument.body.childNodes):o((null!==(u=t.shadowRoot)&&void 0!==u?u:t).childNodes)).length||d(t,HTMLVideoElement)?[2,r]:[4,e.reduce((function(t,e){return t.then((function(){return N(e,i)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve())];case 1:return n.sent(),[2,r]}}))}))}(t,i,r)})).then((function(e){return L(t,e,r)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,i,o,c,u,a,s,l,f,h,d,v,p;return n(this,(function(n){switch(n.label){case 0:if(0===(e=t.querySelectorAll?t.querySelectorAll("use"):[]).length)return[2,t];i={},p=0,n.label=1;case 1:return p<e.length?(o=e[p],(c=o.getAttribute("xlink:href"))?(u=t.querySelector(CSS.escape(c)),a=document.querySelector(CSS.escape(c)),u||!a||i[c]?[3,3]:(s=i,l=c,[4,N(a,r,!0)])):[3,3]):[3,4];case 2:s[l]=n.sent(),n.label=3;case 3:return p++,[3,1];case 4:if((f=Object.values(i)).length){for(h="http://www.w3.org/1999/xhtml",(d=document.createElementNS(h,"svg")).setAttribute("xmlns",h),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none",v=document.createElementNS(h,"defs"),d.appendChild(v),p=0;p<f.length;p++)v.appendChild(f[p]);t.appendChild(d)}return[2,t]}}))}))}(t,r)}))]:[2,null]}))}))}var k=/url\((['"]?)([^'"]+?)\1\)/g,D=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,I=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function M(t,r,i,o,c){return e(this,void 0,void 0,(function(){var e,u,a,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),e=i?function(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}(r,i):r,u=C(r),a=void 0,c?[4,c(e)]:[3,2];case 1:return s=n.sent(),a=m(s,u),[3,4];case 2:return[4,y(e,u,o)];case 3:a=n.sent(),n.label=4;case 4:return[2,t.replace((l=r,f=l.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1"),new RegExp("(url\\(['\"]?)(".concat(f,")(['\"]?\\))"),"g")),"$1".concat(a,"$3"))];case 5:return n.sent(),[3,6];case 6:return[2,t]}var l,f}))}))}function V(t){return-1!==t.search(k)}function H(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return V(t)?(e=function(t,e){var n=e.preferredFontFormat;return n?t.replace(I,(function(t){for(;;){var e=D.exec(t)||[],r=e[0],i=e[2];if(!i)return"";if(i===n)return"src: ".concat(r,";")}})):t}(t,i),o=function(t){var e=[];return t.replace(k,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!g(t)}))}(e),[2,o.reduce((function(t,e){return t.then((function(t){return M(t,e,r,i)}))}),Promise.resolve(e))]):[2,t]}))}))}function j(t,r,i){var o;return e(this,void 0,void 0,(function(){var e,c;return n(this,(function(n){switch(n.label){case 0:return(e=null===(o=r.style)||void 0===o?void 0:o.getPropertyValue(t))?[4,H(e,null,i)]:[3,2];case 1:return c=n.sent(),r.style.setProperty(t,c,r.style.getPropertyPriority(t)),[2,!0];case 2:return[2,!1]}}))}))}function F(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,j("background",t,r)];case 1:return e.sent()?[3,3]:[4,j("background-image",t,r)];case 2:e.sent(),e.label=3;case 3:return[4,j("mask",t,r)];case 4:return e.sent()?[3,6]:[4,j("mask-image",t,r)];case 5:e.sent(),e.label=6;case 6:return[2]}}))}))}function q(t,r){return e(this,void 0,void 0,(function(){var e,i,o;return n(this,(function(n){switch(n.label){case 0:return(e=d(t,HTMLImageElement))&&!t.getAttribute("src")||d(t,SVGImageElement)&&!t.getAttribute("href")?[2]:e&&!g(t.src)||d(t,SVGImageElement)&&!g(t.href.baseVal)?[4,y(i=e?t.src:t.href.baseVal,C(i),r)]:[2];case 1:return o=n.sent(),[4,new Promise((function(n,r){t.onload=n,t.onerror=r;var i=t;i.decode&&(i.decode=n),"lazy"===i.loading&&(i.loading="eager"),e?(t.srcset="",t.src=o):t.href.baseVal=o}))];case 2:return n.sent(),[2]}}))}))}function O(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return e=o(t.childNodes),i=e.map((function(t){return U(t,r)})),[4,Promise.all(i).then((function(){return t}))];case 1:return n.sent(),[2]}}))}))}function U(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return d(t,Element)?[4,F(t,r)]:[3,4];case 1:return e.sent(),[4,q(t,r)];case 2:return e.sent(),[4,O(t,r)];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))}var B={};function z(t){return e(this,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return null!=(e=B[t])?[2,e]:[4,fetch(t)];case 1:return[4,n.sent().text()];case 2:return r=n.sent(),e={url:t,cssText:r},B[t]=e,[2,e]}}))}))}function W(t,r){return e(this,void 0,void 0,(function(){var i,o,c,u,a=this;return n(this,(function(s){return i=t.cssText,o=/url\(["']?([^"')]+)["']?\)/g,c=i.match(/url\([^)]+\)/g)||[],u=c.map((function(c){return e(a,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=c.replace(o,"$1")).startsWith("https://")||(e=new URL(e,t.url).href),[2,w(e,r.fetchRequestInit,(function(t){var e=t.result;return i=i.replace(c,"url(".concat(e,")")),[c,e]}))]}))}))})),[2,Promise.all(u).then((function(){return i}))]}))}))}function $(t){return(new CSSStyleSheet).replace(t||"")}function G(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){return e=[],i=[],t.forEach((function(e,n){if("cssRules"in e)try{o(e.cssRules||[]).forEach((function(t,n){if(t.type===CSSRule.IMPORT_RULE){var c=n+1,u=z(t.href).then((function(t){return W(t,r)})).then((function(t){return $(t)})).then((function(t){o(t.cssRules).map((function(t){return t.cssText})).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?c+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{ruleText:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));i.push(u)}}))}catch(o){null!=e.href?i.push(z(e.href).then((function(t){return W(t,r)})).then((function(t){return $(t)})).then((function(e){t[n]=e})).catch((function(t){console.error("Error loading remote stylesheet",t)}))):console.error("Cannot inline remote CSS",o)}})),[2,Promise.all(i).then((function(){return t.forEach((function(t){if("cssRules"in t)try{o(t.cssRules||[]).forEach((function(t){e.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e)}})),e}))]}))}))}function _(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return V(t.style.getPropertyValue("src"))}))}function J(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");return[4,G(o(t.ownerDocument.styleSheets),r)];case 1:return[2,_(e.sent())]}}))}))}function Q(t,r){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return[4,J(t,r)];case 1:return e=n.sent(),[4,Promise.all(e.map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return H(t.cssText,e,r)})))];case 2:return[2,n.sent().join("\n")]}}))}))}function X(t,r){return e(this,void 0,void 0,(function(){var e,i,o,c,u;return n(this,(function(n){switch(n.label){case 0:return null==r.fontEmbedCSS?[3,1]:(i=r.fontEmbedCSS,[3,5]);case 1:return r.skipFonts?(o=null,[3,4]):[3,2];case 2:return[4,Q(t,r)];case 3:o=n.sent(),n.label=4;case 4:i=o,n.label=5;case 5:return(e=i)&&(c=document.createElement("style"),u=document.createTextNode(e),c.appendChild(u),t.firstChild?t.insertBefore(c,t.firstChild):t.appendChild(c)),[2]}}))}))}function K(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,c;return n(this,(function(n){switch(n.label){case 0:return e=u(t,r),i=e.width,o=e.height,[4,N(t,r,!0)];case 1:return[4,X(c=n.sent(),r)];case 2:return n.sent(),[4,U(c,r)];case 3:return n.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(c,r),console.log("clonedNode",c),[4,h(c,i,o)];case 4:return[2,n.sent()]}}))}))}function Y(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,c,s,f,h,d,v;return n(this,(function(n){switch(n.label){case 0:return e=u(t,r),i=e.width,o=e.height,[4,K(t,r)];case 1:return[4,l(n.sent())];case 2:return c=n.sent(),s=document.createElement("canvas"),f=s.getContext("2d"),h=r.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=r.canvasWidth||i,v=r.canvasHeight||o,s.width=d*h,s.height=v*h,r.skipAutoScale||function(t){(t.width>a||t.height>a)&&(t.width>a&&t.height>a?t.width>t.height?(t.height*=a/t.width,t.width=a):(t.width*=a/t.height,t.height=a):t.width>a?(t.height*=a/t.width,t.width=a):(t.width*=a/t.height,t.height=a))}(s),s.style.width="".concat(d),s.style.height="".concat(v),r.backgroundColor&&(f.fillStyle=r.backgroundColor,f.fillRect(0,0,s.width,s.height)),f.drawImage(c,0,0,s.width,s.height),[2,s]}}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Q(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,Y(t,r)];case 1:return[4,s(e.sent())];case 2:return[2,e.sent()]}}))}))},t.toCanvas=Y,t.toJpeg=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,Y(t,r)];case 1:return[2,e.sent().toDataURL("image/jpeg",r.quality||1)]}}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,c;return n(this,(function(n){switch(n.label){case 0:return e=u(t,r),i=e.width,o=e.height,[4,Y(t,r)];case 1:return c=n.sent(),[2,c.getContext("2d").getImageData(0,0,i,o).data]}}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,Y(t,r)];case 1:return[2,e.sent().toDataURL()]}}))}))},t.toSvg=K}));
//# sourceMappingURL=html-to-image.js.map
