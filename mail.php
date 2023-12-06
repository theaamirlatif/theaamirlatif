<?php
//let's get all form values
$name = $_POST['Name'];
$header = $_POST['Subject'];
$email = $_POST['Sender'];
$message = $_POST['Message'];
if(!empty($Sender) && !empty($Message)) { //if email and message field is not empty 
    if(filter_var($Sender, FILTER_VALIDATE_EMAIL)){ //if user entered email is valid 
        $receiver = "techroof360@gmail.com"; //email receiver email address
$subject = "From: $name <$Sender>"; //subject of the email. Subject looks like From: CodingNepal <abc@gmail.com> 
//merging concating all user values inside body variable. \n is used for new line 
$body = "Name: $name\nEmail: $email\nSubject: $header\nMessage: $message\n\nRegards, \n$name";
$sender = "From: $email"; //sender email
if(mail($receiver, $subject, $body, $sender)){ //mail() is a inbuilt p
echo "Your message has been sent";
}else{
echo "Sorry, failed to send your message!";
}
}else{
echo "Enter a valid email address!";
}
}else{
echo "Email and password field is required!";
}
?>