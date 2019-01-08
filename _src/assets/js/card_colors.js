'use strict';
const greenPaletteElement = document.querySelector('#palette__green');
const redPaletteElement = document.querySelector('#palette__red');
const grayPaletteElement = document.querySelector('#palette__gray');
const profileDataElement = document.querySelector('.profile__data');
const skillsTags = document.querySelector('.list_skills');

// Palette color selection color green
const greenProfileDataHandler = () =>  {
  profileDataElement.classList.add('green');
  skillsTags.classList.add('green');
  profileDataElement.classList.remove('red', 'gray');
  skillsTags.classList.remove('red', 'gray');
};

// Palette color selection color red
const redProfileDataHandler = () =>  {
  profileDataElement.classList.add('red');
  skillsTags.classList.add('red');
  profileDataElement.classList.remove('green', 'gray');
  skillsTags.classList.remove('green', 'gray');
};
// Palette color selection color gray
const grayProfileDataHandler = () =>  {
  profileDataElement.classList.add('gray');
  skillsTags.classList.add('gray');
  profileDataElement.classList.remove('green', 'red');
  skillsTags.classList.remove('green', 'red');
};

greenPaletteElement.addEventListener('click', greenProfileDataHandler);
redPaletteElement.addEventListener('click', redProfileDataHandler);
grayPaletteElement.addEventListener('click', grayProfileDataHandler);

//Font styles por profile card

const ubuntu = document.querySelector('#font__option--1');
const comic = document.querySelector('#font__option--2');
const montserrat = document.querySelector('#font__option--3');

const profileDataGroup = document.querySelector('.profile__data-group');

const ubuntuProfileDataHandler = () => {
  profileDataGroup.classList.add('font-ubuntu');
  profileDataGroup.classList.remove('font-comic', 'font-montserrat');
};


const comicProfileDataHandler = () =>  {
  profileDataGroup.classList.add('font-comic');
  profileDataGroup.classList.remove('font-ubuntu', 'font-montserrat');
};


const montserratProfileDataHandler = () =>  {
  profileDataGroup.classList.add('font-montserrat');
  profileDataGroup.classList.remove('font-ubuntu', 'font-comic');
};

ubuntu.addEventListener('click', ubuntuProfileDataHandler);
comic.addEventListener('click', comicProfileDataHandler);
montserrat.addEventListener('click', montserratProfileDataHandler);

