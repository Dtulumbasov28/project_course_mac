<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$promokod = $_POST['promokod'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$email = htmlspecialchars($email);
$promokod = htmlspecialchars($promokod);


$name = urldecode($name);
$tel = urldecode($tel);
$email = urldecode($email);
$promokod = urldecode($promokod);


$name = trim($name);
$tel = trim($tel);
$email = trim($email);
$promokod = trim($promokod);

$message = '';
$message .= 'Имя: ' . $name . PHP_EOL;
$message .= 'Телефон: ' . $tel . PHP_EOL;
$message .= 'Email: ' . $email . PHP_EOL;
$message .= 'Промокод: ' . $promokod . PHP_EOL;


$sended = mail(
    "tadmin@lending.ru",
    "Заявка на курс",
    $message,
    "From: admin@lending.ru \r\n"
);

if ($sended) {
    echo "Заявка успешно отправлена, ожидайте звонка!";
} else {
    echo "Извините, при отправке формы возникла ошибка";
}
?>