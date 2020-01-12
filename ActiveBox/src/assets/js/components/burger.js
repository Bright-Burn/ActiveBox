'use strict';
const nav = document.getElementById('nav'),
      navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', function (event) {
    event.preventDefault();
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
    } else {
    nav.classList.add('show');
    }
});