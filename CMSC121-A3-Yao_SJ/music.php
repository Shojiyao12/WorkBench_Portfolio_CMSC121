<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Music Viewer</title>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link href="http://www.cs.washington.edu/education/courses/cse190m/09sp/labs/3-music/viewer.css" type="text/css" rel="stylesheet" />
</head>

<body>
	<?php
		$songLists = [];
		$favorites = [];
		
		$shuffle = isset($_GET['shuffle']) && $_GET['shuffle'] === 'on';
		$bysize = isset($_GET['bysize']) && $_GET['bysize'] === 'on';

		if (isset($_REQUEST["playlist"])) {
			$playlist = $_REQUEST["playlist"];
			$playlistPath = "songs/" . $playlist;

			if (file_exists($playlistPath)) {
				$playlistContents = file($playlistPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
				foreach ($playlistContents as $content) {
					if (pathinfo($content, PATHINFO_EXTENSION) === 'txt') {
						$favorites[] = $content;
					} 
			
					else {
						$songLists[] = $content;
					}
				}
			}
		} 

		else {
			$showAll = "songs/";
			$songLists = glob($showAll . "*.mp3");
			$favorites = glob($showAll . "*.txt");

			$songLists = array_map('basename', $songLists);
			$favorites = array_map('basename', $favorites);
			
			if ($shuffle) {
            shuffle($songLists);
			}
		
			if ($bysize) {
            usort($songLists, function ($a, $b) {
                return filesize("songs/" . $b) - filesize("songs/" . $a);
            });
        }
		}
	?>
	 <div id="header">
        <h1>190M Music Playlist Viewer</h1>
        <h2>Search Through Your Playlists and Music</h2>
		<a href="music.php">Go back to all songs.</a>
    </div>

    <div id="listarea">
        <ul id="musiclist">
            <?php
            foreach ($songLists as $songList) {
                $findSong = "songs/" . $songList;
                $displaySize = filesize($findSong);
                if ($displaySize < 1024) {
                    $sizeFormat = $displaySize . ' b';
                } 
				
				elseif ($displaySize < 1048575) {
                    $sizeFormat = round($displaySize / 1024, 2) . ' kb';
                } 
				
				else {
                    $sizeFormat = round($displaySize / 1048576, 2) . ' mb';
                }
                echo '<li class="' . (is_dir($songList) ? 'playlistitem' : 'mp3item') . '"><a href="' . $findSong . '">' . $songList . ' <span style="color: black;">(' . $sizeFormat . ')</span></a></li>';
            }
            
            foreach ($favorites as $favorite) {
                $findSong = "songs/" . $favorite;
                echo '<li class="playlistitem"><a href="' . $findSong . '">' . $favorite . ' </a></li>';
            }
            ?>
        </ul>
    </div>
</body>
</html>