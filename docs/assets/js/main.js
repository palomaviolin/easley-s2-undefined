<<<<<<< HEAD
"use strict";const greenPaletteElement=document.querySelector("#palette__green"),redPaletteElement=document.querySelector("#palette__red"),grayPaletteElement=document.querySelector("#palette__gray"),profileDataElement=document.querySelector(".profile__data");function greenProfileDataHandler(){profileDataElement.classList.add("green"),profileDataElement.classList.remove("red","gray")}function redProfileDataHandler(){profileDataElement.classList.add("red"),profileDataElement.classList.remove("green","gray")}function grayProfileDataHandler(){profileDataElement.classList.add("gray"),profileDataElement.classList.remove("green","red")}greenPaletteElement.addEventListener("click",greenProfileDataHandler),redPaletteElement.addEventListener("click",redProfileDataHandler),grayPaletteElement.addEventListener("click",grayProfileDataHandler);const ubuntu=document.querySelector("#font__option--1"),comic=document.querySelector("#font__option--2"),montserrat=document.querySelector("#font__option--3"),profileDataGroup=document.querySelector(".profile__data-group");function ubuntuProfileDataHandler(){profileDataGroup.classList.add("font-ubuntu"),profileDataGroup.classList.remove("font-comic","font-montserrat")}function comicProfileDataHandler(){profileDataGroup.classList.add("font-comic"),profileDataGroup.classList.remove("font-ubuntu","font-montserrat")}function montserratProfileDataHandler(){profileDataGroup.classList.add("font-montserrat"),profileDataGroup.classList.remove("font-ubuntu","font-comic")}ubuntu.addEventListener("click",ubuntuProfileDataHandler),comic.addEventListener("click",comicProfileDataHandler),montserrat.addEventListener("click",montserratProfileDataHandler);const firstChild=document.querySelector("#first_child"),secondChild=document.querySelector("#second_child"),thirdChild=document.querySelector("#third_child"),create=document.querySelector(".button__create-card"),content=document.querySelector(".create__mesage"),thirdBlock=document.querySelector(".third_block");function openFun(e){e.currentTarget.classList.toggle("active"),e.currentTarget.classList.contains("active")?e.currentTarget.parentElement.classList.add("open"):e.currentTarget.parentElement.classList.remove("open")}function showLink(e){create.classList.toggle("active"),e.currentTarget.classList.contains("active")?(content.classList.add("show"),thirdBlock.classList.add("add_height")):(content.classList.remove("show"),thirdBlock.classList.remove("add_height"))}firstChild.addEventListener("click",openFun),secondChild.addEventListener("click",openFun),thirdChild.addEventListener("click",openFun),create.addEventListener("click",showLink);const fr=new FileReader,uploadBtn=document.querySelector(".button__add--image"),fileField=document.querySelector("#img-selector"),profileImages=document.querySelectorAll(".profile__image");function getImage(e){var t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){for(const e of profileImages)e.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}fileField.addEventListener("change",getImage),uploadBtn.addEventListener("click",fakeFileClick);let dataObject={palette:1,typography:2,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:"",skills:["","",""]};function updateDataObject(e,t){dataObject[e]=t}function updateLocalStorage(){localStorage.setItem("dataObject",JSON.stringify(dataObject))}let fullNameInput=document.body.querySelector("#name-input");function updateFullName(e){document.body.querySelector("#name").innerText=e.target.value,updateDataObject("name",e.target.value),updateLocalStorage()}fullNameInput.addEventListener("keyup",updateFullName);let jobPositionInput=document.body.querySelector("#job-input");function updateJobPosition(e){document.body.querySelector("#job-card").innerText=e.target.value,updateDataObject("job",e.target.value),updateLocalStorage()}function myFunction(){let e=document.getElementById("html-input"),t=document.getElementById("html");!0===e.checked?t.style.display="flex":t.style.display="none"}function myFunction2(){let e=document.getElementById("css-input"),t=document.getElementById("css");!0===e.checked?t.style.display="flex":t.style.display="none"}function myFunction3(){let e=document.getElementById("react-input"),t=document.getElementById("react");!0===e.checked?t.style.display="flex":t.style.display="none"}jobPositionInput.addEventListener("keyup",updateJobPosition);let emailInput=document.body.querySelector("#email-input");function updateEmail(e){console.log(e);let t=document.querySelector("#email-card");console.log(t),t.href=`mailto:${e.currentTarget.value}`,updateDataObject("email",e.currrentTarget.value),updateLocalStorage()}emailInput.addEventListener("keyup",updateEmail);let githubInput=document.body.querySelector("#github-input");function updateGithub(e){document.querySelector("#github-card").href=`https://${e.currentTarget.value}`,updateDataObject("github",e.currentTarget.value),updateLocalStorage()}githubInput.addEventListener("keyup",updateGithub);let linkedinInput=document.body.querySelector("#linkedin-input");function updateLinkedin(e){document.querySelector("#linkedin-card").href=`https://www.${e.currentTarget.value}`,updateDataObject("linkedin",e.currentTarget.value),updateLocalStorage()}linkedinInput.addEventListener("keyup",updateLinkedin);let telInput=document.body.querySelector("#telf_movil");function updateTelephone(e){document.querySelector("#tel-card").href=`tel:${e.currentTarget.value}`,updateDataObject("phone",e.currentTarget.value),updateLocalStorage()}telInput.addEventListener("keyup",updateTelephone);let inputGreen=document.querySelector("#palette__green"),inputRed=document.querySelector("#palette__red"),inputGray=document.querySelector("#palette__gray");function savePalette(){!0===inputGreen.checked?(console.log("green"),dataObject.palette=1,updateDataObject("palette",1)):!0===inputRed.checked?(console.log("red"),dataObject.palette=2,updateDataObject("palette",2)):!0===inputGray.checked?(console.log("gray"),dataObject.palette=3,updateDataObject("palette",3)):console.log("green"),updateLocalStorage()}inputGreen.addEventListener("click",savePalette),inputRed.addEventListener("click",savePalette),inputGray.addEventListener("click",savePalette);let inputUbuntu=document.querySelector("#font__option--1"),inputComicSans=document.querySelector("#font__option--2"),inputMontserrat=document.querySelector("#font__option--3");function saveTypography(){!0===inputUbuntu.checked?(console.log("ubuntu"),dataObject.typography="u",updateDataObject("typography","u")):!0===inputComicSans.checked?(console.log("ComicSans"),dataObject.typography="c",updateDataObject("typography","c")):!0===inputMontserrat.checked?(console.log("Montserrat"),dataObject.typography="m",updateDataObject("typography","m")):console.log("Montserrat"),updateLocalStorage()}inputUbuntu.addEventListener("click",saveTypography),inputComicSans.addEventListener("click",saveTypography),inputMontserrat.addEventListener("click",saveTypography);
=======
"use strict";let dataObject={palette:1,typography:2,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:"",skills:["","",""]};const greenPaletteElement=document.querySelector("#palette__green"),redPaletteElement=document.querySelector("#palette__red"),grayPaletteElement=document.querySelector("#palette__gray"),profileDataElement=document.querySelector(".profile__data");function greenProfileDataHandler(){profileDataElement.classList.add("green"),profileDataElement.classList.remove("red","gray")}function redProfileDataHandler(){profileDataElement.classList.add("red"),profileDataElement.classList.remove("green","gray")}function grayProfileDataHandler(){profileDataElement.classList.add("gray"),profileDataElement.classList.remove("green","red")}greenPaletteElement.addEventListener("click",greenProfileDataHandler),redPaletteElement.addEventListener("click",redProfileDataHandler),grayPaletteElement.addEventListener("click",grayProfileDataHandler);const ubuntu=document.querySelector("#font__option--1"),comic=document.querySelector("#font__option--2"),montserrat=document.querySelector("#font__option--3"),profileDataGroup=document.querySelector(".profile__data-group");function ubuntuProfileDataHandler(){profileDataGroup.classList.add("font-ubuntu"),profileDataGroup.classList.remove("font-comic","font-montserrat")}function comicProfileDataHandler(){profileDataGroup.classList.add("font-comic"),profileDataGroup.classList.remove("font-ubuntu","font-montserrat")}function montserratProfileDataHandler(){profileDataGroup.classList.add("font-montserrat"),profileDataGroup.classList.remove("font-ubuntu","font-comic")}ubuntu.addEventListener("click",ubuntuProfileDataHandler),comic.addEventListener("click",comicProfileDataHandler),montserrat.addEventListener("click",montserratProfileDataHandler);const firstChild=document.querySelector("#first_child"),secondChild=document.querySelector("#second_child"),thirdChild=document.querySelector("#third_child"),create=document.querySelector(".button__create-card"),content=document.querySelector(".create__mesage"),thirdBlock=document.querySelector(".third_block");function openFun(e){e.currentTarget.classList.toggle("active"),e.currentTarget.classList.contains("active")?e.currentTarget.parentElement.classList.add("open"):e.currentTarget.parentElement.classList.remove("open")}function showLink(e){create.classList.toggle("active"),e.currentTarget.classList.contains("active")?(content.classList.add("show"),thirdBlock.classList.add("add_height")):(content.classList.remove("show"),thirdBlock.classList.remove("add_height"))}firstChild.addEventListener("click",openFun),secondChild.addEventListener("click",openFun),thirdChild.addEventListener("click",openFun),create.addEventListener("click",showLink);const fr=new FileReader,uploadBtn=document.querySelector(".button__add--image"),fileField=document.querySelector("#img-selector"),profileImages=document.querySelectorAll(".profile__image");function getImage(e){var t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){for(const e of profileImages)e.style.backgroundImage=`url(${fr.result})`,console.log(fr.result),updateDataObject("photo",fr.result),updateLocalStorage()}function fakeFileClick(){fileField.click()}function updateDataObject(e,t){dataObject[e]=t}function updateLocalStorage(){localStorage.setItem("dataObject",JSON.stringify(dataObject))}fileField.addEventListener("change",getImage),uploadBtn.addEventListener("click",fakeFileClick);let fullNameInput=document.body.querySelector("#name-input");function updateFullName(e){document.body.querySelector("#name").innerText=e.target.value,updateDataObject("name",e.target.value),updateLocalStorage()}fullNameInput.addEventListener("keyup",updateFullName);let jobPositionInput=document.body.querySelector("#job-input");function updateJobPosition(e){document.body.querySelector("#job-card").innerText=e.target.value,updateDataObject("job",e.target.value),updateLocalStorage()}function myFunction(){let e=document.getElementById("myCheck"),t=document.getElementById("html");!0===e.checked?t.style.display="flex":t.style.display="none"}function myFunction2(){let e=document.getElementById("css-input"),t=document.getElementById("css");!0===e.checked?t.style.display="flex":t.style.display="none"}function myFunction3(){let e=document.getElementById("react-input"),t=document.getElementById("react");!0===e.checked?t.style.display="flex":t.style.display="none"}jobPositionInput.addEventListener("keyup",updateJobPosition);let emailInput=document.body.querySelector("#email-input");function updateEmail(e){console.log(e);let t=document.querySelector("#email-card");console.log(t),t.href=`mailto:${e.currentTarget.value}`,updateDataObject("email",e.currrentTarget.value),updateLocalStorage()}emailInput.addEventListener("keyup",updateEmail);let githubInput=document.body.querySelector("#github-input");function updateGithub(e){document.querySelector("#github-card").href=`https://${e.currentTarget.value}`,updateDataObject("github",e.currentTarget.value),updateLocalStorage()}githubInput.addEventListener("keyup",updateGithub);let linkedinInput=document.body.querySelector("#linkedin-input");function updateLinkedin(e){document.querySelector("#linkedin-card").href=`https://www.${e.currentTarget.value}`,updateDataObject("linkedin",e.currentTarget.value),updateLocalStorage()}linkedinInput.addEventListener("keyup",updateLinkedin);let telInput=document.body.querySelector("#telf_movil");function updateTelephone(e){document.querySelector("#tel-card").href=`tel:${e.currentTarget.value}`,updateDataObject("phone",e.currentTarget.value),updateLocalStorage()}telInput.addEventListener("keyup",updateTelephone);let inputGreen=document.querySelector("#palette__green"),inputRed=document.querySelector("#palette__red"),inputGray=document.querySelector("#palette__gray");function savePalette(){!0===inputGreen.checked?(console.log("green"),dataObject.palette=1,updateDataObject("palette",1)):!0===inputRed.checked?(console.log("red"),dataObject.palette=2,updateDataObject("palette",2)):!0===inputGray.checked?(console.log("gray"),dataObject.palette=3,updateDataObject("palette",3)):console.log("green"),updateLocalStorage()}inputGreen.addEventListener("click",savePalette),inputRed.addEventListener("click",savePalette),inputGray.addEventListener("click",savePalette);let inputUbuntu=document.querySelector("#font__option--1"),inputComicSans=document.querySelector("#font__option--2"),inputMontserrat=document.querySelector("#font__option--3");function saveTypography(){!0===inputUbuntu.checked?(console.log("ubuntu"),dataObject.typography="u",updateDataObject("typography","u")):!0===inputComicSans.checked?(console.log("ComicSans"),dataObject.typography="c",updateDataObject("typography","c")):!0===inputMontserrat.checked?(console.log("Montserrat"),dataObject.typography="m",updateDataObject("typography","m")):console.log("Montserrat"),updateLocalStorage()}inputUbuntu.addEventListener("click",saveTypography),inputComicSans.addEventListener("click",saveTypography),inputMontserrat.addEventListener("click",saveTypography);let url="https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",button=document.querySelector(".button__create-card");const cardLink=document.querySelector(".title__card--link"),tweetbutton=document.querySelector(".twitter");function apiCall(e){fetch(url,{method:"POST",body:JSON.stringify(dataObject),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{cardLink.innerHTML=e.cardURL,tweetbutton.href="https://twitter.com/intent/tweet?text=%C2%A1He%20creado%20esta%20tarjeta%20personalizada%20con%20Awesome%20Profile%20Card%20de%20undefined-team!%20✨"+e.cardURL}).catch(e=>console.error("Error:",e))}button.addEventListener("click",apiCall);
>>>>>>> 40ca43f1e684587c90d65577818c8bb2541b64e7
