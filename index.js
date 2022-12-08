/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
import display from './modules/display.js';
import {
  navList,
  navAdd,
  navContact,
  forms,
  contacts,
  shelf,
} from './modules/class&id.js';

const remove = document.getElementsByClassName('removeBtn');


window.addEventListener('DOMContentLoaded', () => {
  display.displayBooks();
});

const form = document.querySelector('.form');
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  display.addBook();
  form.reset();
});

navList.addEventListener('click', () => {
  forms.classList.add('hide');
  contacts.classList.add('hide');
  shelf.classList.remove('hide');
});

navAdd.addEventListener('click', () => {
  forms.classList.remove('hide');
  contacts.classList.add('hide');
  shelf.classList.add('hide');
});

navContact.addEventListener('click', () => {
  forms.classList.add('hide');
  contacts.classList.remove('hide');
  shelf.classList.add('hide');
});

window.onload = () => {
  forms.classList.add('hide');
  contacts.classList.add('hide');
  shelf.classList.remove('hide');
};
