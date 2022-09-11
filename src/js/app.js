import "../scss/style.scss";

// Бургер-меню
const menu = document.querySelector('.list-container')
const menuButton = document.querySelector('.more-button')

menuButton.addEventListener('click', function () {
	menu.classList.toggle('active');
});

window.addEventListener('mouseup', function () {
	menu.classList.remove('active')
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
