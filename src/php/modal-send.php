<?php
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' && !empty($_POST['name'])) {
	$message = 'Имя: ' . $_POST['name'] . ' ';
	$message .= "\nТелефон: " . $_POST['phone'] . ' ';
	$message .= "\nМаршрут: " . $_POST['route'] . ' ';
	$message .= "\nВремя: " . $_POST['time'] . ' ';
	$mailTo = "zzzelectroniczzz@gmail.com"; // Ваш e-mail
	$subject = "Новое бронирование"; // Тема сообщения
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	$headers .= "From: mail-perevozkin@perevozkin163.ru <mail-perevozkin@perevozkin163.ru>\r\n";
	if (mail($mailTo, $subject, $message, $headers)) {
		echo "Спасибо, мы свяжемся с вами в самое ближайшее время!";
	} else {
		echo "Сообщение не отправлено!";
	}
}
?>