'use strict';

const firstChild = document.querySelector('#first_child');
const secondChild = document.querySelector('#second_child');
const thirdChild = document.querySelector('#third_child');
const create = document.querySelector('.button__create-card');
const content = document.querySelector('.create__mesage');
const thirdBlock = document.querySelector('.third_block');
const firstBlock = document.querySelector('.first_block');
const secondBlock = document.querySelector('.second_block');


const openFun = (e) => {
  
  const currentBlock = e.currentTarget;
  currentBlock.classList.toggle('active');

  if (currentBlock.parentElement === firstBlock) {
    e.currentTarget.parentElement.classList.toggle('open');
    secondBlock.classList.remove('open');
    thirdBlock.classList.remove('open');

  } else if (currentBlock.parentElement === secondBlock) {

    e.currentTarget.parentElement.classList.add('open');
    firstBlock.classList.remove('open');
    thirdBlock.classList.remove('open');

  } else if (currentBlock.parentElement === thirdBlock) {
    e.currentTarget.parentElement.classList.add('open');
    firstBlock.classList.remove('open');
    secondBlock.classList.remove('open');
  }
};

firstChild.addEventListener('click', openFun);
secondChild.addEventListener('click', openFun);
thirdChild.addEventListener('click', openFun);


const showLink = (e) => {
  create.classList.toggle('active');
  if (e.currentTarget.classList.contains('active')) {
    content.classList.add('show');
    thirdBlock.classList.add('add_height');
  } else {
    content.classList.remove('show');
    thirdBlock.classList.remove('add_height');
  }
};

create.addEventListener('click', showLink);