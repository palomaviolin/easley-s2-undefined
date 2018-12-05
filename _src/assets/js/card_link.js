


function linkedinInfo() {
const linkedin = document.querySelector(".linkedinInput");
const linkedinIcon = document.querySelector(".linkedinIcon");
let linkedinPersonal = linkedin.value;
console.log(linkedinPersonal);
linkedinIcon.href = `https://es.linkedin.com/in/${linkedinPersonal}`;
console.log(linkedinPersonal);
}

linkedin.addEventListener('keyup', linkedinInfo);