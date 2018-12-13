'use strict';


function updateDataObject(key, value) {
  dataObject[key] = value;
}

function updateLocalStorage() {
  localStorage.setItem('dataObject', JSON.stringify(dataObject));
}

// Here starts NAME JavaScript:

let fullNameInput = document.body.querySelector('#name-input');

function updateFullName(event) {
  // console.log(event);
  let fullNameLabel = document.body.querySelector('#name');
  fullNameLabel.innerText = event.target.value;
  updateDataObject('name', event.target.value);
  updateLocalStorage();
}

fullNameInput.addEventListener('keyup', updateFullName);


// Here starts JOB JavaScript:

let jobPositionInput = document.body.querySelector('#job-input');
//console.log('jobPositionInput', jobPositionInput); // This line is to view the element jobPositionInput in the console.

function updateJobPosition(event) {
  // console.log(event);
  let jobPositionLabel = document.body.querySelector('#job-card');
  jobPositionLabel.innerText = event.target.value;
  updateDataObject('job', event.target.value);
  updateLocalStorage();
}

jobPositionInput.addEventListener('keyup', updateJobPosition);


// Here starts SKILLS JavaScript:

let skillsList = document.querySelector('#container-checkboxes');
console.log(skillsList);
let skillsCard = document.querySelector('#container-checkboxes-card');

function init() {
  fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(response => response.json())
    .then(function (data) {
      console.log(data);
      let skillsArr = data.skills; // Objeto con un array de strings
      console.log(skillsArr);
      let skillsList = document.querySelector('#container-checkboxes');

      // Reseteamos contenido de lista de skills
      skillsList.innerHTML = '';

      // Print de las skills en la CARD
      for (let i = 0; i < skillsArr.length; i++) {
        // Objeto de skill
        let currentSkill = skillsArr[i];
        console.log(currentSkill);

        // Creamos un elemento <li> 
        let listItemElem = document.createElement('li');
        listItemElem.style = `list-style-type: none; background-color: pink; width: 80px; border-radius: 4px; margin: 2px; display: inline-block;`; // Para quitar el punto de cada 'li' que sale por defecto.

        // Añadimos el nombre de la skill como texto hijo del <li>
        let listItemContent = document.createTextNode(`${currentSkill}`);
        listItemElem.appendChild(listItemContent);

        // Finalmente, añadimos el <li> a la lista
        skillsList.appendChild(listItemElem);
      }
      // Print de las skills en el FORMULARIO
      for (let i = 0; i < skillsArr.length; i++) {
        // Objeto de skill
        let currentSkill = skillsArr[i];
        console.log(currentSkill);

        // Creamos un elemento <li> 
        let listItemElem = document.createElement('li');
        listItemElem.innerHTML = `<input type="checkbox">`; // Para poner checkbox delante de cada skill.
        listItemElem.style = `list-style-type: none`; // Para quitar el punto de cada 'li' que sale por defecto.

        // Añadimos el nombre de la skill como texto hijo del <li>
        let listItemContent = document.createTextNode(`${currentSkill}`);
        listItemElem.appendChild(listItemContent);

        // Finalmente, añadimos el <li> a la lista
        skillsList.appendChild(listItemElem);
      }


    })
}

init();

/*

//HTML Checkbox
function myFunction() {
  let checkBox = document.getElementById("myCheck");
  let text = document.getElementById("html");
  if (checkBox.checked === true) {
    text.style.display = "flex";
  } else {
    text.style.display = "none";
  }
}

//CSS Checkbox 
function myFunction2() {
  let checkBox = document.getElementById("css-input");
  let text = document.getElementById("css");
  if (checkBox.checked === true) {
    text.style.display = "flex";
  } else {
    text.style.display = "none";
  }
}

//React Checkbox 
function myFunction3() {
  let checkBox = document.getElementById("react-input");
  let text = document.getElementById("react");
  if (checkBox.checked === true) {
    text.style.display = "flex";
  } else {
    text.style.display = "none";
  }
}
*/

// Here starts EMAIL JavaScript:

let emailInput = document.body.querySelector('#email-input');

function updateEmail(event) {
  console.log(event);
  let emailLabel = document.querySelector('#email-card');
  console.log(emailLabel);
  emailLabel.href = `mailto:${event.currentTarget.value}`;
  updateDataObject('email', event.currrentTarget.value);
  updateLocalStorage();
}

emailInput.addEventListener('keyup', updateEmail);


// Here starts GitHub JavaScript:

let githubInput = document.body.querySelector('#github-input');

