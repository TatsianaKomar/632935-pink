var navMain = document.querySelector('.main-navigation');
var mainHead = document.querySelector('.main-header');
var navToggle = document.querySelector('.main-navigation__toggle');



navMain.classList.remove('main-navigation--nojs');
mainHead.classList.remove('main-header--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');

    mainHead.classList.remove('main-header--closed');
    mainHead.classList.add('main-header--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');

    mainHead.classList.add('main-header--closed');
    mainHead.classList.remove('main-header--opened');
  }
});
