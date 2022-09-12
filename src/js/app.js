import "../scss/style.scss";

// Показать/скрыть header при прокрутке вверх/вниз
let lastScroll = 0;
const header = document.querySelector(".header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;

const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (scrollPosition() > lastScroll && !containHide()) {
    header.classList.add("hide");
    // scroll down
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove("hide");
    //scroll up
  }
  lastScroll = scrollPosition();
});

// Бургер-меню
const menu = document.querySelector(".list-container");
const menuButton = document.querySelector(".more-button");
const menuList = document.querySelector(".more-button-list");
const menuItem = menuList.childNodes;

menuButton.addEventListener("click", function () {
  menu.classList.toggle("active");
});

menuList.addEventListener("click", function () {
  menu.classList.remove("active");
});

// Плавный скролл до элемента
const smoothLinks = document.querySelectorAll("a[href*='#']");
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Форма
$(document).ready( function(){
  // вешаем маску на телефон
     $('.tel').inputmask("+7(999)999-9999");
      
      // добавляем правило для валидации телефона
      jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
          return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
      });
      
      // получаем нашу форму по class
      var form = $('.form');
      
      // включаем валидацию в форме
      form.validate();
      
      // вешаем валидацию на поле с телефоном по классу
      $.validator.addClassRules({
          'phone-field': {
              checkMaskPhone: true,
          }
      });
      // Проверка на валидность формы при отправке, если нужно

  });