const body = document.querySelector('body');
const auth = document.querySelector('.auth-link');
const shadow = document.querySelector('.shadow');
const closePopup = document.querySelector('.close-popup');
const sandwitch = document.querySelector('.sandwitch');
const menu = document.querySelector('.menu');
const dropDowns = document.querySelectorAll('.dropdown');
const hint = document.querySelector('.hint');
const ask = document.querySelector('.ask');
const supportLink = document.querySelector('.support');

ask.addEventListener('click', (evt) => {
  evt.preventDefault();
  hint.classList.toggle('invisible');
});

supportLink.addEventListener('mouseover', (evt) => {
  evt.preventDefault();
  supportLink.textContent = 'Служба поддержки';
});

supportLink.addEventListener('mouseout', (evt) => {
  evt.preventDefault();
  supportLink.textContent = 'Написать письмо';
});

auth.addEventListener('click', (evt) => {
  evt.preventDefault();
  shadow.classList.toggle('invisible');
  body.style.overflowY = 'hidden';
});

closePopup.addEventListener('click', (evt) => {
  evt.preventDefault();
  shadow.classList.toggle('invisible');
  body.style.overflowY = 'scroll';
});

shadow.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (evt.target.classList.contains('shadow')) {
    shadow.classList.toggle('invisible');
  body.style.overflowY = 'scroll';
  }
});

sandwitch.addEventListener('click', (evt) => {
  sandwitch.classList.toggle('close-menu');
  evt.preventDefault();
  menu.classList.toggle('hidden');
  if (body.style.overflowY !== 'hidden') {
    body.style.overflowY = 'hidden';
  } else {
    body.style.overflowY = 'scroll';
  }
});

dropDowns.forEach((item) => item.addEventListener('click', (evt) => {
  evt.preventDefault();
  item.classList.toggle('active');
  let id = item.id;
  let contentId = id.slice(0, 5);
  let content = document.getElementById(contentId);
  content.classList.toggle('mob-invisible');
}));

