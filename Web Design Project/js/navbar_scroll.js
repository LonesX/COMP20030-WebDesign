const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

//this makes it so that you can open the navbar when the view is smaller
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})