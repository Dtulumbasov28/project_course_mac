import "../scss/style.scss";

// Бургер-меню
let body = document.querySelector("body")
let menuBtn = document.querySelector(".icon-menu")
let menu = document.querySelector(".menu__body")
menuBtn.addEventListener("click", function () {
	menu.classList.toggle("active")
	menuBtn.classList.toggle("active")
	body.classList.toggle("no-scroll")
})

// Плавный скролл до элемента

const smoothLinks = document.querySelectorAll("a[href*='#']");
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener("click", function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute("href");

		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
};