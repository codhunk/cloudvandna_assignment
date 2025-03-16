const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

navLinks.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const listItems = document.querySelectorAll('.list-items');
listItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
