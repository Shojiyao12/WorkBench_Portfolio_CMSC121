<?php
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$postData = file_get_contents("php://input");
		$postData = json_decode($postData, true);

		if (isset($postData['todolist']) && isset($postData['todolist']['items'])) {
			$todoList = $postData['todolist'];
			file_put_contents("list.json", json_encode($todoList));
			http_response_code(200); 
		} 
		
		else {
			http_response_code(400); 
		}
	} 

	else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
		if (file_exists("list.json")) {
			$listContents = file_get_contents("list.json");
			echo $listContents;
		} 
		
		else {
			http_response_code(204); 
		}
	} 

	else {
		http_response_code(405); 
	}
?>
