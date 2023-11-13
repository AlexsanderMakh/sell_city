// Инициализация слайдера
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, // Количество отображаемых слайдов
  spaceBetween: 20, // Расстояние между слайдами (пиксели)
  loop: true, // Зацикливание слайдов
  autoplay: {
    delay: 3000, // Задержка между переключениями (3 секунды)
    disableOnInteraction: false, // Не останавливать автопрокрутку при взаимодействии пользователя
  },
  navigation: {
    nextEl: ".swiper-button-next", // Селектор кнопки "Вперед"
    prevEl: ".swiper-button-prev", // Селектор кнопки "Назад"
  },
});

var swiperContainer = document.querySelector(".swiper.mySwiper.slider");

swiperContainer.addEventListener("click", function () {
  // Перенаправляем на страницу "Турция"
  window.location.href = "../contact_us.html"; // Укажите URL вашей страницы "Турция"
});
$(document).ready(function () {
  // Плавная прокрутка к элементу с id "about_us"
  $('a[href="#about_us"]').on("click", function (e) {
    e.preventDefault();

    var target = $($(this).attr("href"));

    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        8000
      ); // Продолжительность анимации в миллисекундах
    }
  });
});
