<?php
	if(isset($_GET["term"]) && isset($_GET["all"])) {
		xmldata();
	}else if(isset($_GET["author"])){
		jsondata();
	}else if(isset($_GET["term"])){
		topdef();
	}else{
		header("HTTP/1.1 401 Invalid Request");
		die("Invalid Request");
	}

	function topdef() {
		$term = strtolower($_GET["term"]);
		if (strcmp($term, "api") == 0){		
			$string =' 
				
			  An API is a series of functions that programs can use to make the operating system do their dirty work. Using Windows APIs, for example, a program can open windows, files, and message boxes--as well as perform more complicated tasks--by passing a single instruction. Windows has several classes of APIs that deal with telephony, messaging, and other issues.
					
			';
			echo $string;
		}else if (strcmp($term, "bling") == 0) {
			$string = '
							Jamaican slang that has been adopted by some African American rappers and inserted into popular culture. The term "Bling Bling" refers to the imaginary "sound" that is produced from light reflected by a diamond. See The Silvertones "Bling Bling Christmas" for the earliest known usage of the slang.
			';
			echo $string;
		}else if (strcmp($term, "booyah") == 0) {
			$string = '
							Used in order to abruptly express great joy, usually brought on by victory or some other sort of accomplishment. 
			';
			echo $string;
		}else if(strcmp($term, "fnord") == 0) {
			$string = '
							A fnord is a propaganda word conditioned in the masses from a very young age to respond to, usually with fear, anxiety, or uneasiness, but unable to be seen by the general populace. (This definition originates in the Illuminatus trilogy of books by Robert Shea and Robert Anton Wilson.) Sometimes it is used in a sentence to denote a general conspiracy (often jokingly), or sometimes it is used for no reason, especially by Discordians fnord.
			';
			echo $string;
		}else{		
			header("HTTP/1.1 410 Invalid Request");
			echo "Entry Not Found";
		}
	}

	function xmldata() {
		$term = strtolower($_GET["term"]);
		$all = $_GET["all"];
		header("Content-type: text/xml");
		if (strcmp($term, "api") == 0) {		
			$string =' 
				<entries term="API">
					<entry author="Nathanmx" submitted="May 26, 2004">
						<definition>
						  An API is a series of functions that programs can use to make the operating system do their dirty work. Using Windows APIs, for example, a program can open windows, files, and message boxes--as well as perform more complicated tasks--by passing a single instruction. Windows has several classes of APIs that deal with telephony, messaging, and other issues.
						</definition>
						<example>
						  Windows uses an api called the Win32 API. You can access many command via the command prompt. Start >> Run >> Type in "command" or "cmd"
						</example>
					</entry>
					<entry author="Wolfy" submitted="July 23, 2010">
						<definition>
						  Active pharmaceutical ingredient. The part of a drug that causes the effect.
						</definition>
						<example>
						  The API of aspirine is acetylsalicylic acid.
						</example>
					</entry>
					<entry author="Tyler Menezes" submitted="October 24, 2007">
						<definition>
						  Adaptive Pie Interface. Used by various sites to interact with their pie servers. Urban Dictionary, for example, has created APIs so that developers with no pie servers of their own my serve pies to customers at low rates.
						</definition>
						<example>
						  $urb = new Urban::API; 
						  $urb->ServePie("me"); 
						  $urb->ThankYou(); 
						</example>
					</entry>
				</entries>     
			';
			echo $string;
		}else if (strcmp($term, "bling") == 0) {
			$string = '
				<entries term="bling">
					<entry author="Nathanmx" submitted="October 24, 2003">
						<definition>
							Jamaican slang that has been adopted by some African American rappers and inserted into popular culture. The term "Bling Bling" refers to the imaginary "sound" that is produced from light reflected by a diamond. See The Silvertones "Bling Bling Christmas" for the earliest known usage of the slang.
						</definition>
						<example>
							This "bling bling" shit has been done to death.
						</example>
					</entry>
					<entry author="Wolfy" submitted="December 02, 2002">
						<definition>
							flashy or gaudy jewelry, named for the sound generated when worn.
						</definition>
						<example>
							"Oh shit I forgot my bling!"
						</example>
					</entry>
				</entries>
			';
			echo $string;
		}else if (strcmp($term, "booyah") == 0) {
			$string = '
				<entries term="booyah">
					<entry author="bodhicide" submitted="December 02, 2003">
						<definition>
							Used in order to abruptly express great joy, usually brought on by victory or some other sort of accomplishment. 
						</definition>
						<example>
							Fred Hoiberg crosses up Gary Payton... goes baseline and throws it down on Shaq... BOOYAH!!!
						</example>
					</entry>
					<entry author="Lady Chevalier" submitted="March 09, 2003">
						<definition>
							Slang term from the early 1990s meaning roughly "OH YEAH!" or "IN YOUR FACE!" or "THERE WE GO!"
						</definition>
						<example>
							1. He iss going up for the dunk..and BOOYAH!!! 

							2. (Just won a game of Monopoly) "BOOYAH!!"
						</example>
					</entry>
				</entries>
			';
			echo $string;
		}else if(strcmp($term, "fnord") == 0) {
			$string = '
				<entries term="fnord">
					<entry author="bodhicide" submitted="January 17, 2005">
						<definition>
							A fnord is a propaganda word conditioned in the masses from a very young age to respond to, usually with fear, anxiety, or uneasiness, but unable to be seen by the general populace. (This definition originates in the Illuminatus trilogy of books by Robert Shea and Robert Anton Wilson.) Sometimes it is used in a sentence to denote a general conspiracy (often jokingly), or sometimes it is used for no reason, especially by Discordians fnord.
						</definition>
						<example>
							I heard that David Koresh is sharing an apartment in Argentina with Hitler fnord.
						</example>	
					</entry>
					<entry author="Lady Chevalier" submitted="March 23, 2005">
						<definition>
							A word placed randomly in sentences, purported to instill fear or uneasiness in the reader. Its use generally references a conspiracy or parody thereof. 

							Popularised by the Illuminatus! trilogy by Roberts Shea and Winston. 

							Not to be confused with fjord, those elegant creations of Slartibartfast from the Hitchhiker\'s Guide "Trilogy."					
						</definition>
						<example>
							Fnord is evaporated herbal tea without the herbs.
						</example>
					</entry>
					<entry author="Wolfy" submitted="June 06, 2004">
						<definition>
							Fnord is a metasyntactic variable. Strictly, a variable used in metasyntax, but often used for any name used in examples and understood to stand for whatever thing is under discussion, or any random member of a class of things under discussion.My fnord seems to be flying away.....
						</definition>
						<example>
							My fnord seems to be flying away.....
						</example>
					</entry>
				</entries>
			';
			echo $string;
		}else{		
			header("HTTP/1.1 410 Invalid Request");
			echo "<error>Entry Not Found</error>";
		}
	}

	function jsondata() {
		$author = $_GET["author"];
		header("Content-Type: application/json");
		if (strcmp($author, "Wolfy") == 0){
			$string["author"] = "Wolfy";
			$string["dictionary"] = "Urban Dictionary";
			$string["entries"] = array(
				array("term" => "API", "number" => 3, "submitted" => "July 23, 2010"),
				array("term" => "fnord", "number" => 3, "submitted" => "June 6, 2004"),
				array("term" => "kardash", "number" => 2, "submitted" => "December, 26, 2011"),
				array("term" => "The Neverending Story", "number" => 3, "submitted" => "February 28, 2009")
			);
			echo json_encode($string, JSON_PRETTY_PRINT);
		}else if (strcmp($author, "Lady Chevalier") == 0){
			$string["author"] = "Lady Chevalier";
			$string["dictionary"] = "Urban Dictionary";
			$string["entries"] = array(
				array("term" => "bling", "number" => 3, "submitted" => "March 2, 2003"),
				array("term" => "fnord", "number" => 3, "submitted" => "March 23, 2005"),
				array("term" => "hoopty", "number" => 2, "submitted" => "March 18, 2004")
			);
			echo json_encode($string, JSON_PRETTY_PRINT);
			
		}else{
			header("HTTP/1.1 410 Invalid Request");
			$string["error"] = "Entry Not Found";
			echo json_encode($string, JSON_PRETTY_PRINT);
		}
	}
?>
