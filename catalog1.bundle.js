(()=>{"use strict";const e=document.querySelector(".search"),t=document.querySelector(".search input"),c=document.querySelector(".header"),o=document.querySelector(".catalogotob"),s=document.querySelector(".catalogOptionsWrap"),a=document.querySelectorAll(".catalogOptions__item"),r=(document.querySelector(".catalogOptions__down"),document.querySelector(".catalogOptions__item--active"),document.querySelector("body")),l=document.querySelector(".filterMob"),i=document.querySelector(".filterViewMob"),n=document.querySelector(".clooooooosed");t.addEventListener("focus",(()=>{e.classList.add("focus")})),t.addEventListener("blur",(()=>{e.classList.remove("focus")})),window.addEventListener("scroll",(function(){window.pageYOffset>0?c.classList.add("scroll"):c.classList.remove("scroll")})),o.addEventListener("click",(()=>{o.classList.toggle("act")})),s.addEventListener("click",(()=>{s.classList.add("act")})),a.forEach((function(e){e.addEventListener("click",(e=>{e.stopPropagation(),s.classList.remove("act")}))})),document.body.addEventListener("click",(e=>{if(e.target.classList.contains("filter-container__activated")){const t=e.target.classList.toggle("act");e.target.closest(".filterItem").lastElementChild.className=t?"filterItem__content act":"filterItem__content"}})),l.addEventListener("click",(()=>{i.classList.add("view"),r.classList.add("over")})),n.addEventListener("click",(()=>{i.classList.remove("view"),r.classList.remove("over")}))})();