<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $email_subject = $POST['subject'];
  $email_body = $_POST['message'];


  $to = "jfactorteam@gmail.com";
 
  $headers = "From: $visitor_email \r\n";
 
  $headers .= "Reply-To: $visitor_email \r\n";
 
  mail($to,$email_subject,$email_body,$headers);

?>