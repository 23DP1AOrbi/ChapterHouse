function showNav() {
    const nav = document.getElementById("links");
    nav.classList.toggle('active')
  } 

window.addEventListener('resize', () => {
    const nav = document.getElementById('links')
    if (window.innerWidth > 600) {
        nav.classList.remove('active')
    }
})