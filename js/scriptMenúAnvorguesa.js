
const navbar = document.querySelector('.navbar');
const bubble = document.getElementById('bubble');
const menu = document.getElementById('menu');
const menuContainer = document.querySelector('.menu-container');

const navbarHeight = navbar.offsetHeight;
menu.style.top = `-${navbarHeight}px`;


menu.style.marginTop = navbar.offsetHeight+ 'px';

bubble.addEventListener('click', () => {
  menu.classList.toggle('active');
  bubble.classList.toggle('active');
  menuContainer.style.zIndex = '9999';
  // move the bubble to the left-end of the menu when it's active
  if (menu.classList.contains('active')) {
    menuContainer.style.zIndex = '9999';
    bubble.style.left = (menu.offsetWidth-30) + 'px';
    bubble.style.zIndex='10000';
    bubble.style.backgroundImage = "url(../resources/img/anvorguesaCerrar.png)"
  } else {
    menuContainer.style.zIndex = '0';
    menuContainer.classList.add('active');
    bubble.style.left = '-30px';
      bubble.style.backgroundImage = "url(../resources/img/anvorguesa.png)"
  }
});

menu.addEventListener('transitionend', () => {
  // reset the left value of the bubble when the menu is hidden
  if (!menu.classList.contains('active')) {
    bubble.style.left = '-30px';
  }
});

window.addEventListener('resize', () => {
  // update the left value of the bubble when the window is resized
  if (menu.classList.contains('active')) {
    bubble.style.left = menu.offsetWidth + 'px';
  }
});


