<?php
  if($_POST){
    $to = 'lrsvolk@gmail.com';
    $subject = 'Отправлено с volkovvladlen.esy.es';
  
    $name = trim(htmlspecialchars($_POST["name"]));
    $mail = trim(htmlspecialchars($_POST["mail"]));
    $message = trim(htmlspecialchars($_POST["message"]));
    
    $text = "Отправитель: " . $name .";\n" 
            . "e-mail: " . $mail  . ";\n" 
            . "Сообщение: \n" . $message;
            
   mail($to, $subject, $text);
    
  };

?>