<<<<<<< HEAD
"use strict";const firstChild=document.querySelector("#first_child"),secondChild=document.querySelector("#second_child"),thirdChild=document.querySelector("#third_child"),create=document.querySelector(".button__create-card"),content=document.querySelector(".create__mesage");function openFun(e){e.currentTarget.classList.toggle("active"),e.currentTarget.classList.contains("active")?e.currentTarget.parentElement.classList.add("open"):e.currentTarget.parentElement.classList.remove("open")}function showLink(e){create.classList.toggle("active"),e.currentTarget.classList.contains("active")?content.classList.add("show"):content.classList.remove("show")}firstChild.addEventListener("click",openFun),secondChild.addEventListener("click",openFun),thirdChild.addEventListener("click",openFun),create.addEventListener("click",showLink);
=======
"use strict";console.log(">> Ready :)");var i,coll=document.getElementsByClassName("collapsible");for(i=0;i<coll.length;i++)coll[i].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"});const greenPaletteElement=document.querySelector("#palette__green"),redPaletteElement=document.querySelector("#palette__red"),grayPaletteElement=document.querySelector("#palette__gray"),profileDataElement=document.querySelector(".profile__data");function greenProfileDataHandler(){profileDataElement.classList.add("green"),profileDataElement.classList.remove("red","gray")}function redProfileDataHandler(){profileDataElement.classList.add("red"),profileDataElement.classList.remove("green","gray")}function grayProfileDataHandler(){profileDataElement.classList.add("gray"),profileDataElement.classList.remove("green","red")}greenPaletteElement.addEventListener("click",greenProfileDataHandler),redPaletteElement.addEventListener("click",redProfileDataHandler),grayPaletteElement.addEventListener("click",grayProfileDataHandler);
>>>>>>> b056943ceda0d5e50455d63719e0059b157ae45a
