!function(){var t={bodyEl:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")},e={intervalId:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){t.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.start.disabled=!0)},stop:function(){clearInterval(this.intervalId),this.isActive=!1,t.start.disabled=!1}};t.start.addEventListener("click",(function(){e.start()})),t.stop.addEventListener("click",(function(){e.stop()}))}();
//# sourceMappingURL=01-color-switcher.4e5a1220.js.map
