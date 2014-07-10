<?php
	$host = "db.fs.uwaterloo.ca";
	$username = "clubs-uwrca";
	$password = "7xpf9pyshjhy874k";
	$dbname = "clubs-uwrca";
	$con = mysqli_connect($host,$username,$password,$dbname);

	// Check connection
	//if (mysql_connect_errno()) {
	//	echo "Failed to connect to MySQL: " . mysqli_connect_error();
	//}

	// Create database
	//$sql = "CREATE DATABASE IF NOT EXISTS SignUp";
	//if (mysqli_query($con, $sql)) {
	//	echo "Database SignUp created successfully";
	//} else {
	//	echo "Error creating database: " . mysqli_error($con);
	//}

	// Create table
	$sql = "CREATE TABLE IF NOT EXISTS Persons(
		PID INT NOT NULL AUTO_INCREMENT,
		PRIMARY KEY(PID),
		FirstName CHAR(30), 
		LastName CHAR(30), 
		StudentId INT(8),
		Program CHAR(30),
		Email CHAR(30))";

	// Execute query
	if (mysqli_query($con,$sql)) {
		echo "Table Persons created successfully <br>";
	} else {
		echo "Error creating table: " . mysql_error($con);
	}

	// Insert person into table
	$sql = "INSERT INTO Persons(FirstName, LastName, StudentId, Program, Email) 
	VALUES ('$_POST[firstName]', '$_POST[lastName]', '$_POST[studentId]', '$_POST[program]', '$_POST[email]')";

	// Execute query
	if (!mysqli_query($con,$sql)) {
  		die('Error: ' . mysqli_error($con));
 	}
	echo "1 record added <br>";

	$result = mysqli_query($con,"SELECT * FROM Persons");

	while($row = mysqli_fetch_array($result)) {
 		echo $row['FirstName'] . " " . $row['LastName'] . " " . $row['StudentId'] . " " . $row['Program'] . " " . $row['Email'];
 		echo "<br>";
  	}

	mysqli_close($con);
?>