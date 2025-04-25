const aftHr = document.querySelector('.aft-hr')
const spacer = document.querySelector('.aft-hr-spacer')

if (aftHr && spacer) {
    const updateSpacer = () => {
         spacer.style.height = (aftHr.offsetHeight - 400) + 'px'
    }

    updateSpacer()
    window.addEventListener('resize', updateSpacer)

    // resize the space behind the main content
    const resizeObserver = new ResizeObserver(updateSpacer)
    resizeObserver.observe(aftHr)
}


function showNav() {
    const nav = document.getElementById("links");
    nav.classList.toggle('active')
  }

function removeNav() {
    const nav = document.getElementById("links");
    nav.classList.remove('active')
}

// depending on the size the navigation appears as a line or hamburger
window.addEventListener('resize', () => {
    const nav = document.getElementById('links')
    if (window.innerWidth > 600) {
        nav.classList.remove('active')
    }
})