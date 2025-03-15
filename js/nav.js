document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navList = document.getElementById('navList');

  burgerMenu.addEventListener('click', function() {
    navList.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  });
});