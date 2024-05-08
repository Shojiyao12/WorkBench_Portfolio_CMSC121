<?php 
include("top.html");
include("common.php");
	$actorID = searchActorID($fname, $lname, $pdo, $store_first_name, $store_last_name); 
	$kevinBaconID = getKevinID($pdo);                                        

	if($actorID != '0'){
		$rows = $pdo->query("SELECT ROW_NUMBER() OVER(ORDER BY year DESC), name, year 
									FROM movies
									JOIN roles AS actor_role ON movies.id = actor_role.movie_id
									JOIN actors AS actor ON actor_role.actor_id = actor.id
									JOIN roles AS bacon_role ON movies.id = bacon_role.movie_id
									JOIN actors AS kevin_bacon ON bacon_role.actor_id = kevin_bacon.id
									WHERE kevin_bacon.id = $kevinBaconID
									AND actor.id = $actorID
									AND actor_role.movie_id = bacon_role.movie_id;");
		$tot_results = $rows->rowCount(); 
		
		if($tot_results > 0 ){ 
?>
			<h1>Results for <?= $store_first_name ." " .$store_last_name ?></h1>
			<p>Films with <?= $store_first_name ." " .$store_last_name ?> and Kevin Bacon</p>
			<table>
  				<tr>
    				<th class="in_column">#</th>
    				<th>Title</th>
    				<th class="in_column">Year</th>
  				</tr>
<?php
			while($lists = $rows->fetch()) {			
?>
				<tr>
    				<td class="in_column"><?= $lists["ROW_NUMBER() OVER(ORDER BY year DESC)"] ?></td>
    				<td><?= $lists["name"] ?></td>
    				<td class="in_column"><?= $lists["year"] ?></td>
  				</tr>
<?php
			}
?>
			</table>
<?php
		}
		else{ 
?>
			<p>Actor <?= $store_first_name ." " .$store_last_name ?> wasn't in any films with Kevin Bacon</p>
<?php 
		}
	}
function getKevinID($pdo){
	$query_KevinID = $pdo->query("SELECT actors.id AS KevinID FROM actors WHERE actors.first_name = 'Kevin' AND actors.last_name = 'Bacon';");
										  
	while($list = $query_KevinID->fetch()) {
		$result = $list["KevinID"];		
	}
	$kevinID = $pdo->quote($result);
	return $kevinID;
}
include("bottom.html") 
?>