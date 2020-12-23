const toggleButton = document.querySelector('.toggle');
const mobileNav = document.querySelector('#mobile-modal');

toggleButton.addEventListener('click', () => {
  mobileNav.classList.toggle('open')
  toggleButton.classList.toggle('active')
})
