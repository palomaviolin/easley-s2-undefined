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
