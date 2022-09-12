<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$email = htmlspecialchars($email);


$name = urldecode($name);
$tel = urldecode($tel);
$email = urldecode($email);


$name = trim($name);
$tel = trim($tel);
$email = trim($email);

$message = '';
$message .= 'Имя: '.$name.PHP_EOL;
$message .= 'Телефон: '.$tel.PHP_EOL;
$message .= 'Email: '.$email.PHP_EOL;


$sended = mail("tadmin@lending.ru",
"Тест", $message, "From: admin@lending.ru \r\n");

if ($sended)
{
echo "сообщение успешно отправлено";
} else {
echo "при отправке сообщения возникли ошибки";
}?>