function updateGithub(event) {
  let githubLabel = document.querySelector('#github-card');
  githubLabel.href = `https://${event.currentTarget.value}`;
  updateDataObject('github', event.currentTarget.value);
  updateLocalStorage();
}

githubInput.addEventListener('keyup', updateGithub);


// Here starts LinkedIn JavaScript:

let linkedinInput = document.body.querySelector('#linkedin-input');

function updateLinkedin(event) {
  let linkedinLabel = document.querySelector('#linkedin-card');
  linkedinLabel.href = `https://www.${event.currentTarget.value}`;
  updateDataObject('linkedin', event.currentTarget.value);
  updateLocalStorage();
}

linkedinInput.addEventListener('keyup', updateLinkedin);

// Here starts Telephone Javascript 

let telInput = document.body.querySelector('#telf_movil');

function updateTelephone(event) {
  let telLabel = document.querySelector('#tel-card');
  telLabel.href = `tel:${event.currentTarget.value}`;
  updateDataObject('phone', event.currentTarget.value);
  updateLocalStorage();
}

telInput.addEventListener('keyup', updateTelephone);


//Color palette

let inputGreen = document.querySelector('#palette__green');
let inputRed = document.querySelector('#palette__red');
let inputGray = document.querySelector('#palette__gray');

function savePalette() {
  if (inputGreen.checked === true) {
    console.log('green');
    dataObject.palette = 1;
    updateDataObject('palette', 1);
  } else if (inputRed.checked === true) {
    console.log('red');
    dataObject.palette = 2;
    updateDataObject('palette', 2);
  } else if (inputGray.checked === true) {
    console.log('gray');
    dataObject.palette = 3;
    updateDataObject('palette', 3);
  } else {
    console.log('green');
  }
  updateLocalStorage();
}
inputGreen.addEventListener('click', savePalette);
inputRed.addEventListener('click', savePalette);
inputGray.addEventListener('click', savePalette);

//Typography

let inputUbuntu = document.querySelector('#font__option--1');
let inputComicSans = document.querySelector('#font__option--2');
let inputMontserrat = document.querySelector('#font__option--3');

function saveTypography() {
  if (inputUbuntu.checked === true) {
    console.log('ubuntu');
    dataObject.typography = 'u';
    updateDataObject('typography', 'u');
  } else if (inputComicSans.checked === true) {
    console.log('ComicSans');
    dataObject.typography = 'c';
    updateDataObject('typography', 'c');
  } else if (inputMontserrat.checked === true) {
    console.log('Montserrat');
    dataObject.typography = 'm';
    updateDataObject('typography', 'm');
  } else {
    console.log('Montserrat');
  }
  updateLocalStorage();
}
inputUbuntu.addEventListener('click', saveTypography);
inputComicSans.addEventListener('click', saveTypography);
inputMontserrat.addEventListener('click', saveTypography);


//Habilidades

// let inputUbuntu = document.querySelector('#font__option--1');
// let inputComicSans = document.querySelector('#font__option--2');
// let inputMontserrat = document.querySelector('#font__option--3');

// function saveTypography() {
//   if (inputUbuntu.checked === true) {
//     console.log('ubuntu');
//     dataObject.typography = 'u';
//     updateDataObject('typography', 'u');
//   } else if (inputComicSans.checked === true){
//     console.log('ComicSans');
//     dataObject.typography = 'c';
//     updateDataObject('typography', 'c');
//   } else if (inputMontserrat.checked === true){
//     console.log('Montserrat');
//     dataObject.typography = 'm';
//     updateDataObject('typography', 'm');
//   } else {
//     console.log('Montserrat');
//   }
//   updateLocalStorage();
// }
// inputUbuntu.addEventListener('click', saveTypography);
// inputComicSans.addEventListener('click', saveTypography);
// inputMontserrat.addEventListener('click', saveTypography);

// Here starts the API call

let url = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
let button = document.querySelector('.button__create-card');
const cardLink = document.querySelector('.title__card--link');
const tweetbutton = document.querySelector('.twitter');

function apiCall(json) {
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(dataObject), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(response => {

      cardLink.innerHTML = response.cardURL;
      tweetbutton.href = "https://twitter.com/intent/tweet?text=%C2%A1He%20creado%20esta%20tarjeta%20personalizada%20con%20Awesome%20Profile%20Card%20de%20undefined-team!%20✨" + response.cardURL;

    })
    .catch(error => console.error('Error:', error));
}

button.addEventListener('click', apiCall);
