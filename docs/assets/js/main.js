"use strict";const greenPaletteElement=document.querySelector("#palette__green"),redPaletteElement=document.querySelector("#palette__red"),grayPaletteElement=document.querySelector("#palette__gray"),profileDataElement=document.querySelector(".profile__data");function greenProfileDataHandler(){profileDataElement.classList.add("green"),profileDataElement.classList.remove("red","gray")}function redProfileDataHandler(){profileDataElement.classList.add("red"),profileDataElement.classList.remove("green","gray")}function grayProfileDataHandler(){profileDataElement.classList.add("gray"),profileDataElement.classList.remove("green","red")}greenPaletteElement.addEventListener("click",greenProfileDataHandler),redPaletteElement.addEventListener("click",redProfileDataHandler),grayPaletteElement.addEventListener("click",grayProfileDataHandler);const ubuntu=document.querySelector("#font__option--1"),comic=document.querySelector("#font__option--2"),montserrat=document.querySelector("#font__option--3"),profileDataGroup=document.querySelector(".profile__data-group");function ubuntuProfileDataHandler(){profileDataGroup.classList.add("font-ubuntu"),profileDataGroup.classList.remove("font-comic","font-montserrat")}function comicProfileDataHandler(){profileDataGroup.classList.add("font-comic"),profileDataGroup.classList.remove("font-ubuntu","font-montserrat")}function montserratProfileDataHandler(){profileDataGroup.classList.add("font-montserrat"),profileDataGroup.classList.remove("font-ubuntu","font-comic")}ubuntu.addEventListener("click",ubuntuProfileDataHandler),comic.addEventListener("click",comicProfileDataHandler),montserrat.addEventListener("click",montserratProfileDataHandler);const firstChild=document.querySelector("#first_child"),secondChild=document.querySelector("#second_child"),thirdChild=document.querySelector("#third_child"),create=document.querySelector(".button__create-card"),content=document.querySelector(".create__mesage"),thirdBlock=document.querySelector(".third_block");function openFun(e){e.currentTarget.classList.toggle("active"),e.currentTarget.classList.contains("active")?e.currentTarget.parentElement.classList.add("open"):e.currentTarget.parentElement.classList.remove("open")}function showLink(e){create.classList.toggle("active"),e.currentTarget.classList.contains("active")?(content.classList.add("show"),thirdBlock.classList.add("add_height")):(content.classList.remove("show"),thirdBlock.classList.remove("add_height"))}firstChild.addEventListener("click",openFun),secondChild.addEventListener("click",openFun),thirdChild.addEventListener("click",openFun),create.addEventListener("click",showLink);