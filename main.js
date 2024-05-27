const nav = document.querySelector(".navigation")
const burgerBtn = document.querySelector(".burger-button")

burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("active")
})
