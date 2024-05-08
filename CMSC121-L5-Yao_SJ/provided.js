// Web Programming Step by Step, Homework 5 (Kevin Bacon)
// Instructor-provided JavaScript file
// Please link to this file in a script tag in all of your pages.

(function() {
	// some weird kids don't link to Prototype
	if (typeof(Prototype) === "undefined") {
		document.write('\n<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/prototype/1.7.0.0/prototype.js"><\/script>\n');
	}
	
	// dynamically load the JStep library
	if (typeof(JStep) === "undefined") {
		document.write('\n<script type="text/javascript" src="http://www.webstepbook.com/jstep.js"><\/script>\n');
	}
	
	var windowLoad = function() {
		// only continue if the "grading" query param or cookie is set to a truthy value
		if (typeof($_REQUEST) === "undefined" ||
				(!$_REQUEST["__grading"] || $_REQUEST["__grading"] == "off" || $_REQUEST["__grading"] == "0" || $_REQUEST["__grading"] == "no") && !JStep.Cookie.get("__grading")) {
			return;
		}
		
		if ($_REQUEST["__grading"] && ($_REQUEST["__grading"] == "on" || $_REQUEST["__grading"] == "1" || $_REQUEST["__grading"] == "yes") && !JStep.Cookie.exists("__grading")) {
			JStep.Cookie.set("__grading", "true", 2);
		}
		
		if ($_REQUEST["__grading"] && ($_REQUEST["__grading"] == "off" || $_REQUEST["__grading"] == "0" || $_REQUEST["__grading"] == "no") && JStep.Cookie.exists("__grading")) {
			JStep.Cookie.remove("__grading");
			return;
		}
		
		var ALL_NAMES = [
			["Angelina", "Jolie"],
			// ["Scott 'Carrot Top'", "Thompson", "'Carrot Top'"],   // commenting out because db quote not required this time
			["Chris", "Rock"],
			["Julia", "Roberts"],
			["Kevin", "Spacey"],
			["Ryuichiro", "Baba"],
			["Stuart", "Reges"],
			["Tom", "Cruise"],
			["William", "Shatner"]
		];
		
		var ALL_MOVIES = {};
		ALL_MOVIES["Angelina Jolie"] = [
			"Mr. and Mrs. Smith",
			"101 Biggest Celebrity Oops",
			"52 Most Irresistible Women",
			"76th Annual Academy Awards, The",
			"Alexander",
			"Flying Legion Air Combat Challenge, The",
			"Love and Honor",
			"Shark Tale",
			"Sky Captain and the World of Tomorrow",
			"Taking Lives",
			"Trading Women",
			"Celebrity Naked Ambition",
			"E! 101 Most Shocking Moments in Entertainment History",
			"Lara Croft Tomb Raider: The Cradle of Life",
			"\"Secrets of Superstar Fitness\"",
			"59th Annual Golden Globe Awards, The",
			"Life or Something Like It",
			"\"Rank\"",
			"73rd Annual Academy Awards, The",
			"Lara Croft: Tomb Raider",
			"Original Sin",
			"2000 Blockbuster Entertainment Awards",
			"72nd Annual Academy Awards, The",
			"Gone in Sixty Seconds",
			"AFI's 100 Years... 100 Stars",
			"Bone Collector, The",
			"Girl, Interrupted",
			"Making of 'Girl, Interrupted', The",
			"Pushing Tin",
			"Gia",
			"Hell's Kitchen",
			"Playing by Heart",
			"George Wallace",
			"Playing God",
			"True Women",
			"Foxfire",
			"Love Is All There Is",
			"Mojave Moon",
			"Hackers",
			"Without Evidence",
			"Alice & Viril",
			"Angela & Viril",
			"Cyborg 2",
			"60th Annual Academy Awards, The",
			"58th Annual Academy Awards, The",
			"Lookin' to Get Out"
		];
		
		ALL_MOVIES["'Carrot Top'"] = [
			"\"ComiXspotlight\"",
			"Carrot Top Rocks Las Vegas",
			"Pauly Shore Is Dead",
			"\"I Love the '80s\"",
			"Bros., The",
			"Laughing Out Loud: America's Funniest Comedians",
			"\"Full Mountie\"",
			"\"N.Y.U.K\"",
			"Chairman of the Board",
			"Dennis the Menace Strikes Again",
			"Pure Danger",
			"Spaced Out!"
		];
		
		ALL_MOVIES["Chris Rock"] = [
			"Longest Yard, The",
			"Madagascar",
			"Sick Day",
			"Chris Rock: Never Scared",
			"N-Word, The",
			"Oh, What a Lovely Tea Party",
			"Paparazzi",
			"Head of State",
			"MTV Europe Music Awards 2003",
			"MTV Video Music Awards 2003",
			"Pauly Shore Is Dead",
			"Bad Company",
			"Blink 182: The Urethra Chronicles II: Harder, Faster. Faster, Harder",
			"Bowling for Columbine",
			"Comedian",
			"Inside TV Land: African Americans in Television",
			"NBC 75th Anniversary Special",
			"Sound of 'AI', The",
			"America: A Tribute to Heroes",
			"Artificial Intelligence: AI",
			"Best of Chris Rock: Volume 2",
			"Down to Earth",
			"Headliners & Legends: Chris Rock",
			"Jay and Silent Bob Strike Back",
			"Judge Not: In Defense of Dogma",
			"Osmosis Jones",
			"Pootie Tang",
			"\"Remarkable Journey, The\"",
			"Bamboozled",
			"Me, Myself & Irene",
			"Nurse Betty",
			"Whatever Happened to Micheal Ray?",
			"Best of Chris Rock",
			"Chris Rock: Bigger & Blacker",
			"Dogma",
			"Jackie's Back!",
			"MTV Uncensored",
			"MTV Video Music Awards 1999",
			"Saturday Night Live: 25th Anniversary",
			"Saturday Night Live: The Best of Chris Rock",
			"Torrance Rises",
			"40th Annual Grammy Awards, The",
			"Bad Boys of Saturday Night Live, The",
			"Comic Relief VIII",
			"Doctor Dolittle",
			"Elmopalooza!",
			"Kids Are Punny",
			"Lethal Weapon 4",
			"Saturday Night Live: Game Show Parodies",
			"Saturday Night Live: The Best of Chris Farley",
			"Saturday Night Live: The Best of Phil Hartman",
			"\"Chris Rock Show, The\"",
			"Beverly Hills Ninja",
			"Gift of Song, The",
			"Chris Rock: Bring the Pain",
			"Sgt. Bilko",
			"State of the Union: Undressed",
			"\"Happily Ever After: Fairy Tales for Every Child\"",
			"\"Moxy Show, The\"",
			"Immortals, The",
			"Panther",
			"\"Politically Incorrect\"",
			"Def Comedy Jam: Primetime",
			"CB4",
			"Boomerang",
			"Saturday Night Live: Presidential Bash",
			"New Jack City",
			"\"In Living Color\"",
			"Who Is Chris Rock?",
			"Comedy's Dirtiest Dozen",
			"I'm Gonna Git You Sucka",
			"Beverly Hills Cop II",
			"Uptown Comedy Express",
			"\"Saturday Night Live\""
		];
		
		ALL_MOVIES["Julia Roberts"] = [
			"101 Biggest Celebrity Oops",
			"76th Annual Academy Awards, The",
			"Closer (2004/I)",
			"Ocean's Twelve",
			"Tell Them Who You Are",
			"75th Annual Academy Awards, The",
			"Comic Relief 2003: The Big Hair Do",
			"E! 101 Most Shocking Moments in Entertainment History",
			"Intimate Portrait: Erin Brockovich",
			"Mona Lisa Smile",
			"74th Annual Academy Awards, The",
			"Confessions of a Dangerous Mind",
			"Full Frontal",
			"Grand Champion",
			"73rd Annual Academy Awards, The",
			"America's Sweethearts",
			"America: A Tribute to Heroes",
			"Joan Rivers: The E! True Hollywood Story",
			"Mexican, The",
			"Ocean's Eleven",
			"2000 Blockbuster Entertainment Awards",
			"Erin Brockovich",
			"Ljuset hller mig sllskap",
			"Silent Angels: The Rett Syndrome Story",
			"Spotlight on Location: Erin Brockovich",
			"AFI's 100 Years... 100 Stars",
			"Notting Hill",
			"Runaway Bride",
			"AFI's 100 Years... 100 Movies",
			"In the Wild",
			"Stepmom",
			"Warner Bros. 75th Anniversary: No Guts, No Glory",
			"50,000,000 Joe Franklin Fans Can't Be Wrong",
			"Conspiracy Theory",
			"My Best Friend's Wedding",
			"Elmo Says Boo",
			"Everyone Says I Love You",
			"Mary Reilly",
			"Michael Collins",
			"Before Your Eyes: Angelie's Secret",
			"Something to Talk About",
			"Century of Cinema, A",
			"I Love Trouble",
			"Prt--Porter",
			"Pelican Brief, The",
			"Player, The",
			"Dying Young",
			"Hook",
			"Sleeping with the Enemy",
			"Flatliners",
			"Pretty Woman",
			"Blood Red",
			"Steel Magnolias",
			"\"Telenoticias\"",
			"Baja Oklahoma",
			"Mystic Pizza",
			"Satisfaction",
			"Firehouse",
			"\"Nature\""
		];
		
		ALL_MOVIES["Kevin Spacey"] = [
			"Edison",
			"Beyond the Sea",
			"In Search of Ted Demme",
			"75th Annual Academy Awards, The",
			"Comedy Central Roast of Denis Leary",
			"Declaration of Independence",
			"Life of David Gale, The",
			"United States of Leland, The",
			"74th Annual Academy Awards, The",
			"America Rebuilds: A Year at Ground Zero",
			"Austin Powers in Goldmember",
			"Inside the Playboy Mansion",
			"Judi Dench: A BAFTA Tribute",
			"Keyser Sze: Lie or Legend?",
			"Round Up: Deposing 'The Usual Suspects'",
			"Tower of Babble, The",
			"73rd Annual Academy Awards, The",
			"Come Together: A Night for John Lennon's Words and Music",
			"K-PAX",
			"Shackleton's Antarctic Adventure",
			"Shipping News, The",
			"\"Rotten TV\"",
			"2000 Blockbuster Entertainment Awards",
			"72nd Annual Academy Awards, The",
			"AFI's 100 Years, 100 Laughs: America's Funniest Movies",
			"American Beauty: Look Closer...",
			"David Blaine: Frozen in Time",
			"Film-Fest DVD: Issue 3 - Toronto",
			"Ordinary Decent Criminal",
			"Pay It Forward",
			"President Clinton: Final Days",
			"53rd Annual Tony Awards, The",
			"AFI's 100 Years... 100 Stars",
			"American Beauty",
			"Big Kahuna, The",
			"Forever Hollywood",
			"It's Tough to Be a Bug",
			"Kennedy Center Honors: A Celebration of the Performing Arts, The",
			"Saturday Night Live: 25th Anniversary",
			"Bug's Life, A",
			"Hurlyburly",
			"Negotiator, The",
			"Steve McQueen: The King of Cool",
			"Warner Bros. 75th Anniversary: No Guts, No Glory",
			"69th Annual Academy Awards, The",
			"L.A. Confidential",
			"Midnight in the Garden of Good and Evil",
			"68th Annual Academy Awards, The",
			"American Film Institute Salute to Clint Eastwood, The",
			"Looking for Richard",
			"Time to Kill, A",
			"Outbreak",
			"Se7en",
			"Usual Suspects, The",
			"Doomsday Gun",
			"Iron Will",
			"Ref, The",
			"Swimming with Sharks",
			"Consenting Adults",
			"Glengarry Glen Ross",
			"Darrow",
			"Fall from Grace",
			"Henry & June",
			"Show of Force, A",
			"When You Remember Me",
			"Dad",
			"See No Evil, Hear No Evil",
			"\"American Experience, The\"",
			"American Film Institute Salute to Jack Lemmon, The",
			"Murder of Mary Phagan, The",
			"Rocket Gibraltar",
			"Working Girl",
			"\"Wiseguy\"",
			"Long Day's Journey Into Night",
			"Heartburn"
		];

		ALL_MOVIES["Ryuichiro Baba"] = [
			"Lost in Translation"
		];
		
		ALL_MOVIES["Stuart Reges"] = [];  // not a real actor
		
		ALL_MOVIES["Tom Cruise"] = [
			"Mission: Impossible III",
			"War of the Worlds",
			"2004 MTV Movie Awards",
			"61st Annual Golden Globe Awards, The",
			"76th Annual Academy Awards, The",
			"Collateral",
			"2003 ABC World Stunt Awards",
			"E! 101 Most Shocking Moments in Entertainment History",
			"Last Samurai, The",
			"Narc: Shooting Up",
			"Sex at 24 Frames Per Second",
			"54th Annual Primetime Emmy Awards, The",
			"74th Annual Academy Awards, The",
			"Art of Action: Martial Arts in Motion Picture, The",
			"Austin Powers in Goldmember",
			"Hitting It Hard",
			"Minority Report",
			"Prelude to a Dream",
			"Road to the Red Carpet",
			"Shirtless: Hollywood's Sexiest Men",
			"Space Station 3D",
			"Who Is Alan Smithee?",
			"\"Rank\"",
			"73rd Annual Academy Awards, The",
			"America: A Tribute to Heroes",
			"Code of Conduct",
			"Look Inside: The Others, A",
			"Stanley Kubrick: A Life in Pictures",
			"Vanilla Sky",
			"Young Hollywood Awards",
			"2000 Blockbuster Entertainment Awards",
			"2000 MTV Movie Awards",
			"Behind the Mission: The Making of 'M:I-2'",
			"Mission: Impossible II",
			"Mission: Improbable",
			"American Film Institute Salute to Dustin Hoffman, The",
			"Eyes Wide Shut",
			"Magnolia",
			"Warner Bros. 75th Anniversary: No Guts, No Glory",
			"Jerry Maguire",
			"Mission: Impossible",
			"Interview with the Vampire: The Vampire Chronicles",
			"Firm, The",
			"Far and Away",
			"Few Good Men, A",
			"Time Out: The Truth About HIV, AIDS, and You",
			"63rd Annual Academy Awards, The",
			"American Film Institute Salute to Kirk Douglas, The",
			"Days of Thunder",
			"61st Annual Academy Awards, The",
			"Born on the Fourth of July",
			"Rain Man",
			"Young Guns",
			"Color of Money, The",
			"Top Gun",
			"Legend",
			"All the Right Moves",
			"Losin' It",
			"Outsiders, The",
			"Risky Business",
			"Endless Love",
			"Taps"
		];
		
		ALL_MOVIES["William Shatner"] = [
			"Miss Congeniality 2",
			"\"Boston Legal\"",
			"56th Annual Primetime Emmy Awards, The",
			"Dodgeball: A True Underdog Story",
			"Free Enterprise 2: My Big Geek Wedding",
			"Lil' Pimp",
			"1st Annual Spaceys",
			"Carol Christmas, A",
			"Late Night with Conan O'Brien: 10th Anniversary Special",
			"\"Cosmic Odyssey\"",
			"\"Full Moon Fright Night\"",
			"\"One Hit Wonders\"",
			"2002 Blockbuster Hollywood Christmas Spectacular, The",
			"American Psycho 2: All American Girl",
			"Groom Lake",
			"NBC 75th Anniversary Special",
			"Screen Tests of the Stars",
			"Shoot Or Be Shot",
			"Showtime",
			"Spplat Attack",
			"\"Keeping America Strong\"",
			"28th Annual American Music Awards, The",
			"50th Annual Miss USA Pageant, The",
			"Festival in Cannes",
			"Iron Chef USA: Holiday Showdown",
			"Iron Chef USA: Showdown in Las Vegas",
			"Kid, The",
			"Mind Meld: Secrets Behind the Voyage of a Lifetime",
			"Osmosis Jones",
			"Falcon Down",
			"Miss Congeniality",
			"Atomic Journeys: Welcome to Ground Zero",
			"Nukes in Space",
			"Saturday Night Live Christmas",
			"Stars of Star Wars: Interviews From the Cast, The",
			"Ultimate Trek: Star Trek's Greatest Moments",
			"\"Twist in the Tale, A\"",
			"Free Enterprise",
			"Jefftowne",
			"First Men on the Moon, The",
			"Land of the Free",
			"Star Trek: Generations",
			"Star Trek: Starfleet Academy",
			"Trekkies",
			"TV Guide Looks at Science Fiction",
			"\"3rd Rock from the Sun\"",
			"Century of Science Fiction, A",
			"Dead Man's Island",
			"Prisoner of Zenda, Inc.",
			"Star Trek: 30 Years and Beyond",
			"Science Fiction: A Journey Into the Unknown",
			"Trinity and Beyond",
			"William Shatner's Star Trek Memories",
			"\"TekWar\"",
			"Columbo: Butterfly in Shades of Grey",
			"Janek: The Silent Betrayal",
			"Star Trek: A Captain's Log",
			"Star Trek: Generations",
			"Star Trek: Judgment Rites",
			"TekWar",
			"TekWar: TekJustice",
			"TekWar: TekLab",
			"TekWar: TekLords",
			"War of the Worlds: Great Books, The",
			"Family of Strangers",
			"Loaded Weapon 1",
			"Star Trek: 25th Anniversary Enhanced",
			"Twenty-Five Year Mission Tour, The",
			"\"Voice of the Planet\"",
			"Star Trek 25th Anniversary Special",
			"Star Trek VI: The Undiscovered Country",
			"Voices that Care",
			"Happy Birthday, Bugs!: 50 Looney Years",
			"\"Rescue 911\"",
			"Hollywood on Horses",
			"Saturday Night Live: 15th Anniversary",
			"Star Trek V: The Final Frontier",
			"Broken Angel",
			"Trial of Standing Bear, The",
			"Star Trek IV: The Voyage Home",
			"T.J. Hooker: Blood Sport",
			"Canadian Conspiracy, The",
			"North Beach and Rawhide",
			"Battle of the Network Stars XVII",
			"Circus of the Stars #9",
			"Secrets of a Married Man",
			"Star Trek III: The Search for Spock",
			"TV's Funniest Gameshow Moments",
			"Battle of the Network Stars XV",
			"Leonard Nimoy: Star Trek Memories",
			"\"T.J. Hooker\"",
			"Airplane II: The Sequel",
			"Battle of the Network Stars XII",
			"Battle of the Network Stars XIII",
			"Night of 100 Stars",
			"Star Trek: The Wrath of Khan",
			"T.J. Hooker",
			"Visiting Hours",
			"Circus of the Stars #6",
			"52nd Annual Academy Awards, The",
			"Babysitter, The (1980/I)",
			"Kidnapping of the President, The",
			"Disaster on the Coastliner",
			"Riel",
			"Star Trek: The Motion Picture",
			"\"How the West Was Won\"",
			"Bastard, The",
			"Battle of the Network Stars V",
			"Crash",
			"Little Women",
			"Third Walker, The",
			"\"Testimony of Two Men\"",
			"Kingdom of the Spiders",
			"Botschaft der Gtter",
			"Columbo: Fade in to Murder",
			"Perilous Voyage",
			"Whale of a Tale, A",
			"\"Barbary Coast\"",
			"Barbary Coast",
			"Devil's Rain, The",
			"Land of No Return",
			"Tenth Level, The",
			"\"Inner Space\"",
			"Big Bad Mama",
			"Impulse",
			"Indict and Convict",
			"Pray for the Wildcats",
			"\"Match Game 73\"",
			"\"Star Trek\"",
			"Go Ask Alice",
			"Horror at 37,000 Feet",
			"Incident on a Dark Street",
			"Pioneer Woman",
			"Hound of the Baskervilles, The",
			"People, The",
			"Owen Marshall, Counsellor at Law",
			"Vanished",
			"Andersonville Trial, The",
			"Sole Survivor",
			"Swing Out, Sweet Land",
			"Shadow Game",
			"Alexander the Great",
			"Comanche blanco",
			"\"Star Trek\"",
			"Star Trek: Where No Man Has Gone Before",
			"\"For the People\"",
			"Incubus",
			"Outrage, The",
			"Intruder, The",
			"Explosive Generation, The",
			"Judgment at Nuremberg",
			"\"Festival\"",
			"Julius Caesar",
			"Night of the Auk, The",
			"\"Tactic\"",
			"City Out of Time",
			"Brothers Karamazov, The",
			"\"DuPont Show of the Month, The\"",
			"Oedipus Rex",
			"Billy Budd",
			"\"Howdy Doody\"",
			"Butler's Night Off, The"
		];
		
		var BACON_MOVIES = {};
		BACON_MOVIES["Angelina Jolie"] = [
			"2000 Blockbuster Entertainment Awards",
			"AFI's 100 Years... 100 Stars"
		];
		BACON_MOVIES["'Carrot Top'"] = [];
		BACON_MOVIES["Chris Rock"] = [];
		BACON_MOVIES["Julia Roberts"] = [
			"2000 Blockbuster Entertainment Awards",
			"AFI's 100 Years... 100 Stars",
			"Flatliners"
		];
		BACON_MOVIES["Kevin Spacey"] = [
			"2000 Blockbuster Entertainment Awards",
			"AFI's 100 Years... 100 Stars"
		];
		BACON_MOVIES["Ryuichiro Baba"] = [];
		BACON_MOVIES["Stuart Reges"] = [];
		BACON_MOVIES["Tom Cruise"] = [
			"Code of Conduct",
			"2000 Blockbuster Entertainment Awards",
			"Few Good Men, A"
		];
		BACON_MOVIES["William Shatner"] = [];
		

		var actorButtonClick = function(event) {
			var actorName = this.fullName.strip();   // e.g. "Carrot Top"
			if (location.href.indexOf("-kevin") >= 0) {
				checkForAllMovies(BACON_MOVIES[actorName].clone(), ALL_MOVIES[actorName].clone(), false, "Bacon Movies");
			} else {
				checkForAllMovies(ALL_MOVIES[actorName].clone(), BACON_MOVIES[actorName].clone(), true, "All Movies");
			}
		};
		
		var checkForAllMovies = function(array, unusedArray, useBiggerTable, title) {
			var outOfOrder = [];
			var tables = $$("table");
			var tds = [];
			if (tables.length == 0) {
				if (array.length > 0) {
					fail("No tables on page!");
					return;
				}
			} else if (tables.length == 1) {
				tds = tables[0].select("td");
			} else {
				// figure out which table to use
				var tds1 = tables[0].select("td");
				var tds2 = tables[1].select("td");
				if ((useBiggerTable  && tds1.length >= tds2.length) || 
					(!useBiggerTable && tds1.length <= tds2.length)) {
					tds = tds1;
				} else {
					tds = tds2;
				}
				
				// check for table that shouldn't be there
				if (!useBiggerTable && array.length == 0) {
					fail("This actor hasn't been in any films with Kevin Bacon.  There should not be 2 tables on the page.\n");
					return;
				}
			}
			
			var failText = "";
			if (array.length != 0 && tds.length == 0) {
				// some students mistakenly use 'th' tag instead of 'td'
				tds = tables[0].select("th");
				failText += "The student used 'th' tags for their table cells rather than 'td'.  They should lose internal correctness points for HTML tag choices.\n";
			}
			
			if (array.length == 0) {
				// special case: actor shouldn't have matched any films.
				// so check that they had the "not found text"
				if (useBiggerTable) {
					// all films
					if (!document.body.innerHTML.match(/not[ \t\n]{1,99}found/)) {
						failText += "The page should have an \"actor not found\" message.\n";
					}
				} else {
					// Kevin Bacon films
					if (unusedArray.length == 0 && !document.body.innerHTML.match(/not[ \t\n]{1,99}found/)) {
						failText += "The page should have an \"actor not found\" message.\n";
					} else if (unusedArray.length != 0 && !document.body.innerHTML.match(/wasn't[ \t\n]{1,99}in[ \t\n]{1,99}any[ \t\n]{1,99}films/)) {
						failText += "The page should have an \"actor wasn't in any films with Kevin Bacon\" message.\n";
					}
				}
				
				if (failText) {
					fail(failText);
					return;
				}
			}
			tds.each(function(td) {
				var text = td.innerHTML.strip().htmlDecode();
				var index = array.indexOf(text);
				if (index >= 0) {
					array = array.without(text);  // good
					if (index > 0) {
						outOfOrder.push(text);
					}
				}
			});
			if (array.length == 0 && outOfOrder.length == 0 && !failText) {
				pass();
			} else {
				if (array.length > 0) {
					failText += "The following expected movies aren't in the \"" + title + "\" table:\n" + array + "\n";
				} else if (outOfOrder.length > 0) {
					failText += "The following movies are out of order in the \"" + title + "\" table:\n" + outOfOrder + "\n";
				}
				fail(failText);
			}
		};
		
		var actorInsertClick = function(event) {
			// try to insert the actor's first/last name
			var textboxes = $$("input[type='text']");
			if (textboxes.length < 4) {
				fail("Error! Not enough input text boxes found. Every page should have two forms for searching for an actor, each with two text boxes.\n");
				return false;
			}
			
			if (this.all) {
				textboxes[0].value = this.first;
				textboxes[1].value = this.last;
			} else {
				textboxes[2].value = this.first;
				textboxes[3].value = this.last;
			}
			
			// try to click 'submit'
			var submitButton = $$("input[type='submit'], input[type='button'], button")[this.all ? 0 : 1];
			if (submitButton && submitButton.className != "__gradingButton") {
				submitButton.simulate("click");
			}
		};
		
		var pass = function() {
			document.body.style.backgroundImage = "url('')";
			document.body.style.backgroundColor = "#bfb";
		};
		
		var fail = function(message) {
			document.body.style.backgroundImage = "url('')";
			document.body.style.backgroundColor = "#f88";
			alert(message);
		};
		
		var fieldset = $(document.createElement("fieldset"));
		fieldset.style.position = "fixed";
		fieldset.style.left = "0px";
		fieldset.style.bottom = "0px";
		fieldset.style.backgroundColor = "white";
		fieldset.style.color = "black";
		fieldset.style.border = "thin outset gray";
		fieldset.style.fontSize = "10pt";
		fieldset.style.zIndex = 999999;
		fieldset.style.width = "22em";
		fieldset.style.height = "auto";
		fieldset.style.margin = "0.1em";
		fieldset.style.padding = "0.25em";
		
		var legend = $(document.createElement("legend"));
		legend.innerHTML = "Grading tests:";
		legend.style.backgroundColor = "white";
		legend.style.border = "thin outset gray";
		fieldset.appendChild(legend);
		
		var IMG_STR = "<img src=\"https://www.cs.washington.edu/education/courses/cse190m/12sp/homework/5/check.gif\" alt=\"icon\" style=\"padding: 0; margin: 0; background-color: inherit; color: inherit; width: 16px; height: 16px;\" />";
		
		var makeButtons = function(first, last, full) {
			var button1 = $(document.createElement("button"));
			button1.fullName = full;  // stuff inside DOM object for later
			button1.innerHTML = IMG_STR; // "Check";  // "&rarr;";
			// button1.innerHTML = "Check";  // full;
			button1.title = "Check the tables to see if they contain the right movies for " + full + ".";
			button1.observe("click", actorButtonClick);
			button1.className = "__gradingbutton";
			button1.style.cssFloat = "right";
			button1.style.fontSize = "9pt";
			button1.style.marginLeft = "5px";
			button1.style.padding = "2px 5px";

			var button2 = $(document.createElement("button"));
			button2.all = false;
			button2.innerHTML = IMG_STR + " Kev"; // "Search";  // "&rarr;";
			button2.title = "Types in " + full + "'s name into the 'all movies' form and clicks the Search/Go button.";
			button2.first = first;  // stuff inside DOM object for later
			button2.last = last;
			button2.full = full;
			button2.observe("click", actorInsertClick);
			button2.className = "__gradingbutton";
			button2.style.cssFloat = "right";
			button2.style.fontSize = "9pt";
			button2.style.marginLeft = "5px";
			button2.style.padding = "2px 5px";
			
			var button3 = $(document.createElement("button"));
			button3.all = true;
			button3.innerHTML = IMG_STR + " All"; // "Search";  // "&rarr;";
			button2.title = "Types in " + full + "'s name into the 'with Kevin Bacon' form and clicks the Search/Go button.";
			button3.first = first;  // stuff inside DOM object for later
			button3.last = last;
			button3.full = full;
			button3.observe("click", actorInsertClick);
			button3.className = "__gradingbutton";
			button3.style.cssFloat = "right";
			button3.style.fontSize = "9pt";
			button3.style.marginLeft = "5px";
			button3.style.padding = "2px 5px";
			
			var div = $(document.createElement("div"));
			div.style.margin = "0";
			div.style.padding = "0";
			div.style.clear = "right";
			div.appendChild(document.createTextNode(full + " "));
			div.appendChild(button1);
			div.appendChild(button2);
			div.appendChild(button3);
			fieldset.appendChild(div);
		}
		
		for (var i = 0; i < ALL_NAMES.length; i++) {
			var first = ALL_NAMES[i][0];
			var last  = ALL_NAMES[i][1];
			var full  = first + " " + last;
			if (ALL_NAMES[i].length >= 3) {
				full = ALL_NAMES[i][2];
			}
			makeButtons(first, last, full);
		}
		
		document.body.appendChild(fieldset);
	};
	
	if (typeof(document.observe) === "function") {
		document.observe("dom:loaded", windowLoad);
	} else if (window.addEventListener) {
		window.addEventListener("load", windowLoad, false);
	} else {
		window.attachEvent("onload", windowLoad);
	}
})();
