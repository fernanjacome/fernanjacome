
let pinkmode = localStorage.getItem('pinkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkMode = () => {
    document.body.classList.add('pinkmode')
    localStorage.setItem('pinkmode', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('pinkmode')
    localStorage.setItem('pinkmode', null)
}

if (pinkmode === "active") enableDarkMode()

themeSwitch.addEventListener("click", () => {
    pinkmode = localStorage.getItem('pinkmode')
    pinkmode !== "active" ? enableDarkMode() : disableDarkMode()
})

