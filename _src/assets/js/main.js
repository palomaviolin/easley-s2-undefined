'use strict';

console.log('>> Ready :)');

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// let mom = document.querySelector('.section2__list');
// let daughter  = document.querySelector('.section2__list--collapsible');
// let arrow = document.querySelector('.icon__arrow--card-page');
// let collapse = document.querySelector('.collapsible');

// mom.addEventListener('click', openFun);

// function openFun(e) {
//   console.log(e.target);
//   e.target.classList.toggle('open');
//   if (e.target.classList.contains('open')) {
//     arrow.classList.add('up');
//     // daughter.classList.add('up');
//   } else {
//     arrow.classList.remove('up');
//     // daughter.classList.remove('up');
//   }
// }

// let firstChild = document.querySelector('#first_child');
// let secondChild = document.querySelector('#second_child');
// let thirdChild = document.querySelector('#third_child');

// firstChild.addEventListener('click', openFun);
// secondChild.addEventListener('click', openFun);
// thirdChild.addEventListener('click', openFun);

// function openFun(e) {
//   e.currentTarget.classList.toggle('open');
// }
