<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<!-- Note: Skeleton html was taken from url=(0079)https://courses.cs.washington.edu/courses/cse190m/10su/homework/2/skeleton.html -->
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<title>Rancid Tomatoes</title>
		<link href="movie.css" type="text/css" rel="stylesheet"/>
		<link rel="icon" type="image/x-icon" href="rotten.gif"/>
	</head>
	<body>
		<div id="background">
			<div id="head-banner">
				<img src="banner.png" alt="Rancid Tomatoes"/>
			</div>
		</div>
		
		<?php 
		if(isset($_GET["film"])) {
			$movie = $_GET["film"];
			$infotxtLoc = $movie . '/info.txt';
			$info = file($infotxtLoc, FILE_IGNORE_NEW_LINES);
			$title = $info[0];
			$year = $info[1];
			$overallrating = $info[2];

			$overviewImgLoc = $movie. '/overview.png';
			$overviewtxtLoc = $movie. '/overview.txt';
			$overviewNewLines = file($overviewtxtLoc, FILE_IGNORE_NEW_LINES);
			$txtReview = glob("$movie/review*.txt");
		?>
		
		<h1>
			<?= $title; ?> (<?= $year; ?>)
		</h1>
		
		<div id="info">
			<div id="overview">
				<img src=<?= $overviewImgLoc;?> alt="general overview"/>
			</div>
			
			<div id="role">
				<dl>
				<?php
					foreach ($overviewNewLines as $newline) {
						list($title, $content) = explode(':', $newline, 2);
						$title = trim($title);
						$content = trim($content);

						echo "<dt>$title</dt>";
						echo "<dd>$content</dd>";
					}
				?>
				</dl>
			</div>
			
			<div id="rottenlogo">
				<div id="icon">
					<?php
						if ($overallrating >= 60) {
							echo '<img src="freshbig.png" alt="Fresh" />';
						} 
						
						else {
							echo '<img src="rottenbig.png" alt="Rotten" />';
						}
					?>
		
					<span id="percentage"><?= $overallrating; ?>%</span>
				</div>
			</div>
			
			<div id="user-review">
				<?php
					$ReviewNum = count($txtReview);
					$ReviewNumPerColumn = ceil($ReviewNum / 2);

					$countLeftcolumn = 0;
					$countRightcolumn = 0;

					foreach ($txtReview as $checkReviews) {
						$LinePerReview = file($checkReviews, FILE_IGNORE_NEW_LINES);

						$ReviewEachtxt = $LinePerReview[0];
						$overallrating = trim($LinePerReview[1]);
						$CriticName = $LinePerReview[2];
						$media = $LinePerReview[3];

						$column = ($countLeftcolumn < $ReviewNumPerColumn) ? 'left' : 'right';
						$overallratingImage = ($overallrating === 'FRESH') ? 'fresh.gif' : 'rotten.gif';
						
						echo "<div class='$column-column' style='overflow: hidden;'>";
						echo "<p class = 'critic'> <img src='$overallratingImage' alt='$overallrating' /><q>$ReviewEachtxt</q></p>";
						echo "<p class = 'writer'><img src='critic.gif' alt='critic'/>$CriticName <br/> <span class = 'source'>	$media</span></p>";
						echo "</div>";

						if ($column === 'left') {
							$countLeftcolumn++;
						} 
					
						else {
							$countRightcolumn++;
						}
					}
				?>
			</div>

			<div id='current-page'>
				<p class = "page">(1 - <?=$ReviewNum?>) of <?=$ReviewNum?></p>
			</div>
		</div>
		
		<div class="validator">
			<a href="https://validator.w3.org/#validate_by_uri"><img src="w3c-xhtml.png" alt="Valid XHTML 1.1"/> </a> <br/>
			<a href="https://jigsaw.w3.org/css-validator/#validate_by_uri+with_options"><img src="w3c-css.png" alt="Valid CSS!"/></a>
		</div>
		
		<?php } ?>
	</body>
</html>