<?php
# CSE 190 M, Spring 2009 (Marty Stepp)
# This web service serves up student assignment turnin time data as XML.

$DUE_DATES = array(
	"hw0" => "Wed Apr 8",
	"hw1" => "Wed Apr 8",
	"hw2" => "Wed Apr 15",
	"hw3" => "Wed Apr 22",
	"hw4" => "Wed Apr 29",
	"hw5" => "Wed May 6",
	"hw6" => "Wed May 13"
);

$REQUEST = $_SERVER["REQUEST_METHOD"] == "POST" ? $_POST : $_GET;

if ($_SERVER["REQUEST_METHOD"] == "GET") {
	if (isset($_REQUEST["delay"])) {
		# for debugging; makes the service delay for a given number of seconds to test 'loading' animations
		$delay = max(0, min(60, (int) filter_chars($_REQUEST["delay"])));
		if ($delay > 0) {
			sleep($delay);
		}
	}

	if (has_param("assignment")) {
		$assignment = get_param("assignment");
		$assignment = preg_replace("/[^A-Za-z0-9_-]+/", "", $assignment);   # filter bad characters

		if (!$assignment || strlen($assignment) > 4 || 
				!is_dir("___$assignment") || !isset($DUE_DATES[$assignment])) {
			http_error(400, "HTTP/1.1 ERROR 400 - Invalid Request: Illegal assignment specified");
		}

		$turnin_forms = glob("___$assignment/M*/*/*form*.txt");
		srand(42);
		shuffle($turnin_forms);
		
		# random IDs for each student, just so that the service has more data
		$ids = array();
		for ($i = 0; $i < count($turnin_forms); $i++) {
			$ids[] = $i;
		}
		shuffle($ids);
		
		header("Content-type: application/xml");
		print "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
		print "<assignment name=\"$assignment\">\n";
		print "    <course name=\"CSE 190 M\" />\n\n";
		print "    <due>\n";
		print "        <date>{$DUE_DATES[$assignment]}</date>\n";
		print "        <time>11:30pm</time>\n";
		print "    </due>\n\n";
		print "    <submissions>\n";
		
		foreach ($turnin_forms as $form) {
			# get turnin date of form
			$id = array_pop($ids);
			foreach (file($form, FILE_IGNORE_NEW_LINES) as $line) {
				# "TIMESTAMP = 14:38:39 PDT, Wednesday, Apr 8, 2009"
				if (strpos($line, "TIMESTAMP = ") !== FALSE) {
					# "14:38 Wednesday, Apr 8, 2009"
					$line = trim(substr($line, 12));
					$line = preg_replace("/:\d{2} P[DS]T, /", " ", $line);

					# "Wednesday, Apr 8, 2009, 14:38"
					$line = preg_replace("/^(\d{2}:\d{2}) (.*)$/", "$2, $1", $line);
					$timeint = strtotime($line);
					# printf("line=\"$line\", TIMEINT=$timeint\n");
					
					$datestamp = date("D M j", $timeint);
					$timestamp = date("g:ia", $timeint);
					
					$duedate = $DUE_DATES[$assignment];
					$lateness = floor((strtotime($datestamp) - strtotime($duedate)) / 86400.0);
					$lateness = max(0, $lateness);
					
					print "        <submission studentid=\"$id\">\n";
					print "            <date lateness=\"$lateness\">$datestamp</date>\n";
					print "            <time>$timestamp</time>\n";
					print "        </submission>\n";
					break;
				}
			}
		}
		print "    </submissions>\n";
		print "</assignment>\n";
	}
	else {
		# no assignment specified...
		# header("Content-type: text/plain");
		# print "6\n";
		http_error(400, "HTTP/1.1 ERROR 400 - Invalid Request: No assignment specified");
	}
}



function check_params($params) {
	# allow calling as a varargs function
	if (!is_array($params)) {
		$params = func_get_args();
	}
	
	foreach ($params as $param) {
		if (!has_param($param)) {
			http_error(400, "HTTP/1.1 400 Invalid Request: missing required parameter $param");
		}
	}
}

# Returns the given parameter from the GET/POST array,
# with any unsafe characters stripped out.
function get_param($name) {
	global $REQUEST;
	if (!has_param($name)) {
		return NULL;
	}
	return htmlspecialchars($REQUEST[$name]);
}

# Returns TRUE if the REQUEST parameters contains the given parameter.
function has_param($name) {
	global $REQUEST;
	return array_key_exists($name, $REQUEST);
}

function http_error($code, $message) {
	$HTTP_ERROR_MESSAGES = array(
		400 => "HTTP/1.1 400 Invalid request",
		403 => "HTTP/1.1 403 Forbidden",
		404 => "HTTP/1.1 404 File not found",
		500 => "HTTP/1.1 500 Internal server error"
	);

	if ($HTTP_ERROR_MESSAGES && array_key_exists((int) $code, $HTTP_ERROR_MESSAGES)) {
		header("HTTP/1.1 $code {$HTTP_ERROR_MESSAGES[$code]}");
	} else {
		header("HTTP/1.1 $code Error");
	}
	die("$message\n");
}
?>
