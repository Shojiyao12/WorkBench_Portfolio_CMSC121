<?php 
	include "shared.php"; 
	session_start();
	top();
?>
	<div id="main">
		<h2>&emsp;<?= $_SESSION["name"] ?>'s To-Do List</h2>				  
		<ul id="todolist"></ul>
		<div id="buttons">
			&emsp;&ensp;<input id="itemtext" type="text" size="30" autofocus="autofocus" />
			<button id="add">Add to Bottom</button>
			<button id="delete">Delete Top Item</button>
		</div>
		
		<ul>
			<li><a href="logout.php">Log Out</a></li>
		</ul>
	</div>	
<?php bottom(); ?>