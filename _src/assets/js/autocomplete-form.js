'use strict';


function updateDataObject(key, value) {
  dataObject[key] = value;
}

function updateLocalStorage() {
  localStorage.setItem('dataObject', JSON.stringify(dataObject));
}

// Here starts NAME JavaScript:

let fullNameInput = document.body.querySelector('#name-input');
let fullNameLabel = document.body.querySelector('#name');

function updateFullName(event) {
  // console.log(event);
  fullNameLabel.innerText = event.target.value;
  updateDataObject('name', event.target.value);
  updateLocalStorage();
}

fullNameInput.addEventListener('keyup', updateFullName);


// Here starts JOB JavaScript:

let jobPositionInput = document.body.querySelector('#job-input');
let jobPositionLabel = document.body.querySelector('#job-card');
//console.log('jobPositionInput', jobPositionInput); // This line is to view the element jobPositionInput in the console.

function updateJobPosition(event) {
  // console.log(event);

  jobPositionLabel.innerText = event.target.value;
  updateDataObject('job', event.target.value);
  updateLocalStorage();
}

jobPositionInput.addEventListener('keyup', updateJobPosition);


// Here starts SKILLS JavaScript:

let skillsList = document.querySelector('#container-checkboxes');
console.log(skillsList);
let skillsCard = document.querySelector('#container-checkboxes-card');

let skills = [];

function updateSkills() {
  let counter = 0;
  let MAX_SKILLS = 3;

  // Resetear etiquetas de la card
  skillsCard.innerHTML = '';
  
  // Cogemos todos los li de la caja de checkboxes
  let checkboxListItems = skillsList.querySelectorAll('li');

  let skillsDataForLocalStorage = [];

  // Iteramos por cada li de checkbox
  for (const checkboxListItem of checkboxListItems) {
    // Cogemos el checkbox del li que estamos procesando
    let checkbox = checkboxListItem.querySelector('input');

    // Si el checkbox está checked y el contador de skills seleccionadas es menor que el máximo, añadimos etiqueta a la card
    if (counter < MAX_SKILLS && checkbox.checked) {
      console.log(counter);
      console.log(checkbox);

      // Creamos un elemento <li> para la etiqueta 
      let cardListItemElem = document.createElement('li');
      cardListItemElem.style = `list-style-type: none; padding: 1px; font-family:"Open Sans", sans-serif; font-weight: 400; font-size: 13px; color: white; background-color: #438792; width: 80px; border-radius: 4px; margin: 2px; display: inline-block; text-align: center;`; // Para quitar el punto de cada 'li' que sale por defecto.

      // Añadimos el nombre de la skill (que es textContent del li de checkboxes-container) como texto hijo del <li> de la card
      let cardListItemContent = document.createTextNode(`${checkboxListItem.textContent}`);
      cardListItemElem.appendChild(cardListItemContent);
      skillsDataForLocalStorage.push(checkbox.value);
          


      // Finalmente, añadimos el <li> a la lista
      skillsCard.appendChild(cardListItemElem);
      counter++;     
    }
  }
  updateDataObject('skills', skillsDataForLocalStorage);
  updateLocalStorage();


}

function init() {
  let localStorageSkills = dataObject['skills'];

  fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(response => response.json())
    .then(function (data) {
      console.log(data);
      let skillsArr = data.skills; // Objeto con un array de strings
      console.log(skillsArr);
      let skillsList = document.querySelector('#container-checkboxes');

      // Reseteamos contenido de lista de skills
      skillsList.innerHTML = '';

      // Print de las skills en el FORMULARIO
      for (let i = 0; i < skillsArr.length; i++) {
        // Objeto de skill
        let currentSkill = skillsArr[i];

        console.log(currentSkill);

        // Creamos un elemento <li> 
        let listItemElem = document.createElement('li');

        // Para poner checkbox delante de cada skill
        let listItemCheckbox = document.createElement('input');
        listItemCheckbox.type = 'checkbox';
        listItemCheckbox.value = currentSkill;
        listItemCheckbox.addEventListener('click', updateSkills);
        
        // Determinamos si el nombre de la skill actual está en la lista almacenada en el array del localStorage
        // Si la skill no está, indexOf devolverá -1. Si está, devolverá un número distinto de -1, que será la posición
        // en el array de dicho skill.
        if (localStorageSkills.indexOf(currentSkill) !== -1) {
          listItemCheckbox.checked = true;
        } else {
          listItemCheckbox.checked = false;
        }

        listItemElem.appendChild(listItemCheckbox);
        listItemElem.style = `list-style-type: none; margin-left: 6px;`; // Para quitar el punto de cada 'li' que sale por defecto.

        // Añadimos el nombre de la skill como texto hijo del <li>
        let listItemContent = document.createTextNode(`${currentSkill}`);
        listItemElem.appendChild(listItemContent);

        // Finalmente, añadimos el <li> a la lista
        skillsList.appendChild(listItemElem);
      }
    })
}


// Here starts EMAIL JavaScript:

