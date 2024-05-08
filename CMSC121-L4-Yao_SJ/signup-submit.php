<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<!-- Web Programming Step by Step, Homework 4 (NerdLuv) -->
	<!-- shared page top HTML -->
	<head>
		<title>NerdLuv</title>
		<meta charset="utf-8"/>
		<!-- instructor-provided CSS and JavaScript links; do not modify -->
		<link href="heart.gif" type="image/gif" rel="shortcut icon"/>
		<link href="nerdluv.css" type="text/css" rel="stylesheet"/>
	</head>
	<body>
		<?php 
			$name = $_POST["name"];
			$gender = $_POST["gender"];
			$age = $_POST["age"];
			$Ptype = $_POST["Ptype"];
			$favOS = $_POST["FavOS"];
			$minimumAge = $_POST["Seekingagemin"];
			$maximumAge = $_POST["Seekingagemax"];
			$Adduser ="$name,$gender,$age,$Ptype,$favOS,$minimumAge,$maximumAge";

			file_put_contents("singles.txt", $Adduser . PHP_EOL, FILE_APPEND);
			include("top.html"); 
		?>
		
		<strong>Thank you!</strong><br/><br/> Welcome to NerdLuv, <?=$name?>!<br/><br/>
		Now <a href="matches.php">login to see your matches</a><br/><br/>
		
		<?php include("bottom.html"); ?>
	</body>
</html>