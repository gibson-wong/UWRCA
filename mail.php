<?php
	$emailAddress = $_POST[emailAddress];
	$subject = $_POST[subject];
	$message = $_POST[message];

	// Create a header containing the sender's email address
	$header = "From: " . $emailAddress . "\n\n";

	// In case any of our lines are larger than 70 characters, we should use wordwrap()
	$message = "Message: " . wordwrap($message, 70, "\r\n");

	// Send
	mail("coreywu0@mailinator.com", $subject, $header . $message);
?>