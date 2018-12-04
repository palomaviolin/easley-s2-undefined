'use strict';


// Here starts NAME JavaScript:

let fullNameInput = document.body.querySelector('#name-input');

function updateFullName (event) {
  console.log(event);
  let fullNameLabel = document.body.querySelector('#name');
  fullNameLabel.innerText = event.target.value;
}

fullNameInput.addEventListener('keyup', updateFullName);


// Here starts JOB JavaScript:

let jobPositionInput = document.body.querySelector('#job-input');
console.log('jobPositionInput', jobPositionInput); // This line is to view the element jobPositionInput in the console.

function updateJobPosition (event) {
  console.log(event);
  let jobPositionLabel = document.body.querySelector('#job-card');
  jobPositionLabel.innerText = event.target.value;
}

jobPositionInput.addEventListener('keyup', updateJobPosition);


// Here starts SKILLS JavaScript:

//HTML Checkbox
function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("html");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

//CSS Checkbox 
function myFunction2() {
    var checkBox = document.getElementById("css-input");
    var text = document.getElementById("css");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

//React Checkbox 
function myFunction3() {
    var checkBox = document.getElementById("react-input");
    var text = document.getElementById("react");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}