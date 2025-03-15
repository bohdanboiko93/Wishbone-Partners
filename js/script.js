document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded'); // Проверка загрузки DOM
  const burgerMenu = document.querySelector('.burger-menu');
  const navList = document.getElementById('navList');

  burgerMenu.addEventListener('click', function() {
    console.log('Burger clicked'); // Проверка клика
    navList.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  });
});