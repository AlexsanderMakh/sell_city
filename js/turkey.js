document.addEventListener("DOMContentLoaded", function () {
  // Ваши объекты недвижимости
  const properties = Array.from(document.querySelectorAll(".card"));

  // Количество объектов на одной странице
  const objectsPerPage = 6;
  let currentPage = 1;

  // Функция для отображения объектов на текущей странице с анимацией
  function displayObjectsOnPage(page) {
    const startIndex = (page - 1) * objectsPerPage;
    const endIndex = startIndex + objectsPerPage;

    properties.forEach((property, index) => {
      if (index >= startIndex && index < endIndex) {
        // Применяем класс для анимации появления
        setTimeout(() => {
          property.style.display = "block";
          property.classList.add("card-enter-active");
        }, (index - startIndex) * 100); // Используем задержку для плавности
      } else {
        // Применяем класс для анимации исчезания
        property.classList.remove("card-enter-active");
        setTimeout(() => {
          property.style.display = "none";
        }, 300);
      }
    });
  }

  // Обработчик клика на кнопку "Предыдущая страница"
  document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayObjectsOnPage(currentPage);
    }
  });

  // Обработчик клика на кнопку "Следующая страница"
  document.getElementById("next-page").addEventListener("click", () => {
    const totalPages = Math.ceil(properties.length / objectsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayObjectsOnPage(currentPage);
    }
  });

  // Начнем с отображения первой страницы
  displayObjectsOnPage(currentPage);
});
document.addEventListener("DOMContentLoaded", function () {
  const properties = Array.from(document.querySelectorAll(".card"));
  const objectsPerPage = 6;
  let currentPage = 1;

  function displayObjectsOnPage(page) {
    const startIndex = (page - 1) * objectsPerPage;
    const endIndex = startIndex + objectsPerPage;

    properties.forEach((property, index) => {
      if (index >= startIndex && index < endIndex) {
        // Удаление класса hidden для анимированного появления
        property.classList.remove("hidden");
      } else {
        // Добавление класса hidden для анимированного исчезновения
        property.classList.add("hidden");
      }
    });
  }

  document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayObjectsOnPage(currentPage);
    }
  });

  document.getElementById("next-page").addEventListener("click", () => {
    const totalPages = Math.ceil(properties.length / objectsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayObjectsOnPage(currentPage);
    }
  });

  displayObjectsOnPage(currentPage);
});
document.addEventListener("DOMContentLoaded", function () {
  // ... Ваш существующий код ...

  // Обработчик нажатия на кнопку "Подробнее"
  function handleDetailsClick(event) {
    const page = event.currentTarget.getAttribute("data-page");
    if (page) {
      window.location.href = page;
    }
  }

  // Найти все кнопки "Подробнее" и добавить им обработчик события
  const detailButtons = document.querySelectorAll(".details-link");
  detailButtons.forEach(function (button) {
    button.addEventListener("click", handleDetailsClick);
  });

  // ... Ваш существующий код ...

  displayObjectsOnPage(currentPage);
});
