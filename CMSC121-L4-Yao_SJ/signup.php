<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <!-- Web Programming Step by Step, Homework 4 (NerdLuv) -->
    <!-- shared page top HTML -->
    <head>
        <title>NerdLuv</title>
        <meta charset="utf-8" />

        <!-- instructor-provided CSS and JavaScript links; do not modify -->
        <link href="heart.gif" type="image/gif" rel="shortcut icon" />
        <link href="nerdluv.css" type="text/css" rel="stylesheet" />

    </head>
    <body>
		<?php include("top.html"); ?>
        <form action="signup-submit.php" method="post">
        
		<fieldset>
			<legend>New User Signup:</legend>
			
			<strong>Name:</strong> <input type="text" name="name" size="16" /><br/><br/>
			
			<strong>Gender:</strong> <input type="radio" name="gender" value="Male" />Male
					<input type="radio" name="gender" value="Female" /> Female<br/><br/>
			<strong>Age:</strong> <input type="text" name="age" size="6" maxlength="2"><br/><br/>
			
			<strong>Personality Type:</strong> <input type="text" name="Ptype" size="6" maxlength="4" /> (<a href="http://www.humanmetrics.com/cgi-win/JTypes2.asp">Don't know your type?</a>)<br/><br/>
	
			<strong>Favorite OS:</strong> <select name="FavOS">
			<option value="Windows">Windows</option>
			<option value="Mac OS X">Mac OS X</option>
			<option value="Linux">Linux</option></select>
			<br/><br/>
			
			<label>
				<strong>Seeking Age:</strong> <input type="text" name="Seekingagemin" size="6" maxlength="2" placeholder="min"> to
				<input type="text" name="Seekingagemax" size="6" maxlength="2" placeholder="max"><br/><br/>
			</label>
			<input type="submit" value="Sign Up">
		</fieldset>
		
		<?php include("bottom.html"); ?>

        </form>
    </body>
</html>