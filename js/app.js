(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var r=a.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"})(),e.p,(()=>{const e=document.querySelector('input[name="nano_price"]'),t=document.querySelector('input[name="ves_price"]'),a="NANO";let r=0,o=0;e.addEventListener("input",(e=>{n(a,e.target.value)})),t.addEventListener("input",(e=>{n("VES",e.target.value)})),e.addEventListener("blur",(e=>c(e))),t.addEventListener("blur",(e=>c(e)));const n=(n,c)=>{const i=""===c?1:parseFloat(c);if(n===a){const e=(i*r*o).toFixed(2);t.value=e}else if("VES"===n){const t=(i/(r*o)).toFixed(2);e.value=t}},c=t=>{""!==t.target.value&&0!==parseFloat(t.target.value)||(e.value=1,n(a,1))},i=()=>{0!==r&&0!==o&&setTimeout((()=>{document.querySelector(".card").classList.toggle("animation"),document.querySelector(".card .card__loader").classList.toggle("card__loader--loading"),setTimeout((()=>{document.querySelector(".card .card__loader").style.display="none"}),500)}),500)};(async t=>{try{const t=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=nano&vs_currencies=usd"),o=await t.json();r=o.nano.usd,e.value=1,n(a,e.value),i()}catch(e){console.log(e)}})(),(async t=>{try{const t=await fetch("https://s3.amazonaws.com/dolartoday/data.json"),r=await t.json();o=r.USD.dolartoday,e.value=1,n(a,e.value),i()}catch(e){console.log(e)}})()})()})();