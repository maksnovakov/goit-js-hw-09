const t={bodyEl:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")},e={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.start.disabled=!0)},stop(){clearInterval(this.intervalId),this.isActive=!1,t.start.disabled=!1}};t.start.addEventListener("click",(()=>{e.start()})),t.stop.addEventListener("click",(()=>{e.stop()}));
//# sourceMappingURL=01-color-switcher.9d6b55cd.js.map
