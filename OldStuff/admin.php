<html>
<body>
<?php
	$host = "db.fs.uwaterloo.ca";
	$username = "clubs-uwrca";
	$password = "7xpf9pyshjhy874k";
	$dbname = "clubs-uwrca";
	$con = mysqli_connect($host,$username,$password,$dbname);

	if (mysqli_connect_errno()) {
  		echo "Failed to connect to MySQL: " . mysqli_connect_error();
 	}

	$result = mysqli_query($con,"SELECT * FROM Persons");

	echo "<table border='1'>
	<tr>
	<th>Firstname</th>
	<th>Lastname</th>
	<th>Student Id</th>
	<th>Program</th>
	<th>Email</th>
	</tr>";

	while($row = mysqli_fetch_array($result))
  	{
  	echo "<tr>";
 	echo "<td>" . $row['FirstName'] . "</td>";
 	echo "<td>" . $row['LastName'] . "</td>";
 	echo "<td>" . $row['StudentId'] . "</td>";
	echo "<td>" . $row['Program'] . "</td>";
 	echo "<td>" . $row['Email'] . "</td>";
 	echo "</tr>";
 	}
	echo "</table>";

	mysqli_close($con);
?>

</body>
</html>