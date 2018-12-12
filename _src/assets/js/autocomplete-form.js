'use strict';

let dataObject = {
  'palette': 1,
  'typography': 2,
  'name': '',
  'job': '',
  'phone': '',
  'email': '',
  'linkedin': '',
  'github': '',
  'photo': '',
  'skills': ['', '', '']
}; 

function updateDataObject(key,value) {
  dataObject[key] = value;
}

function updateLocalStorage(){
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
  } else if (inputRed.checked === true){
    console.log('red');
    dataObject.palette = 2;
    updateDataObject('palette', 2);
  } else if (inputGray.checked === true){
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