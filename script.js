const menuToggle = document.querySelector(".menuToggle button");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
})

const selected = document.querySelector(".selected");
const label = document.querySelector(".label");
const image = document.getElementById("img1");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        image.src = o.querySelector(".img").src;
        label.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});
