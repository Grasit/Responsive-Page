
const showMenuButton = document.getElementById("show-menu");
const hideMenuButton = document.getElementById("hide-menu")

hideMenuButton.addEventListener("click", (event) => {
    document.querySelector('.nav-links').style.display = 'none';
    hideMenuButton.style.display = 'none'
    showMenuButton.style.display = 'block'
})

showMenuButton.addEventListener("click", (event) => {
    document.querySelector('.nav-links').style.display = 'flex';
    showMenuButton.style.display = 'none'
    hideMenuButton.style.display = 'block'
})




