function showNav() {
    const nav = document.getElementById("links");
    nav.classList.toggle('active')
  }

function removeNav() {
    const nav = document.getElementById("links");
    nav.classList.remove('active')
}

window.addEventListener('resize', () => {
    const nav = document.getElementById('links')
    if (window.innerWidth > 600) {
        nav.classList.remove('active')
    }
})