<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>Buy Your Way to a Better Education!</title>
        <link href="http://www.cs.washington.edu/education/courses/cse190m/09sp/labs/4-buyagrade/buyagrade.css" type="text/css" rel="stylesheet" />
    </head>

    <body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if (isset($_REQUEST["name"]) && !empty($_REQUEST["name"]) &&
		isset($_REQUEST["section"]) && !empty($_REQUEST["section"]) &&
		isset($_REQUEST["cardnumber"]) && !empty($_REQUEST["cardnumber"])&&
		isset($_REQUEST["cardtype"]) && !empty($_REQUEST["cardtype"])) {
			$name = $_POST["name"];
			$section = $_POST["section"];
			$cardnumber = $_POST["cardnumber"];
			$cardtype = $_POST["cardtype"];
			
			
    ?>
			<h1>Thanks, sucker!</h1>

			<p>Your information has been recorded.</p>

			<dl>
				<dt>Name</dt>
				<dd><?=$name?></dd>

				<dt>Section</dt>
				<dd><?=$section?></dd>

				<dt>Credit Card</dt>
				<dd><?=$cardnumber?>(<?=$cardtype?>)</dd>
			</dl>
		
			<p>Here are all the suckers who have submitted here:</p>
		
			<?php   $dataToSave = "$name;$section;$cardnumber;$cardtype\n";
					file_put_contents("suckers.txt", $dataToSave, FILE_APPEND | LOCK_EX);
					echo"<pre>";
					$fileContents = file_get_contents("suckers.txt");
					echo htmlspecialchars($fileContents);
					echo"</pre>";
		}
        
		else{?>
			<h1>Sorry</h1> <br/>
			You didn't fill out the form completely.<a href="buyagrade.html"> Try again?</a>
			<?php
		}
    }
	
    else{
        ?> You didn't provide a valid card number.<a href="buyagrade.html"> Try again?</a> <?php
    } ?>
	
    </body>
</html>