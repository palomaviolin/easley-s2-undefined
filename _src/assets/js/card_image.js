'use strict';

const fr = new FileReader();
const uploadBtn = document.querySelector('.button__add--image');

const fileField = document.querySelector('#img-selector');

const profileImages = document.querySelectorAll('.profile__image');

//get user image
function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

//put image in both places; profile and preview. using "for of", we don't need to write index of array

function writeImage() {
  for (const cardImage of profileImages) {
    cardImage.style.backgroundImage = `url(${fr.result})`;
    console.log(fr.result);
    updateDataObject('photo', fr.result);
    updateLocalStorage();
  }
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);

//

