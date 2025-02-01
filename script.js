const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav_menu_items")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav_link").forEach(link, () => 
    link.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
    })
)
