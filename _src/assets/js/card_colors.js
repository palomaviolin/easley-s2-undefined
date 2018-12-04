const greenPaletteElement = document.querySelector('#palette__green');
const redPaletteElement = document.querySelector('#palette__red');
const grayPaletteElement = document.querySelector('#palette__gray');

const profileDataElement = document.querySelector ('.profile__data');

// Palette color selection color green
function greenProfileDataHandler () { 
    profileDataElement.classList.add('green');
    profileDataElement.classList.remove('red', 'gray');
}

// Palette color selection color red
function redProfileDataHandler () { 
    profileDataElement.classList.add('red');
    profileDataElement.classList.remove('green','gray');
}
// Palette color selection color gray
function grayProfileDataHandler () { 
    profileDataElement.classList.add('gray');
    profileDataElement.classList.remove('green', 'red');
}

greenPaletteElement.addEventListener('click', greenProfileDataHandler);
redPaletteElement.addEventListener('click', redProfileDataHandler);
grayPaletteElement.addEventListener('click', grayProfileDataHandler);

//Font styles por profile card

const ubuntu= document.querySelector('#font__option--1');
const comicSans= document.querySelector('#font__option--2');
const montserrat= document.querySelector('#font__option--3');

const profileDataGroup = document.querySelector('.profile__data-group');

function ubuntuProfileDataHandler () { 
    profileDataGroup.classList.add('ubuntu');
    profileDataGroup.classList.remove('comic','montserrat');
}


function comicProfileDataHandler () { 
    profileDataGroup.classList.add('comic');
    profileDataGroup.classList.remove('ubuntu','montserrat');
}


function montserratProfileDataHandler () { 
    profileDataGroup.classList.add('montserrat');
    profileDataGroup.classList.remove('ubuntu','comic');
}

ubuntu.addEventListener('click', ubuntuProfileDataHandler);
comicSans.addEventListener('click', comicProfileDataHandler);
montserrat.addEventListener('click', montserratProfileDataHandler);

