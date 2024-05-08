<?php
include("top.html");
include("common.php");
	$actorID = searchActorID($fname, $lname, $pdo, $store_first_name, $store_last_name); 
	if($actorID != '0'){
		$query_actorofmovie = $pdo->query("SELECT ROW_NUMBER() OVER(ORDER BY year DESC), name, year FROM roles JOIN actors ON actors.id = roles.actor_id JOIN movies ON movies.id = roles.movie_id WHERE actors.id = $actorID;");
?>
		<h1>Results for <?= $store_first_name ." " .$store_last_name ?></h1>
		<p>All films</p>
		<table>
			<tr>
				<th class="in_column">#</th>
				<th>Title</th>
				<th class="in_column">Year</th>
			</tr>

	<?php
		while($list = $query_actorofmovie->fetch()) {			
	?>
			<tr>
				<td class="in_column"><?= $list["ROW_NUMBER() OVER(ORDER BY year DESC)"] ?></td>
				<td><?= $list["name"] ?></td>
				<td class="in_column"><?= $list["year"] ?></td>
			</tr>
	<?php
		}
	?>
		</table>
	<?php

	}
	include("bottom.html") 
	?>
