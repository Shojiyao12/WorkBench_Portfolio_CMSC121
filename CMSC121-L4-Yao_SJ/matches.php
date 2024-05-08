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
		<?php include("top.html"); ?>
		<form action="matches-submit.php" method="GET">
		
		<fieldset>
			<legend>Returning User:</legend>
			Name: <input type="text" name="name"required size="16"/> <br/> <br/>
				<input type="submit" value="View my Matches">
		</fieldset>
		<br/><br/>
		
		</form>
		<?php include("bottom.html"); ?>
	</body>
</html>
