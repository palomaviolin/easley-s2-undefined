'use strict';

const firstChild = document.querySelector('#first_child');
const secondChild = document.querySelector('#second_child');
const thirdChild = document.querySelector('#third_child');
const create = document.querySelector('.button__create-card');
const content = document.querySelector('.create__mesage');

firstChild.addEventListener('click', openFun);
secondChild.addEventListener('click', openFun);
thirdChild.addEventListener('click', openFun);

function openFun(e) {
  e.currentTarget.classList.toggle('active');
  if (e.currentTarget.classList.contains('active')) {
    e.currentTarget.parentElement.classList.add('open');
  } else {
    e.currentTarget.parentElement.classList.remove('open');
  }
}

create.addEventListener('click', showLink);

function showLink(e) {
  create.classList.toggle('active');
  if (e.currentTarget.classList.contains('active')) {
    content.classList.add('show');
  } else {
    content.classList.remove('show');
  }
}