if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,o)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let l={};const c=e=>r(e,f),s={module:{uri:f},exports:l,require:c};i[f]=Promise.all(n.map((e=>s[e]||c(e)))).then((e=>(o(...e),l)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"85.js",revision:"f472132cbeb0b35cffdaa8d24db2d787"},{url:"8eb39a0a3a79ee250e19.jpg",revision:null},{url:"HeroThumbnail.png",revision:"36469fef3225459caa3f2d228ba0f661"},{url:"b4df2c5735b2508e032c.png",revision:null},{url:"b75ef3d0f2d5cd2466be.png",revision:null},{url:"e0a0a6d15867faf50c33.png",revision:null},{url:"f18ce2a17c467379723a.png",revision:null},{url:"f3eaff10368448000d71.jpg",revision:null},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"ic_star.svg",revision:"af040d0e25f4f56a4bb5373f78cf800f"},{url:"index.html",revision:"781c222863dd55b120ac73247eedd47b"},{url:"logo.png",revision:"6b1aaf059c461c90a36e4f1ae8eb0a66"},{url:"logo.svg",revision:"ad21e89b0a88f697dca1776cb34a2a71"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"logo740x749.png",revision:"37fed26acd9fa4592ef61262fe3b5cab"},{url:"main.js",revision:"f64b47a9875f835f271ca536580bc081"},{url:"main.js.LICENSE.txt",revision:"158e08f77139f7f23a816de450d62218"},{url:"manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"}],{})}));
