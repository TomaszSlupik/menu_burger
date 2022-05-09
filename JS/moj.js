const bars = document.querySelector(".fa-bars");
const x = document.querySelector(".fa-xmark");
const look = document.querySelector(".look");
const nav = document.querySelector("nav");
const hide = document.querySelector("hide");
const burger = document.querySelector("burger");

const showme = () => {
	nav.classList.toggle("look");
	bars.classList.toggle("fa-xmark");
};

bars.addEventListener("click", showme);
