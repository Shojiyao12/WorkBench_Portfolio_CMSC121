<?php include "shared.php"; 
	top();
?>
	<div id="main">
		<p> 
			&emsp;The best way to manage your tasks. <br/>
			&emsp;Never forget the cow (or anything else) again!
		</p>
		
		<p>
			&emsp;Log in now to manage your to-do list:
		</p>

		<form id="loginform" action="login.php" method="post">
			<div>&emsp;<input id="name" name="name" type="text" size="12" autofocus="autofocus" /> <strong>User Name</strong></div>
			<div>&emsp;<input id="password" name="password" type="password" size="12" /> <strong>Password</strong></div>
			<div>&emsp;<input id="submitbutton" type="submit" value="Log in" /></div><br/>
		</form>
	</div>
		 
<?php
	if (isset($_GET['error']) && $_GET['error'] == 1) {
		echo '<p style="color: red; font-weight: bold;">Incorrect user name / password. Please try again.</p>';
	}
	
	bottom();
?>