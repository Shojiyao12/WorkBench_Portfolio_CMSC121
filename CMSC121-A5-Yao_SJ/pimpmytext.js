$(document).ready(function () {
    $("#ButtonPimpify").mousedown(function () {
        var timer = setInterval(function () {
            var defaultFontSize = parseInt($("#textInput").css("font-size"));
            var clickedFontSize = defaultFontSize + 2 + "pt";
            $("#textInput").css("font-size", clickedFontSize);
        }, 500);
    });

   $("#ButtonPimpify").click(function () {
        clearInterval(timer); // Stop timer when the button is clicked again
    });
	
	$("#checkboxBling").change(function () {
        if (this.checked) {
            $("#textInput").addClass("bling-text");
            $("body").css("background-image", "url('hundred-dollar-bill.jpg')");
        } 
		
		else {
            $("#textInput").removeClass("bling-text");
            $("body").css("background-image", "none");
        }
    });

    $("#ButtonSnoopify").click(function () {
        var text = $("#textInput").val();
        text = text.toUpperCase() + "!";

        var mutiWords = text.split(".");
        for (var i = 0; i < mutiWords.length; i++) {
            var phrase = mutiWords[i].trim();
            if (phrase !== "") {
                var inputs = phrase.split(" ");
                if (inputs.length > 1) {
                    inputs[inputs.length - 1] += "-izzle";
                }
                mutiWords[i] = inputs.join(" ");
            }
        }
        text = mutiWords.join(". ");

        $("#textInput").val(text);
    });

    
	$("#ButtonMalkovich").click(function () {
        var text = $("#textInput").val();
        var inputs = text.split(/\s+/);

        for (var i = 0; i < inputs.length; i++) {
            var typedWord = inputs[i];
            if (typedWord.length >= 5) {
                // Check for compound inputs (hyphenated terms)
                if (typedWord.includes("-")) {
                    var separate = typedWord.split("-");
                    for (var j = 0; j < separate.length; j++) {
                        if (separate[j].length >= 5) {
                            separate[j] = "Malkovich";
                        }
                    }
                    inputs[i] = separate.join("-");
                } 
				
				else {
                    inputs[i] = "Malkovich";
                }
            }
        }

        text = inputs.join(" ");
        $("#textInput").val(text);
    });
});