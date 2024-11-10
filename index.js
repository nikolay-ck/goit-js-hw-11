import{S as f,i}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();function d(n,e){return fetch(`https://pixabay.com/api/?key=${e}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error("Failed to fetch images");return o.json()})}function m(n){return n.map(e=>`
    <a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
      <div class="info">
        <p> ${e.likes} </br> Likes</p>
        <p> ${e.views} </br> Views</p>
        <p> ${e.comments} </br> Comments</p>
        <p> ${e.downloads} </br> Downloads</p>
      </div>
    </a>
  `).join("")}const p="46893136-84096bff0dd45fd4b99afcbdb",a=document.querySelector("#search-form"),c=document.querySelector("#gallery"),u=document.querySelector("#loader");let y=new f(".gallery a");a.addEventListener("submit",function(n){n.preventDefault();const e=a.querySelector("input").value.trim();if(!e){i.warning({title:"Warning",message:"Please enter a search keyword."});return}c.innerHTML="",u.style.display="block",d(e,p).then(o=>{o.hits.length===0?i.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}):(c.innerHTML=m(o.hits),y.refresh())}).catch(o=>{i.error({title:"Error",message:"Something went wrong, please try again later."})}).finally(()=>{u.style.display="none"})});
//# sourceMappingURL=index.js.map
