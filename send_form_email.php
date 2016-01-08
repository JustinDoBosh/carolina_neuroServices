<?php
$to = "jstone@charlotte.twcb.com";
$subject = "Website form submission";
$txt = "Message: " . $_POST["message"] . "\r\n";
$txt .= "\r\n" ."Customer Full Name: " . $_POST["name"];
$txt .= "\r\n" ."Customer Email Address: " . $_POST["email"];
$txt .= "\r\n" . "Reason for contacting: " . $_POST["subject"];
$headers = "From: noreply@carlonianueroservices.com";

if(mail($to,$subject,$txt,$headers)){
  header('location: index.html');
}else{
  echo "error!";
}

?>