let emailInput = document.body.querySelector('#email-input');
console.log('email', emailInput);
let emailLabel = document.querySelector('#email-card');
console.log('emaillabel', emailLabel);

function updateEmail(event) {
  console.log(event);
  let emailLabel = document.querySelector('#email-card');
  // console.log(emailLabel);
  emailLabel.href = `mailto:${event.currentTarget.value}`;
  updateDataObject('email', event.currentTarget.value);
  updateLocalStorage();
}

emailInput.addEventListener('keyup', updateEmail);


// Here starts GitHub JavaScript:

let githubInput = document.body.querySelector('#github-input');
let githubLabel = document.querySelector('#github-card');

function updateGithub(event) {
  githubLabel.href = `https://${event.currentTarget.value}`;
  updateDataObject('github', event.currentTarget.value);
  updateLocalStorage();
}

githubInput.addEventListener('keyup', updateGithub);


// Here starts LinkedIn JavaScript:

let linkedinInput = document.body.querySelector('#linkedin-input');
let linkedinLabel = document.querySelector('#linkedin-card');

function updateLinkedin(event) {
  linkedinLabel.href = `https://www.${event.currentTarget.value}`;
  updateDataObject('linkedin', event.currentTarget.value);
  updateLocalStorage();
}

linkedinInput.addEventListener('keyup', updateLinkedin);

// Here starts Telephone Javascript 

let telInput = document.body.querySelector('#telf_movil');
let telLabel = document.querySelector('#tel-card');
console.log('telLAbel', telLabel);

function updateTelephone(event) {
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
    dataObject.palette = '1';
    updateDataObject('palette', '1');
  } else if (inputRed.checked === true) {
    console.log('red');
    dataObject.palette = '2';
    updateDataObject('palette', '2');
  } else if (inputGray.checked === true) {
    console.log('gray');
    dataObject.palette = '3';
    updateDataObject('palette', '3');
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
    console.log('ComicSans');
  }
  updateLocalStorage();
}
inputUbuntu.addEventListener('click', saveTypography);
inputComicSans.addEventListener('click', saveTypography);
inputMontserrat.addEventListener('click', saveTypography);


//Habilidades

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

      tweetbutton.href = 'https://twitter.com/intent/tweet?text=I%20have%20created%20this%20card%20using%20Awesome%20Profile%20Card%20from%20undefined-team!%20✨' + response.cardURL + "✨" + "%20feeling%20more%20curious?%20👀If%20you%20are%20a%20junior%20front-end%20develop%20don't%20hesitate%20to%20improve%20our%20current%20code!👉👉👉" + "%20https://github.com/Adalab/easley-s2-undefined";
    })
    .catch(error => console.error('Error:', error));
}

button.addEventListener('click', apiCall);



function getLocalStorage() {
  // localStorage.getItem('dataObject');
  let myLocalStorage = localStorage.getItem('dataObject');
  let myLocalStorageObject = JSON.parse(myLocalStorage);
  console.log(myLocalStorageObject);

  if (myLocalStorageObject !== null) {
 
    dataObject = myLocalStorageObject; 
 
    fullNameInput.value = dataObject.name;
    fullNameLabel.innerHTML = dataObject.name;
 
    jobPositionLabel.innerHTML= dataObject.job;
    jobPositionInput.value = dataObject.job;

    if (dataObject.name === '') {
      fullNameLabel.innerText = 'Name Surname';
    }
    if (dataObject.job === '') {
      jobPositionLabel.innerText = 'Job';
    }
 
    emailInput.value = dataObject.email;
    emailLabel.href = dataObject.email;
 
    linkedinInput.value = dataObject.linkedin;
    linkedinLabel.href = dataObject.linkedin;

    telInput.value = dataObject.phone;
    telLabel.href = dataObject.phone;

    githubInput.value = dataObject.github;
    githubLabel.href = dataObject.github;

    if (dataObject.photo !== '') {
      for (const cardImage of profileImages) {
        cardImage.style.backgroundImage = `url(${dataObject.photo})`;
      }
    }    
  } 
}

getLocalStorage();
init();


//Reset button
const resetBtn = document.querySelector('.profile__action');
const form = document.querySelector('#form');
const colorForm = document.querySelector('#color-form');
const fontForm = document.querySelector('#font-form');

function resetAll() {
  dataObject = {
    'palette': '',
    'typography': '',
    'name': '',
    'job': '',
    'phone': '',
    'email': '',
    'linkedin': '',
    'github': '',
    'photo': '',
    'skills': ['', '', '']
  };
  updateLocalStorage();
  cardLink.innerHTML = 'Share the card with your friends!';
  tweetbutton.href = '';
  form.reset();
  colorForm.reset();
  fontForm.reset();
  fullNameLabel.innerText = 'Name Surname';
  jobPositionLabel.innerText = 'Job';
  profileImages[0].style.backgroundImage = dataObject.photo;
  profileImages[1].style.backgroundImage = dataObject.photo;
}
resetBtn.addEventListener('click', resetAll);
