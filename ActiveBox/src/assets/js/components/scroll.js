//  fixed header
'use strict';
const header = document.getElementById('header'),
      intro = document.getElementById('intro'),
      navScroll = document.getElementById('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > intro.offsetHeight ) {
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }
});

navScroll.addEventListener('click', function (event) {
    event.preventDefault();
    const elem = event.target.dataset.scroll;
    window.scroll(0, (document.getElementById(elem).offsetTop))
})

