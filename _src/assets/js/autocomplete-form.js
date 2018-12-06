'use strict';


// Here starts NAME JavaScript:

let fullNameInput = document.body.querySelector('#name-input');

function updateFullName(event) {
    console.log(event);
    let fullNameLabel = document.body.querySelector('#name');
    fullNameLabel.innerText = event.target.value;
}

fullNameInput.addEventListener('keyup', updateFullName);


// Here starts JOB JavaScript:

let jobPositionInput = document.body.querySelector('#job-input');
console.log('jobPositionInput', jobPositionInput); // This line is to view the element jobPositionInput in the console.

function updateJobPosition(event) {
    console.log(event);
    let jobPositionLabel = document.body.querySelector('#job-card');
    jobPositionLabel.innerText = event.target.value;
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
}

emailInput.addEventListener('keyup', updateEmail);


// Here starts GitHub JavaScript:

let githubInput = document.body.querySelector('#github-input');

function updateGithub(event) {
    let githubLabel = document.querySelector('#github-card');
    githubLabel.href = `https://${event.currentTarget.value}`;
}

githubInput.addEventListener('keyup', updateGithub);


// Here starts LinkedIn JavaScript:

let linkedinInput = document.body.querySelector('#linkedin-input');

function updateLinkedin(event) {
    let linkedinLabel = document.querySelector('#linkedin-card');
    linkedinLabel.href = `https://www.${event.currentTarget.value}`;
}

linkedinInput.addEventListener('keyup', updateLinkedin);




