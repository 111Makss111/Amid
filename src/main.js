let isOpenMenu = false;

const btnElem = document.querySelector('.header-menu-button');
const listElem = document.querySelector('.header-list');
const closeIconElem = document.querySelector('.header-menu-icon-close');
const menuIconElem = document.querySelector('.header-menu-icon');
btnElem.addEventListener('click', function () {
  isOpenMenu = !isOpenMenu;
  if (isOpenMenu) {
    listElem.style.display = 'block';
    menuIconElem.style.display = 'none';
    closeIconElem.style.display = 'block';
  } else {
    listElem.style.display = 'none';
    menuIconElem.style.display = 'block';
    closeIconElem.style.display = 'none';
  }
});
