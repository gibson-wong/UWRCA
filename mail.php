<?php
	$email= $_POST[email];
	$subject = $_POST[subject];
	$message = $_POST[message];

	// Create a header containing the sender's email address
	$header = "From: " . $email. "\n\n";

	// In case any of our lines are larger than 70 characters, we should use wordwrap()
	$message = "Message: " . wordwrap($message, 70, "\r\n");

	// Send
	mail("rca.uwaterloo@gmail.com", $subject, $header . $message);
?>