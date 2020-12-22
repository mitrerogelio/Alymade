// Old Code
const toggleButton = document.getElementsByClassName('toggle')[0]
const mobileNav = document.getElementsById('mobile-modal')[0]

toggleButton.addEventListener('click', () => {
  mobileNav.classList.toggle('open')
  toggleButton.classList.toggle('active')
})

// New Code
const menuIcon = document.querySelector('.toggle');
// const 
