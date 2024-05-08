<?php
$dsn = "mysql:host=localhost:3307;dbname=imdb";
$user = 'root';
$password = 'YAOshawjie122002@';

try {
	$pdo = new PDO($dsn, $user, $password);   
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 

	$first_name = $_GET['firstname'];         
	$store_first_name = $first_name;         
	$fname = $pdo->quote($first_name .= "%"); 

	$store_last_name = $_GET['lastname'];           
	$lname = $pdo->quote($store_last_name);         
} 

catch (PDOException $ex) {
	echo "Connection failed: " .$ex->getMessage();
}

function searchActorID($fname, $lname, $pdo, $store_first_name, $store_last_name){
	$query_actorID = $pdo->query("SELECT id AS ActorID FROM actors WHERE first_name LIKE $fname AND last_name = $lname ORDER BY film_count DESC, id ASC LIMIT 1;");          
	$result = '';
	
	while($value = $query_actorID->fetch()) {
		$result = $value["ActorID"];		
	}

	if($result != '' ){ 
		$actorID = $pdo->quote($result);
	}

	else{ 
?>
	<p>Actor <?= $store_first_name ." " .$store_last_name ?> not found</p>
<?php 
	$actorID = '0';
	}
	return $actorID;
	}

?>
