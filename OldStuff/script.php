<html>
<body>
<?php phpinfo(); ?>
<?php
	$host="db.fs.uwaterloo.ca";
	$username="clubs-uwrca";
	$password="7xpf9pyshjhy874k";
	$dbname="clubs-uwrca";
	$con=mysqli_connect($host,$username,$password,$dbname);
	
	// Check connection
	//if (mysql_connect_errno()) {
	//	echo "Failed to connect to MySQL: " . mysqli_connect_error();
	//}
	
	// Create database
	$sql = "DROP TABLE Persons";
	if (mysqli_query($con, $sql)) {
		echo "Database SignUp dropped successfully";
	} else {
		echo "Error creating database: " . mysqli_error($con);
	}

	mysqli_close($con);

?>

</body>
</html>