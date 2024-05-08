<?php
	if (!empty($_POST['name']) && !empty($_POST['password'])) {
		$username = $_POST['name'];
		$password = $_POST['password'];

		$setUsername = "student number";
		$setPassword = "12345";

		if ($username === $setUsername && $password === $setPassword) {
			session_start();
			$_SESSION['name'] = $username;

			header("Location: todolist.php");
			exit();
		} 
		
		else {
			header("Location: index.php?error=1");
			exit();
		}
	}

	else {
		http_response_code(400);
		exit();
	}
?>