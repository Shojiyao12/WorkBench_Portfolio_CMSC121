<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<!-- Web Programming Step by Step, Homework 4 (NerdLuv) -->
	<!-- shared page top HTML -->
	<head>
		<title>NerdLuv</title>
		<meta charset="utf-8"/>
		<!-- instructor-provided CSS and JavaScript links; do not modify -->
		<link href="heart.gif" type="image/gif" rel="shortcut icon"/>
		<link href="nerdluv.css" type="text/css" rel="stylesheet"/>
	</head>
	<body>
	<?php include("top.html"); ?>
	<div class = "match">
        <h1>Matches for <?php echo $_GET["name"]; ?></h1>
    
    
    <?php
        function sameLetter($common1, $common2) { 
            for ($i = 0; $i < strlen($common1); $i++) {
                if (strpos($common2, $common1[$i]) !== false) {
                    return true;
                }
            }
            return false;
        }
		
        $singlesFile = file("singles.txt");   
        $userInfo = []; 
		
		foreach ($singlesFile as $one) {	   
			$removedInfo = explode(",", $one); 
			if (count($removedInfo) >= 7) {
				$name = $removedInfo[0];
				$gender = $removedInfo[1];
				$age = $removedInfo[2];
				$Ptype = $removedInfo[3];
				$favOS = $removedInfo[4];
				$minimumAge = $removedInfo[5];
				$maximumAge = $removedInfo[6];
				
				if ($name == $_GET["name"]) {
					$userInfo = [$name, $gender, $age, $Ptype, $favOS, $minimumAge, $maximumAge];
					break;
				}
			}
		}
        
        foreach ($singlesFile as $one) { 
			$removedInfo = explode(",", $one); 
			
			if (count($removedInfo) >= 7) {
				$name = $removedInfo[0];
				$gender = $removedInfo[1];
				$age = $removedInfo[2];
				$Ptype = $removedInfo[3];
				$favOS = $removedInfo[4];
				$minimumAge = $removedInfo[5];
				$maximumAge = $removedInfo[6];
            
				if (
					$gender !== $userInfo[1] &&                
					$age >= $userInfo[5] && $age <= $userInfo[6] &&
					$userInfo[2] >= $minimumAge && $userInfo[2] <= $maximumAge &&
					$favOS === $userInfo[4] &&                   
					sameLetter($Ptype, $userInfo[3]))    
					
				{?>
					
					<p><?php echo $name; ?><img src="user.jpg" alt="<?php echo $name; ?>"/></p>	
					
					<ul>
						<li><strong>gender:</strong> <?php echo $gender; ?></li>
					    <li><strong>age:</strong> <?php echo $age; ?></li>
					    <li><strong>type:</strong> <?php echo $Ptype; ?></li>
						<li><strong>OS:</strong> <?php echo $favOS; ?></li>
					</ul>
							
				<?php
				}
			}
		}
    ?>
    </div>
	
	<?php include("bottom.html"); ?>
	
	</body>
</html>