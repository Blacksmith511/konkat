(()=>{"use strict";const e=document.querySelector(".search"),t=document.querySelector(".search input"),c=document.querySelector(".header"),r=document.querySelector(".profInfo__profileEnter"),s=document.querySelector(".regAutoriz"),o=document.querySelector("body"),i=document.querySelector(".regAutoriz__close"),d=document.querySelector(".regAutoriz__reg"),l=document.querySelector(".regAutoriz__reg2"),n=document.querySelector(".regAutoriz__reg3"),a=document.querySelector(".regAutoriz__content4"),u=document.querySelector(".regAutoriz__content5"),m=document.querySelector(".regAutoriz__content6"),L=document.querySelector(".regAutoriz__content1"),_=document.querySelector(".regAutoriz__close1"),v=document.querySelector(".wr__close"),y=document.querySelector(".wr__close1"),S=document.querySelector(".wr__close2"),q=document.querySelector(".regAutoriz__wtf a"),E=document.querySelector(".regAutoriz__wtf1 a"),g=document.querySelector(".regAutoriz__content2"),z=document.querySelector(".zabili"),k=document.querySelector(".regAutoriz__content3"),w=document.querySelector(".regAutoriz__close2"),A=document.querySelector(".regAutoriz__close3"),f=document.querySelector(".regAutoriz__close4"),p=document.querySelector(".regAutoriz__close5"),b=document.querySelector(".regAutoriz__close6"),P=document.querySelector(".header__mobMenu"),V=document.querySelector(".regAutorizMob"),h=document.querySelector(".mimimi"),B=document.querySelector(".mimimi1"),M=document.querySelector(".regAutoriz__content7"),I=document.querySelector(".butz"),O=document.querySelector(".butz1");t.addEventListener("focus",(()=>{e.classList.add("focus")})),t.addEventListener("blur",(()=>{e.classList.remove("focus")})),window.addEventListener("scroll",(function(){window.pageYOffset>0?c.classList.add("scroll"):c.classList.remove("scroll")})),new Swiper("#slider2",{spaceBetween:10,slidesPerView:6.2,breakpoints:{360:{slidesPerView:1.5,spaceBetween:10},1024:{slidesPerView:2,spaceBetween:10},1200:{slidesPerView:5,spaceBetween:10},1440:{slidesPerView:5},1920:{slidesPerView:6.2}}}),r.addEventListener("click",(()=>{s.classList.add("act"),o.classList.add("over")})),i.addEventListener("click",(()=>{s.classList.remove("act"),o.classList.remove("over")})),d.addEventListener("click",(()=>{L.classList.add("act")})),_.addEventListener("click",(()=>{L.classList.remove("act")})),v.addEventListener("click",(()=>{L.classList.remove("act")})),y.addEventListener("click",(()=>{u.classList.add("act")})),S.addEventListener("click",(()=>{m.classList.remove("act")})),q.addEventListener("click",(()=>{g.classList.add("act")})),w.addEventListener("click",(()=>{g.classList.remove("act")})),E.addEventListener("click",(()=>{g.classList.remove("act")})),z.addEventListener("click",(()=>{k.classList.add("act")})),A.addEventListener("click",(()=>{k.classList.remove("act")})),l.addEventListener("click",(()=>{a.classList.add("act")})),f.addEventListener("click",(()=>{a.classList.remove("act")})),p.addEventListener("click",(()=>{u.classList.remove("act")})),b.addEventListener("click",(()=>{m.classList.remove("act")})),n.addEventListener("click",(()=>{m.classList.add("act")})),P.addEventListener("click",(()=>{V.classList.add("act"),o.classList.add("over")})),I.addEventListener("click",(()=>{V.classList.remove("act"),o.classList.remove("over")})),h.addEventListener("click",(()=>{s.classList.add("act")})),B.addEventListener("click",(()=>{M.classList.add("act"),s.classList.add("act")})),O.addEventListener("click",(()=>{M.classList.remove("act"),s.classList.remove("act")}))})();