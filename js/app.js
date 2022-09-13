(() => {
    "use strict";
    let lastScroll = 0;
    const header = document.querySelector(".header");
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains("hide");
    window.addEventListener("scroll", (() => {
        if (scrollPosition() > lastScroll && !containHide()) header.classList.add("hide"); else if (scrollPosition() < lastScroll && containHide()) header.classList.remove("hide");
        lastScroll = scrollPosition();
    }));
    const menu = document.querySelector(".list-container");
    const menuButton = document.querySelector(".more-button");
    const menuList = document.querySelector(".more-button-list");
    menuButton.addEventListener("click", (function() {
        menu.classList.toggle("active");
    }));
    window.addEventListener("scroll", (() => {
        menu.classList.remove("active");
    }));
    menuList.addEventListener("click", (function() {
        menu.classList.remove("active");
    }));
    const smoothLinks = document.querySelectorAll("a[href*='#']");
    for (let smoothLink of smoothLinks) smoothLink.addEventListener("click", (function(e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");
        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }));
    const inputForm = document.querySelector(".tel-form");
    const inputModal = document.querySelector(".tel-modal");
    const prefixNumber2 = str => {
        if ("7" === str) return "7 (";
        if ("8" === str) return "8 (";
        if ("9" === str) return "7 (9";
        return "7 (";
    };
    inputForm.addEventListener("input", (e => {
        const value = inputForm.value.replace(/\D+/g, "");
        const numberLength = 11;
        let result;
        if (inputForm.value.includes("+8") || "8" === inputForm.value[0]) result = ""; else result = "+";
        for (let i = 0; i < value.length && i < numberLength; i++) {
            switch (i) {
              case 0:
                result += prefixNumber2(value[i]);
                continue;

              case 4:
                result += ") ";
                break;

              case 7:
                result += "-";
                break;

              case 9:
                result += "-";
                break;

              default:
                break;
            }
            result += value[i];
        }
        inputForm.value = result;
    }));
    inputModal.addEventListener("input", (e => {
        const value = inputModal.value.replace(/\D+/g, "");
        const numberLength = 11;
        let result;
        if (inputModal.value.includes("+8") || "8" === inputModal.value[0]) result = ""; else result = "+";
        for (let i = 0; i < value.length && i < numberLength; i++) {
            switch (i) {
              case 0:
                result += prefixNumber2(value[i]);
                continue;

              case 4:
                result += ") ";
                break;

              case 7:
                result += "-";
                break;

              case 9:
                result += "-";
                break;

              default:
                break;
            }
            result += value[i];
        }
        inputModal.value = result;
    }));
    const promoBtn = document.querySelector(".column-price__promo");
    const promoInput = document.querySelector(".form__input-promo");
    promoBtn.addEventListener("click", (function() {
        promoInput.style.display = "block";
    }));
    const modal = document.querySelector(".modal__form");
    const modalOverlay = document.querySelector(".modal__overlay");
    const modalOpen = document.querySelectorAll(".button__modal");
    const modalClose = document.querySelector(".modal__close");
    modalOpen.forEach((elem => {
        elem.addEventListener("click", (() => {
            modal.style.top = "50%";
            modalOverlay.style.display = "block";
            document.body.style.overflow = "hidden";
            header.classList.add("hide");
        }));
    }));
    modalClose.addEventListener("click", (function() {
        modal.style.top = "-100%";
        modalOverlay.style.display = "none";
        document.body.style.overflow = "visible";
    }));
    modalOverlay.addEventListener("click", (function() {
        modal.style.top = "-100%";
        modalOverlay.style.display = "none";
        document.body.style.overflow = "visible";
    }));
    let radioButton = document.querySelector(".radio__elem");
    let modalButton = document.querySelector(".modal__button");
    radioButton.addEventListener("click", (function() {
        modalButton.toggleAttribute("disabled");
    }));
})();