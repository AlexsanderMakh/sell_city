<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Получаем данные из формы
  $name = $_POST["name"];
  $phone = $_POST["phone"];
  $telegram = $_POST["telegram"];

  // Выполните здесь необходимую обработку данных, например, отправку их на почту или в базу данных.

  // Пример отправки данных на почту (замените YOUR_EMAIL на вашу почту)
  $to = "v13735374@gmail.com";
  $subject = "Новая заявка с сайта";
  $message = "Имя: $name\nНомер телефона: $phone\nTelegram: $telegram";
  $headers = "From: webmaster@example.com";

  if (mail($to, $subject, $message, $headers)) {
    echo "Спасибо, ваша заявка отправлена!";
  } else {
    echo "Извините, возникла ошибка при отправке заявки. Пожалуйста, попробуйте позже.";
  }
} else {
  // Если скрипт вызван напрямую, вы можете выполнить необходимые действия, например, перенаправить на страницу с формой.
  // header("Location: форма.html");
  echo "Доступ запрещен.";
}
?>
