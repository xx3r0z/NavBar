const hamburgerIcon = document.getElementById('hamburger');
const navDiv = document.querySelector('.navbar-link-container');


hamburgerIcon.addEventListener('click', (e) => {
    navDiv.classList.toggle('show');
})