import{a as f,S as m,i as p}from"./assets/vendor-BWiIACaD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h(o){return f.get("https://pixabay.com/api/",{params:{key:"48985063-5c5813c169e3db6e477352dc5",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const a=document.querySelector(".gallery"),d=document.querySelector(".loader-div"),y=new m(".gallery a",{captionData:"alt",captionDelay:250});function L(o){const{webformatURL:r,largeImageURL:s,tags:n,likes:e,views:t,comments:i,downloads:g}=o;return`
    <div class="image-card">
      <a href="${s}" target="_blank">
        <img src="${r}" alt="${n}" loading="lazy"/>
      </a>
      <div class="info">
        <p><strong>Likes:</strong>${e}</p>
        <p><strong>Views:</strong>${t}</p>
        <p><strong>Comments:</strong>${i}</p>
        <p><strong>Downloads:</strong>${g}</p>
      </div>
    </div>
  `}function b(o){a.innerHTML=o.map(L).join(""),y.refresh(),u()}function v(){console.log("Done showLoader()"),a.classList.add("hidden"),d.classList.remove("hidden")}function u(){console.log("Done hideLoader()"),d.classList.add("hidden"),a.classList.remove("hidden")}function c(){p.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",maxWidth:"432px",backgroundColor:"#EF4040"})}const w=document.querySelector(".form"),l=document.querySelector(".search-input");w.addEventListener("submit",S);function S(o){o.preventDefault();const r=l.value.trim();if(!r)return c();l.value="",v(),h(r).then(s=>{const n=s.data.hits;if(!n||n.length===0)throw x(),new Error;b(n)}).catch(s=>{console.error("No resalts",s),u(),c()})}function x(){const o=document.querySelector(".gallery");o&&(o.innerHTML="")}
//# sourceMappingURL=index.js.map
