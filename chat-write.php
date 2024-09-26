<?php
$message = $_POST[‘message’];
file_put_contents(‘chat.txt’, “$message\n”, FILE_APPEND);
