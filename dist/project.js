!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o=[];const r=e=>({sayTitle:()=>console.log("This is project "+e),getTitle:()=>e});function c(){const e=document.getElementById("project-list");for(;e.firstChild;)e.removeChild(e.firstChild);o.forEach(t=>{let n=document.createElement("div");n.className="project";let o=document.createElement("span");o.className="project-title project-text",o.textContent=t.getTitle(),n.appendChild(o),e.appendChild(n)}),document.getElementById("project-total").textContent=o.length+" Projects"}o.push(r("Default 1")),o.push(r("Default 2")),t.default=function(){document.getElementById("container");const e=document.createElement("div");e.id="project-container",e.appendChild(function(){const e=document.createElement("div");e.id="project-top-bar";const t=document.createElement("div");t.id="project-count";const n=document.createElement("span");n.id="project-total",n.className="project-text",n.textContent=o.length+" Projects",t.appendChild(n);const l=document.createElement("button");l.id="new-project-button";const i=document.createElement("i");i.className+="fas fa-folder-plus";const d=document.createElement("span");return d.textContent=" New",l.appendChild(i),l.appendChild(d),l.addEventListener("click",(function(){let e="";for(;""===e;)e=prompt("What is the Title of this project?");o.push(r(e)),c()})),e.appendChild(t),e.appendChild(l),e}());const t=document.createElement("div");t.id="project-list",e.appendChild(t),container.appendChild(e),c()}}]);