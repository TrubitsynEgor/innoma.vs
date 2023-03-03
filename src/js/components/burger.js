const burgerOpen = document.querySelector('.mobile-menu-open');
const burgerClose = document.querySelector('.mobile-menu-close');
const nav = document.querySelector('.nav');

burgerOpen.addEventListener('click', () => {
  burgerOpen.classList.add('active');
  burgerClose.classList.add('active');
  nav.classList.add('active')
});
burgerClose.addEventListener('click', () => {
  burgerOpen.classList.remove('active');
  burgerClose.classList.remove('active');
  nav.classList.remove('active')
});




